# Adding Awards to Winning Projects

This guide explains how to manually add awards to winning projects in the Redis database.

## ✨ Dynamic Award Theming

When a project wins an award, the **entire project page transforms** with a custom theme based on the award type! Each award has its own unique color palette that affects:

- 🎨 Page background gradients
- 💫 Title glow effects
- 🔗 Link colors and hover states
- 🌈 Border accents
- ✨ Overall visual atmosphere

## Award Names (Must Match Exactly)

Use these exact award names to ensure proper display with correct icons, colors, and page themes:

- `"Best Overall Project"` - 🏆 Yellow/Gold gradient theme
- `"Best Use of AI"` - 🤖 Blue/Purple gradient theme
- `"Best Easter Egg"` - 🎮 Pink/Red gradient theme
- `"Best Use of Blockchain"` - ⛓️ Green/Teal gradient theme
- `"Best Open Source Contribution"` - 🌟 Green/Lime gradient theme

## How to Add Awards

### Using Upstash Console (Easiest)

1. Go to your Upstash Redis console
2. Find the project key: `submission:<project-id>`
3. Click "Edit" on the JSON value
4. Add an `awards` array field with the award name(s)
5. Save

## Multiple Awards

Projects can win multiple awards! Just add all award names to the `awards` array:

```json
{
  "awards": [
    "Best Overall Project",
    "Best Use of AI"
  ]
}
```

Each award will be displayed in its own celebratory banner with unique colors and styling.

## Visual Result

When awards are added, the project detail page will transform with:

### Award Banners
- ✨ Animated celebratory banners at the top
- 🏆 Trophy icon and "WINNER" badge
- 🎨 Award-specific gradient colors and icons
- ✨ Sparkle animations and shimmer effects
- 📱 Fully responsive on mobile

### Dynamic Page Theming
The **entire page adapts** to the award's color scheme:
- 🌈 **Background**: Subtle gradient overlay matching the award theme
- 💫 **Title**: Glowing effect with award-specific color
- 🔗 **Links**: Repository and demo links styled in award colors
- ⬅️ **Back Button**: Themed hover states
- 🎨 **Visual Cohesion**: All interactive elements harmonize with the award palette

**Theme Colors by Award:**
- 🏆 Best Overall Project → Warm gold/amber tones
- 🤖 Best Use of AI → Cool blue/purple tech vibes
- 🎮 Best Easter Egg → Playful pink/red energy
- ⛓️ Best Use of Blockchain → Modern emerald/teal
- 🌟 Best Open Source → Fresh green/lime celebration

## Removing Awards

To remove an award, edit the `awards` array in Redis and remove the award name, or set `awards` to an empty array `[]`.

## Notes and Data Guidance

- Canonical award names (use these exact strings when possible):
  - `"Best Overall Project"`
  - `"Best Use of AI"`
  - `"Best Easter Egg"` 
  - `"Best Use of Blockchain"`
  - `"Best Open Source Contribution"`

- Data shape: `awards` should be an array of strings on the submission object, e.g. `"awards": ["Best Overall Project"]`.
  - The WinnerBanner component is defensive: it accepts either a `string` or `string[]` and will normalize to an array at runtime. Still, prefer storing an array in Redis to avoid ambiguity.

- TypeScript note: `awards` is now typed as `string[] | undefined` in the codebase. If you pass a plain string, the component will wrap it into an array automatically.

- Behavior notes:
  - The `awards` field is optional — projects without it won't show banners.
  - Award names are case-sensitive; if an award name does not match any configured award, a default purple badge style will be used.
  - The banner only displays on approved projects (`status: "approved"`).

- Best practice: edit the Redis record to include `awards` as an array (using Upstash Console or the provided script) so the site logic remains clear and consistent.
