# Events Page Documentation

## Overview

The Events page (`/events`) displays all Cebu Hacktoberfest 2025 events in a visually appealing grid layout. It showcases both completed and upcoming events with distinct styling to differentiate between event states.

## Features

### Visual Design
- **Compact Grid Layout**: Responsive grid that adapts to different screen sizes
  - Mobile: 1 column
  - Tablet (md): 2 columns
  - Desktop (lg): 3 columns
- **Status-Based Styling**: Events are visually differentiated by completion status
  - Completed events: Muted gray gradient with reduced opacity
  - Upcoming events: Vibrant lavender/blue-violet gradient with full brightness
- **Special Event Highlighting**: Events marked as `highlight: true` get a lavender ring border
- **Animated Badges**: Upcoming events feature a pulsing "UPCOMING" badge

### Event Information Display

Each event card shows:
1. **Status Badge**: "COMPLETED" or "UPCOMING" with appropriate styling
2. **Attendance Badge**: Shows attendee count for completed events
3. **Special Event Badge**: Optional badge for featured events (e.g., "MAIN EVENT", "SPECIAL EVENT")
4. **Title**: Event name with emoji
5. **Description**: Brief overview of the event
6. **Action Links**: Interactive buttons linking to external resources (Facebook, Cebby, Luma)

### Current Events (October 2025)

1. **🚀 Cebu Hacktoberfest 2025 Kickoff** (Oct 5) - COMPLETED
   - 170+ attendees
   - Kickoff event introducing open source contribution

2. **💡 Lisk Pitching Day** (Oct 11) - COMPLETED
   - 60+ attendees
   - Project pitching and feedback session

3. **🚀 Deployment Day** (Oct 18) - COMPLETED
   - 40+ attendees
   - Deployment and CI/CD workshop

4. **🐘 PHPxCebu: Ai Ai Captain!** (Oct 25) - UPCOMING
   - Special PHP community event
   - AI integration in PHP applications

5. **🏆 Cebu Hacktoberfest Awarding Day** (Oct 26) - UPCOMING
   - Main event with highlight styling
   - Demo Day and awards ceremony

## File Structure

```
app/events/
  └── page.tsx          # Main events page component
```

## Technical Implementation

### Component Structure

```typescript
export default function EventsPage() {
  const events = [
    {
      id: number,
      title: string,
      date: string,
      status: "completed" | "upcoming",
      attendees?: string,
      badge?: string,
      highlight?: boolean,
      description: string,
      links: Array<{ label: string, url: string }>
    }
  ];

  return (
    // Grid layout with event cards
  );
}
```

### Styling System

**Color Palette Used:**
- Lavender (`lavender`): Primary accent for upcoming events
- Melrose (`melrose`): Secondary accent
- Blue-Violet (`blue-violet`): Gradient accent
- Zinc shades: Completed event styling
- Yellow: Date badge and highlights
- Green: Attendance badges

**Responsive Breakpoints:**
- Base: Mobile-first single column
- `md:grid-cols-2`: Tablet (768px+)
- `lg:grid-cols-3`: Desktop (1024px+)

### State Management

This is a client-side component (`"use client"`) that renders static event data. No dynamic filtering or state management is currently implemented.

## Adding New Events

To add a new event, edit `app/events/page.tsx` and add an object to the `events` array:

```typescript
{
  id: 6,
  title: "🎯 Your Event Title",
  date: "Month Day, Year",
  status: "upcoming", // or "completed"
  attendees: "100+ Attended", // optional, for completed events
  badge: "SPECIAL EVENT", // optional
  highlight: true, // optional, adds ring border
  description: "Event description goes here...",
  links: [
    { label: "RSVP Link", url: "https://..." },
    { label: "Facebook Event", url: "https://..." }
  ]
}
```

## Accessibility Considerations

- **Semantic HTML**: Uses proper heading hierarchy
- **Color Contrast**: Maintains WCAG AA standards
- **Interactive Elements**: All buttons and links have proper hover states
- **Focus States**: Keyboard navigation supported
- **External Links**: Opens in new tabs with appropriate attributes

## Performance

- **Client Component**: Renders on client for potential future interactivity
- **Static Data**: Events are hardcoded for optimal performance
- **Image-Free**: No images to load, only emoji and text
- **Optimized CSS**: Tailwind utilities for minimal CSS bundle

## Future Enhancements

Potential improvements:
- Event filtering by status (completed/upcoming)
- Search functionality
- Calendar integration
- Dynamic event loading from CMS
- Past events archive
- Event categories/tags
- RSVP tracking
- Social sharing features

## Dependencies

- `next`: Next.js framework
- `react`: React library
- `../components/card`: Reusable Card component
- `../components/nav-wrapper`: Navigation wrapper
- `next/link`: Next.js Link component
- Tailwind CSS for styling

## Related Pages

- `/` - Home page with event highlights
- `/criteria` - Judging criteria page
- `/projects` - Projects showcase
- `/volunteer` - Volunteer registration
- `/contribute` - Contribution form
