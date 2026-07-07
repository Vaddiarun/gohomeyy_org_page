# GoHomey — Company Portal

Marketing website for **GoHomey**, the marketplace connecting people to home chefs for meals, Fuel subscriptions, pantry goods, and social dining tables.

Built with **React 18 + Vite 5 + Tailwind CSS 3**, with scroll-reveal, mouse parallax, 3D hover-tilt cards, floating plates, and a warm, food-forward aesthetic.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
gohomey-web/
├─ index.html               # entry HTML + Google Fonts
├─ vite.config.js
├─ tailwind.config.js        # brand colors, fonts, keyframes/animations
├─ postcss.config.js
└─ src/
   ├─ main.jsx               # React entry
   ├─ App.jsx                # page composition
   ├─ index.css              # Tailwind layers + reveal/tilt base styles
   ├─ data.js                # all copy + image URLs (edit here)
   ├─ hooks/
   │  ├─ useReveal.js         # IntersectionObserver scroll-reveal
   │  ├─ useParallax.js       # pointer-driven parallax (data-depth)
   │  ├─ useTilt.js           # 3D hover tilt
   │  └─ useScrolled.js       # sticky-nav background toggle
   └─ components/
      ├─ Navbar, Hero, HowItWorks, Chefs, Fuel, SocialTables,
         Pantry, Testimonials, BecomeChef, Download, Footer, Reveal, Icons
```

## Customising

- **Content & images** — everything lives in `src/data.js`. Placeholder photos are pulled from public demo APIs (`foodish-api.com`, `randomuser.me`); replace the URLs with your own hosted assets before launch.
- **Brand colors / fonts / animations** — `tailwind.config.js` under `theme.extend`.
- **Sections** — each is a self-contained component in `src/components/`; reorder or remove them in `src/App.jsx`.

## Notes

- Fonts: **Bricolage Grotesque** (display) + **Instrument Sans** (body), loaded via Google Fonts in `index.html`.
- Motion respects a single source of truth: add the `reveal` class + `useReveal` ref to animate any new element on scroll; add `data-depth="0.05"` to any element inside a section for parallax.
