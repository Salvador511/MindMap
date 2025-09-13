# MindMap Maker (Next.js + Tailwind)

A simple website to create mindmaps inspired by the provided mockups.

- Next.js App Router
- Tailwind CSS (dark theme)
- Editor built with @xyflow/react (React Flow)
- Templates that prefill the editor

## About

MindMap Maker is a lightweight, modern mind‑mapping tool. It uses Next.js, Tailwind CSS, and React Flow (@xyflow/react) to let you quickly create, connect, and style ideas. Templates help you start fast, and maps are saved to your browser—no backend required.

### Super Casa Club's Team

- Alejandra Mandujano Cano de lor Rios
- Roberto Rocha Reza
- Salvador Orozco Gonzalez

Learn more in the in‑app About page at `/about`.

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