# Sponsor Page Documentation

## Overview

The Sponsor page (`/sponsor`) showcases all sponsors and community partners for Cebu Hacktoberfest 2025. Sponsors are organized by tier with visual hierarchy to highlight different levels of support.

## Features

### Tier System
- **Gold Sponsors**: Premium tier with largest cards and prominent placement
- **Silver Sponsors**: Mid-tier with medium-sized cards
- **Community Partners**: Supporting organizations with compact cards

### Visual Design
- **Tier-Based Styling**: Each tier has distinct card sizes and visual prominence
  - Gold: Largest cards (200x100px logos) with lavender gradient borders
  - Silver: Medium cards (150x80px logos) with blue-violet gradient borders
  - Community: Compact cards (120x60px logos) with melrose gradient borders
- **Responsive Grid Layout**: 
  - Gold: 3 columns on desktop, 1-2 on mobile
  - Silver: 4 columns on desktop, 2 on mobile
  - Community: 5 columns on desktop, 2-3 on mobile
- **Interactive Cards**: Hover effects with scale and glow transitions
- **Facebook Integration**: Click any sponsor card to visit their Facebook page

### Sponsor Information Display

Each sponsor card shows:
1. **Logo Image**: Actual sponsor logo (optimized with Next.js Image component)
2. **Sponsor Name**: Company or organization name
3. **External Link**: Facebook page link (optional)

## Current Sponsors (Total: 23)

### Gold Sponsors (7)
1. **Yello Hotel** - `/images/sponsor-logo/Yello-Hotel-Logo.png`
2. **Lisk** - `/images/sponsor-logo/lisk-wordmark-b.svg`
3. **Innodata Knowledge Services, Inc.** - `/images/sponsor-logo/Innodatalogo.webp`
4. **LegalMatch Philippines** - `/images/sponsor-logo/LegalMatch.svg`
5. **The Company Philippines** - `/images/sponsor-logo/thecompany.png`
6. **lyf Cebu City** - `/images/sponsor-logo/lyfCebuCitylogo.jpg`
7. **CoDev Philippines** - `/images/sponsor-logo/CoDevLogoFull.png`

### Silver Sponsors (2)
8. **VBP** - `/images/sponsor-logo/VBP-DarkGreen.svg`
9. **NEC Philippines** - `/images/sponsor-logo/NEC Philippines.png`

### Community Partners (14)
10. **JavaScript Cebu** - `/images/sponsor-logo/jscebu.png`
11. **PHPXCEBU** - `/images/sponsor-logo/PHPXCEBUlogo.jpg`
12. **ETHPH** - `/images/sponsor-logo/ETHPHLogo.png`
13. **PizzaPy** - `/images/sponsor-logo/pizzapyhorizontal-primary-white.png`
14. **Laravel Cebu** - `/images/sponsor-logo/Laravel Cebu.png`
15. **Cebu Tech Communities** - `/images/sponsor-logo/ctc.png`
16. **AWS User Group Cebu** - `/images/sponsor-logo/AWSUGLogo.png`
17. **CEBUXD** - `/images/sponsor-logo/CebUXD Logo New.png`
18. **CeGNULUG** - `/images/sponsor-logo/CeGNULUG.png`
19. **DEVCON Cebu** - `/images/sponsor-logo/DEVCON Cebu - White Horizontal.png`
20. **UPCSG** - `/images/sponsor-logo/UPCSG_Logo.png`
21. **Juantronics** - `/images/sponsor-logo/juantronicsLogo.jpg`
22. **START DOST** - `/images/sponsor-logo/startDOSTLogo.png`
23. **DOST Region VII** - `/images/sponsor-logo/DOST_seal.svg.png`

## Technical Implementation

### Component Structure
```typescript
type Sponsor = {
  id: number;
  name: string;
  logo: string;        // Path to logo image in public/images/sponsor-logo/
  facebook?: string;   // Optional Facebook page URL
  tier: "gold" | "silver" | "community";
};
```

### File Location
- Main component: `app/sponsor/page.tsx`
- Logo assets: `public/images/sponsor-logo/`

### Dependencies
- Next.js Image component for optimized image loading
- React Icons (Lucide) for UI elements
- Tailwind CSS for styling
- ScrollAnimation component for smooth reveals

## Color Palette

### Tier Colors
- **Gold Sponsors**: Lavender gradient (`from-lavender-400 to-lavender-600`)
- **Silver Sponsors**: Blue-violet gradient (`from-blue-violet-400 to-blue-violet-600`)
- **Community Partners**: Melrose gradient (`from-melrose-400 to-melrose-600`)

### Interactive States
- Hover: Scale transform (105%) with enhanced glow shadow
- Focus: Visible focus ring for keyboard navigation

## Responsive Breakpoints
- **Mobile** (< 640px): Single column for Gold, 2 columns for Silver/Community
- **Tablet** (640px - 1024px): 2 columns for Gold, 3 for Silver, 4 for Community
- **Desktop** (>= 1024px): 3 columns for Gold, 4 for Silver, 5 for Community

## Adding New Sponsors

To add a new sponsor:

1. Add logo to `public/images/sponsor-logo/`
2. Update the `sponsors` array in `app/sponsor/page.tsx`:
```typescript
{
  id: 24,
  name: "New Sponsor Name",
  logo: "/images/sponsor-logo/new-sponsor-logo.png",
  facebook: "https://www.facebook.com/newsponsor",
  tier: "gold" // or "silver" or "community"
}
```

## Image Guidelines

### Logo Requirements
- **Format**: PNG, JPG, SVG, or WEBP
- **Background**: Transparent or solid color (will be displayed on dark gradient background)
- **Resolution**: High-resolution for best quality
- **Aspect Ratio**: Logos will maintain aspect ratio with `object-contain`

### Size Recommendations
- Gold sponsors: Minimum 400x200px
- Silver sponsors: Minimum 300x150px
- Community partners: Minimum 240x120px

## Accessibility

- All logos have descriptive alt text using sponsor name
- Interactive cards are keyboard navigable
- Focus states clearly visible
- External links open in new tabs with proper `rel` attributes
- Semantic HTML structure with proper heading hierarchy

## Performance Optimization

- Next.js Image component provides automatic:
  - Lazy loading of images
  - Responsive image sizes
  - Modern format conversion (WebP)
  - Image optimization and compression
- Images only load as user scrolls to them

## Future Enhancements

- [ ] Add sponsor tier descriptions/benefits
- [ ] Include sponsor testimonials
- [ ] Add filtering by tier
- [ ] Implement search functionality
- [ ] Add "Become a Sponsor" CTA section
- [ ] Include sponsor spotlight section
- [ ] Add animation on scroll for sponsor cards
- [ ] Track click analytics for sponsor links

## Related Pages
- Home page: Features sponsor logos in footer
- Events page: Mentions sponsors in event descriptions
- Contact page: Includes sponsorship inquiry form

## Maintenance Notes

- Update Facebook links when sponsors change their pages
- Verify all logo files exist before deployment
- Test image loading on production
- Monitor broken links quarterly
- Update tier assignments as sponsorship levels change