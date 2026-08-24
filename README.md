# xubmuajkub.github.io

Personal portfolio site for Jason Daoeid — frontend engineer.

Plain HTML, CSS and vanilla JS. No build step, no dependencies, no trackers.
Push to `main` and GitHub Pages serves it.

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Page markup. Text nodes carry `data-i18n` keys. |
| `assets/style.css` | Dark terminal theme, light theme via `prefers-color-scheme`. |
| `assets/i18n.js` | UI strings for `en`, `vi`, `th`, `lo`. |
| `assets/data.js` | Jobs, projects and skills. Per-language `type` / `role` copy. |
| `assets/app.js` | Renders lists, handles the language switch (persisted in `localStorage`). |
| `cv-projects.md` | Source-of-truth CV data the site is generated from. |

## Editing

Add a project: append a `P(...)` entry to `PROJECTS` in `assets/data.js`.
Arguments are `id, name, start, end, company, stack, type, role, extra`.
Dates are `YYYY.MM`; pass `null` as `end` and `{current:true}` for ongoing work.
Reuse a `T_` type and an `R` role, or add new ones with all four languages.

Add a language: add it to `LANGS` and add a matching block to `T` in `assets/i18n.js`,
then add the language key to every `type` / `role` object in `assets/data.js`.

## Local preview

```
python3 -m http.server 4173
```
