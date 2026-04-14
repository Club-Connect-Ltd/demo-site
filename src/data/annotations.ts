export interface Callout {
  x: number;  // percentage (0-100)
  y: number;  // percentage (0-100)
  label: string;
  detail: string;
}

export interface ScreenAnnotation {
  title: string;
  description: string;
  callouts: Callout[];
}

export const annotations: Record<string, ScreenAnnotation> = {
  // === FIRST RUN ===
  'IMG_0968': {
    title: 'Welcome Screen',
    description: 'First impression that sets the tone — dynamic crowd imagery creates excitement while dual CTAs prioritise new user onboarding.',
    callouts: [
      {
        x: 50, y: 12,
        label: 'Brand Identity',
        detail: 'Logo + Oxanium headline for instant brand recognition',
      },
      {
        x: 50, y: 50,
        label: 'Emotional Imagery',
        detail: 'Real sports crowd creates connection and excitement',
      },
      {
        x: 50, y: 80,
        label: 'Smart CTA Hierarchy',
        detail: 'Primary "Find Your Team" in lime green prioritises new users; secondary "Sign in" below for returning users',
      },
    ],
  },
  'IMG_0969': {
    title: 'Find Your Team',
    description: 'Bottom sheet pattern for team discovery — search by name, club, or location with zero friction.',
    callouts: [
      {
        x: 70, y: 42,
        label: 'Native Sheet',
        detail: 'iOS bottom sheet pattern — familiar and accessible',
      },
      {
        x: 50, y: 70,
        label: 'Smart Search',
        detail: 'Search by name, club, or location — multiple discovery paths',
      },
    ],
  },
  'IMG_0970': {
    title: 'Sign In Options',
    description: 'Multiple authentication methods reduce barrier to entry — Apple Sign In, email, and QR code for event-day signups.',
    callouts: [
      {
        x: 50, y: 52,
        label: 'Apple Sign In',
        detail: 'One-tap authentication — lowest friction option',
      },
      {
        x: 50, y: 62,
        label: 'QR Code Sign In',
        detail: 'Unique feature: scan at events for instant onboarding',
      },
      {
        x: 50, y: 42,
        label: 'Create Account',
        detail: 'Full registration flow for new users',
      },
    ],
  },

  // === CREATE CLUB ===
  'IMG_0971': {
    title: 'Club Location',
    description: 'Step 2 of the guided club creation wizard — postcode-based location search helps local players discover your club.',
    callouts: [
      {
        x: 50, y: 8,
        label: 'Progress Indicator',
        detail: 'Clear step tracker (2 of 4) reduces abandonment',
      },
      {
        x: 50, y: 36,
        label: 'Smart Location Search',
        detail: 'Postcode lookup with auto-complete — no manual address entry',
      },
      {
        x: 50, y: 52,
        label: 'Inline Validation',
        detail: 'Instant confirmation with checkmark — zero ambiguity',
      },
    ],
  },
  'IMG_0972': {
    title: 'Club Details',
    description: 'Age group selection with chip-based multi-select — one club can manage Under 6 through to Veterans (45+).',
    callouts: [
      {
        x: 50, y: 25,
        label: 'Chip Multi-Select',
        detail: 'Tap to select multiple age groups — visual, fast, and touch-friendly',
      },
      {
        x: 50, y: 55,
        label: 'Full Age Range',
        detail: 'Under 6 to Veterans (45+) — supports entire club lifecycle',
      },
    ],
  },
  'IMG_0973': {
    title: 'Club Created!',
    description: 'Success state with clear next steps — guided onboarding continues with team setup, coach invites, and player links.',
    callouts: [
      {
        x: 50, y: 20,
        label: 'Success Celebration',
        detail: 'Animated checkmark creates a moment of achievement',
      },
      {
        x: 50, y: 58,
        label: 'Guided Next Steps',
        detail: 'Numbered action list: 1) Add teams, 2) Invite coaches, 3) Add players',
      },
      {
        x: 50, y: 82,
        label: 'Immediate Access',
        detail: 'Jump straight to the club dashboard — no waiting',
      },
    ],
  },

  // === AI CREATE EVENT ===
  'IMG_0974': {
    title: 'AI Event Assistant',
    description: 'Natural language event creation — the flagship AI feature. Users describe events in plain English and the AI structures everything.',
    callouts: [
      {
        x: 35, y: 25,
        label: 'Conversational UI',
        detail: 'Chat-based interface feels familiar — zero learning curve',
      },
      {
        x: 50, y: 38,
        label: 'Smart Examples',
        detail: 'Pre-built suggestions show the art of the possible',
      },
      {
        x: 50, y: 88,
        label: 'Quick Prompts',
        detail: 'Tap-to-use suggestions reduce friction for first-time users',
      },
    ],
  },
  'IMG_0975': {
    title: 'AI Creates Your Event',
    description: 'The AI understands natural language, extracts date, time, type, and location, then presents a structured event card for one-tap creation.',
    callouts: [
      {
        x: 70, y: 22,
        label: 'Natural Language',
        detail: '"Training next Tuesday at 6pm" — understood instantly',
      },
      {
        x: 35, y: 42,
        label: 'Clarifying Questions',
        detail: 'AI asks for missing info conversationally, not via form fields',
      },
      {
        x: 50, y: 72,
        label: 'Structured Event Card',
        detail: 'AI output: event type, date, time, and location — all parsed automatically',
      },
      {
        x: 50, y: 85,
        label: 'One-Tap Create',
        detail: 'Confirm with a single tap — from words to event in seconds',
      },
    ],
  },

  // === CREATE NEW EVENT ===
  'IMG_0976': {
    title: 'Events Dashboard',
    description: 'Empty state that encourages action — clear CTA and helpful messaging drive first event creation.',
    callouts: [
      {
        x: 80, y: 5,
        label: 'Quick Add',
        detail: 'Persistent + button for power users',
      },
      {
        x: 50, y: 60,
        label: 'Actionable Empty State',
        detail: 'Helpful illustration and CTA — never a dead end',
      },
    ],
  },
  'IMG_0977': {
    title: 'Training Event Form',
    description: 'Segmented event creation — Training tab with duration, focus area, and scheduling. Clean, structured form design.',
    callouts: [
      {
        x: 50, y: 10,
        label: 'Event Type Tabs',
        detail: 'Match / Training / Social — three distinct workflows in one form',
      },
      {
        x: 50, y: 30,
        label: 'Smart Defaults',
        detail: '90 min duration pre-filled — minimal input needed',
      },
      {
        x: 50, y: 65,
        label: 'Integrated Scheduling',
        detail: 'Date & time picker with "Meet Time" toggle for early arrivals',
      },
    ],
  },
  'IMG_0978': {
    title: 'Social Event Options',
    description: 'Social events with RSVP management, attendee limits, and cost tracking — handles everything from BBQs to fundraisers.',
    callouts: [
      {
        x: 50, y: 25,
        label: 'RSVP Management',
        detail: 'Toggle RSVP required, set deadlines, limit attendees',
      },
      {
        x: 50, y: 45,
        label: 'Cost Tracking',
        detail: '"Has Cost" toggle — integrated payment awareness',
      },
    ],
  },
  'IMG_0979': {
    title: 'Match Setup',
    description: 'Match-specific fields: opponent search, venue selection (Home/Away), half duration — purpose-built for competitive fixtures.',
    callouts: [
      {
        x: 50, y: 20,
        label: 'Opponent Lookup',
        detail: 'Search and select opposing team from the database',
      },
      {
        x: 50, y: 40,
        label: 'Venue & Duration',
        detail: 'Home/Away selector with configurable half length',
      },
      {
        x: 50, y: 70,
        label: 'Kickoff Time',
        detail: 'Match-specific terminology — feels purpose-built, not generic',
      },
    ],
  },
  'IMG_0980': {
    title: 'Discard Changes',
    description: 'Thoughtful UX detail — unsaved changes prompt prevents accidental data loss with clear Keep/Discard options.',
    callouts: [
      {
        x: 50, y: 40,
        label: 'Data Loss Prevention',
        detail: 'Confirmation dialog catches accidental navigation away',
      },
      {
        x: 50, y: 52,
        label: 'Clear Actions',
        detail: '"Keep Editing" vs "Discard" — no ambiguity in destructive actions',
      },
    ],
  },

  // === MESSAGES ===
  'IMG_0981': {
    title: 'Messages Inbox',
    description: 'Unified messaging hub with smart filters — All, Unread, Direct, Teams, and Broadcast channels in one view.',
    callouts: [
      {
        x: 50, y: 12,
        label: 'Filter Chips',
        detail: 'All / Unread / Direct / Teams / Broadcast — instant categorisation',
      },
      {
        x: 50, y: 32,
        label: 'Team Channels',
        detail: 'Group messages by team (U12 Eagles) with unread badges',
      },
      {
        x: 50, y: 55,
        label: 'Message Types',
        detail: 'Direct messages, car shares, coach comms — all in one inbox',
      },
      {
        x: 50, y: 75,
        label: 'Broadcast Channel',
        detail: 'Club-wide announcements with speaker icon — admin only posting',
      },
    ],
  },
  'IMG_0982': {
    title: 'Broadcast Channel',
    description: 'Read-only broadcast channels for official club communications — admins post, everyone reads. No noise.',
    callouts: [
      {
        x: 50, y: 15,
        label: 'Channel Header',
        detail: '"Broadcast channel · Read only" — clear expectations',
      },
      {
        x: 50, y: 50,
        label: 'Admin Posts',
        detail: 'Club Secretary posts fees reminders and news updates',
      },
      {
        x: 50, y: 85,
        label: 'Read-Only Notice',
        detail: 'Clear indicator that only admins can post — reduces confusion',
      },
    ],
  },
  'IMG_0983': {
    title: 'Team Group Chat',
    description: 'Familiar group messaging for teams — coaches and parents coordinate training, attendance, and logistics in real time.',
    callouts: [
      {
        x: 50, y: 8,
        label: 'Team Context',
        detail: '"U12 Eagles · 4 members" — clear group identity',
      },
      {
        x: 50, y: 35,
        label: 'Coach Coordination',
        detail: 'Training reminders with attendance confirmation requests',
      },
      {
        x: 50, y: 60,
        label: 'Parent Responses',
        detail: 'Quick attendance replies, absence notifications, kit queries',
      },
      {
        x: 50, y: 88,
        label: 'Full Chat Features',
        detail: 'Text input with attachment support — familiar messaging UX',
      },
    ],
  },

  // === ATTENDANCE ===
  'IMG_0984': {
    title: 'Attendance Overview',
    description: 'At-a-glance RSVP tracking for any event — colour-coded summary counts and per-player status with one-tap management.',
    callouts: [
      {
        x: 50, y: 18,
        label: 'Event Context Card',
        detail: 'Match details, meet time, venue, and RSVP deadline — all in one card',
      },
      {
        x: 50, y: 42,
        label: 'RSVP Summary',
        detail: 'Going / Not Going / Maybe / Pending — instant visual breakdown with colour coding',
      },
      {
        x: 70, y: 55,
        label: 'Select All Going',
        detail: 'Bulk action for coaches — mark all players as attending in one tap',
      },
      {
        x: 50, y: 72,
        label: 'Player Status',
        detail: 'Individual player cards with position, number, and RSVP status',
      },
    ],
  },
  'IMG_0985': {
    title: 'RSVP Response',
    description: 'One-tap RSVP with optional reason — Going, Maybe, or Not Going with a free-text explanation field for coaches.',
    callouts: [
      {
        x: 50, y: 42,
        label: 'Simple Choices',
        detail: 'Going / Maybe / Not Going — radio selection, no overthinking',
      },
      {
        x: 50, y: 65,
        label: 'Reason Field',
        detail: '"Why can\'t you attend?" — optional context helps coaches plan alternatives',
      },
      {
        x: 50, y: 28,
        label: 'Player Identity',
        detail: 'Avatar, name, and position — clear who is responding',
      },
    ],
  },

  // === PLAYER FINDER ===
  'IMG_0989': {
    title: 'Player Finder — Browse',
    description: 'A marketplace connecting players with clubs and clubs with players — searchable, filterable, and tag-based discovery.',
    callouts: [
      {
        x: 50, y: 10,
        label: 'Search & Filter',
        detail: 'Search by name, location — plus filter and sort controls',
      },
      {
        x: 50, y: 35,
        label: 'Club Listings',
        detail: 'Clubs post what they need: age group, skill level, positions wanted',
      },
      {
        x: 50, y: 45,
        label: 'Smart Tags',
        detail: 'Age group, skill level, position, and availability — scannable at a glance',
      },
      {
        x: 50, y: 60,
        label: 'Player Listings',
        detail: 'Individual players can also list themselves for discovery',
      },
      {
        x: 85, y: 30,
        label: 'Shortlist Star',
        detail: 'Tap to save interesting profiles for later',
      },
    ],
  },
  'IMG_0990': {
    title: 'Shortlist',
    description: 'Save interesting profiles to review later — coaches can build a watchlist of potential recruits.',
    callouts: [
      {
        x: 50, y: 50,
        label: 'Actionable Empty State',
        detail: 'Clear instruction and CTA — "Browse Profiles" drives engagement',
      },
      {
        x: 50, y: 88,
        label: 'Tab Navigation',
        detail: 'Browse / Shortlist / My Profile — three views for the player marketplace',
      },
    ],
  },
  'IMG_0991': {
    title: 'Create Profile',
    description: 'Players and clubs create discoverable profiles — profile type, bio, location with travel radius, age group, and gender.',
    callouts: [
      {
        x: 50, y: 12,
        label: 'Profile Type Picker',
        detail: '"Player Seeking Club" — clear intent declaration up front',
      },
      {
        x: 50, y: 35,
        label: 'Location & Travel',
        detail: 'City, region, postcode + max travel distance with stepper — practical filtering',
      },
      {
        x: 50, y: 55,
        label: 'Age & Gender',
        detail: 'Age group and gender selectors for accurate matching',
      },
      {
        x: 50, y: 22,
        label: 'Display Name & Bio',
        detail: 'Personalised profile with free-text description',
      },
    ],
  },

  // === CREATE CHILD ACCOUNT ===
  'IMG_0992': {
    title: 'Add Your Child',
    description: 'Child account onboarding intro — explains Player-Lite accounts with key safeguarding features highlighted upfront.',
    callouts: [
      {
        x: 50, y: 15,
        label: 'Clear Purpose',
        detail: '"Add Your Child" — unambiguous action with Player-Lite explanation',
      },
      {
        x: 50, y: 35,
        label: 'Safe & Supervised',
        detail: 'Age-appropriate restrictions protect young players — trust signal for parents',
      },
      {
        x: 50, y: 48,
        label: 'Multi-Guardian',
        detail: 'Link multiple parents or guardians to one account — co-parenting support',
      },
      {
        x: 50, y: 60,
        label: 'Team Connection',
        detail: 'See schedules, events, and stay in the loop — the child\'s value prop',
      },
      {
        x: 50, y: 85,
        label: 'Time Estimate',
        detail: '"Takes about 2 minutes" — sets expectations, reduces drop-off',
      },
    ],
  },
  'IMG_0993': {
    title: 'Account Features',
    description: 'Step 2: Age-tiered permissions — Under 16 gets expanded access with granular feature control (Core Features, Communication).',
    callouts: [
      {
        x: 50, y: 8,
        label: 'Progress Bar',
        detail: 'Step 2 of 4 — clear progress through the wizard',
      },
      {
        x: 50, y: 18,
        label: 'Age Tier Badge',
        detail: 'U16 / Under 16 — "Youth player with expanded access" explains the tier',
      },
      {
        x: 50, y: 42,
        label: 'Core Features List',
        detail: 'View Schedule, Team Roster, Match Details, Personal Stats — all allowed',
      },
      {
        x: 50, y: 62,
        label: 'Communication Controls',
        detail: '"2 allowed, 2 restricted" — granular permission management',
      },
    ],
  },
  'IMG_0994': {
    title: 'Additional Guardians',
    description: 'Step 3: Invite other parents or legal guardians — multi-guardian support for shared custody and co-parenting situations.',
    callouts: [
      {
        x: 50, y: 30,
        label: 'Primary Guardian',
        detail: 'Shows the creating parent with verified badge — clear ownership',
      },
      {
        x: 50, y: 55,
        label: 'Add a Guardian',
        detail: 'Invite another parent, step-parent, or legal guardian — inclusive language',
      },
      {
        x: 50, y: 78,
        label: 'Optional Step',
        detail: '"Skip" button — not all families need multi-guardian, no pressure',
      },
    ],
  },
  'IMG_0995': {
    title: 'Confirmation',
    description: 'Step 4: Final review — shows account type, restrictions summary, and requires legal guardian confirmation checkbox.',
    callouts: [
      {
        x: 50, y: 20,
        label: 'Account Type',
        detail: '"Player-Lite Account · Under 16 restrictions applied" — crystal clear',
      },
      {
        x: 50, y: 38,
        label: 'Restrictions Summary',
        detail: 'No direct messaging ❌, Can view schedules ✅, Can see team roster ✅',
      },
      {
        x: 50, y: 58,
        label: 'Legal Confirmation',
        detail: '"I confirm I am the legal guardian" — checkbox with Terms & Privacy links',
      },
    ],
  },
  'IMG_0996': {
    title: 'Account Created!',
    description: 'Success screen with full account summary — name, age, bracket, account type, and status plus immediate next steps.',
    callouts: [
      {
        x: 50, y: 18,
        label: 'Success State',
        detail: '"Account Created!" — celebration moment with green checkmark',
      },
      {
        x: 50, y: 48,
        label: 'Account Summary',
        detail: 'Name, Age, Bracket, Type, Status — complete at-a-glance reference',
      },
      {
        x: 50, y: 80,
        label: 'Next Steps',
        detail: '"Go to Family Settings" or "Add Another Child" — clear paths forward',
      },
    ],
  },

  // === EVENTS ===
  'IMG_0998': {
    title: 'Upcoming Events',
    description: 'Chronological event calendar — all training, matches, meetings, and socials in one scrollable timeline with type icons.',
    callouts: [
      {
        x: 50, y: 8,
        label: 'Quick Actions',
        detail: 'Filter and + create buttons always accessible at the top',
      },
      {
        x: 50, y: 30,
        label: 'Event Cards',
        detail: 'Type icon, name, time, and venue — scannable in under a second',
      },
      {
        x: 50, y: 60,
        label: 'Date Grouping',
        detail: 'Events grouped by date — "Today", "Thursday, April 16" etc.',
      },
      {
        x: 50, y: 88,
        label: 'Upcoming / Series Tabs',
        detail: 'Toggle between timeline and recurring series view',
      },
    ],
  },
  'IMG_0999': {
    title: 'Event Type Filter',
    description: 'Filter events by type — All Types, Training, Match, Social, Meeting plus show/hide cancelled events.',
    callouts: [
      {
        x: 50, y: 15,
        label: 'Show Cancelled Toggle',
        detail: 'Hide or show cancelled events — keeps the view clean by default',
      },
      {
        x: 50, y: 35,
        label: 'Type Filters',
        detail: 'Training, Match, Social, Meeting — each with a distinct icon',
      },
    ],
  },
  'IMG_1001': {
    title: 'Event Series',
    description: 'Manage recurring events as series — weekly training, bi-weekly matches, and monthly meetings with event counts.',
    callouts: [
      {
        x: 50, y: 20,
        label: 'Series Cards',
        detail: 'Event name, frequency, and total count — manage the pattern, not individual events',
      },
      {
        x: 50, y: 35,
        label: 'Frequency Labels',
        detail: '"Weekly · 31 events", "Bi-weekly, 12 times" — clear recurrence info',
      },
      {
        x: 50, y: 55,
        label: 'Type Icons',
        detail: 'Training runner, match badge, meeting group — visual type identification',
      },
    ],
  },
};
