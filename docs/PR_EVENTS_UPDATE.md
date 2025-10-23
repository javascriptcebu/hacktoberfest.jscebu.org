# Pull Request: Update Events Page for Hacktoberfest 2025

## 📋 Description

This PR updates the Events page to display the complete lineup of Cebu Hacktoberfest 2025 events with improved visual design and user experience.

## 🎯 Changes Made

### Events Page Updates (`app/events/page.tsx`)

1. **Updated Event Lineup**
   - Added all 5 Hacktoberfest 2025 events (Oct 5-26)
   - Included accurate attendance numbers for completed events
   - Added appropriate status badges and highlighting

2. **Visual Improvements**
   - Implemented compact, square-ish card design for better space utilization
   - Added status-based styling (completed vs upcoming events)
   - Implemented gradient backgrounds with appropriate opacity
   - Added pulsing animation for upcoming event badges
   - Special highlight ring for main events

3. **Event Information**
   - ✅ Event 1: Hacktoberfest Kickoff (Oct 5) - 170+ attended
   - ✅ Event 2: Lisk Pitching Day (Oct 11) - 60+ attended
   - ✅ Event 3: Deployment Day (Oct 18) - 40+ attended
   - 📅 Event 4: PHPxCebu AI Event (Oct 25) - Upcoming
   - 📅 Event 5: Awarding Day (Oct 26) - Upcoming (highlighted)

4. **Responsive Design**
   - Mobile: Single column layout
   - Tablet: 2-column grid
   - Desktop: 3-column grid
   - Consistent spacing and alignment across breakpoints

## 🎨 Visual Design

### Completed Events
- Muted gray gradient background
- Reduced opacity (75%)
- Gray "COMPLETED" badge
- Subdued text colors
- Green attendance badges

### Upcoming Events
- Vibrant lavender/blue-violet gradients
- Full opacity for emphasis
- Yellow pulsing "UPCOMING" badge
- Bright text colors
- Optional special event badges

### Special Features
- Main event (Awarding Day) has lavender ring border
- Interactive hover states on all links
- Smooth transitions between states
- Proper visual hierarchy

## 📦 Files Changed

- `app/events/page.tsx` - Complete events page overhaul
- `docs/EVENTS_PAGE.md` - New documentation file

## 🧪 Testing Checklist

- [ ] Events page loads without errors
- [ ] All 5 events are displayed correctly
- [ ] Completed events show muted styling
- [ ] Upcoming events show vibrant styling
- [ ] Awarding Day has highlight ring border
- [ ] Badge animations work (pulse effect on upcoming)
- [ ] All external links work correctly
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] Hover states are visible and functional
- [ ] Color contrast meets accessibility standards
- [ ] Page metadata is correct

## 📱 Screenshots

<!-- Add screenshots showing:
1. Desktop view (3-column grid)
2. Tablet view (2-column grid)
3. Mobile view (single column)
4. Completed event card styling
5. Upcoming event card styling with animation
6. Highlighted event (Awarding Day)
-->

## 🔗 Related Issues

Closes #[ISSUE_NUMBER]

## 🎓 Additional Context

This update is part of the Hacktoberfest 2025 website improvements. The events page now serves as a comprehensive schedule showcasing:
- Past events with attendance metrics
- Upcoming events with clear call-to-action
- Integration with external platforms (Facebook, Cebby, Luma)

The design prioritizes:
- Space efficiency (compact cards)
- Visual clarity (status-based styling)
- Engagement (prominent upcoming events)
- Accessibility (proper contrast and semantic markup)

## 📚 Documentation

Complete documentation available in `docs/EVENTS_PAGE.md` including:
- Component structure
- Styling system
- How to add new events
- Accessibility considerations
- Future enhancement ideas

## ✅ PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation added/updated
- [ ] No console errors or warnings
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Accessibility verified
- [ ] External links verified

---

**Type**: Feature Enhancement
**Priority**: Medium
**Breaking Changes**: None
