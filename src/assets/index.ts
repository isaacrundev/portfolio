import dod1 from "./showcases/dod/dod1.webp";
import dod2 from "./showcases/dod/dod2.webp";
import dod3 from "./showcases/dod/dod3.webp";
import dod4 from "./showcases/dod/dod4.webp";

import sushiOtoko1 from "./showcases/SushiOtoko/sushiOtoko1.webp";
import sushiOtokoMobile1 from "./showcases/SushiOtoko/sushiOtoko-mobile1.webp";

import interval1 from "./showcases/Interval/interval1.webp";
import apnea1 from "./showcases/Apnea/apnea1.webp";

// ?no-inline: each of these is under Vite's 4KB inline limit, so without it they
// become base64 in both the SSR'd HTML and the route bundle -- 10KB of PNG as
// 13.7KB of base64 on the critical path, for icons at the bottom of the page.
// As files they are lazy, hashed, and cached for a year.
import contactEmail from "./contact/iconmonstr-email-10-96.png?no-inline";
import contactGithub from "./contact/iconmonstr-github-1-96.png?no-inline";
import contactLinkedIn from "./contact/iconmonstr-linkedin-4-96.png?no-inline";

import me from "./me.webp";

import youbikeDesktop1 from "../assets/showcases/Youbike/youbike-desktop1.webp";
import youbikeMobile1 from "../assets/showcases/Youbike/youbike-mobile1.webp";

// AVIF, but only where encoding from the original beat WebP at matched quality.
// The rest are flat app screenshots that WebP already handles well -- for those,
// AVIF at the same PSNR comes out the same size or larger, so a second copy would
// cost bytes instead of saving them.
// ?no-inline for the same reason as the contact icons above: Vite inlines assets
// under 4KB as base64.
// Keyed by the WebP URL, so the screenshot lists below stay plain strings.
import meAvif from "./me.avif?no-inline";
import youbikeMobile1Avif from "./showcases/Youbike/youbike-mobile1.avif?no-inline";
import dod1Avif from "./showcases/dod/dod1.avif?no-inline";
import dod2Avif from "./showcases/dod/dod2.avif?no-inline";
import dod3Avif from "./showcases/dod/dod3.avif?no-inline";
import dod4Avif from "./showcases/dod/dod4.avif?no-inline";

export const avifVersions: Record<string, string> = {
  [me]: meAvif,
  [youbikeMobile1]: youbikeMobile1Avif,
  [dod1]: dod1Avif,
  [dod2]: dod2Avif,
  [dod3]: dod3Avif,
  [dod4]: dod4Avif,
};

export const youbikeScreenshots = [youbikeMobile1, youbikeDesktop1];

export const dodScreenshots = [dod1, dod2, dod3, dod4];

export const sushiOtokoScreenshots = [sushiOtoko1, sushiOtokoMobile1];
export const intervalScreenshots = [interval1];
export const apneaScreenshots = [apnea1];

export { contactEmail, contactGithub, contactLinkedIn };
export { me };
