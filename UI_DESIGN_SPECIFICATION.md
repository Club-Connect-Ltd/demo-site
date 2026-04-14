# Club Connect App - UI Design Specification

## Table of Contents
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Sizing](#spacing--sizing)
4. [Components](#components)
5. [Modifiers & Styles](#modifiers--styles)
6. [Navigation Patterns](#navigation-patterns)
7. [Layout Patterns](#layout-patterns)

---

## Color System

### Custom Colors

All custom colors are defined in `CCColour.swift` with semantic names based on usage (not color appearance).
Colors support 4 variants: light/dark mode × standard/increased contrast. Colors automatically adapt based on system settings.

#### Action Colors (Semantic)

- **Primary** (`primary`)
  - Light: #C3FF4D | Light HC: #8FD600 (darker)
  - Dark: #B8F052 | Dark HC: #D4FF7A (brighter)
  - Usage: Primary buttons, active states, focus indicators, toggle tint

- **Secondary Accent** (`secondaryAccent`)
  - Light: #EEA172 | Light HC: #D68550 (darker)
  - Dark: #F2AB7E | Dark HC: #FFBD96 (brighter)
  - Usage: Warm decorative highlights

- **Destructive** (`destructive`)
  - Light: #FF7C70 | Light HC: #E54D40 (darker)
  - Dark: #FF9990 | Dark HC: #FFB5B0 (brighter)
  - Usage: Destructive buttons, delete actions, error-related UI

- **Accent** (`accent`)
  - Light: #88DB04 | Light HC: #5FA500 (darker)
  - Dark: #9DEB1C | Dark HC: #B8FF40 (brighter)
  - Usage: Navigation icons, picker controls, badges

- **Warning** (`warning`)
  - Light: #D65448 | Light HC: #B53028 (darker)
  - Dark: #FF6B5A | Dark HC: #FF8A7D (brighter)
  - Usage: Alerts, error emphasis

- **Error** (`error`)
  - Light: #FF3B30 | Light HC: #D41008 (darker)
  - Dark: #FF6961 | Dark HC: #FF8880 (brighter)
  - Usage: Validation messages, form errors

#### Surface Colors

- **Surface Elevated** (`surfaceElevated`)
  - Light: #FFFFFF | Light HC: #FFFFFF
  - Dark: #3A3A3C | Dark HC: #2C2C2E (darker for contrast)
  - Usage: Cards, text fields, elevated containers

- **Surface Disabled** (`surfaceDisabled`)
  - Light: #D1D1D6 | Light HC: #BEBEC3 (darker)
  - Dark: #48484A | Dark HC: #5C5C5E (lighter)
  - Usage: Disabled state backgrounds

#### Text and Neutral Colours

- **Text Primary** (`textPrimary`)
  - Light: #3D404C | Light HC: #1A1C24 (darker)
  - Dark: #FFFFFF | Dark HC: #FFFFFF
  - Usage: Primary text, titles, labels

- **Surface Secondary** (`surfaceSecondary`)
  - Light: #272727 | Light HC: #121212 (darker)
  - Dark: #3A3A3C | Dark HC: #4A4A4C (lighter)
  - Usage: Secondary surfaces, code blocks

- **Text Secondary** (`textSecondary`)
  - Light: #3E404C | Light HC: #1A1C24 (darker)
  - Dark: #98989E | Dark HC: #B8B8BE (brighter)
  - Usage: Secondary text, subtitles, hints

- **Surface Primary** (`surfacePrimary`)
  - Light: #F2F2F2 | Light HC: #E5E5E5 (darker)
  - Dark: #F2F2F2 | Dark HC: #F8F8F8 (brighter)
  - Usage: Main background, dividers

- **Text Title** (`textTitle`)
  - Light: #000000 | Light HC: #000000
  - Dark: #FEFFFF | Dark HC: #FFFFFF
  - Usage: Navigation titles, major headings

- **Text Disabled** (`textDisabled`)
  - Default: System Gray
  - Usage: Disabled text content

#### Increased Contrast Behavior

Colors automatically adapt when the user enables "Increase Contrast" in iOS/macOS Accessibility settings:
- **Light mode HC**: Colors become darker/more saturated for better contrast against white backgrounds
- **Dark mode HC**: Colors become brighter/more saturated for better contrast against dark backgrounds
- Targets WCAG AAA compliance where possible

#### Deprecated Color Aliases

The following legacy names are deprecated but still work via aliases:

| Old Name | New Semantic Name |
|----------|-------------------|
| `offBlack` | `textPrimary` |
| `charcoal` | `textSecondary` |
| `title` | `textTitle` |
| `ccLightGray` | `surfacePrimary` |
| `ccCharcoal` | `surfaceSecondary` |
| `disabledForeground` | `textDisabled` |
| `limeGreen` | `primary` |
| `ccOrange` | `secondaryAccent` |
| `peach` | `destructive` |
| `coral` | `destructive` |
| `offRed` | `warning` |
| `oliveGreen` | `accent` |
| `accentColor` | `accent` |
| `cardBackground` | `surfaceElevated` |
| `disabledBackground` | `surfaceDisabled` |

### System Colors Used

- **White** (`.white`)
  - Usage: Card backgrounds, text field backgrounds

- **Black** (`.black`)
  - Usage: Text, overlays

- **Gray** (`.gray`)
  - Usage: Disabled states, secondary text

- **Red** (`.red`)
  - Usage: Error messages, validation states

- **Secondary** (`.secondary`)
  - Usage: Secondary text, hints

- **System Gray 4** (`Color(.systemGray4)`)
  - Usage: Disabled button backgrounds

- **System Gray 5** (`Color(.systemGray5)`)
  - Usage: Loading skeletons, placeholders

---

## Typography

### Font Family

**Primary Font:** League Spartan
- Available weights: Light, Regular, Medium, SemiBold, Bold

**Secondary Font:** Inter Variable
- Used for: Section dividers

### Font Definitions

All fonts are defined in `Core/assets/fonts/fonts.swift`:

#### Display & Titles

- **Large Title** (`largeTitleFont`)
  - Font: LeagueSpartan-Bold
  - Size: 36pt
  - Usage: Hero sections, major page titles

- **Title** (`titleFont`)
  - Font: LeagueSpartan-Bold
  - Size: 28pt
  - Usage: Page titles, major headings

- **Title 2** (`title2Font`)
  - Font: LeagueSpartan-Regular
  - Size: 22pt
  - Usage: Secondary headings

- **Nav Title** (`navTitle`)
  - Font: LeagueSpartan-SemiBold
  - Size: 28pt
  - Usage: Navigation bar titles

- **Sheet Title** (`sheetTitleFont`)
  - Font: LeagueSpartan-Bold
  - Size: 20pt
  - Usage: Sheet/modals titles

#### Body & Content

- **Headline** (`headlineFont`)
  - Font: LeagueSpartan-Regular
  - Size: 16pt
  - Usage: Section headlines

- **Body** (`bodyFont`)
  - Font: LeagueSpartan-Regular
  - Size: 14pt
  - Line Spacing: 8pt
  - Alignment: Leading
  - Usage: Body text, descriptions

- **Subtitle** (`subTitleFont`)
  - Font: LeagueSpartan-Regular
  - Size: 12pt
  - Usage: Subtitles, captions

- **Subtitle (Small)** (`subtitleFont`)
  - Font: LeagueSpartan-Regular
  - Size: 10pt
  - Usage: Fine print, metadata

#### Interactive Elements

- **Button Label** (`buttonLabelFont`)
  - Font: LeagueSpartan-Bold
  - Size: 16pt
  - Usage: Primary button text

- **Inline Button** (`inlineButtonFont`)
  - Font: LeagueSpartan-Regular
  - Size: 14pt
  - Usage: Inline/secondary buttons

- **TextField** (`textFieldFont`)
  - Font: LeagueSpartan-Regular
  - Size: 16pt
  - Usage: Text input fields

#### Lists & Rows

- **Row Title** (`rowTitleFont`)
  - Font: LeagueSpartan-Medium
  - Size: 16pt
  - Alignment: Leading
  - Usage: List row titles

- **Row Label** (`rowLabelFont`)
  - Font: LeagueSpartan-Bold
  - Size: 16pt
  - Alignment: Leading
  - Usage: List row labels

#### Specialized

- **Navbar Item** (`navbarItemFont`)
  - Font: LeagueSpartan-Medium
  - Size: 20pt
  - Usage: Navigation bar items

- **Caption** (`captionFont`)
  - Font: LeagueSpartan-Medium
  - Size: 12pt
  - Usage: Image captions, metadata

- **Error Text** (`errorTextFont`)
  - Font: LeagueSpartan-Regular
  - Size: 12pt
  - Usage: Error messages, validation

- **Section Divider** (`sectionDividerFont`)
  - Font: Inter-Variable
  - Size: 14pt
  - Weight: Light
  - Usage: Section dividers

#### Sports-Specific

- **Team** (`teamFont`)
  - Font: LeagueSpartan-SemiBold
  - Size: 12pt
  - Usage: Team names

- **Score** (`scoreFont`)
  - Font: LeagueSpartan-SemiBold
  - Size: 24pt
  - Usage: Match scores

- **VS** (`vsFont`)
  - Font: LeagueSpartan-SemiBold
  - Size: 12pt
  - Usage: "VS" text in matches

- **Location** (`locationFont`)
  - Font: LeagueSpartan-Regular
  - Size: 10pt
  - Usage: Location text

- **Player First Name** (`playerFirstNameFont`)
  - Font: LeagueSpartan-Light
  - Size: 10pt
  - Usage: Player first names

- **Player Last Name** (`playerLastNameFont`)
  - Font: LeagueSpartan-Medium
  - Size: 14pt
  - Usage: Player last names

- **Segment** (`segmentFont`)
  - Font: LeagueSpartan-SemiBold
  - Size: 14pt
  - Usage: Segmented control text

- **Stat** (`statFont`)
  - Font: LeagueSpartan-Light
  - Size: 12pt
  - Usage: Statistics (regular)

- **Stat Bold** (`statBoldFont`)
  - Font: LeagueSpartan-SemiBold
  - Size: 12pt
  - Usage: Statistics (emphasized)

- **Card Header** (`cardHeaderFont`)
  - Font: LeagueSpartan-Light
  - Size: 14pt
  - Usage: Card headers (regular)

- **Card Header Bold** (`cardHeaderBoldFont`)
  - Font: LeagueSpartan-SemiBold
  - Size: 14pt
  - Usage: Card headers (bold)

- **Phase Info** (`phaseInfoFont`)
  - Font: LeagueSpartan-Light
  - Size: 14pt
  - Line Spacing: 5pt
  - Usage: Match phase information

---

## Spacing & Sizing

### Constants

Defined in `Core/domain/Constants.swift`:

- **ccPadding**: 32pt
  - Usage: Standard horizontal padding for screens

- **ccSpacing**: 16pt (ccPadding / 2.0)
  - Usage: Standard spacing between elements

- **dashboardPadding**: 20pt
  - Usage: Dashboard-specific padding

- **formEdgeInsets**: EdgeInsets(top: 0, leading: 32, bottom: 0, trailing: 32)
  - Usage: Form container padding

### Common Padding Values

- **8pt**: Small spacing, tight layouts
- **12pt**: Button padding (inline buttons)
- **16pt**: Standard spacing, text field padding, card padding
- **20pt**: Dashboard padding
- **24pt**: Card content padding, hero box padding
- **32pt**: Screen edge padding (ccPadding)
- **50pt**: Keyboard spacing default

### Common Corner Radius Values

- **2pt**: Sheet drag indicator
- **8pt**: Default (buttons, text fields, cards)
- **12pt**: Medium cards, rounded elements
- **16pt**: Large cards, match cards, hero boxes
- **25pt**: Formation selector overlay
- **999pt**: Circular avatars

### Button Heights

- **44pt**: Standard button height (primary, secondary, destructive)
- **50pt**: Segmented control height

### Text Field Dimensions

- **Label Width**: 100pt (fixed width for text field labels)
- **Vertical Padding**: 4pt (additional padding inside text fields)
- **Horizontal Padding**: 16pt (text field content padding)

### Shadow Specifications

- **Color**: Black at 15% opacity (0.15)
- **Radius**: 4pt
- **Offset**: Y: 2pt
- **Usage**: Applied via `.dropShadow()` modifier

---

## Components

### Buttons

#### Primary Button (`CCButtonStyle.primary`)

- **Style**: Capsule shape
- **Height**: 44pt
- **Width**: Max width (`.infinity`)
- **Background**: Lime Green (enabled) / System Gray 4 (disabled)
- **Text Color**: Off Black (enabled) / Gray (disabled)
- **Text Style**: Primary Button Label (LeagueSpartan-Bold, 16pt)
- **Shadow**: Drop shadow applied
- **Pressed State**: 80% opacity
- **Usage**: Main actions, primary CTAs

#### Secondary Button (`CCButtonStyle.secondary`)

- **Style**: Capsule shape
- **Height**: 44pt
- **Width**: Max width
- **Background**: System background (transparent)
- **Text Color**: Off Black (enabled) / Gray (disabled)
- **Text Style**: Primary Button Label
- **Shadow**: Drop shadow applied
- **Pressed State**: 80% opacity
- **Usage**: Secondary actions

#### Destructive Button (`CCButtonStyle.destructive`)

- **Style**: Capsule shape
- **Height**: 44pt
- **Width**: Max width
- **Background**: Peach (enabled) / System Gray 4 (disabled)
- **Text Color**: White (enabled) / Gray (disabled)
- **Text Style**: Primary Button Label
- **Shadow**: Drop shadow applied
- **Pressed State**: 80% opacity
- **Usage**: Delete, remove, destructive actions

#### Primary Inline Button (`CCButtonStyle.primaryInline`)

- **Style**: Rounded rectangle (8pt corner radius)
- **Padding**: 12pt
- **Width**: Max width
- **Background**: Lime Green (enabled) / System Gray 4 (disabled)
- **Text Color**: Off Black (enabled) / Gray (disabled)
- **Text Style**: Inline Button (LeagueSpartan-Regular, 14pt)
- **Pressed State**: 80% opacity
- **Usage**: Inline actions, side-by-side buttons

#### Secondary Inline Button (`CCButtonStyle.secondaryInline`)

- **Style**: Rounded rectangle (8pt corner radius)
- **Padding**: 12pt
- **Width**: Max width
- **Background**: Peach (enabled) / System Gray 4 (disabled)
- **Text Color**: White (enabled) / Gray (disabled)
- **Text Style**: Inline Button
- **Pressed State**: 80% opacity
- **Usage**: Secondary inline actions

#### Tertiary Inline Button (`CCButtonStyle.tertiaryInline`)

- **Style**: Rounded rectangle (8pt corner radius)
- **Padding**: 12pt
- **Width**: Max width
- **Background**: Clear (enabled) / System Gray 4 (disabled)
- **Text Color**: Off Black (enabled) / Gray (disabled)
- **Text Style**: Inline Button
- **Pressed State**: 80% opacity
- **Usage**: Tertiary inline actions

#### Hollow Button (`HollowButtonStyle`)

- **Style**: Rounded rectangle (8pt corner radius)
- **Padding**: 12pt
- **Width**: Max width
- **Background**: Clear
- **Border**: Off Black at 30% opacity (0.3)
- **Text Color**: Custom (default: Black)
- **Text Style**: Inline Button
- **Pressed State**: 80% opacity
- **Usage**: Outlined buttons

### Text Fields

#### Standard Text Field (`CCTextFieldStyle`)

- **Container**: VStack with 16pt spacing
- **Label**: Optional, fixed width 100pt, leading alignment
- **Input Area**: 
  - Padding: 16pt horizontal, 4pt vertical
  - Background: White
  - Border: 
    - Default: White (invisible)
    - Focused: Lime Green
    - Error: Red
  - Corner Radius: 8pt
  - Shadow: Drop shadow applied
- **Text Style**: TextField Font (LeagueSpartan-Regular, 16pt)
- **Error Message**: 
  - Displayed below field
  - Style: Error Text (LeagueSpartan-Regular, 12pt, Red)
  - Transition: Opacity
- **Character Counter**: 
  - Displayed when maxCharacters set
  - Style: Error Text Font
  - Color: Red if over limit, Secondary if within limit
- **Usage**: Standard text input

#### Currency Text Field (`CCCurrencyTextFieldStyle`)

- **Container**: VStack with 16pt spacing
- **Label**: Optional, fixed width 100pt
- **Input Area**: 
  - Same as standard text field
  - Text color: Clear (overlay shows formatted value)
  - Keyboard: Number pad
  - Autocorrection: Disabled
- **Formatted Display**: 
  - Shows formatted currency value
  - Style: TextField Font
  - Format: "%.2f"
- **Error Message**: Same as standard
- **Usage**: Currency/monetary input

#### Icon Text Field (`CCIconFieldStyle`)

- **Container**: VStack with 16pt spacing
- **Icon**: System image, leading position
- **Input Area**: Same as standard text field
- **Text Style**: TextField Font
- **Error Message**: Same as standard
- **Usage**: Text fields with leading icons

### Cards & Containers

#### Shadow Box (`shadowBoxModifier`)

- **Default Parameters**:
  - Corner Radius: 8pt
  - Fill Color: White
  - Padding: 16pt
- **Shadow**: Drop shadow applied
- **Usage**: Cards, elevated containers

#### Match Card (`MatchCardView`)

- **Padding**: 24pt
- **Corner Radius**: 16pt
- **Background Options**:
  - Image with gradient overlay
  - Team kit colors (split design)
  - White with active state indicator (Lime Green)
- **Content Spacing**: 16pt vertical
- **Shadow**: Drop shadow applied
- **Usage**: Displaying match/fixture information

#### Hero Box (`HeroBoxView`)

- **Padding**: 24pt horizontal, 32pt vertical
- **Corner Radius**: 8pt (default), customizable
- **Background**: White (light theme) / Off Black (dark theme)
- **Content Spacing**: 18pt vertical
- **Logo Size**: 24pt (light) / 30pt (dark)
- **Shadow**: Drop shadow applied
- **Themes**: Light, Dark
- **Usage**: Hero sections, onboarding, prominent content

### Sheets & Modals

#### CC Sheet (`CCSheetView`)

- **Drag Indicator**: 
  - Rounded rectangle (25pt width, 2pt height)
  - Corner size: 25pt x 2pt
  - Color: Gray
- **Content**: HeroBoxView with buttons
- **Button Spacing**: 16pt vertical
- **Padding**: Standard padding
- **Presentation**: Custom detent based on content height
- **Usage**: Bottom sheets, modals

### Lists

#### List Styles

- **Inset Grouped** (`.insetGrouped`)
  - Usage: Settings, profile screens
- **Plain** (default)
  - Usage: Standard lists

#### List Row Modifiers

- **Clear Row** (`clearRowViewModifier`)
  - Background: Clear
  - Separator: Hidden
  - Insets: Zero
  - Usage: Custom list rows

### Segmented Controls

#### CC Segmented View (`CCSegmentedView`)

- **Height**: 50pt
- **Padding**: Standard padding
- **Style**: Segmented picker style
- **Item Style**: Segment Font (LeagueSpartan-SemiBold, 14pt)
- **Usage**: Category selection, tab-like navigation

### Pickers

#### Picker Button Style (`PickerButtonStyle`)

- **Accent Color**: Olive Green
- **Foreground Color**: Olive Green
- **Font**: Title 2 (system)
- **Usage**: Custom picker styling

### Labels

#### Primary Label (`CCLabelStyle.primary`)

- **Padding**: ccSpacing (16pt)
- **Height**: 44pt
- **Background**: Lime Green (enabled) / System Gray 4 (disabled)
- **Text Color**: Off Black (enabled) / Gray (disabled)
- **Shape**: Capsule
- **Text Style**: Primary Button Label
- **Shadow**: Drop shadow applied
- **Usage**: Navigation links, labeled buttons

#### Switched Label (`SwitchedLabelStyle`)

- **Layout**: HStack, last text baseline alignment
- **Icon**: Accent color
- **Text Style**: Row Label
- **Usage**: Labels with icon after text

### Avatars

#### Initials Avatar (`InitialsAvatarView`)

- **Shape**: Circle (corner radius: 999pt)
- **Usage**: User avatars with initials

### Loading States

#### Loading Skeleton

- **Shape**: Rounded rectangle (8pt corner radius)
- **Fill**: System Gray 5
- **Heights**: 20pt (standard), 16pt (small)
- **Usage**: Content loading placeholders

---

## Modifiers & Styles

### Text Modifiers

All text modifiers are defined in `Core/presentation/modifiers/TextViewModifiers.swift`:

- `.sheetTitleStyle()` - Sheet titles
- `.primaryButtonTextStyle()` - Primary button text
- `.inlineButtonTextStyle()` - Inline button text
- `.textFieldTextStyle()` - Text field input
- `.subTitleStyle()` - Subtitles
- `.titleStyle()` - Titles
- `.title2Style()` - Title 2
- `.largeTitleStyle()` - Large titles
- `.bodyStyle()` - Body text
- `.headlineStyle()` - Headlines
- `.errorStyle()` - Error messages
- `.rowTitleStyle()` - Row titles
- `.rowLabelStyle()` - Row labels
- `.captionStyle()` - Captions
- `.sectionDividerStyle()` - Section dividers
- `.navbarItemStyle()` - Navbar items
- `.navTitleStyle()` - Navigation titles
- `.teamStyle()` - Team names
- `.scoreStyle()` - Scores
- `.playerFirstNameStyle()` - Player first names
- `.playerLastNameStyle()` - Player last names
- `.playerScoreViewModifier()` - Player scores
- `.segmentStyle()` - Segmented control text
- `.statStyle(isBold:)` - Statistics
- `.cardHeaderStyle(isBold:)` - Card headers
- `.phaseInfoStyle()` - Phase information
- `.capsuleStyle(...)` - Capsule-shaped text badges

### View Modifiers

#### Shadow Modifiers

- `.dropShadow()` - Applies standard drop shadow
- `.shadowBoxModifier(cornerRadius:fillColor:padding:)` - Creates shadow box container

#### Keyboard Modifiers

- `.keyboardSpacing(bottomPadding:)` - Adds spacing when keyboard appears (default: 50pt)

#### List Modifiers

- `.clearRowViewModifier()` - Clears list row styling

### Button Modifiers

- `.primaryButtonStyle()` - Primary button
- `.secondaryButtonStyle()` - Secondary button
- `.destructiveButtonStyle()` - Destructive button
- `.primaryInlineButtonStyle()` - Primary inline button
- `.secondaryInlineButtonStyle()` - Secondary inline button
- `.tertiaryInlineButtonStyle()` - Tertiary inline button
- `.hollowButtonStyle(colour:)` - Hollow button

### Label Modifiers

- `.switchedStyle()` - Switched label (icon after text)
- `.labelStyle(.primary)` - Primary label style

---

## Navigation Patterns

### Navigation Bar

- **Title Display Mode**: Large (`.large`)
- **Title Font**: Nav Title (LeagueSpartan-SemiBold, 28pt)
- **Toolbar Items**: 
  - Notifications (bell icon)
  - Profile (person.crop.circle.fill icon)
  - Accent color for profile icon

### Common App Bar (`commonAppBar`)

- **Title**: Custom string
- **Display Mode**: Large
- **Toolbar Items**:
  - Notifications button (navigates to notifications)
  - Profile NavigationLink (navigates to profile)
- **Usage**: Standard app bar across main screens

### Tab Navigation

#### Tab View Structure

- **Style**: Standard TabView
- **Tabs**: Role-specific (Coach, Player, Official, Guardian, Chairperson, Club Official)
- **Common Tabs**:
  - Home (house icon)
  - Schedule/Calendar (calendar icon)
  - Messages (bubble icon) - conditional (18+)
  - Search (search role) - iOS 18+
  - Club (shield.fill icon) - role-specific

#### Role-Specific Tab Views

- **CCCoachTabView**: Home, Schedule, Messages (18+), Search
- **CCPlayerTabView**: Home, Schedule, Messages (18+), Search
- **CCOfficialTabView**: Home, Schedule, Messages (18+), Search
- **CCGuardianTabView**: Home, Schedule, Messages (18+), Search
- **CCChairpersonTabView**: Home, Club, Messages (18+), Search
- **CCClubOfficialTabView**: Home, Club, Messages (18+), Search

### Navigation Stack

- Uses `NavigationStack` for iOS 18+ features
- Standard `NavigationView` for compatibility
- Router-based navigation via `Router` class

### Sheet Presentation

- **Detents**: Custom height based on content
- **Drag Indicator**: Standard iOS drag handle
- **Content**: HeroBoxView with action buttons

---

## Layout Patterns

### Screen Layout

- **Standard Padding**: 32pt (ccPadding) horizontal
- **Dashboard Padding**: 20pt horizontal
- **Form Padding**: 32pt horizontal (formEdgeInsets)

### Card Layout

- **Standard Padding**: 16pt (shadowBoxModifier default)
- **Match Card Padding**: 24pt
- **Hero Box Padding**: 24pt horizontal, 32pt vertical
- **Spacing**: 16pt (ccSpacing) between elements

### Form Layout

- **Field Spacing**: 16pt vertical
- **Label Width**: 100pt fixed
- **Edge Insets**: 32pt horizontal (formEdgeInsets)

### List Layout

- **Row Spacing**: System default
- **Section Spacing**: System default
- **Padding**: Standard list padding

### Stack Layouts

- **VStack Spacing**: 
  - Standard: 16pt
  - Cards: 16pt
  - Match content: 12pt
  - Hero boxes: 18pt
- **HStack Spacing**: 
  - Standard: 4pt (tight)
  - Buttons: Variable
  - Content: Variable

### Grid Layouts

- **WrappingHStack**: Custom component for wrapping horizontal layouts
- **Spacing Options**:
  - Constant spacing
  - Dynamic spacing
  - Dynamic including borders
- **Line Spacing**: Configurable

---

## Component Usage Guidelines

### Button Hierarchy

1. **Primary**: Main action on screen
2. **Secondary**: Alternative action
3. **Destructive**: Delete/remove actions
4. **Inline**: Side-by-side actions, less prominent

### Text Hierarchy

1. **Large Title**: Hero sections, major page titles
2. **Title**: Page titles, major headings
3. **Title 2**: Secondary headings
4. **Headline**: Section headlines
5. **Body**: Main content
6. **Subtitle**: Supporting text
7. **Caption**: Metadata, fine print

### Color Usage

- **Lime Green**: Primary actions, active states, success
- **Peach**: Destructive actions, warnings
- **Off Black**: Primary text, important content
- **Gray/Secondary**: Secondary text, hints
- **Red**: Errors, critical information
- **White**: Backgrounds, cards
- **CC Light Gray**: Subtle backgrounds, dividers

### Spacing Guidelines

- **Tight**: 4-8pt (related elements)
- **Standard**: 16pt (most spacing)
- **Comfortable**: 24-32pt (sections, cards)
- **Screen Edge**: 32pt (standard), 20pt (dashboard)

### Shadow Usage

- **Cards**: Always use drop shadow
- **Buttons**: Primary/secondary/destructive buttons
- **Text Fields**: When focused or in forms
- **Elevated Content**: Hero boxes, modals

---

## Accessibility Considerations

### Text Sizes

- All custom fonts use fixed sizes
- System fonts used where dynamic type needed
- Minimum readable sizes maintained

### Color Contrast

- Off Black on White: High contrast
- Lime Green on Off Black: Sufficient contrast
- Error states use Red for visibility

### Touch Targets

- **Buttons**: Minimum 44pt height
- **List Rows**: Standard iOS touch targets
- **Text Fields**: Adequate padding for touch

### Focus States

- **Text Fields**: Lime Green border when focused
- **Buttons**: Visual feedback on press (80% opacity)
- **Navigation**: Standard iOS focus indicators

---

## Dark Mode Support

### Colors

- Most custom colors have dark mode variants
- Off Black becomes White in dark mode
- Backgrounds adapt (White → Off Black)
- Text colors invert appropriately

### Components

- All components support dark mode automatically
- Hero boxes have light/dark themes
- System colors adapt automatically

---

## Animation & Transitions

### Standard Transitions

- **Error Messages**: Opacity transition
- **Button Press**: Opacity change (80%)
- **Sheet Presentation**: Standard iOS sheet animation

### Custom Animations

- **Keyboard Spacing**: Smooth appearance/disappearance
- **Content Changes**: Standard SwiftUI animations

---

## Icon System

### Custom Icons

Located in `Assets.xcassets/Icons/`:
- `icn-adverts`
- `icn-all-teams`
- `icn-bell`
- `icn-calendar-time`
- `icn-camp`
- `icn-coach`
- `icn-contact`
- `icn-exit-team`
- `icn-exit`
- `icn-fixture`
- `icn-outline-badge`
- `icn-parent-fill`
- `icn-payment`
- `icn-player-add`
- `icn-player`
- `icn-privacy`
- `icn-search`
- `icn-squad`
- `icn-t&c`
- `icn-team`
- `icn-tournament`
- `icn-upload-qualifications`
- `icn-user-profile`
- `icn-users-roles`
- `icn-whistle`

### System Icons

- `house` - Home
- `calendar` - Schedule
- `bubble` - Messages
- `bell` - Notifications
- `person.crop.circle.fill` - Profile
- `shield.fill` - Club
- `plus` - Add/Create

---

## Specialized Components

### Match Components

- **TeamTitle**: Displays team name and score
- **MatchCardView**: Full match card with various layouts
- **StandingsTableView**: League table with sticky columns

### Player Selection

- **PitchBoard**: Football pitch visualization
- **BenchTray**: Player bench display
- **FormationLockBar**: Formation selector
- **PeriodSelectorButton**: Match period selector

### Event Components

- **WeekdayPickerView**: Day selection
- **CCDatePickerView**: Date selection
- **CCStepperView**: Numeric stepper
- **CCPickerView**: Custom picker

### Form Components

- **FormRowButtonView**: Form row with button
- **FilterView**: Filter selection
- **CCMenuView**: Menu display

---

## Implementation Notes

### File Organization

- **Modifiers**: `Core/presentation/modifiers/`
- **Views**: `Core/presentation/views/`
- **Constants**: `Core/domain/Constants.swift`
- **Fonts**: `Core/assets/fonts/fonts.swift`
- **Colors**: `Core/assets/Assets.xcassets/Colours/`

### Naming Conventions

- **Styles**: `[Component]Style` (e.g., `CCButtonStyle`)
- **Modifiers**: `.camelCase()` (e.g., `.primaryButtonStyle()`)
- **Colors**: Lowercase camelCase (e.g., `.primary`)
- **Fonts**: camelCase with "Font" suffix (e.g., `titleFont`)

### Best Practices

1. Always use predefined styles and modifiers
2. Use Constants for spacing values
3. Apply shadows to elevated content
4. Maintain 44pt minimum touch targets
5. Use appropriate text styles for hierarchy
6. Support both light and dark modes
7. Apply keyboard spacing for forms
8. Use navigation bar buttons (Cancel/Done) not bottom buttons

---

## Version Information

- **Document Version**: 1.0
- **Last Updated**: Based on codebase analysis
- **App Version**: See `Config/Shared.xcconfig` for CURRENT_PROJECT_VERSION

---

## Additional Resources

- **Design System**: This document
- **Code Examples**: See preview providers in modifier files
- **Component Library**: `Core/presentation/views/`
- **Style Definitions**: `Core/presentation/modifiers/`
