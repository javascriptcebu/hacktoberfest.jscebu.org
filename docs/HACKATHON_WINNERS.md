# Adding Hackathon Winners to Projects Page

## Overview

This document describes the implementation of the **Hackathon Winners** section on the main Projects page (`app/projects/page.tsx`) that highlights the winners of the Hacktoberfest 2025 hackathon track. Winner cards redirect to project detail pages instead of external GitHub links.

## Summary of Changes

### What Was Added
- ✅ `WinnersCard` component (`app/components/winners-card.tsx`) - Reusable card component for displaying winners
- ✅ Winners section at the top of `/projects` page
- ✅ Automatic winner discovery from approved submitted hackathon projects
- ✅ Winner exclusion from regular hackathon projects listing (no duplication)
- ✅ Placeholder for contribution track winner (to be announced)
- ✅ All winner cards redirect to `/projects/submitted/[id]` (not GitHub)

### Files Created/Modified
- `app/components/winners-card.tsx` - New reusable component for winner cards
- `app/projects/page.tsx` - Added winners section logic and rendering
- `docs/HACKATHON_WINNERS.md` - This documentation file

---

## Component Details

### WinnersCard Component

**Location:** `app/components/winners-card.tsx`

A reusable client component that displays winner project cards with customizable styling.

**Props:**
```typescript
type WinnersCardProps = {
  winner: WinnerProject;      // Project data object
  badge: string;              // Badge text (e.g., "🏆 Best Overall Project")
  badgeColor: string;         // Tailwind class (e.g., "bg-green-900")
  size?: "large" | "medium";  // Card size variant (default: "medium")
};

type WinnerProject = {
  id: string;
  title: string;
  description: string;
  repository: string;
  submittedAt: string;
  status: string;
  year: number;
};
```

**Features:**
- Two size variants: `large` (featured winners) and `medium` (other categories)
- Automatic date formatting with Intl.DateTimeFormat
- Links to `/projects/submitted/[id]` for viewing full project details
- Hover effects for better UX
- Responsive design

**Usage Example:**
```tsx
<WinnersCard
  winner={winners.BestOverall}
  badge="🏆 Best Overall Project"
  badgeColor="bg-green-900"
  size="large"
/>
```

---

## Winners Section Layout

The winners section on `/projects` displays in a 2-column grid:

### Grid Layout:
1. **Best Overall Project** (🏆) - Large card (top left)
2. **Best Use of Blockchain** (⛓️) - Large card (top right)
3. **Best Use of AI** (🤖) - Medium card (bottom left)
4. **Best Easter Egg** (🎉) - Medium card (bottom right)
5. **Best Open Source Contribution** (🌟) - Full-width placeholder card (below grid)

### Badge Colors:
- Best Overall: `bg-green-900` 🏆
- Best Use of Blockchain: `bg-orange-900` ⛓️
- Best Use of AI: `bg-blue-900` 🤖
- Best Easter Egg: `bg-purple-900` 🎉
- Best Open Source Contribution: `bg-green-900` 🌟

---

## How Winners Are Determined

The page automatically searches for winners in approved submitted hackathon projects using **title matching**:

```typescript
const winners = {
  BestOverall: hackathonProjects.find((p) => 
    p.title.toLowerCase().includes("totoo ba to")
  ) || { /* placeholder */ },
  
  BestBlockchain: hackathonProjects.find((p) => 
    p.title.toLowerCase().includes("barangay konek")
  ) || { /* placeholder */ },
  
  BestAI: hackathonProjects.find((p) => 
    p.title.toLowerCase().includes("quiz attack")
  ) || { /* placeholder */ },
  
  BestEasterEgg: hackathonProjects.find((p) => 
    p.title.toLowerCase().includes("bayanihancebu")
  ) || { /* placeholder */ },
};
```

### Search Criteria:
- **Best Overall**: Title contains "totoo ba to"
- **Best Use of Blockchain**: Title contains "barangay konek"
- **Best Use of AI**: Title contains "quiz attack"
- **Best Easter Egg**: Title contains "bayanihancebu"
- **Best Open Source Contribution**: Currently a placeholder ("To Be Announced")

If a winner project is not found in submissions, placeholder data with basic info is displayed.

