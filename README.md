# Thanh Tung Nguyen — Portfolio

A static Astro recreation of the portfolio design at https://focused-everything-752613.framer.app/. Built with TypeScript, plain CSS, and a locally hosted PP Neue Montreal variable font. No React runtime or client-side JavaScript is needed.

## Run locally

Use Node.js 22.12.0 or newer. Node.js 22.23.4+ or a current LTS release is recommended to satisfy all transitive dependencies without engine warnings.

```sh
npm install
npm run dev
```

Open http://localhost:4321. Astro reloads the page as you edit. Stop the server with Ctrl+C.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Check Astro and TypeScript files |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the production build locally |

Astro is constrained to the patched 7.3 release series to retain compatibility with the existing Node.js version. Check Node.js requirements before upgrading Astro to a newer series.

## Content and styling

- `src/content/about.md`: name, role, portrait, experience, and biography.
- `src/content/projects/*.md`: project metadata and detail-page content.
- `src/content/writings/*.md`: writing metadata and article content.
- `src/content.config.ts`: collection schemas that validate Markdown frontmatter.
- `src/data/site.ts`: site-wide description and personal links.
- `src/styles/global.css`: shared design tokens, typography, spacing, and responsive layout.
- `src/layouts/SiteLayout.astro`: page metadata, navigation, and footer.
- `src/layouts/ArticleLayout.astro`: project and writing detail-page layout.
- `public/fonts/pp-neue-montreal-variable.woff2`: user-supplied font. Ensure your font license permits web embedding before publishing.
- `public/images/abstract-paper.png`: locally stored reference cover image.
- `public/images/portrait.jpg`: About page portrait.

The experience notes, projects, and writings intentionally retain the mockup's placeholder content. GitHub, LinkedIn, and Contact use the existing portfolio's real destinations. Framer branding and runtime scripts are not included.


### Edit About

Open `src/content/about.md`. The YAML block between `---` lines contains your name, role, portrait, and experience. The Markdown below it is your biography. Separate paragraphs with blank lines; links, lists, emphasis, and images work normally.

Experience remains structured frontmatter so the page can preserve the company/role/description layout. Remove the entries or set `experience: []` to hide that section. Your name in this file also supplies page titles and the copyright footer.

### Add projects or writings

Duplicate an existing `.md` file in `src/content/projects/` or `src/content/writings/`, give it a unique lowercase, hyphenated filename, then replace its metadata and body. Keep files directly in those folders, not in nested directories. The filename supplies the URL:

```text
src/content/projects/my-tool.md → /projects/my-tool/
src/content/writings/my-first-post.md → /writings/my-first-post/
```

Changing a filename changes its URL. Keep existing filenames to preserve existing links. No page or TypeScript array needs updating when you add content.

A writing entry looks like this:

```markdown
---
title: "My first post"
date: "2026-11-13"
description: "A short summary for the page metadata."
readingTime: "2 min read"
image:
  src: "/images/abstract-paper.png"
  alt: "Abstract black and white light across folded paper"
  width: 1672
  height: 941
---

## The first idea

Write paragraphs here. Use **bold**, *emphasis*, or [a link](https://example.com).

## What I learned

- One observation.
- Another observation.
```

For projects, use `label`, a quoted `year`, and an optional numeric `order` instead of `date`; keep `title`, `description`, `readingTime`, and `image`. For example:

```yaml
label: "Personal project"
year: "2026"
order: 2
```

Projects sort by `order` (lowest first, default `0`), then filename. Writings sort by `date` (newest first), then filename. Dates must be quoted `YYYY-MM-DD` strings. Reading time is a manually editable label, not calculated. Start body headings at `##` because the page already displays the title as its main heading.

Put images in `public/images/` and reference them as `/images/filename.jpg`. Image `width` and `height` describe the source file; CSS controls display size. Use spaces, not tabs, for YAML indentation. Run `npm run check` to catch invalid frontmatter.

Saving a file updates the local preview while `npm run dev` is running. After adding or changing collection schemas, restart the dev server if needed. Published content is still static: run `npm run build` and deploy the new `dist/` files to publish changes. No CMS, database, or additional runtime dependencies are involved.

## Deployment

This site produces static files and does not need a server adapter. For Vercel, change any existing project's framework preset from Next.js to **Astro**, use `npm run build`, and set the output directory to `dist`. Use a Node.js version compatible with `package.json`.

A custom production domain is not configured. When one is available, set Astro's `site` option and add canonical URLs/social-sharing metadata as appropriate.
