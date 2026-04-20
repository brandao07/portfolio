---
title: "Why this portfolio is static on purpose"
description: "A short note on choosing Astro and GitHub Pages for a portfolio that should stay fast, legible, and easy to maintain."
publishDate: 2026-04-20
tags:
  - Astro
  - Portfolio
  - Web performance
---

Most portfolios do not fail because the stack is too simple. They fail because the stack quietly becomes the main project.

This rebuild is intentionally static:

- GitHub Pages is free and predictable.
- Astro keeps the content model clean without forcing a full React app.
- The resulting site is fast by default because it ships mostly HTML and CSS.

For a portfolio and blog, that trade-off is attractive. The content should be the part that grows. The infrastructure should mostly disappear.

There is also a maintenance argument here. A portfolio is not a product with a full backend roadmap. It is a small, durable surface that should survive long periods of low attention without becoming fragile.

That rules out a lot of unnecessary complexity:

- no paid hosting
- no server runtime
- no CMS in v1
- no client-side framework unless a specific feature actually needs it

Static sites still leave room for polish. Good typography, careful spacing, thoughtful motion, and a strong information hierarchy matter more here than dynamic behavior.

That is the point of the rebuild: less machinery, better presentation.

