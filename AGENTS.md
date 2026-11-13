# Portfolio

This is a static Astro site using TypeScript and plain CSS, not Next.js.

- Keep the published Framer reference's layout and typography intact unless a design change is requested.
- Shared styles live in `src/styles/global.css`; Markdown content lives in `src/content/`, with schemas in `src/content.config.ts`. Site-wide links/settings live in `src/data/site.ts`.
- Use Astro components and static generation. Do not add a client-side framework unless needed for a requested interaction.
- Run `npm run check` and `npm run build` after changes. No automated test suite is configured.
- See `README.md` and `package.json` for local development and Node.js requirements.
