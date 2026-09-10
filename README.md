# Ramindu Dissanayake — Mechanical Engineering Portfolio

A React + Vite portfolio built around the idea **Ideas → Design → Analysis → Manufacturing → Reality**.
This is not a CV converted to a webpage — the CV is only the source of facts. Everything visual,
structural and narrative was designed as a standalone engineering portfolio.

---

## 1. Setup

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install       # install dependencies
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build     # build the production site into /dist
npm run preview   # preview the production build locally
```

---

## 2. Adding your images

All images live in `public/assets/`, organized by section:

```
public/assets/
  profile/           hero image, about photo, university logo
  falcon/             Falcon E2 car + steering wheel project photos
  formula-student/    Formula Student Spain 2026 photos
  gearbox/            Gearbox project photos
  rice-cooker/        Rice cooker reverse-engineering photos
  robot/               Table serving robot photos
  pen-holder/         Pen holder project photos
  achievements/        Leadership / cricket / baseball photos
  certificates/        Certificate images
  gallery/              General "Engineering in Motion" gallery photos
```

**How it works:** every image on the site is rendered by the `ImagePlaceholder` component
(`src/components/ImagePlaceholder.jsx`). If the file at the given path exists, it displays the
real photo. If it doesn't exist yet, it automatically shows a clean placeholder instead of a
broken-image icon — so the site always looks intentional, even before you've added your photos.

**To add a photo:** drop the file into the matching folder using the exact filename referenced in
the data files below (or update the path in the data file to match your filename), for example:

```
public/assets/falcon/falcon-e2.jpg
public/assets/falcon/steering-wheel.jpg
public/assets/gearbox/gearbox-cad.jpg
```

Recommended: JPG/WebP, optimized for web (under ~500KB each) so the site stays fast on GitHub Pages.

---

## 3. Editing content

**All content lives in `src/data/`, completely separate from the components.** You should never
need to touch a `.jsx` file just to change text, links or an image path.

| File | Controls |
|---|---|
| `src/data/personal.js` | Name, role, hero statement, about text, "currently exploring" tags, social links, "Engineer at a Glance" cards |
| `src/data/projects.js` | The four project case studies — description, role, challenge, tools, technical details, image paths |
| `src/data/experience.js` | Falcon E Racing roles + Formula Student Spain 2026 details |
| `src/data/skills.js` | Engineering toolkit categories |
| `src/data/achievements.js` | Leadership & teamwork cards |
| `src/data/certifications.js` | Certification cards |
| `src/data/gallery.js` | "Engineering in Motion" gallery grid |

### Adding a new project

Open `src/data/projects.js` and copy an existing project object, then edit every field. The
`ProjectDetail` component automatically renders whatever you put in `technicalDetails`,
`approach`, `tools` and `gallery` — no code changes needed.

### Placeholders to replace

Search the codebase for anything in square brackets, e.g. `[ADD_EMAIL]`, `[ADD PROJECT DETAILS]`,
`[ADD_FEA_RESULT_HERE]`. These are intentionally left blank rather than filled with invented
numbers, results or links. Replace them with real information as it becomes available — nothing
was fabricated on your behalf.

---

## 4. GitHub Pages deployment

1. **Create a GitHub repository** (e.g. `portfolio`) and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **Set the correct base path.** Open `vite.config.js` and make sure `base` matches your repo name:
   ```js
   base: '/YOUR-REPO-NAME/'
   ```
   If your repo is `username.github.io` (a root user/organization site), use `base: '/'` instead.

3. **Deploy** using the included `gh-pages` script:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch.

4. **Enable Pages** in your repository: Settings → Pages → Source → select the `gh-pages` branch.

Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.

> This site intentionally avoids React Router — it's a single scrolling page with a modal-based
> project case study view — so there are no client-side routing issues on GitHub Pages.

---

## 5. Final checklist before publishing

- [ ] Replace `[ADD_EMAIL]`, `[ADD_LINKEDIN_URL]` and `[ADD_GITHUB_LINK]` in `src/data/personal.js`
- [ ] Add your CV PDF at `public/assets/profile/Ramindu_Dissanayake_CV.pdf` (or update the path)
- [ ] Add the hero image (`[HERO_ENGINEERING_IMAGE]`) and about photo (`[ABOUT_IMAGE]`)
- [ ] Add Falcon E Racing photos: the car, steering wheel, CAD renders, sketches, FEA, manufacturing
- [ ] Add Formula Student Spain 2026 hero image + 5 gallery photos
- [ ] Add photos and fill in `[ADD PROJECT DETAILS]` / `[ADD_..._RESULT_HERE]` for all four projects
- [ ] Add leadership/baseball/cricket photos in `src/data/achievements.js`
- [ ] Add certificate images
- [ ] Add 6+ gallery photos for "Engineering in Motion"
- [ ] Set `base` in `vite.config.js` to your actual GitHub repo name
- [ ] Update `og:image` path in `index.html` once you have a real image for link previews
- [ ] Proofread every section — nothing invented was left in, but double-check your own additions
- [ ] Run `npm run build` locally once before deploying to confirm there are no errors

---

## 6. Project structure

```
src/
  components/     UI components (no hardcoded content)
  data/           All editable content
  hooks/          useReveal.js — scroll-triggered animation hook
  App.jsx         Assembles all sections in order
  main.jsx        React entry point
  index.css       Full design token system + all styles
public/
  assets/         Your images, organized by section
  favicon.svg
```
