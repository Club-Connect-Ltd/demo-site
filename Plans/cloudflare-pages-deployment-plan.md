# Plan: Deploy an Astro Site to Cloudflare Pages via GitHub Actions

A step-by-step guide to setting up a fully automated CI/CD pipeline that builds an Astro site, deploys it to Cloudflare Pages, purges the CDN cache, and optionally notifies your team via Slack and generates a PDF export.

---

## Prerequisites

- A GitHub repository containing an Astro project
- A Cloudflare account (free tier is sufficient)
- (Optional) A Slack workspace with an incoming webhook
- (Optional) A custom domain pointed at Cloudflare DNS

---

## Step 1 — Prepare Your Astro Project

Ensure your `package.json` has at minimum these scripts:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

If you have linting or tests, add them too — the pipeline will gate deployments on them:

```json
{
  "scripts": {
    "lint": "your-lint-command",
    "test": "your-test-command",
    "check": "npm run lint && npm run test"
  }
}
```

Confirm the build outputs to `dist/` (Astro's default). If you changed the output directory in `astro.config.mjs`, adjust all references to `dist` in the workflows below.

---

## Step 2 — Create a Cloudflare Pages Project

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages > Create application > Pages**.
3. Choose **Direct Upload** (not the git integration — GitHub Actions handles deployment).
4. Name your project (e.g. `my-astro-site`). Note this name; you will need it in the workflow.
5. Upload a placeholder file to finish setup. The first real deploy will come from CI.

### Custom Domain (Optional)

1. In your Pages project, go to **Custom domains > Set up a custom domain**.
2. Enter your domain (e.g. `docs.example.com`).
3. Cloudflare will add the required DNS records automatically if your domain is on Cloudflare DNS.

---

## Step 3 — Gather Cloudflare Credentials

You need four values. All are found in the Cloudflare Dashboard:

| Secret Name    | Where to Find It                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| `CF_ACCOUNT_ID` | URL bar on any dashboard page: `https://dash.cloudflare.com/<ACCOUNT_ID>/...`                          |
| `CF_API_TOKEN`  | **My Profile > API Tokens > Create Token**. Use the "Cloudflare Pages — Edit" template or grant `Account.Cloudflare Pages:Edit` permission. |
| `CF_ZONE_ID`    | **Domain overview page > API section** (right sidebar). Only needed if you are purging cache.          |
| `CF_TOKEN`      | Can reuse `CF_API_TOKEN` if it also has `Zone.Cache Purge:Purge` permission, or create a separate token. |

---

## Step 4 — Add Secrets to GitHub

1. In your GitHub repository, go to **Settings > Secrets and variables > Actions**.
2. Add each secret:
   - `CF_ACCOUNT_ID`
   - `CF_API_TOKEN`
   - `CF_ZONE_ID` (only if purging cache)
   - `CF_TOKEN` (only if purging cache)
   - `SLACK_WEBHOOK_URL` (only if using Slack notifications)

---

## Step 5 — Create the Workflow Files

Create four files under `.github/workflows/`. Each is described below with a generic template.

### 5.1 — Build Workflow (`.github/workflows/build.yml`)

This is the entry point. It runs on every push to `main` (filtered by path), installs dependencies, runs quality checks, builds the site, and uploads the output as an artifact.

```yaml
name: Build Astro site

on:
  workflow_dispatch:                # Allow manual trigger from GitHub UI
  push:
    branches:
      - main                       # Change to your production branch
    paths:
      - "src/**"
      - "public/**"
      - "astro.config.mjs"
      - "package.json"
      - "package-lock.json"
      - "tsconfig.json"
      - "**/*.md"
      # Add any other paths that should trigger a rebuild

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repo
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"       # Match your local Node version
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      # ── Quality gates (remove if you have no lint/test scripts) ──
      - name: Lint
        run: npm run lint

      - name: Test
        run: npm run test
      # ─────────────────────────────────────────────────────────────

      - name: Build Astro site
        run: npm run build

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: astro-site
          path: dist               # Change if your output dir differs
          if-no-files-found: error
```

**Customisation points:**
- `branches`: change `main` to your default branch if different.
- `paths`: add/remove globs to match your project structure.
- Remove the lint/test steps if you don't have those scripts.
- Change `node-version` to match your project requirements.

---

### 5.2 — Deploy Workflow (`.github/workflows/deploy-cloudflare.yml`)

Triggered automatically when the build workflow succeeds. Downloads the artifact and pushes it to Cloudflare Pages.

```yaml
name: Deploy to Cloudflare Pages

on:
  workflow_run:
    workflows:
      - "Build Astro site"         # Must exactly match the build workflow name
    types:
      - completed

jobs:
  deploy:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      deployments: write

    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: astro-site
          run-id: ${{ github.event.workflow_run.id }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          path: astro-site

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
          projectName: "my-astro-site"   # ← Your Cloudflare Pages project name
          directory: "astro-site"
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}

      # ── Cache purge (remove if not using a custom domain) ────────
      - name: Purge Cloudflare cache
        run: |
          curl -X POST \
            "https://api.cloudflare.com/client/v4/zones/${{ secrets.CF_ZONE_ID }}/purge_cache" \
            -H "Authorization: Bearer ${{ secrets.CF_TOKEN }}" \
            -H "Content-Type: application/json" \
            --data '{"prefixes": ["your-domain.example.com"]}'
      # ─────────────────────────────────────────────────────────────

  # ── Slack notification (remove entire job if not needed) ────────
  notify:
    needs: deploy
    if: ${{ needs.deploy.result == 'success' }}
    uses: ./.github/workflows/slack-notify.yml
    with:
      title: "SITE DEPLOYED"
      message: "The site was built and deployed successfully to Cloudflare Pages."
      channel: "#deployments"
    secrets:
      SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
  # ─────────────────────────────────────────────────────────────────
```

**Customisation points:**
- `projectName`: must match the Cloudflare Pages project you created in Step 2.
- `prefixes` in the cache purge: replace with your actual domain.
- Remove the cache purge step entirely if you don't have a custom domain or zone.
- Remove the `notify` job if you don't use Slack.

---

### 5.3 — Slack Notification (`.github/workflows/slack-notify.yml`) — Optional

A reusable workflow that any other workflow can call to post to Slack.

```yaml
name: Slack Notify

on:
  workflow_call:
    inputs:
      title:
        description: "Notification title"
        required: true
        type: string
      message:
        description: "Notification message body"
        required: true
        type: string
      channel:
        description: "Slack channel override (e.g. #deployments)"
        required: false
        type: string
        default: ""
    secrets:
      SLACK_WEBHOOK_URL:
        description: "Slack incoming webhook URL"
        required: true

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Send Slack notification
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
          INPUT_TITLE: ${{ inputs.title }}
          INPUT_MESSAGE: ${{ inputs.message }}
          INPUT_CHANNEL: ${{ inputs.channel }}
        shell: bash
        run: |
          set -euo pipefail

          if [ -z "${SLACK_WEBHOOK_URL:-}" ]; then
            echo "SLACK_WEBHOOK_URL secret is not set." >&2
            exit 1
          fi

          python3 << 'PY'
          import json, os, sys

          title   = os.environ.get("INPUT_TITLE", "").strip()
          message = os.environ.get("INPUT_MESSAGE", "").strip()
          channel = os.environ.get("INPUT_CHANNEL", "").strip()

          if not title or not message:
              print("Title and message are required", file=sys.stderr)
              sys.exit(1)

          payload = {"text": f"*{title}*\n{message}"}
          if channel:
              payload["channel"] = channel

          with open("slack_payload.json", "w") as f:
              json.dump(payload, f)
          PY

          curl -fsS -X POST \
            -H "Content-Type: application/json" \
            --data @slack_payload.json \
            "$SLACK_WEBHOOK_URL"
```

---

### 5.4 — PDF Export (`.github/workflows/generate-pdf.yml`) — Optional

Generates a PDF of the built site's index page after each successful build.

```yaml
name: Generate PDF

permissions:
  contents: read
  actions: read

on:
  workflow_run:
    workflows: ["Build Astro site"]   # Must match build workflow name
    types:
      - completed

jobs:
  html-to-pdf:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest

    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: astro-site
          github-token: ${{ github.token }}
          run-id: ${{ github.event.workflow_run.id }}
          path: site

      - name: Convert to PDF
        uses: fifsky/html-to-pdf-action@master
        with:
          htmlFile: ./site/index.html
          outputFile: ./site/site.pdf
          pdfOptions: '{"format": "A4", "margin": {"top": "10mm", "left": "10mm", "right": "10mm", "bottom": "10mm"}}'

      - name: Upload PDF artifact
        uses: actions/upload-artifact@v4
        with:
          name: site-pdf
          path: ./site/site.pdf
          if-no-files-found: error
```

---

## Step 6 — Verify the Pipeline

1. Commit and push all four workflow files to `main`.
2. The build workflow should trigger automatically.
3. Monitor progress in your repo's **Actions** tab.
4. On success, the deploy and PDF workflows trigger in parallel.
5. Check your Cloudflare Pages dashboard — the deployment should appear.
6. Visit your site URL to confirm.

### Troubleshooting

| Problem | Fix |
| ------- | --- |
| Build succeeds but deploy doesn't trigger | The `workflows:` name in `deploy-cloudflare.yml` must **exactly** match the `name:` in `build.yml` (case-sensitive). |
| Deploy fails with 403 | Check `CF_API_TOKEN` has the **Cloudflare Pages: Edit** permission for the correct account. |
| Cache purge fails | Ensure `CF_TOKEN` has **Zone: Cache Purge** permission and `CF_ZONE_ID` is correct. |
| Artifact not found | Ensure the artifact name (`astro-site`) matches between upload and download steps. |
| Slack notification fails | Verify the webhook URL is correct and the Slack app is installed in the target workspace. |

---

## Pipeline Architecture

```
  Push to main (filtered by path)
          │
          ▼
  ┌───────────────────┐
  │   Build Workflow   │
  │ checkout → install │
  │ → lint → test      │
  │ → build → upload   │
  └────────┬──────────┘
           │ on success
     ┌─────┴──────┐
     ▼            ▼
  ┌────────┐  ┌────────┐
  │ Deploy │  │  PDF   │
  │  to CF │  │ Export │
  │ Pages  │  │        │
  └───┬────┘  └────────┘
      │
      ▼
  Purge CDN
      │
      ▼
  Slack Notify
```

---

## Summary Checklist

- [ ] Astro project builds locally with `npm run build`
- [ ] Cloudflare Pages project created (Direct Upload mode)
- [ ] Custom domain configured (optional)
- [ ] GitHub secrets added: `CF_ACCOUNT_ID`, `CF_API_TOKEN`, `CF_ZONE_ID`, `CF_TOKEN`
- [ ] GitHub secret added: `SLACK_WEBHOOK_URL` (optional)
- [ ] `.github/workflows/build.yml` created and customised
- [ ] `.github/workflows/deploy-cloudflare.yml` created and customised
- [ ] `.github/workflows/slack-notify.yml` created (optional)
- [ ] `.github/workflows/generate-pdf.yml` created (optional)
- [ ] First push to `main` triggers full pipeline successfully
- [ ] Site loads at Cloudflare Pages URL / custom domain
