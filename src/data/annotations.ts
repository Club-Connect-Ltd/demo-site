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
};
