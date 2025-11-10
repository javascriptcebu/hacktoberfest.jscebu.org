# Winner Photos Feature

## Overview
Display team photos for award-winning projects with award-themed styling. Includes a dedicated page for Best Open Source Contribution winners.

## Features Added

### 1. Winner Photo Support for Projects
- Added `winnerPhoto?: string` field to `SubmittedProject` interface
- Displays team/winner photo on project detail pages for awarded projects
- Automatic award theming applied to photo borders and containers

### 2. Best Open Source Contribution Page
- Dedicated page at `/contributions/best-open-source-contribution`
- Displays both winners with photos, contributions, and impact descriptions
- Full award theming with dynamic colors
- Includes "What Makes a Great Contribution" section

## How to Add Winner Photos

### For Hackathon Projects (via Admin Panel or API)

**Method 1: Upstash Console**
1. Go to Upstash Console → Your Redis database
2. Find the project key: `submission:{id}`
3. Add the `winnerPhoto` field with image URL:
```json
{
  "id": "...",
  "title": "Project Name",
  "awards": ["Best Overall Project"],
  "winnerPhoto": "https://example.com/team-photo.jpg"
}
```

**Method 2: API Update** (if you have admin access)
```bash
curl -X PATCH https://your-domain.com/api/admin/submissions \
  -H "Content-Type: application/json" \
  -d '{
    "submissionId": "project-id-here",
    "winnerPhoto": "https://example.com/team-photo.jpg"
  }'
```

**Method 3: Edit Project Modal** (for project owners)
- Visit `/my-projects`
- Click "Edit" on your project
- Add `winnerPhoto` field in the form (admin feature, needs UI update)

### For Best Open Source Contribution Winners

Edit `app/contributions/best-open-source-contribution/page.tsx`:

```typescript
const winners = [
  {
    name: "Neil Kalman Alfeche",
    github: "neilveil",
    photo: "/images/winners/neil-kalman-alfeche.jpg", // ← Update this
    // ... other fields
  },
  {
    name: "Dorell James",
    github: "dorelljames",
    photo: "/images/winners/dorell-james.jpg", // ← Update this
    // ... other fields
  },
];
```

## Image Guidelines

### Recommended Specs
- **Format**: JPG, PNG, or WebP
- **Size**: Max 2MB per image
- **Dimensions**: 
  - Hackathon projects: 1200x800px (3:2 aspect ratio)
  - Contribution winners: 800x800px (1:1 aspect ratio) or 1200x675px (16:9)
- **Quality**: 80-90% JPEG quality
- **Content**: Team photo, professional shot, well-lit

### Hosting Options

**Option 1: Public folder** (for static images)
```
public/
  images/
    winners/
      project-slug-team.jpg
      neil-kalman-alfeche.jpg
      dorell-james.jpg
```
Reference: `/images/winners/filename.jpg`

**Option 2: Cloud storage** (recommended for dynamic content)
- Cloudinary
- AWS S3
- Imgur
- GitHub raw URLs
Reference: Full URL `https://...`

## Styling & Theming

### Award-Themed Photo Container
The winner photo automatically receives:
- Border color matching the award theme (`var(--award-primary)`)
- Glowing effect (`award-glow` animation)
- Gradient backdrop using award colors
- Responsive sizing and aspect ratio

### Theme Colors by Award
- **Best Overall Project**: Gold (#fbbf24)
- **Best Use of AI**: Purple (#c084fc)
- **Most Fun / Best Easter Egg**: Pink (#f472b6)
- **Best Open Source Contribution**: Blue (#60a5fa)
- **Best Innovation**: Teal (#14b8a6)

## File Structure

```
app/
  projects/
    utils.ts (added winnerPhoto field)
    submitted/
      [slug]/
        page.tsx (displays winner photo if present)
  contributions/
    best-open-source-contribution/
      page.tsx (new dedicated page)
  components/
    winner-banner.tsx (used for award display)
    award-theme-wrapper.tsx (applies theming)
    themed-back-button.tsx (themed navigation)

public/
  images/
    winners/ (create this folder)
      [project-photos].jpg
```

## Usage Examples

### Adding Photo to Existing Winner
```typescript
// In Upstash or via API
{
  "id": "abc-123",
  "title": "Totoo Ba Ito?",
  "awards": ["Best Overall Project"],
  "winnerPhoto": "/images/winners/totoo-ba-ito-team.jpg" // ← Add this
}
```

### Updating Contribution Winners
```typescript
// In app/contributions/best-open-source-contribution/page.tsx
const winners = [
  {
    name: "New Winner Name",
    github: "github-username",
    contribution: "project-name",
    prUrl: "https://github.com/...",
    prTitle: "Feature Description",
    description: "Impact description...",
    submittedAt: "2024-10-15",
    photo: "/images/winners/new-winner.jpg", // ← Update photo
  },
];
```

## Testing Checklist

- [ ] Winner photo displays on project slug pages (`/projects/submitted/[slug]`)
- [ ] Photo has correct award theming (border color, glow effect)
- [ ] Photo is responsive on mobile/tablet/desktop
- [ ] Best Open Source Contribution page loads (`/contributions/best-open-source-contribution`)
- [ ] Both winners display with correct photos and info
- [ ] Award theme colors apply correctly to the contribution page
- [ ] Images are optimized and load quickly
- [ ] No broken image links or 404 errors

## Troubleshooting

**Photo not displaying:**
- Check image URL is correct and accessible
- Verify `winnerPhoto` field is properly saved in Redis
- Check browser console for image loading errors
- Ensure image file exists in `public/images/winners/` if using local path

**Theme colors not applying:**
- Verify project has `awards` array populated
- Check `AwardThemeWrapper` is wrapping the page component
- Ensure CSS custom properties are defined in `global.css`

**Contribution page 404:**
- Restart dev server to pick up new route
- Verify file is at correct path: `app/contributions/best-open-source-contribution/page.tsx`
- Check Next.js routing cache is cleared

## Future Enhancements

- [ ] Add photo upload UI in project submission form
- [ ] Image optimization and auto-resizing
- [ ] Gallery view for all winner photos
- [ ] Photo attribution and credits
- [ ] Social media sharing with winner photos in OG images

## Notes

- Winner photos are optional - projects without photos will display normally
- Photos should be properly licensed/permitted for display
- Consider adding photo credits or attributions if photos are from external sources
- Use CDN or optimized hosting for best performance
