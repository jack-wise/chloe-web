# chloe-web

The official site of **Chloe Bella Dietz** — a static, hand-curated personal /
creator-brand site, served by **GitHub Pages** from the `docs/` folder and
published to **chloedietz.com**.

Same tech stack as the AI Newsletter (static HTML/CSS/JS + a JSON content file),
but **no cron / auto-update** — content is edited by hand.

## How it works

```
docs/data/content.json  ──►  docs/app.js renders every section  ──►  GitHub Pages (docs/)  ──►  chloedietz.com
```

- **`docs/index.html`** — the page skeleton (nav, hero, About, Work, Gallery, Connect, footer).
- **`docs/style.css`** — warm editorial theme (Fraunces + Inter).
- **`docs/app.js`** — fetches `content.json` and fills every section; runs scroll
  reveals, the Work tabs, the highlight ticker, the work reader + gallery lightbox.
- **`docs/data/content.json`** — **the only file you edit to change the site.** Each
  field is labeled; replace anything marked `[PLACEHOLDER]`.
- **`docs/assets/`** — images. `portrait` + `gallery-N.jpg` are referenced from
  `content.json`; drop real files here and update the paths.
- **`docs/CNAME`** — binds the Pages site to `chloedietz.com`.

## Editing content

1. Edit `docs/data/content.json`.
2. Add any images to `docs/assets/` and point to them from the JSON.
3. Commit & push to `main` — GitHub Pages rebuilds automatically.

## Local preview

```
cd docs && python -m http.server 8080   # then open http://localhost:8080
```
