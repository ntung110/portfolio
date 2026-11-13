# Portfolio

A minimal and static portfolio built with Astro, TypeScript, plain CSS, and Markdown. 

## Local development

Requires Node.js **22.12.0 or newer**. Node.js 22.23.4+ or a newer LTS release is recommended to avoid transitive dependency engine warnings.

```sh
npm install
npm run dev
```

Open **http://localhost:4321**. Saving content or code updates the local preview. Stop the server with Ctrl+C.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Validate content schemas and check Astro/TypeScript |
| `npm run build` | Generate the static website in `dist/` |
| `npm run preview` | Serve the production build locally after building |

`npm run start` aliases the development server; `npm run lint` aliases the Astro check. No automated test suite is configured. Astro is pinned to the 7.3 release series; check Node.js requirements before upgrading it.

## Editing content

| Location | Content |
| --- | --- |
| `src/content/about.md` | Name, role, portrait, experience, and biography |
| `src/content/projects/*.md` | Project listings and detail pages |
| `src/content/writings/*.md` | Writing listings and articles |
| `src/data/site.ts` | Site description, GitHub, LinkedIn, and email links |
| `src/content.config.ts` | Frontmatter schemas and collection definitions |

Each Markdown file has a YAML **frontmatter** block between `---` lines, followed by its body text. Frontmatter supplies structured information; Markdown supplies the prose. The layouts and CSS control how both are displayed.

### About

Edit `src/content/about.md`:

- `name` and `headline` appear above the biography. The name also supplies page titles and the copyright footer.
- `portrait` specifies the image path, alt text, and source dimensions.
- `experience` contains company, role, and description entries. Set `experience: []` or omit it to hide the section.
- Everything below the frontmatter is your biography. Use blank lines between paragraphs.

### Projects and writings

Duplicate an existing `.md` file in the appropriate folder, rename it, then replace its frontmatter and body. Keep files directly inside the folder, using lowercase, hyphenated filenames.

```text
src/content/projects/my-tool.md → /projects/my-tool/
src/content/writings/my-first-post.md → /writings/my-first-post/
```

The filename determines the URL. Renaming it changes the URL, so retain existing filenames when editing published content. Adding a file automatically adds its listing and detail page—no route or TypeScript array needs updating.

For example, a writing entry:

```markdown
---
title: "My first post"
date: "2026-11-13"
description: "A short summary for page metadata."
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

For projects, replace `date` with these fields; keep `title`, `description`, `readingTime`, and `image`:

```yaml
label: "Personal project"
year: "2026"
order: 2
```

- **Projects** sort by `order` ascending (default `0`), then filename. The project list does not display years, but `year` is still required and appears on detail pages.
- **Writings** sort by `date` descending, then filename. The listing displays the full date on the right. Use quoted `YYYY-MM-DD` dates.
- `readingTime` is a manually edited label, not calculated automatically.
- Start body headings at `##`; the template already renders the title as the page's main heading.
- Use spaces rather than tabs for YAML indentation. `npm run check` reports invalid frontmatter. Restart the dev server after schema changes if needed.

## Images and styling

Put images in `public/images/` and reference them as `/images/filename.jpg` in frontmatter or Markdown. Image `width` and `height` describe the source file; CSS controls display size.

- `src/styles/global.css`: shared typography, colors, widths, spacing, portrait size, and responsive layout.
- `src/layouts/SiteLayout.astro`: page metadata, navigation, and footer.
- `src/layouts/ArticleLayout.astro`: project and writing detail-page layout.
- `src/components/ExternalLink.astro`: personal-link icons.
- `public/fonts/pp-neue-montreal-variable.woff2`: locally hosted font. Ensure your license permits web embedding before publishing.

## Building and publishing

Content is processed **at build time**. Local edits appear during development, but publishing an edit requires a new build:

```sh
npm run check
npm run build
npm run preview
```

`dist/` contains the finished HTML, CSS, images, and fonts—not the Markdown source. It can be served by Caddy, Nginx, or any static web server, including on a homelab. Node.js and Astro are needed to build the site, but no Astro/Node.js process is needed to serve the generated files.

No homelab deployment automation or server configuration is included yet. Avoid building into or clearing a directory currently being served; build a separate release and switch the server to it after a successful build.

A production domain is not configured. Set the `site` option in `astro.config.mjs` when a domain is available, then configure canonical URLs and sharing metadata as needed.

