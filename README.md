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
| `assets/data.js` | Jobs, projects and skills. Per-language `name` / `type` / `role` copy. |
| `assets/app.js` | Renders lists, handles the language switch (persisted in `localStorage`). |
| `cv-projects.md` | Public CV summary mirroring the site categories and roles. |

## Editing

Add a project: append an object to `PROJECTS` in `assets/data.js` with
`id`, `name`, `type` and `role`. Use a neutral category ID and provide all four
languages for the name, type and role. Add the matching broad contribution to
`DESC` in `assets/desc.js`, and update `cv-projects.md` to match.

Keep public project entries category-based. Omit client names and links,
agency/employer mappings, engagement dates and status, and project-specific
technology or infrastructure details. Keep employment history and general
skills in their separate sections.

Add a language: add it to `LANGS` and add a matching block to `T` in `assets/i18n.js`,
then add the language key to every `name` / `type` / `role` object in `assets/data.js` and every description in `assets/desc.js`.

## Local preview

```
python3 -m http.server 4173
```
