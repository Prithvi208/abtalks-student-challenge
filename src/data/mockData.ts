export type DayStatus = 'completed' | 'current' | 'upcoming' | 'missed';

export interface ChallengeResource {
  label: string;
  url: string;
}

export interface DayDetail {
  day: number;
  date: string;
  status: DayStatus;
  mission: string;
  task: string;
  timeCommitted: number;
  actualTime: number;
  workCompleted: string[];
  githubCommits: number;
  linkedinPosts: number;
  tags: string[];
  learning: string;
}

export const dayDetails: Record<number, DayDetail> = {
  1: {
    day: 1, date: 'Jul 28', status: 'completed',
    mission: 'Define your AI Engineering roadmap',
    task: 'Set the 47-day AI Engineering goal and break it into achievable milestones.',
    timeCommitted: 60, actualTime: 60,
    workCompleted: ['Defined learning roadmap', 'Created GitHub repository', 'Set up project structure'],
    githubCommits: 1, linkedinPosts: 1,
    tags: ['#Planning', '#AIEngineering'],
    learning: 'A clear roadmap makes a large goal easier to execute.',
  },
  2: {
    day: 2, date: 'Jul 29', status: 'completed',
    mission: 'Refresh Python fundamentals',
    task: 'Review Python syntax, functions, lists, dictionaries and modules.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Completed Python exercises', 'Created practice scripts'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#Python', '#Programming'],
    learning: 'Strong fundamentals make advanced AI concepts easier.',
  },
  3: {
    day: 3, date: 'Jul 30', status: 'completed',
    mission: 'Work with data using Python',
    task: 'Learn basic data manipulation and analysis.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Loaded datasets', 'Practiced filtering and transformations', 'Created basic data analysis scripts'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#Python', '#DataAnalysis'],
    learning: 'Most AI workflows begin with understanding the data.',
  },
  4: {
    day: 4, date: 'Jul 31', status: 'completed',
    mission: 'Learn NumPy fundamentals',
    task: 'Practice arrays, indexing, reshaping and numerical operations.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Implemented NumPy exercises', 'Practiced array operations'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#Python', '#NumPy'],
    learning: 'Vectorized operations are much more efficient for numerical work.',
  },
  5: {
    day: 5, date: 'Aug 1', status: 'completed',
    mission: 'Learn Pandas',
    task: 'Work with DataFrames and perform basic data cleaning.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Created DataFrames', 'Cleaned missing values', 'Practiced grouping and filtering'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#Pandas', '#DataAnalysis'],
    learning: 'Clean data is essential before building useful models.',
  },
  6: {
    day: 6, date: 'Aug 2', status: 'completed',
    mission: 'Understand data visualization',
    task: 'Create basic charts to understand patterns in datasets.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Created line charts', 'Created bar charts', 'Visualized dataset patterns'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#DataVisualization', '#Python'],
    learning: 'Visualization can reveal patterns that raw numbers hide.',
  },
  7: {
    day: 7, date: 'Aug 3', status: 'completed',
    mission: 'Introduction to Machine Learning',
    task: 'Understand supervised vs unsupervised learning and the basic ML workflow.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Studied ML workflow', 'Learned training/testing concepts', 'Implemented a basic ML example'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#MachineLearning', '#AI'],
    learning: 'Machine learning is about learning patterns from data rather than manually defining every rule.',
  },
  8: {
    day: 8, date: 'Aug 4', status: 'completed',
    mission: 'Build your first ML model',
    task: 'Train a simple classification model and evaluate its performance.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Prepared dataset', 'Trained classification model', 'Tested predictions', 'Calculated evaluation metrics'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#MachineLearning', '#Classification'],
    learning: 'A model is only useful when its performance can be measured.',
  },
  9: {
    day: 9, date: 'Aug 5', status: 'completed',
    mission: 'Understand model evaluation',
    task: 'Learn accuracy, precision, recall and confusion matrices.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Implemented evaluation metrics', 'Generated confusion matrix', 'Compared model performance'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#ML', '#ModelEvaluation'],
    learning: 'Accuracy alone does not always tell the complete story.',
  },
  10: {
    day: 10, date: 'Aug 6', status: 'completed',
    mission: 'Learn embeddings',
    task: 'Understand how text can be represented as numerical vectors.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Studied vector embeddings', 'Generated sample text embeddings', 'Experimented with similarity'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#Embeddings', '#GenerativeAI'],
    learning: 'Embeddings allow machines to compare the meaning of different pieces of text.',
  },
  11: {
    day: 11, date: 'Aug 7', status: 'completed',
    mission: 'Prepare for RAG',
    task: 'Understand the architecture of Retrieval-Augmented Generation and prepare the project structure.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Studied RAG architecture', 'Created project structure', 'Prepared documents for retrieval', 'Planned the retrieval pipeline'],
    githubCommits: 2, linkedinPosts: 1,
    tags: ['#RAG', '#LLM', '#Embeddings'],
    learning: 'RAG allows an AI system to use external knowledge instead of relying only on its model knowledge.',
  },
  12: {
    day: 12, date: 'Aug 8', status: 'current',
    mission: 'Build a RAG chatbot',
    task: 'Build a simple retrieval system that can answer questions from a provided document using vector embeddings and similarity search.',
    timeCommitted: 60, actualTime: 75,
    workCompleted: ['Implemented document ingestion', 'Added embeddings', 'Implemented similarity search', 'Connected retrieval with the chatbot'],
    githubCommits: 1, linkedinPosts: 1,
    tags: ['#Python', '#Embeddings', '#Retrieval'],
    learning: 'Vector search can retrieve relevant information from documents before generating an answer.',
  },
};

export interface ChallengeDay {
  day: number;
  title: string;
  description: string;
  whatToBuild: string;
  checklist: string[];
  successCriteria: string[];
  estimatedTime: string;
  steps: string[];
  resources: ChallengeResource[];
  status: DayStatus;
}

export interface GamePlanStep {
  label: string;
  minutes: number;
}

export interface Achievement {
  icon: 'flame' | 'rocket' | 'code' | 'trophy';
  label: string;
}

