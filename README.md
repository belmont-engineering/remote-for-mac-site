# Remote for Mac: download site

One page with the links to the Remote for Mac beta: the TestFlight invite for the viewer (iPhone, iPad and Mac) and the download of the Mac app that gets controlled. Built with Astro, deployed on Vercel.

## Turning the buttons on

Both buttons say "Coming soon" until their links are set. Put the links in `src/links.ts`, then commit and push; Vercel redeploys the site.

## Working on it

- `npm install`, then `npm run dev` (http://localhost:4321)
- `npm run build` writes the static site to `dist/`

Astro 6 is used because it runs on Node 22.12 or later; Astro 7 needs Node 22.23.4 or later.
