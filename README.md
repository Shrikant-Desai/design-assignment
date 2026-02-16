# Core Assignment - HR Dashboard

A modern, production-ready HR management dashboard built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── people/                   # Employee grid view
│   ├── team-management/
│   │   └── timesheet/            # Timesheet management
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (redirects to /people)
├── components/
│   └── layout/                   # Layout components
│       ├── dashboard-layout.tsx  # Main dashboard wrapper
│       ├── header.tsx            # Top navigation bar
│       └── sidebar.tsx           # Left sidebar navigation
├── modules/                      # Feature-specific modules
│   ├── people/
│   │   └── components/           # People page components
│   │       ├── employee-card.tsx
│   │       └── people-grid.tsx
│   └── timesheet/
│       └── components/           # Timesheet components
│           ├── stats-card.tsx
│           └── timesheet-table.tsx
├── data/                         # Mock data
│   ├── employees.ts
│   └── timesheet.ts
├── types/                        # TypeScript type definitions
│   └── index.ts
├── hooks/                        # Custom React hooks (future use)
├── utils/                        # Utility functions (future use)
└── lib/                          # Third-party library configs
```

## 🎨 Features

### People Management

- **Employee Grid View**: Responsive card-based layout displaying employee information
- **Search & Filters**: UI-ready search and filter controls
- **Department Tags**: Visual color-coded department indicators
- **Responsive Design**: 4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)

### Timesheet Management

- **Stats Dashboard**: Overview cards showing Total, Regular, Overtime, OT2, Holiday hours, and Anomalies
- **Sortable Table**: Employee timesheet data with sortable columns
- **Date Range Picker**: UI for selecting custom date ranges
- **Export Functionality**: Download button for timesheet data

### Layout & Navigation

- **Dark Sidebar**: Fixed sidebar with collapsible Team Management section
- **Responsive Header**: Timezone, time display, notifications, and profile
- **Active State Highlighting**: Visual feedback for current page
- **Mobile Responsive**: Sidebar hidden on mobile, full layout on desktop

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd design-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Assumptions Made

1. **Data Layer**: Mock data is used for demonstration. In production, this would connect to a REST API or GraphQL endpoint.

2. **Authentication**: No authentication is implemented. The profile avatar and user info are static.

3. **Interactivity**: Search, filters, and action buttons are UI-only. They don't perform actual operations but are styled and positioned for future implementation.

4. **Routing**: The app uses Next.js App Router. The home page (`/`) redirects to `/people` as the default landing page.

5. **Responsive Behavior**: On mobile devices, the sidebar is hidden. A hamburger menu could be added to toggle it.

6. **Timezone**: The header displays "MST" and a static time. In production, this would show real-time data based on user location.

7. **Pagination**: Pagination controls are present but static. They would connect to API pagination in a real application.

8. **Image Hosting**: Employee avatars use placeholder images from `pravatar.cc`. In production, these would be hosted on a CDN or cloud storage.

## 🚀 Deployment (Vercel)

### Quick Deploy

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure build settings
   - Click "Deploy"

### Manual Deploy via CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md - lg)
- **Desktop**: > 1024px (lg+)

## 🎯 Key Design Decisions

1. **Component Modularity**: Components are organized by feature (people, timesheet) for better scalability.

2. **Tailwind CSS**: Used for rapid development and consistent design system without additional CSS files.

3. **TypeScript**: Ensures type safety and better developer experience.

4. **Absolute Imports**: Configured with `@/*` alias for cleaner import statements.

5. **Consistent Spacing**: Uses 8px grid system (Tailwind's default spacing scale).

6. **Accessibility**: Semantic HTML, proper heading hierarchy, and keyboard navigation support.

## 📄 License

This project is created as a frontend assignment submission.

---

**Built with ❤️ using Next.js and Tailwind CSS**