---

## Winner Exclusion from Regular Listing

Winners are **automatically excluded** from the "Hackathon Projects" section to avoid duplication:

```typescript
const sorted = hackathonProjects.filter(
  (project) =>
    project.id !== winners.BestOverall.id &&
    project.id !== winners.BestAI.id &&
    project.id !== winners.BestEasterEgg.id &&
    project.id !== winners.BestBlockchain.id
);
```

This ensures each winning project appears only once on the page.

---

## How to Update Winners

### Option 1: Update Via Approved Submissions (Recommended ✅)

The easiest way is to ensure the winning projects are:
1. Submitted via the `/submit` page
2. Approved in the admin panel
3. Have titles matching the search criteria above

The page will automatically find and display them.

### Option 2: Update the Code Directly

**To change which projects are featured as winners:**

1. Open `app/projects/page.tsx`
2. Locate the `winners` object (around line 85-125)
3. Update the title matching logic or replace with specific project IDs

**Example - Changing the search term:**
```typescript
BestOverall: hackathonProjects.find((p) => 
  p.title.toLowerCase().includes("new winner title")  // Change this
) || { /* placeholder */ },
```

**Example - Using specific project ID:**
```typescript
BestOverall: hackathonProjects.find((p) => 
  p.id === "specific-submission-id"  // Use exact ID
) || { /* placeholder */ },
```

### Option 3: Update Placeholders

If a winning project hasn't been submitted yet, update the placeholder fallback data:

```typescript
const winners = {
  BestOverall: hackathonProjects.find((p) => 
    p.title.toLowerCase().includes("totoo ba to")
  ) || {
    id: "placeholder-1",
    title: "Your Winner Title Here",          // ← Update
    description: "Winner description here.",   // ← Update
    repository: "https://github.com/winner/repo", // ← Update
    submittedAt: "October 22, 2025",          // ← Update
    status: "approved",
    year: 2025,
  },
};
```

### Option 4: Update Contribution Winner

Once the contribution track winner is announced:

1. Open `app/projects/page.tsx`
2. Find the `contributionWinner` object (around line 134)
3. Replace placeholder with actual winner data:

```typescript
const contributionWinner = {
  id: "actual-contrib-id",  // Real submission ID
  title: "Actual Winner Title",
  description: "Description of the contribution",
  repository: "#",  // Or link to PR
  submittedAt: new Date("2025-10-20").toISOString(),
  status: "approved",
  year: YEAR,
};
```

---

## File Structure

```
app/
├── components/
│   └── winners-card.tsx         ← New reusable component
├── projects/
    └── page.tsx                 ← Main projects page
        ├── Winners Section (lines ~185-215)
        │   ├── Best Overall (WinnersCard large)
        │   ├── Best Blockchain (WinnersCard large)
        │   ├── Best AI (WinnersCard medium)
        │   ├── Best Easter Egg (WinnersCard medium)
        │   └── Best Contribution (placeholder Card)
        ├── Hackathon Projects Section (excluding winners)
        ├── Existing Projects Section
        ├── Community Contributions Section
        └── Featured Projects Section (contentlayer)
```

---

## Testing Checklist

After making changes, verify:

- [ ] **Winners appear at the top** of `/projects` page
- [ ] **Correct badges and colors** display for each winner
- [ ] **No duplicate projects** - winners should NOT appear in "Hackathon Projects" section
- [ ] **Links work correctly** - clicking winner cards navigates to `/projects/submitted/[id]`
- [ ] **Placeholders display** properly if a winner isn't found in submissions
- [ ] **Responsive layout** - looks good on mobile, tablet, and desktop viewports
- [ ] **Hover effects** work smoothly on winner cards
- [ ] **Contribution winner** shows "To Be Announced" placeholder
- [ ] **TypeScript compiles** without errors

---

## Technical Notes

- **Server-side rendered**: Winners data is fetched on the server with `revalidate = 60` (updates every 60 seconds)
- **Client component**: `WinnersCard` is a client component for interactive hover effects
- **Next.js Link**: All cards use `<Link>` for optimized client-side navigation
- **Type safety**: TypeScript types ensure correct prop usage
- **Badge customization**: Each category has distinct colors and emojis for visual hierarchy

