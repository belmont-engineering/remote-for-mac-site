// Where the two buttons on the page go. Leave a link as null and its button shows "Coming soon".
// When the beta opens, paste the links in, commit and push: Vercel redeploys the site.

/** The TestFlight public link for the viewer app (iPhone, iPad and Mac), e.g. https://testflight.apple.com/join/AbCdEf12 */
export const testFlightURL: string | null = null;

/**
 * The notarized .dmg of the Mac app that gets controlled. It's served from public/downloads/, copied there from
 * the app repo's scripts/release/mac-host-dmg.sh output (build/release/).
 */
export const macAppURL: string | null = '/downloads/Remote-for-Mac-Host-1.0.dmg';
