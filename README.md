# Remote for Mac: download site

One page with the links to the Remote for Mac beta: the TestFlight invite for the viewer (iPhone, iPad and Mac) and the download of the Mac app that gets controlled. Built with Astro, deployed on Vercel.

## The buttons

Each button says "Coming soon" until its link is set in `src/links.ts`. Commit and push; Vercel redeploys the site.

- **Download the Mac app** is live. The notarized `.dmg` is served from `public/downloads/`. For a new version, run `scripts/release/mac-host-dmg.sh` in [remote-for-mac](https://github.com/belmont-engineering/remote-for-mac) (private), copy `build/release/Remote-for-Mac-Host-<version>.dmg` into `public/downloads/`, and update `macAppURL` and `macAppVersion`.
- **Join the beta on TestFlight** turns on when `testFlightURL` is set to the public TestFlight link.

## Working on it

- `npm install`, then `npm run dev` (http://localhost:4321)
- `npm run build` writes the static site to `dist/`

Astro 6 is used because it runs on Node 22.12 or later; Astro 7 needs Node 22.23.4 or later.
