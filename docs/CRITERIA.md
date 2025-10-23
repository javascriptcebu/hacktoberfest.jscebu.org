# Criteria Page — Hacktoberfest Cebu

Overview
--------
This page provides two evaluation paths:
- Contribute — contribute to existing open-source projects
- Create — build a new open-source project

Both tables are shown side-by-side on wide screens; selected path receives visual emphasis.

Files
-----
- `app/criteria/page.tsx` — server page entry (exports metadata and renders client)
- `app/criteria/criteria-client.tsx` — client component with tabs, tables, and CTAs
- `app/components/nav.tsx` — add "Criteria" nav item (if not present)
- `app/components/nav-wrapper.tsx` — server wrapper that provides auth context
- `app/components/nav-actions.ts` — server action(s) (e.g., handleSignOut)

Component API
-------------
CriteriaClient props:
- `navWrapper: React.ReactNode` — server-side nav wrapper passed down

Behavior & Interaction
----------------------
- Initial selected path: `contribute`
- Both tables visible side-by-side on large screens; selected panel gets visual focus (opacity + scale)
- Tabs are buttons; clicking changes focus
- Responsive:
  - >= lg: 2-column grid
  - < lg: stacked; tables horizontally scrollable if needed

Accessibility
-------------
- Tabs are implemented as buttons (keyboard focusable)
- Consider adding ARIA attributes if needed (`role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`)

Testing
-------
Manual:
1. pnpm install
2. pnpm run dev
3. Visit http://localhost:3000/criteria
4. Verify both tables visible, click tabs to change focus, test mobile layout

Troubleshooting
---------------
- If you see "inline 'use server' annotated Server Actions" error, ensure server actions are exported from a separate file (e.g., `nav-actions.ts`) and not defined inline in client components.

Changelog
---------
- v1.0 — initial implementation