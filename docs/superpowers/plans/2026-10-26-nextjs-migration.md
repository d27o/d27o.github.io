# Next.js static portfolio migration

**Goal:** Replace Jekyll with a typed Next.js App Router static export, retaining the reviewed portfolio content and published URLs.

**Architecture:** Server Components for pages, one small client navigation component, local Markdown posts, shared site settings and metadata. Next.js emits `out/`; no runtime server or publication workflow is required.

**Constraints:** Use Software Engineer, preserve Москва, keep commercial cases anonymous and omit internal metrics. Do not merge, deploy, change Pages settings, or add deployment permissions. Retain `/`, `/about/`, `/contact/`, `/blog/`, `/boevaya-classica/`, `/grant-ib/`, `/post-number-0/`, `/bootstrap-5-alpha/`, `/feed.xml`, and `/404.html`.

- [x] Add export smoke tests covering routes, metadata, navigation/assets, RSS, role and location; run and observe missing-export failure.
- [x] Add pinned dependencies, static-export configuration, shared settings, layouts/pages, Markdown loading and feed generation; migrate public assets and remove Jekyll files.
- [x] Build and run export tests and TypeScript checks. Verify browser layout and mobile navigation against the static output.
- [x] Update draft PR #17 with the migration and build-only CI; verify master remains unchanged. Serve the built export locally and leave it open for review.

**Review focus:** Direct deep links must work on a static server; metadata must use production canonical URLs; no image optimization endpoint may be required; old Markdown URLs and media paths must remain valid; no deployment can run from this branch.

**Verification:** Next.js 16.4.3 production build, TypeScript, and six export checks pass on Node 24. Static HTTP preview returns 200 for pages and 404 for unknown URLs. Browser checks passed for desktop, mobile navigation, blog navigation, and no JavaScript errors. Independent review found one heading-fragment regression; exact legacy IDs are restored and covered by a failing-then-passing regression test.
