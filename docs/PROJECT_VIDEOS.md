# Video URLs for Hacktoberfest Projects

## Overview

Added static video URL mapping to display project demo videos on project detail pages.

## Implementation

### Static Mapping

Videos are mapped by project title in `app/projects/submitted/[id]/page.tsx`:

```typescript
const PROJECT_VIDEO_MAPPING: { [key: string]: string } = {
  "bayanihancebu": "https://youtu.be/riHq0HgD0iA",
  "barangay konek": "https://youtu.be/qRyh4UJRBvI",
  "the_adaptifork": "https://youtu.be/alLE0aPBeuc",
  "sabot": "https://youtu.be/SOUhmg-Kqlo",
  "finding dormy": "https://youtu.be/QJYk7eg1DGE",
  "trustchain": "https://youtu.be/hPOnchVn22I",
  "totoo ba ito": "https://youtu.be/CbO9pHo4uVQ",
  "marshal": "https://youtu.be/Qo1ETgeX6QY",
};
```

### How It Works

1. When a project page loads, it checks:
   - First: `project.videoUrl` from database (if exists)
   - Second: Static mapping by project title

2. The `getVideoUrlForProject()` function:
   - Normalizes project title (lowercase, trim)
   - Checks for exact match
   - Checks for partial match (title contains key or key contains title)

3. YouTube URLs are converted to embed format automatically

### Display

- Video appears below "Project Links" section
- Uses responsive 16:9 aspect ratio container
- Embedded with YouTube iframe
- Only shows if video URL is found

## Files Changed

- ✅ `app/projects/utils.ts` - Added `videoUrl?: string` to interface
- ✅ `app/projects/submitted/[id]/page.tsx` - Added mapping and display logic
- ✅ `app/api/admin/update-video/route.ts` - API for future dynamic updates

## Video Mapping

| Project Title | Video URL |
|--------------|-----------|
| BayanihanCebu | https://youtu.be/riHq0HgD0iA |
| Barangay Konek | https://youtu.be/qRyh4UJRBvI |
| The_AdaptiFork | https://youtu.be/alLE0aPBeuc |
| Sabot | https://youtu.be/SOUhmg-Kqlo |
| Finding Dormy | https://youtu.be/QJYk7eg1DGE |
| TrustChain | https://youtu.be/hPOnchVn22I |
| Totoo Ba Ito? | https://youtu.be/CbO9pHo4uVQ |
| Marshal | https://youtu.be/Qo1ETgeX6QY |

## Adding New Videos

To add more videos, edit the `PROJECT_VIDEO_MAPPING` object in:
`app/projects/submitted/[id]/page.tsx`

Example:
```typescript
const PROJECT_VIDEO_MAPPING: { [key: string]: string } = {
  // ... existing mappings
  "new project name": "https://youtu.be/VIDEO_ID",
};
```

## Future Enhancement

The API endpoint `/api/admin/update-video` is available for migrating to dynamic video storage in the database when needed.

---

**Branch:** `yankinyurii123/cmnty-35-add-videos-for-each-hacktoberfest-projects`
