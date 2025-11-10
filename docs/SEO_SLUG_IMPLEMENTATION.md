# SEO-Friendly Slug Implementation for Submitted Projects

## Summary
Converted submitted project URLs from ID-based
(`/projects/submitted/<uuid>`) to SEO-friendly slug-based
(`/projects/submitted/<project-name>`) URLs. This improves SEO,
shareability, and UX while preserving backwards compatibility.

## What changed (high level)
- Added slug generation and lookup utilities.
- New dynamic route: `app/projects/submitted/[slug]/page.tsx`.
- Project cards, winner cards and "my projects" links updated to use slug.
- `app/projects/utils.ts` now exposes:
  - `generateSlug(title: string): string`
  - `getSubmittedProjectBySlug(slug: string)`
  - `getApprovedSubmittedProjects()` (now injects `slug` when missing)
- Docs updated with migration guidance and troubleshooting tips.

## Files changed
- app/projects/utils.ts (slug utilities; lazy Redis init)
- app/projects/submitted/[slug]/page.tsx (slug routing + metadata)
- app/projects/submitted-project-card.tsx (link updates)
- app/components/winners-card.tsx (link updates)
- app/my-projects/client.tsx (link updates)
- docs/SEO_SLUG_IMPLEMENTATION.md (this file)

## Implementation details

### Slug generation
- Lowercase, remove special chars, collapse spaces to hyphens, trim edges.
- Example: `Totoo Ba Ito?` → `totoo-ba-ito`.

### Lookup strategy
- Try direct ID key lookup first (`submission:{id}`).
- If not found, treat param as slug and search approved submissions:
  - Generate slug for each submission and compare.
  - Return first match.
- Backwards compatibility: old ID-based URLs continue to resolve.

### Performance & caching
- ID lookup: O(1).
- Slug lookup: O(n) scan of approved projects — acceptable for small dataset.
- Recommended: store slug→id mapping in Redis for O(1) slug lookups.

### Recommended Redis migration (optional)
Run a one-time script to populate slug mappings:
```ts
// scripts/seed-slugs.ts (example)
import { Redis } from "@upstash/redis";
import { generateSlug } from "../app/projects/utils";

const r = Redis.fromEnv();

const keys = await r.keys("submission:*");
for (const key of keys) {
  const id = key.split(":")[1];
  const project = await r.get(key);
  const slug = generateSlug(project.title || project.name || id);
  await r.set(`submission-slug:${slug}`, id);
  // optionally update submission object to include slug
  project.slug = slug;
  await r.set(key, project);
}
```

## Troubleshooting & gotchas
- Environment variables must be available to server processes (restart dev server after changes).
- Do NOT initialize Redis at module top-level in files imported by client components.
  Use lazy init pattern:
  ```ts
  let redis: Redis | null = null;
  function getRedis() {
    if (!redis) redis = Redis.fromEnv();
    return redis;
  }
  ```
- Ensure old dynamic route folder `[id]` is removed to avoid Next.js route conflicts.
- On Windows, fix CRLF issues in MDX frontmatter (`published: true`) — convert to LF.

## Testing checklist
- [ ] Visit `/projects` and click project cards → new slug URLs open.
- [ ] Old ID-based URLs still resolve (redirect or direct lookup).
- [ ] OpenGraph metadata uses the slug URL.
- [ ] Projects with special characters produce safe slugs.
- [ ] No hydration errors / no server-only env usage in client bundles.
- [ ] If you created slug mappings in Redis, confirm O(1) slug lookups.

## Commit message (suggested)
```
feat(seo): add slug-based URLs for submitted projects

- Add slug utilities and lookup to projects/utils.ts
- Replace id-based dynamic route with [slug]
- Update project/winner/my-projects links
- Maintain backwards compatibility with id URLs
```

## Notes
- Consider generating unique slugs for duplicate titles (append `-2`, `-3` etc.).
- If dataset grows large, add Redis `submission-slug:{slug}` → id mapping for fast lookup.