---

## Pull Request Template

### PR Title
```
feat: Add Hackathon Winners section with WinnersCard component
```

### PR Description
```markdown
## 📝 Summary

Adds a prominent **Hackathon Winners** section to `/projects` with a new reusable `WinnersCard` component. All winner cards redirect to project detail pages.

## ✨ Changes

### New Component
- ✅ Created `WinnersCard` component (`app/components/winners-card.tsx`)
  - Reusable card with customizable badge, color, and size
  - Two size variants: large and medium
  - Links to `/projects/submitted/[id]` instead of GitHub

### Main Changes
- ✅ Added winners section at top of `/projects` page
- ✅ Automatically discovers winners from approved submissions via title matching
- ✅ Excludes winners from regular hackathon listing (no duplication)
- ✅ Added placeholder for contribution winner (to be announced)

### Winners Displayed
1. 🏆 **Best Overall Project** - "Totoo Ba Ito?"
2. ⛓️ **Best Use of Blockchain** - "Barangay Konek"
3. 🤖 **Best Use of AI** - "Quiz Attack"
4. 🎉 **Best Easter Egg** - "BayanihanCebu"
5. 🌟 **Best Open Source Contribution** - Placeholder

## 🎯 How It Works

- Searches approved hackathon submissions by title matching
- Falls back to placeholders if winners not found
- Automatically excludes winners from regular listing
- All cards link to project detail pages

## 🧪 Testing Steps

1. Navigate to `/projects`
2. Verify winners appear at top with correct badges/colors
3. Confirm NO duplicates in "Hackathon Projects" section
4. Click winner cards → should go to `/projects/submitted/[id]`
5. Test responsive layout (mobile/tablet/desktop)
6. Verify contribution winner shows "To Be Announced"

## 📚 Documentation

See `docs/HACKATHON_WINNERS.md` for:
- Component API reference
- How to update winners
- Testing checklist
- Technical implementation details

---

Closes #[issue-number]
```

---

## Issue Resolution Template

```markdown
## ✅ Completed

The projects page now prominently displays Hacktoberfest 2025 hackathon winners with a new reusable component.

## 🎯 What Was Implemented

### New Component
Created `WinnersCard` component with:
- Customizable badge text and colors
- Two size variants (large/medium)
- Links to project detail pages
- Responsive design with hover effects

### Winners Section
Displays at top of `/projects`:
- 🏆 Best Overall Project - "Totoo Ba Ito?"
- ⛓️ Best Use of Blockchain - "Barangay Konek"
- 🤖 Best Use of AI - "Quiz Attack"
- 🎉 Best Easter Egg - "BayanihanCebu"
- 🌟 Best Open Source Contribution - (To Be Announced)

### Key Features
✅ Automatic winner discovery from submissions  
✅ Fallback placeholders if winners not found  
✅ No duplication in hackathon listing  
✅ Cards link to `/projects/submitted/[id]`  
✅ Responsive layout with distinct badge colors  
✅ Reusable component for future use

## 📋 Verification

- ✅ Winners appear at top of `/projects`
- ✅ No duplicates in "Hackathon Projects" section
- ✅ Links navigate to project detail pages
- ✅ Responsive on all screen sizes
- ✅ TypeScript compiles without errors

## 📚 Documentation

Full documentation: `docs/HACKATHON_WINNERS.md`

## 🔄 Next Steps

- [ ] Update contribution winner when announced
- [ ] Consider adding video/demo URLs to project details

---

Winners are now live on the projects page! 🎉
```

---

## Future Enhancements

Potential improvements for future iterations:

1. **Dynamic Configuration**: Store winner mappings in a config file or database
2. **Admin UI**: Add admin interface to select winners from approved submissions
3. **More Categories**: Add additional award categories as needed
4. **Winner Badges**: Add special badges to winner profiles
5. **Animation**: Add entrance animations for winner cards
6. **Social Sharing**: Add "Share Winner" buttons for social media
7. **Winner Spotlight**: Create dedicated `/winners` page with detailed information
8. **Historical Winners**: Archive past years' winners

---

**Documentation Last Updated:** October 29, 2025
