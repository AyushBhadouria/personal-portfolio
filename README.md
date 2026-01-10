# Portfolio (Vite + React + Tailwind + Framer Motion)

A modern single-page portfolio template built with React, Vite, Tailwind CSS, and Framer Motion.

## Features ✅

- Functional React components only
- Tailwind CSS for styling (dark theme)
- Framer Motion animations and hover/scroll effects
- Smooth scrolling navigation
- Responsive layout (mobile-first)
- Data-driven skills and projects from `src/data`
- Clean, reusable component structure

## Getting started 🔧

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Project structure

- `src/components` – Reusable UI components
- `src/sections` – Page sections (Hero, About, Skills, Projects, Contact)
- `src/data` – Skills and projects data files
- `src/index.css` – Tailwind import + custom styles

## Notes

- Replace placeholder text (`Your Name`, email address) and project data in `src/data` with your real content.
- The site is dark-themed by default via the `dark` class on `html` in `index.html`. To implement a theme toggle, manage the class on `html` or `body`.

## License

MIT