export interface CompletedProject {
  day: number;
  title: string;
  date: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
}

export interface ProofEntry {
  day: number;
  title: string;
  date: string;
  github: boolean;
  linkedin: boolean;
}

export type MomentumState = 'active' | 'protected' | 'recovery';

export interface Student {
  name: string;
  track: string;
  currentDay: number;
  streak: number;
  avatarInitials: string;
  standing: string;
  achievements: Achievement[];
  streakFreezeAvailable: number;
  streakFreezeUsed: boolean;
  momentumState: MomentumState;
  recoveryProgress: number;
  recoveryTotal: number;
  completedDays: number[];
  missedDays: number[];
  completedProjects: CompletedProject[];
}

export const TRACKS = [
  {
    id: 'fullstack',
    label: 'Full Stack Development',
    description: 'Frontend, backend, and everything in between.',
    icon: 'code',
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    description: 'Models, prompts, and intelligent features.',
    icon: 'brain',
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    description: 'Offensive and defensive security builds.',
    icon: 'shield',
  },
  {
    id: 'appdev',
    label: 'App Development',
    description: 'Mobile-first apps with real interactions.',
    icon: 'smartphone',
  },
  {
    id: 'uiux',
    label: 'UI/UX + Frontend',
    description: 'Interfaces that feel as good as they look.',
    icon: 'palette',
  },
] as const;

export type TrackId = (typeof TRACKS)[number]['id'];

// ---------------------------------------------------------------------------
// Challenge content — 60 unique daily builds
// ---------------------------------------------------------------------------

interface ChallengeSeed {
  title: string;
  description: string;
  whatToBuild: string;
  checklist: string[];
  successCriteria: string[];
  estimatedTime: string;
  steps: string[];
  resources: ChallengeResource[];
}

const R = {
  inspiration: { label: 'View inspiration', url: '#' },
  htmlCss: { label: 'HTML/CSS reference', url: '#' },
  responsive: { label: 'Responsive design guide', url: '#' },
  jsDocs: { label: 'JavaScript docs', url: '#' },
  mdn: { label: 'MDN Web Docs', url: '#' },
  figma: { label: 'Figma community', url: '#' },
  git: { label: 'Git handbook', url: '#' },
  reactDocs: { label: 'React docs', url: '#' },
} as const;

