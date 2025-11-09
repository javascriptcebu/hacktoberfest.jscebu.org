# PR: Update homepage & footer, add 2025 sponsors, hide registration/sponsor CTA

Branch: yankinyurii123/cmnty-40-update-homepage-sponsors-page

Summary
- Add footer to pages that previously did not render it (fix missing footer renders).
- Hide 'Become a Sponsor' and 'Register' CTAs on the homepage because the event is over.
- Add 2025 sponsors list to the homepage sponsors section.
- Small layout and CSS fixes: prevent accidental horizontal scrollbar (global overflow-x fix) and adjust a few `w-screen` usages to `w-full` where applicable.

Files changed (high level)
- `app/page.tsx` — hide sponsor/register CTAs; add 2025 sponsors content; keep footer present.
- `global.css` — added `html, body, #__next { overflow-x: hidden; }` to prevent tiny horizontal scrollbars caused by `w-screen` / 100vw usage.
- other pages — fixed footer import and ensured footer rendered at bottom.

Why
- The homepage previously asked for sponsorships and registrations even after the event concluded; hiding those CTAs prevents user confusion and reduces stale content.
- Footer missing on some pages created inconsistent experience; adding it standardizes the footer across pages.
- The horizontal scrollbar was caused by slight viewport width differences when using `w-screen` (100vw) plus browser scrollbar; a harmless global overflow-x rule removes the artefact.

How to review
1. Checkout branch:

   git checkout -b feat/ui/home-2025-sponsors

2. Run locally (PowerShell):

   pnpm install; pnpm dev

3. In the browser (localhost:3000):
   - Visit the homepage: verify "Become a Sponsor" and registration CTAs are not visible.
   - Confirm the 2025 sponsors appear in the sponsors section and their card gradients display correctly.
   - Verify there is no horizontal scrollbar at common viewport widths (mobile, tablet, desktop). If you still see one, try a hard reload.

4. Visit project pages (e.g. `/projects/2024`): confirm the footer renders at the bottom of the page.

Rollback plan
- If anything regressively breaks, revert the branch: `git checkout main; git revert <merge-commit>` or `git reset --hard <main-commit>` depending on merge strategy.
- For the global `overflow-x: hidden` change, revert by removing that rule from `global.css` if you see unexpected side-effects.

Notes / Known issues
- The global `overflow-x: hidden` is a pragmatic quick fix to prevent the tiny horizontal scrollbar caused by `w-screen`/100vw. If you prefer precision, we can replace remaining `w-screen` usages with `w-full` and adjust layout to avoid global overflow rules.
- The admin DELETE endpoints assume the same Redis key patterns (`submission:{id}`, `contribution:{id}`) and list names used elsewhere in the project.

Changelog entry (short)
- UI: Hide sponsor/registration CTAs after event; add 2025 sponsors to homepage.
- Fix: Ensure footer renders on pages that previously lacked it.


