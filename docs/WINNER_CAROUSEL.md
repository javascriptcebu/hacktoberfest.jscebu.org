# Winner Carousel (Overview)

Summary
- Eye-catching, autoplaying carousel placed on the homepage hero area.
- Shows all hackathon category winners + Best Open Source Contribution winners.
- Each slide includes photo, award, title, short description and CTA.
- Contribution winners link to `/contributions/best-open-source-contribution/[year]`.  
  Project winners link to `/projects/submitted/[slug]`.

How to add / update images
- Add images to: `public/images/winners/<year>/filename.jpg`
- Ensure filenames match the entries in `app/components/winner-carousel.tsx`.
- Use 1200x800 (3:2) or 1920x1080 (16:9) for best results.

Behavior & UX
- Auto-plays every 5s, pauses on user interaction (hover / nav / thumbnail).
- Left / right arrows + thumbnails for manual navigation.
- Theming (color / gradient) per award is driven by the carousel data.
- Fallbacks: placeholder image generated on load error.

Quick testing checklist
- [ ] Carousel auto-plays and cycles through slides.
- [ ] Arrows and thumbnails navigate slides and pause autoplay.
- [ ] CTAs link to correct project slug or contribution year page.
- [ ] Images load from `public/images/winners/`.
- [ ] Themed glow and CTA colors match award color.
- [ ] Responsive layout on mobile / tablet / desktop.

Notes
- Contribution winners are flagged with `isContribution` in the carousel data.
- If you add a new winner, update the `winners` array in `app/components/winner-carousel.tsx`.