const seeds: ChallengeSeed[] = [
  {
    title: 'Hello World Portfolio Page',
    description: 'Ship a single-page portfolio that introduces you and links to your profiles.',
    whatToBuild: 'A one-page personal intro with your name, photo, a short bio, and social links.',
    checklist: ['Your name and photo', 'Short bio (2 lines)', 'GitHub + LinkedIn links', 'Responsive layout'],
    successCriteria: ['Renders at 390px with no horizontal scroll', 'Links open in a new tab', 'No placeholder text'],
    estimatedTime: '45–60 minutes',
    steps: ['Scaffold the HTML structure', 'Add your bio and links', 'Style it mobile-first', 'Push to GitHub', 'Share on LinkedIn'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Stats Section',
    description: 'Build a compact stats band showing numbers that matter for a product.',
    whatToBuild: 'A row of 3–4 animated counters that count up when scrolled into view.',
    checklist: ['3–4 stat counters', 'Count-up animation', 'Labels under numbers', 'Responsive grid'],
    successCriteria: ['Numbers animate on first view', 'Labels are readable at 390px', 'Grid stacks on mobile'],
    estimatedTime: '45–60 minutes',
    steps: ['Lay out the stat cards', 'Add the count-up logic', 'Make it responsive', 'Push to GitHub'],
    resources: [R.jsDocs, R.inspiration],
  },
  {
    title: 'Login Form',
    description: 'Create an accessible login form with validation states.',
    whatToBuild: 'A login form with email + password, show/hide password, and inline error messages.',
    checklist: ['Email + password fields', 'Show/hide password toggle', 'Inline validation', 'Submit button state'],
    successCriteria: ['Errors appear without a page reload', 'Password toggle works', 'Labels are associated with inputs'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the form markup', 'Add validation logic', 'Implement show/hide', 'Push to GitHub'],
    resources: [R.mdn, R.htmlCss],
  },
  {
    title: 'Hero Section',
    description: 'Design a hero section that communicates a product value prop in seconds.',
    whatToBuild: 'A hero with headline, subtext, a primary CTA, and a subtle background.',
    checklist: ['Bold headline', 'Supporting subtext', 'Primary CTA button', 'Background treatment'],
    successCriteria: ['Headline is readable on the background', 'CTA is tappable on mobile', 'No text overflow at 390px'],
    estimatedTime: '45–60 minutes',
    steps: ['Draft the copy', 'Build the layout', 'Add the background', 'Push to GitHub'],
    resources: [R.inspiration, R.figma],
  },
  {
    title: 'Footer Section',
    description: 'Build a multi-column footer with navigation and social links.',
    whatToBuild: 'A site footer with link columns, social icons, and a copyright line.',
    checklist: ['3–4 link columns', 'Social icons', 'Copyright line', 'Mobile stacked layout'],
    successCriteria: ['Columns stack on mobile', 'Links are tappable', 'Icons align correctly'],
    estimatedTime: '30–45 minutes',
    steps: ['Structure the columns', 'Add social icons', 'Stack on mobile', 'Push to GitHub'],
    resources: [R.htmlCss, R.inspiration],
  },
  {
    title: 'Product Card',
    description: 'Create a product card with image, price, rating, and add-to-cart.',
    whatToBuild: 'An e-commerce product card with hover state and a tappable CTA.',
    checklist: ['Product image', 'Title + price', 'Star rating', 'Add to cart button'],
    successCriteria: ['Card looks good at 390px', 'Button has a hover state', 'Image does not distort'],
    estimatedTime: '45–60 minutes',
    steps: ['Lay out the card', 'Add the rating', 'Style the CTA', 'Push to GitHub'],
    resources: [R.inspiration, R.figma],
  },
  {
    title: 'FAQ Accordion',
    description: 'Build an accessible accordion that expands and collapses answers.',
    whatToBuild: 'A FAQ section with 5 questions, each expanding to reveal an answer.',
    checklist: ['5 Q&A pairs', 'Expand/collapse animation', 'Only one open at a time', 'Accessible buttons'],
    successCriteria: ['Smooth open/close animation', 'Keyboard accessible', 'No layout jump'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the question list', 'Add toggle logic', 'Animate the answer', 'Push to GitHub'],
    resources: [R.jsDocs, R.mdn],
  },
  {
    title: 'Navbar Component',
    description: 'Create a responsive navbar with a mobile hamburger menu.',
    whatToBuild: 'A top navigation bar that collapses into a hamburger menu on mobile.',
    checklist: ['Logo + 3–4 links', 'Hamburger on mobile', 'Slide-in mobile menu', 'Active link state'],
    successCriteria: ['Menu opens/closes smoothly', 'Links are tappable', 'No horizontal scroll at 390px'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the desktop nav', 'Add the hamburger', 'Animate the mobile menu', 'Push to GitHub'],
    resources: [R.jsDocs, R.responsive],
  },
  {
    title: 'Todo Application',
    description: 'Build a todo app with add, complete, and delete.',
    whatToBuild: 'A todo list where you can add, check off, and remove items.',
    checklist: ['Add new todo', 'Mark complete', 'Delete todo', 'Empty state'],
    successCriteria: ['Items persist in local state', 'Empty state is friendly', 'Buttons are tappable'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the input + list', 'Add complete/delete logic', 'Add empty state', 'Push to GitHub'],
    resources: [R.reactDocs, R.jsDocs],
  },
  {
    title: 'Weather Dashboard',
    description: 'Create a weather display using mocked weather data.',
    whatToBuild: 'A weather card showing temperature, conditions, and a 3-day mock forecast.',
    checklist: ['Current temperature', 'Weather condition icon', '3-day forecast', 'City label'],
    successCriteria: ['Data is mocked realistically', 'Icons render at all states', 'Layout is mobile-first'],
    estimatedTime: '60–75 minutes',
    steps: ['Mock the weather data', 'Build the current card', 'Add the forecast row', 'Push to GitHub'],
    resources: [R.inspiration, R.jsDocs],
  },
  {
    title: 'Responsive Pricing Page',
    description: 'Create a clean pricing page for a fictional SaaS product with three tiers.',
    whatToBuild: 'A pricing page with three tiers, feature comparison, and strong CTAs.',
    checklist: ['Three pricing tiers', 'Responsive mobile layout', 'Clear CTA buttons', 'Feature comparison', 'Clean visual hierarchy'],
    successCriteria: ['Renders correctly at 390px with no horizontal scroll', 'All three tiers are visually distinct', 'CTAs are large enough to tap', 'Typography hierarchy guides the eye', 'No broken layouts on small screens'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the layout', 'Add responsiveness', 'Push to GitHub', 'Share on LinkedIn', 'Mark the day complete'],
    resources: [R.inspiration, R.htmlCss, R.responsive],
  },
  {
    title: 'Contact Form',
    description: 'Build a contact form with validation and a success state.',
    whatToBuild: 'A contact form with name, email, message, and a success confirmation.',
    checklist: ['Name, email, message fields', 'Inline validation', 'Success message', 'Reset after submit'],
    successCriteria: ['Validation prevents empty submits', 'Success state is visible', 'Inputs are tappable'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the form', 'Add validation', 'Show success state', 'Push to GitHub'],
    resources: [R.mdn, R.htmlCss],
  },
  {
    title: 'Blog Card Grid',
    description: 'Create a responsive grid of blog post cards.',
    whatToBuild: 'A grid of 6 blog cards with image, title, excerpt, and read link.',
    checklist: ['6 blog cards', 'Image + title + excerpt', 'Read more link', 'Responsive grid'],
    successCriteria: ['Grid reflows on mobile', 'Images keep aspect ratio', 'Cards align in a grid'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the card component', 'Arrange in a grid', 'Make it responsive', 'Push to GitHub'],
    resources: [R.inspiration, R.responsive],
  },
  {
    title: 'Dropdown Menu',
    description: 'Build an accessible dropdown menu component.',
    whatToBuild: 'A button-triggered dropdown with 4–5 items and keyboard support.',
    checklist: ['Trigger button', '4–5 menu items', 'Click outside to close', 'Keyboard navigable'],
    successCriteria: ['Closes on outside click', 'Escape closes the menu', 'Items are focusable'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the trigger', 'Add the menu panel', 'Add close logic', 'Push to GitHub'],
    resources: [R.jsDocs, R.mdn],
  },
  {
    title: 'Modal Dialog',
    description: 'Create a reusable modal with backdrop and close behavior.',
    whatToBuild: 'A modal that opens on button click, closes on backdrop/escape, and traps focus.',
    checklist: ['Open/close transition', 'Backdrop click to close', 'Escape to close', 'Focus trap'],
    successCriteria: ['No body scroll when open', 'Escape closes the modal', 'Focus stays inside the modal'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the modal shell', 'Add open/close logic', 'Add focus trap', 'Push to GitHub'],
    resources: [R.mdn, R.jsDocs],
  },
  {
    title: 'Tab Interface',
    description: 'Build a tabbed interface that switches content panels.',
    whatToBuild: 'A 3-tab interface with animated active indicator and content swap.',
    checklist: ['3 tabs', 'Active indicator', 'Content panels', 'Keyboard arrows'],
    successCriteria: ['Only one panel visible at a time', 'Active tab is clearly indicated', 'Arrow keys switch tabs'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the tab bar', 'Add panel switching', 'Add keyboard support', 'Push to GitHub'],
    resources: [R.mdn, R.jsDocs],
  },
  {
    title: 'Breadcrumb Nav',
    description: 'Create a breadcrumb navigation that reflects page hierarchy.',
    whatToBuild: 'A breadcrumb trail with 3 levels, separators, and a current-page indicator.',
    checklist: ['3 breadcrumb levels', 'Separator icons', 'Current page non-link', 'Responsive truncation'],
    successCriteria: ['Last item is not a link', 'Truncates on small screens', 'Separators align'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the trail', 'Add separators', 'Handle truncation', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Badge Component',
    description: 'Design a set of reusable badge/tag components.',
    whatToBuild: '5 badge variants: default, success, warning, error, and accent.',
    checklist: ['5 variants', 'Consistent padding', 'Icon support', 'Size options'],
    successCriteria: ['Variants are visually distinct', 'Text is readable', 'Icons align with text'],
    estimatedTime: '30–45 minutes',
    steps: ['Define the variants', 'Build the component', 'Add icon support', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: 'Alert Banner',
    description: 'Build a dismissible alert banner for a web app.',
    whatToBuild: 'A top-of-page alert with icon, message, and a dismiss button.',
    checklist: ['Icon + message', 'Dismiss button', 'Slide-out animation', '4 variants'],
    successCriteria: ['Dismiss removes the banner', 'Animation is smooth', 'Variants are color-coded'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the banner', 'Add dismiss logic', 'Add variants', 'Push to GitHub'],
    resources: [R.mdn, R.inspiration],
  },
  {
    title: 'Progress Stepper',
    description: 'Create a multi-step progress indicator.',
    whatToBuild: 'A 4-step horizontal stepper with completed, current, and upcoming states.',
    checklist: ['4 steps', 'Completed/current/upcoming states', 'Connector line', 'Labels'],
    successCriteria: ['States are visually distinct', 'Connector fills correctly', 'Labels are readable'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the step circles', 'Add connectors', 'Add state styles', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Data Table',
    description: 'Build a responsive data table with sortable columns.',
    whatToBuild: 'A table with 5 rows, sortable headers, and a mobile-friendly layout.',
    checklist: ['5 rows of data', 'Sortable headers', 'Zebra striping', 'Mobile card layout'],
    successCriteria: ['Clicking a header sorts the column', 'Table reflows on mobile', 'Header click shows sort direction'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the table', 'Add sort logic', 'Add mobile reflow', 'Push to GitHub'],
    resources: [R.jsDocs, R.responsive],
  },
  {
    title: 'Avatar Stack',
    description: 'Create an overlapping avatar stack with a +N overflow counter.',
    whatToBuild: 'A row of overlapping avatars that shows a +N indicator beyond 5.',
    checklist: ['Overlapping avatars', 'Hover to bring forward', '+N overflow counter', 'Tooltip on hover'],
    successCriteria: ['Avatars overlap cleanly', 'Overflow count is accurate', 'Hover raises the avatar'],
    estimatedTime: '30–45 minutes',
    steps: ['Lay out the avatars', 'Add overlap styles', 'Add +N counter', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: 'Search Bar',
    description: 'Build a search bar with live filtering and a clear button.',
    whatToBuild: 'A search input that filters a list of 10 items in real time.',
    checklist: ['Search input', 'Live filtering', 'Clear button', 'No results state'],
    successCriteria: ['Results update as you type', 'Clear button resets the list', 'Empty state is friendly'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the input', 'Add filter logic', 'Add clear + empty state', 'Push to GitHub'],
    resources: [R.jsDocs, R.mdn],
  },
  {
    title: 'Toggle Switch',
    description: 'Design an animated toggle switch component.',
    whatToBuild: 'An iOS-style toggle with smooth thumb animation and on/off labels.',
    checklist: ['Animated thumb', 'On/off colors', 'Keyboard accessible', 'Disabled state'],
    successCriteria: ['Thumb animates smoothly', 'Spacebar toggles it', 'Disabled state is clear'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the track + thumb', 'Add toggle logic', 'Add keyboard support', 'Push to GitHub'],
    resources: [R.mdn, R.figma],
  },
  {
    title: 'Rating Widget',
    description: 'Create an interactive star rating component.',
    whatToBuild: 'A 5-star rating widget with hover preview and click-to-select.',
    checklist: ['5 stars', 'Hover preview', 'Click to select', 'Reset button'],
    successCriteria: ['Hover fills stars up to the cursor', 'Click locks the rating', 'Reset clears to zero'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the star row', 'Add hover logic', 'Add click-to-select', 'Push to GitHub'],
    resources: [R.jsDocs, R.inspiration],
  },
  {
    title: 'Calendar Cell',
    description: 'Build a single calendar day cell with all its states.',
    whatToBuild: 'A calendar cell with default, selected, today, and disabled states.',
    checklist: ['4 states', 'Selected highlight', 'Today indicator', 'Disabled styling'],
    successCriteria: ['States are visually distinct', 'Cell is square', 'Selection is clear'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the cell', 'Add state styles', 'Add today indicator', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: 'Comment Thread',
    description: 'Build a nested comment thread with replies.',
    whatToBuild: 'A comment section with 3 top-level comments and nested replies.',
    checklist: ['3 top-level comments', 'Nested replies', 'Avatar + timestamp', 'Reply button'],
    successCriteria: ['Replies are indented', 'Timestamps are readable', 'Reply button is tappable'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the comment card', 'Add nested replies', 'Add reply interaction', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Notification Toast',
    description: 'Create a toast notification system with auto-dismiss.',
    whatToBuild: 'A toast that slides in, auto-dismisses after 4s, and stacks.',
    checklist: ['Slide-in animation', 'Auto-dismiss after 4s', 'Manual close', 'Stack multiple toasts'],
    successCriteria: ['Toast slides in smoothly', 'Auto-dismiss works', 'Multiple toasts stack'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the toast shell', 'Add slide animation', 'Add auto-dismiss', 'Push to GitHub'],
    resources: [R.jsDocs, R.mdn],
  },
  {
    title: 'Sidebar Layout',
    description: 'Build a dashboard layout with a collapsible sidebar.',
    whatToBuild: 'A sidebar + main content layout that collapses to icons on mobile.',
    checklist: ['Sidebar with 5 links', 'Collapse to icons', 'Main content area', 'Mobile overlay mode'],
    successCriteria: ['Sidebar collapses smoothly', 'Content area fills remaining space', 'Mobile uses an overlay'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the layout grid', 'Add collapse logic', 'Add mobile overlay', 'Push to GitHub'],
    resources: [R.responsive, R.inspiration],
  },
  {
    title: 'Card Carousel',
    description: 'Create a swipeable card carousel for mobile.',
    whatToBuild: 'A horizontal carousel of 5 cards with snap scrolling and dots.',
    checklist: ['5 cards', 'Snap scrolling', 'Dot indicators', 'Swipe on mobile'],
    successCriteria: ['Cards snap into place', 'Dots reflect current card', 'Swipe works on touch'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the card row', 'Add snap scroll', 'Add dot indicators', 'Push to GitHub'],
    resources: [R.responsive, R.mdn],
  },
  {
    title: 'Landing Page',
    description: 'Build a complete one-page marketing landing page.',
    whatToBuild: 'A landing page with hero, features, testimonials, and a CTA.',
    checklist: ['Hero section', 'Feature grid', 'Testimonial', 'Final CTA'],
    successCriteria: ['Sections flow naturally', 'CTA is prominent', 'Page is responsive'],
    estimatedTime: '75–90 minutes',
    steps: ['Build the hero', 'Add features + testimonials', 'Add the CTA', 'Push to GitHub'],
    resources: [R.inspiration, R.figma],
  },
  {
    title: 'Dashboard Shell',
    description: 'Create the shell of an analytics dashboard.',
    whatToBuild: 'A dashboard with a stat row, a chart placeholder, and a table.',
    checklist: ['Stat cards row', 'Chart placeholder', 'Data table', 'Sidebar nav'],
    successCriteria: ['Stats are readable at 390px', 'Chart area is contained', 'Table reflows on mobile'],
    estimatedTime: '75–90 minutes',
    steps: ['Build the stat row', 'Add chart placeholder', 'Add the table', 'Push to GitHub'],
    resources: [R.inspiration, R.responsive],
  },
  {
    title: 'Settings Panel',
    description: 'Build a settings page with toggle sections.',
    whatToBuild: 'A settings panel with 3 sections, each containing toggles and selects.',
    checklist: ['3 settings sections', 'Toggle switches', 'Select dropdowns', 'Save button state'],
    successCriteria: ['Toggles animate', 'Selects work', 'Save button gives feedback'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the sections', 'Add toggles + selects', 'Add save feedback', 'Push to GitHub'],
    resources: [R.mdn, R.inspiration],
  },
  {
    title: 'Empty State',
    description: 'Design a set of empty state illustrations for a web app.',
    whatToBuild: '3 empty states: no data, no results, and first-time user.',
    checklist: ['3 empty states', 'Illustration + heading', 'CTA button', 'Consistent style'],
    successCriteria: ['States are encouraging', 'CTA is actionable', 'Illustrations are lightweight'],
    estimatedTime: '45–60 minutes',
    steps: ['Design the layout', 'Write the copy', 'Add the CTA', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: 'Loading Skeleton',
    description: 'Create skeleton loaders that mimic your content layout.',
    whatToBuild: 'A card skeleton and a list skeleton with shimmer animation.',
    checklist: ['Card skeleton', 'List skeleton', 'Shimmer animation', 'Matches real layout'],
    successCriteria: ['Shimmer is subtle', 'Skeleton matches content proportions', 'No layout shift when loaded'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the skeleton shapes', 'Add shimmer animation', 'Match real layout', 'Push to GitHub'],
    resources: [R.inspiration, R.mdn],
  },
  {
    title: 'Error Page',
    description: 'Build a 500 error page with a friendly message.',
    whatToBuild: 'A full-screen error page with an illustration and a retry button.',
    checklist: ['Error illustration', 'Friendly message', 'Retry button', 'Support link'],
    successCriteria: ['Message is reassuring', 'Retry button is prominent', 'Page is centered'],
    estimatedTime: '30–45 minutes',
    steps: ['Design the layout', 'Write the copy', 'Add retry button', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: '404 Page',
    description: 'Create a custom 404 page with navigation back to safety.',
    whatToBuild: 'A 404 page with a big headline, a search, and a link home.',
    checklist: ['Big 404 headline', 'Short message', 'Link home', 'Search input'],
    successCriteria: ['Headline is bold', 'Home link is obvious', 'Page is responsive'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the headline', 'Add the message', 'Add search + home link', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Cookie Banner',
    description: 'Build a GDPR-style cookie consent banner.',
    whatToBuild: 'A bottom-fixed cookie banner with accept, reject, and customize.',
    checklist: ['Fixed bottom banner', 'Accept + reject buttons', 'Customize link', 'Dismiss animation'],
    successCriteria: ['Banner is fixed on mobile', 'Buttons are tappable', 'Dismiss slides down'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the banner', 'Add accept/reject', 'Add dismiss animation', 'Push to GitHub'],
    resources: [R.mdn, R.inspiration],
  },
  {
    title: 'Pricing Toggle',
    description: 'Create a monthly/annual pricing toggle that updates prices.',
    whatToBuild: 'A toggle that switches all pricing tier amounts between monthly and annual.',
    checklist: ['Monthly/annual toggle', 'Price updates instantly', 'Savings label', 'Smooth transition'],
    successCriteria: ['Prices update on toggle', 'Savings is highlighted', 'No layout shift on toggle'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the toggle', 'Add price logic', 'Add savings label', 'Push to GitHub'],
    resources: [R.jsDocs, R.inspiration],
  },
  {
    title: 'Feature Grid',
    description: 'Build a responsive feature grid with icons.',
    whatToBuild: 'A 6-feature grid with icon, title, and description for each.',
    checklist: ['6 feature cards', 'Icon for each', 'Title + description', 'Responsive grid'],
    successCriteria: ['Grid reflows on mobile', 'Icons are consistent', 'Descriptions are concise'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the card', 'Arrange the grid', 'Make it responsive', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: 'Logo Cloud',
    description: 'Create a logo cloud of fictional company logos.',
    whatToBuild: 'A centered grid of 8 fictional company logos with hover grayscale.',
    checklist: ['8 logos', 'Grayscale default', 'Color on hover', 'Responsive wrap'],
    successCriteria: ['Logos are uniform size', 'Hover reveals color', 'Wraps on mobile'],
    estimatedTime: '30–45 minutes',
    steps: ['Lay out the logos', 'Add grayscale + hover', 'Make it wrap', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: 'CTA Section',
    description: 'Build a high-conversion call-to-action section.',
    whatToBuild: 'A CTA band with headline, subtext, button, and a subtle background.',
    checklist: ['Bold headline', 'Supporting subtext', 'Primary button', 'Background accent'],
    successCriteria: ['Headline grabs attention', 'Button is tappable', 'Background is subtle'],
    estimatedTime: '30–45 minutes',
    steps: ['Draft the copy', 'Build the section', 'Add the background', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Newsletter Form',
    description: 'Create a newsletter signup form with validation.',
    whatToBuild: 'An email capture form with inline validation and a success state.',
    checklist: ['Email input', 'Inline validation', 'Success message', 'Inline layout on desktop'],
    successCriteria: ['Invalid emails are rejected', 'Success is celebratory', 'Form is tappable'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the form', 'Add validation', 'Add success state', 'Push to GitHub'],
    resources: [R.mdn, R.htmlCss],
  },
  {
    title: 'Social Proof Bar',
    description: 'Build a social proof bar with avatars and a rating.',
    whatToBuild: 'A horizontal bar with avatar stack, 5-star rating, and a quote.',
    checklist: ['Avatar stack', 'Star rating', 'Short quote', 'Responsive layout'],
    successCriteria: ['Avatars overlap cleanly', 'Stars align', 'Text is readable at 390px'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the avatar stack', 'Add the rating', 'Add the quote', 'Push to GitHub'],
    resources: [R.inspiration, R.figma],
  },
  {
    title: 'Comparison Table',
    description: 'Create a feature comparison table between 3 plans.',
    whatToBuild: 'A comparison table with 3 plan columns and 6 feature rows using check/cross icons.',
    checklist: ['3 plan columns', '6 feature rows', 'Check/cross icons', 'Sticky plan header'],
    successCriteria: ['Checks and crosses are clear', 'Header sticks on scroll', 'Table reflows on mobile'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the table', 'Add icons', 'Add sticky header', 'Push to GitHub'],
    resources: [R.responsive, R.inspiration],
  },
  {
    title: 'Checkout Form',
    description: 'Build a multi-field checkout form with a summary.',
    whatToBuild: 'A checkout form with shipping fields, payment fields, and an order summary.',
    checklist: ['Shipping fields', 'Payment fields', 'Order summary', 'Submit with validation'],
    successCriteria: ['Fields are grouped', 'Validation is inline', 'Summary is visible'],
    estimatedTime: '75–90 minutes',
    steps: ['Build the form sections', 'Add validation', 'Add the summary', 'Push to GitHub'],
    resources: [R.mdn, R.htmlCss],
  },
  {
    title: 'Cart Summary',
    description: 'Create a cart summary panel with quantity controls.',
    whatToBuild: 'A cart panel with 3 items, quantity steppers, and a total.',
    checklist: ['3 cart items', 'Quantity steppers', 'Subtotal + total', 'Remove item button'],
    successCriteria: ['Steppers update total', 'Remove updates the list', 'Total is always visible'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the item list', 'Add quantity steppers', 'Add the total', 'Push to GitHub'],
    resources: [R.jsDocs, R.inspiration],
  },
  {
    title: 'Order Confirmation',
    description: 'Build an order confirmation page with a success state.',
    whatToBuild: 'A confirmation page with order number, summary, and next steps.',
    checklist: ['Success icon', 'Order number', 'Order summary', 'Continue shopping link'],
    successCriteria: ['Success is celebratory', 'Order number is prominent', 'Summary is accurate'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the success state', 'Add the order details', 'Add next steps', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'User Profile Card',
    description: 'Create a user profile card with stats and a follow button.',
    whatToBuild: 'A profile card with avatar, bio, 3 stats, and a follow button.',
    checklist: ['Avatar + name', 'Short bio', '3 stat counts', 'Follow button with state'],
    successCriteria: ['Follow button toggles state', 'Stats are aligned', 'Card looks good at 390px'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the card', 'Add the stats', 'Add follow toggle', 'Push to GitHub'],
    resources: [R.figma, R.inspiration],
  },
  {
    title: 'Follow Button',
    description: 'Build an animated follow/unfollow button component.',
    whatToBuild: 'A button that morphs between Follow and Following with a hover unfollow.',
    checklist: ['Follow state', 'Following state', 'Hover to unfollow', 'Animation'],
    successCriteria: ['State transition is smooth', 'Hover reveals unfollow', 'Button is tappable'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the button', 'Add state logic', 'Add hover unfollow', 'Push to GitHub'],
    resources: [R.jsDocs, R.figma],
  },
  {
    title: 'Repo List',
    description: 'Create a GitHub-style repository list component.',
    whatToBuild: 'A list of 5 repos with name, language dot, stars, and description.',
    checklist: ['5 repo cards', 'Language color dot', 'Star count', 'Description'],
    successCriteria: ['Language dots are colored', 'Stars are right-aligned', 'List is scannable'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the repo card', 'Add language dots', 'Add star counts', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Commit History',
    description: 'Build a vertical commit history timeline.',
    whatToBuild: 'A timeline of 6 commits with hash, message, author, and timestamp.',
    checklist: ['6 commit entries', 'Commit hash', 'Message + author', 'Timestamp'],
    successCriteria: ['Timeline is vertical', 'Hashes are monospace', 'Layout is compact on mobile'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the timeline', 'Add commit data', 'Add timestamps', 'Push to GitHub'],
    resources: [R.inspiration, R.htmlCss],
  },
  {
    title: 'Code Snippet Block',
    description: 'Create a code snippet block with syntax highlighting and copy.',
    whatToBuild: 'A code block with a language label, line numbers, and a copy button.',
    checklist: ['Code block', 'Language label', 'Copy button', 'Line numbers'],
    successCriteria: ['Copy button works', 'Line numbers align', 'Code is readable at 390px'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the code block', 'Add copy logic', 'Add line numbers', 'Push to GitHub'],
    resources: [R.mdn, R.jsDocs],
  },
  {
    title: 'Terminal Mock',
    description: 'Build a mock terminal interface that accepts commands.',
    whatToBuild: 'A terminal that responds to 3 commands: help, ls, and whoami.',
    checklist: ['Terminal window', 'Prompt + cursor', '3 working commands', 'Scrollable output'],
    successCriteria: ['Commands return output', 'Cursor blinks', 'Output scrolls'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the terminal shell', 'Add command parsing', 'Add output history', 'Push to GitHub'],
    resources: [R.jsDocs, R.inspiration],
  },
  {
    title: 'Command Palette',
    description: 'Create a command palette that opens with Cmd+K.',
    whatToBuild: 'A searchable command palette with 6 actions and keyboard navigation.',
    checklist: ['Cmd+K to open', 'Search input', '6 commands', 'Arrow key navigation'],
    successCriteria: ['Opens with Cmd+K', 'Search filters commands', 'Arrows navigate the list'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the palette shell', 'Add search filtering', 'Add keyboard nav', 'Push to GitHub'],
    resources: [R.jsDocs, R.mdn],
  },
  {
    title: 'Keyboard Shortcut Hint',
    description: 'Build a keyboard shortcut display component.',
    whatToBuild: 'A component that renders shortcut keys with styled kbd elements.',
    checklist: ['Styled kbd keys', 'Plus separators', 'Platform-aware (Cmd/Ctrl)', 'Tooltip variant'],
    successCriteria: ['Keys look like real keys', 'Platform detection works', 'Tooltips appear on hover'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the kbd component', 'Add platform detection', 'Add tooltip variant', 'Push to GitHub'],
    resources: [R.mdn, R.inspiration],
  },
  {
    title: 'Pagination Bar',
    description: 'Create a pagination component with prev/next and page numbers.',
    whatToBuild: 'A pagination bar for 10 pages with truncation and prev/next.',
    checklist: ['Prev/next buttons', 'Page numbers', 'Truncation for many pages', 'Current page highlight'],
    successCriteria: ['Current page is highlighted', 'Truncation shows ellipses', 'Prev/next disable at bounds'],
    estimatedTime: '45–60 minutes',
    steps: ['Build the page buttons', 'Add truncation logic', 'Add prev/next', 'Push to GitHub'],
    resources: [R.jsDocs, R.mdn],
  },
  {
    title: 'Filter Sidebar',
    description: 'Build a filter sidebar with checkboxes and a price slider.',
    whatToBuild: 'A filter panel with 3 checkbox groups and a range slider.',
    checklist: ['3 filter groups', 'Range slider', 'Active filter count', 'Clear all button'],
    successCriteria: ['Checkboxes update the count', 'Slider updates live', 'Clear resets everything'],
    estimatedTime: '60–75 minutes',
    steps: ['Build the filter groups', 'Add the slider', 'Add clear logic', 'Push to GitHub'],
    resources: [R.mdn, R.inspiration],
  },
  {
    title: 'Sort Dropdown',
    description: 'Create a sort dropdown with ascending/descending toggle.',
    whatToBuild: 'A sort selector with 4 sort fields and a direction toggle.',
    checklist: ['4 sort options', 'Asc/desc toggle', 'Selected indicator', 'Closes on select'],
    successCriteria: ['Selection updates the label', 'Direction toggle works', 'Dropdown closes on pick'],
    estimatedTime: '30–45 minutes',
    steps: ['Build the dropdown', 'Add sort options', 'Add direction toggle', 'Push to GitHub'],
    resources: [R.jsDocs, R.mdn],
  },
  {
    title: 'Ship Your Final Portfolio',
    description: 'Assemble everything you built into a single portfolio site.',
    whatToBuild: 'A portfolio that showcases your best builds from the 60-day challenge.',
    checklist: ['Hero with your pitch', 'Project showcase grid', 'Proof of work timeline', 'Contact section'],
    successCriteria: ['Showcases at least 5 builds', 'Each project links to GitHub', 'Page is fully responsive', 'No placeholder text'],
    estimatedTime: '90–120 minutes',
    steps: ['Curate your best builds', 'Build the showcase grid', 'Add the timeline', 'Push to GitHub', 'Share on LinkedIn'],
    resources: [R.inspiration, R.figma, R.git],
  },
];

function statusFor(day: number): DayStatus {
  if (day < 12) return 'completed';
  if (day === 12) return 'current';
  return 'upcoming';
}

export const challengeDays: ChallengeDay[] = Array.from({ length: 60 }, (_, i) => {
  const day = i + 1;
  const seed = seeds[i] ?? seeds[seeds.length - 1];
  return {
    day,
    title: seed.title,
    description: seed.description,
    whatToBuild: seed.whatToBuild,
    checklist: seed.checklist,
    successCriteria: seed.successCriteria,
    estimatedTime: seed.estimatedTime,
    steps: seed.steps,
    resources: seed.resources,
    status: statusFor(day),
  };
});

export function getChallenge(day: number): ChallengeDay | undefined {
  return challengeDays.find((d) => d.day === day);
}

// ---------------------------------------------------------------------------
// Mocked student state — derived where possible
// ---------------------------------------------------------------------------

const DEFAULT_COMPLETED_PROJECTS: CompletedProject[] = [
  { day: 11, title: 'Weather Dashboard', date: 'Aug 7', githubUrl: 'https://github.com/hetal/weather-dashboard', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day11' },
  { day: 10, title: 'Personal Portfolio', date: 'Aug 6', githubUrl: 'https://github.com/hetal/portfolio', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day10' },
  { day: 9, title: 'Todo Application', date: 'Aug 5', githubUrl: 'https://github.com/hetal/todo-app', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day9' },
  { day: 8, title: 'Navbar Component', date: 'Aug 4', githubUrl: 'https://github.com/hetal/navbar', linkedinUrl: null },
  { day: 7, title: 'FAQ Accordion', date: 'Aug 3', githubUrl: 'https://github.com/hetal/faq-accordion', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day7' },
  { day: 6, title: 'Product Card', date: 'Aug 2', githubUrl: 'https://github.com/hetal/product-card', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day6' },
  { day: 5, title: 'Footer Section', date: 'Aug 1', githubUrl: 'https://github.com/hetal/footer', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day5' },
  { day: 4, title: 'Hero Section', date: 'Jul 31', githubUrl: 'https://github.com/hetal/hero', linkedinUrl: null },
  { day: 3, title: 'Login Form', date: 'Jul 30', githubUrl: 'https://github.com/hetal/login-form', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day3' },
  { day: 2, title: 'Stats Section', date: 'Jul 29', githubUrl: 'https://github.com/hetal/stats', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day2' },
  { day: 1, title: 'Hello World Portfolio Page', date: 'Jul 28', githubUrl: 'https://github.com/hetal/hello-world', linkedinUrl: 'https://linkedin.com/posts/hetal_abtalks-day1' },
];

const DEFAULT_COMPLETED_DAYS = Array.from({ length: 11 }, (_, i) => i + 1);
const DEFAULT_MISSED_DAYS: number[] = [];

export function buildStudent(overrides: Partial<Student> = {}): Student {
  const completedDays = overrides.completedDays ?? DEFAULT_COMPLETED_DAYS;
  const completedProjects = overrides.completedProjects ?? DEFAULT_COMPLETED_PROJECTS;
  const completion = overrides.completion ?? Math.round(((completedDays.length) / 60) * 100);
  const proofsSubmitted = completedProjects.reduce((acc, p) => acc + (p.githubUrl ? 1 : 0) + (p.linkedinUrl ? 1 : 0), 0);

  return {
    name: 'Hetal',
    track: 'Full Stack Development',
    currentDay: 12,
    streak: 11,
    avatarInitials: 'HE',
    standing: 'Top 18% this week',
    achievements: [
      { icon: 'flame', label: '7-Day Streak' },
      { icon: 'rocket', label: 'First Project Shipped' },
      { icon: 'code', label: '10 Builds Completed' },
    ],
    streakFreezeAvailable: 1,
    streakFreezeUsed: false,
    momentumState: 'active',
    recoveryProgress: 0,
    recoveryTotal: 2,
    completedDays,
    missedDays: DEFAULT_MISSED_DAYS,
    completedProjects,
    ...overrides,
    completion,
    proofsSubmitted: overrides.proofsSubmitted ?? proofsSubmitted,
  };
}

export const student = buildStudent();

// Derived helpers
export function getCompletion(student: Pick<Student, 'completedDays'>): number {
  return Math.round((student.completedDays.length / 60) * 100);
}

export function getProjectsShipped(student: Pick<Student, 'completedProjects'>): number {
  return student.completedProjects.length;
}

export function getProofTimeline(student: Pick<Student, 'completedProjects'>): ProofEntry[] {
  return [...student.completedProjects]
    .sort((a, b) => b.day - a.day)
    .map((p) => ({
      day: p.day,
      title: p.title,
      date: p.date,
      github: !!p.githubUrl,
      linkedin: !!p.linkedinUrl,
    }));
}

export function getTodayChallenge(student: Pick<Student, 'currentDay'>): ChallengeDay | undefined {
  return getChallenge(student.currentDay);
}

export function getGamePlan(challenge: ChallengeDay | undefined): GamePlanStep[] {
  if (!challenge) return [];
  return challenge.steps.map((step) => ({ label: step, minutes: Math.round(45 / challenge.steps.length) }));
}

// Edge-case demo students
export const firstDayStudent = buildStudent({
  name: 'Aarav',
  avatarInitials: 'AA',
  currentDay: 1,
  streak: 0,
  standing: 'Just started',
  achievements: [],
  streakFreezeAvailable: 1,
  streakFreezeUsed: false,
  momentumState: 'active',
  recoveryProgress: 0,
  completedDays: [],
  completedProjects: [],
});

export const missedDayStudent = buildStudent({
  name: 'Priya',
  avatarInitials: 'PR',
  currentDay: 13,
  streak: 0,
  standing: 'Back on track today',
  achievements: [
    { icon: 'flame', label: '7-Day Streak' },
    { icon: 'code', label: '10 Builds Completed' },
  ],
  streakFreezeAvailable: 1,
  streakFreezeUsed: false,
  momentumState: 'recovery',
  recoveryProgress: 0,
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  missedDays: [11],
  completedProjects: DEFAULT_COMPLETED_PROJECTS.filter((p) => p.day <= 10),
});

export const emptyStudent = buildStudent({
  name: '',
  avatarInitials: '',
  currentDay: 0,
  streak: 0,
  standing: '',
  achievements: [],
  streakFreezeAvailable: 0,
  streakFreezeUsed: false,
  momentumState: 'active',
  recoveryProgress: 0,
  completedDays: [],
  completedProjects: [],
});

export const protectedStudent = buildStudent({
  name: 'Rohan',
  avatarInitials: 'RO',
  currentDay: 13,
  streak: 11,
  standing: 'Streak protected',
  streakFreezeAvailable: 0,
  streakFreezeUsed: true,
  momentumState: 'protected',
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  missedDays: [12],
  completedProjects: DEFAULT_COMPLETED_PROJECTS,
});

// Landing page content (unchanged)
export const stats = [
  { label: 'students building', value: '2,400+' },
  { label: 'builds shipped', value: '18,000+' },
  { label: 'days of consistency', value: '60' },
];

export const howItWorks = [
  { step: '01', title: 'Pick your track', description: 'Full Stack, AI/ML, Cybersecurity, App Dev, or UI/UX. Choose what you want to prove.' },
  { step: '02', title: 'Build every day', description: 'Get a focused daily build. Ship it. Push it. No tutorials, only proof.' },
  { step: '03', title: 'Share your proof', description: 'Push to GitHub, post on LinkedIn, and grow a visible 60-day streak.' },
];

export const whyAbtalks = [
  { title: 'Build real projects', description: 'Every day ends with something you can show, not just watch.' },
  { title: 'Stay consistent', description: 'A streak that rewards showing up, even for 45 minutes.' },
  { title: 'Public proof of work', description: 'GitHub commits and LinkedIn posts that recruiters can actually see.' },
  { title: 'Get visible', description: 'Your builds stack into a portfolio that speaks before you do.' },
  { title: 'Build confidence', description: 'Repetition turns "I can\'t" into "I already shipped that."' },
];
