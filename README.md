# MindMap Maker (Next.js + Tailwind)

A simple website to create mindmaps inspired by the provided mockups.

- Next.js App Router
- Tailwind CSS (dark theme)
- Editor built with @xyflow/react (React Flow)
- Templates that prefill the editor

## Quick start

1. Install dependencies
2. Run the dev server

```bash
npm install
npm run dev
```

Visit http://localhost:3000

- Home: landing, features, pricing
- Templates: browse and start with a template
- Create: simple mindmap editor (add nodes, connect edges, save to localStorage)

## Build

```bash
npm run build
npm start
```

## Notes
- No backend required; persistence uses localStorage.
- Replace Unsplash images if you need offline assets.
- Tailwind is configured with dark mode; adjust colors in `tailwind.config.js`.