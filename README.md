# metal-landing-page

A responsive Next.js App Router landing page for agentic AI in manufacturing and construction.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `npm run build` creates a static export in `out/`. `npm run typecheck` checks TypeScript.

`out/preview.html` is a local browser preview of the finished build, with relative asset paths and an embedded stylesheet. Open it directly without a server. A future `npm run build` replaces the `out/` directory; run `npm run preview:file` to regenerate the file preview.

The initial production build and TypeScript checks passed. Desktop layout and industry switching were reviewed in Chrome. Publishing could not complete because this environment cannot resolve `git.chatgpt-team.site`; the registered private Site identity is retained in `.openai/hosting.json` for a future publishing attempt. The environment also blocks listening on localhost, so use the file preview here or run `npm run dev` in your own terminal.

Fonts are self-hosted Geist Sans and Geist Mono, with the SIL Open Font License included in `public/fonts/LICENSE.txt`.

The page includes an industry switcher, accessible FAQ accordions, anchor navigation, and email links to info@metal3d.io. Contact links open the visitor's email app; no form backend is needed.

Edit copy in `app/page.tsx` and `app/industries.tsx`, colors and layouts in `app/globals.css`, and metadata in `app/layout.tsx`.

The use cases are proposed positioning copy and should be checked against actual product capabilities before a public launch. The hero is an original AI-generated illustration, not a photograph of a Metal3D installation. Its generation brief was a photoreal orange industrial robotic arm welding brushed structural steel, in a dark graphite factory with muted surroundings and left-side negative space, without text or logos. It was generated with the built-in ImageGen tool and saved at `public/industrial-hero.webp`.

Build configuration follows [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports).
