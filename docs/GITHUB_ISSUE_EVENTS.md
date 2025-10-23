---
name: Update Events Page
about: Update the events page with Hacktoberfest 2025 event lineup
title: 'Update Events Page with 2025 Event Schedule'
labels: 'enhancement, ui/ux, documentation'
assignees: ''
---

## 📝 Issue Description

The Events page needs to be updated to display the complete Hacktoberfest 2025 event schedule with improved visual design and better space utilization.

## 🎯 Goals

1. Display all 5 Hacktoberfest 2025 events (October 5-26)
2. Implement compact, space-efficient card layout
3. Visually differentiate completed vs upcoming events
4. Highlight main events (Awarding Day)
5. Include accurate attendance numbers for past events
6. Provide external links to event pages (Facebook, Cebby, Luma)

## 📋 Requirements

### Event Data to Include

- [x] **Oct 5**: Hacktoberfest Kickoff (170+ attended)
- [x] **Oct 11**: Lisk Pitching Day (60+ attended)
- [x] **Oct 18**: Deployment Day (40+ attended)
- [ ] **Oct 25**: PHPxCebu: Ai Ai Captain! (upcoming)
- [ ] **Oct 26**: Awarding Day (upcoming, main event)

### Visual Design Requirements

1. **Layout**
   - Compact, square-ish cards for better space utilization
   - Responsive grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
   - Consistent spacing and alignment

2. **Status Indicators**
   - Completed events: Muted gray styling with reduced opacity
   - Upcoming events: Vibrant lavender/blue-violet gradients
   - Animated "UPCOMING" badge with pulse effect
   - "COMPLETED" badge for past events

3. **Special Features**
   - Highlight ring border for main events
   - Attendance badges showing participant count
   - Special event badges (e.g., "MAIN EVENT", "SPECIAL EVENT")
   - Interactive hover states on action links

4. **Information Display**
   - Event title with emoji
   - Event date
   - Status badge
   - Attendance count (for completed events)
   - Event description
   - Action buttons linking to external platforms

### Technical Requirements

- Use Next.js App Router pattern
- Client-side component for potential future interactivity
- Tailwind CSS for styling
- Reuse existing Card component
- Maintain consistent color palette (lavender, melrose, blue-violet, etc.)
- Ensure responsive design across all breakpoints

## 🎨 Design Specifications

### Color Palette
- **Completed Events**: Zinc gradients (800/40, 700/20, 800/40), 75% opacity
- **Upcoming Events**: Lavender/melrose/blue-violet gradients, 100% opacity
- **Highlight**: Lavender ring (lavender/50)
- **Badges**: 
  - Completed: Zinc (600/30)
  - Upcoming: Yellow (500/20) with pulse animation
  - Attendance: Green (500/20)
  - Special: Lavender (lavender/20)

### Typography
- **Title**: text-xl, font-bold
- **Description**: text-sm
- **Badges**: text-xs, font-medium
- **Color**: Completed (zinc-300/zinc-400), Upcoming (space-white/space-dust)

### Spacing
- Card padding: p-6
- Badge spacing: mb-5, gap-2
- Description margin: mb-4
- Grid gap: gap-4

## 🔍 Acceptance Criteria

- [ ] All 5 events are displayed with correct information
- [ ] Events are properly styled based on status (completed/upcoming)
- [ ] Main event (Awarding Day) has highlight styling
- [ ] Responsive layout works on all screen sizes
- [ ] All external links are functional
- [ ] Badge animations work smoothly
- [ ] Color contrast meets WCAG AA standards
- [ ] No console errors or warnings
- [ ] Page loads quickly without performance issues

## 📚 Documentation Needed

- [ ] Update or create `docs/EVENTS_PAGE.md` with:
  - Component overview
  - Event data structure
  - How to add new events
  - Styling system explanation
  - Accessibility notes

- [ ] Create PR template with:
  - Changes summary
  - Testing checklist
  - Screenshots
  - Related issue reference

## 🔗 Related Resources

- Hacktoberfest 2025 schedule
- Event pages on Facebook, Cebby, and Luma
- Design system color palette
- Existing Card component implementation

## 💡 Additional Context

This update is crucial for:
- Showcasing the full Hacktoberfest 2025 program
- Promoting upcoming events (Oct 25 & 26)
- Celebrating completed events with attendance metrics
- Providing easy access to event registration/details

The design should prioritize upcoming events while maintaining visibility of completed events for archival purposes.

## 🎓 Nice to Have (Future Enhancements)

- Event filtering (completed/upcoming/all)
- Search functionality
- Calendar integration
- Event categories/tags
- Social sharing buttons
- RSVP tracking integration

---

**Labels**: enhancement, ui/ux, documentation, hacktoberfest
**Priority**: Medium
**Estimated Effort**: 2-3 hours
