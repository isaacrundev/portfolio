import dod1 from "./showcases/dod/dod1.webp";
import dod2 from "./showcases/dod/dod2.webp";
import dod3 from "./showcases/dod/dod3.webp";
import dod4 from "./showcases/dod/dod4.webp";

import sushiOtoko1 from "./showcases/SushiOtoko/sushiOtoko1.webp";
import sushiOtokoMobile1 from "./showcases/SushiOtoko/sushiOtoko-mobile1.webp";

import interval1 from "./showcases/Interval/interval1.webp";
import interval2 from "./showcases/Interval/interval2.webp";
import interval3 from "./showcases/Interval/interval3.webp";
import apnea1 from "./showcases/Apnea/apnea1.webp";
import apnea2 from "./showcases/Apnea/apnea2.webp";
import apnea3 from "./showcases/Apnea/apnea3.webp";

import me from "./me.webp";

// AVIF, but only where encoding from the original beat WebP at matched quality.
// The rest are flat app screenshots that WebP already handles well -- for those,
// AVIF at the same PSNR comes out the same size or larger, so a second copy would
// cost bytes instead of saving them.
// ?no-inline: the AVIFs are small enough that Vite would inline them as base64
// in the SSR'd HTML and the route bundle, costing more than the file itself.
// Keyed by the WebP URL, so the screenshot lists below stay plain strings.
import meAvif from "./me.avif?no-inline";
import dod1Avif from "./showcases/dod/dod1.avif?no-inline";
import dod2Avif from "./showcases/dod/dod2.avif?no-inline";
import dod3Avif from "./showcases/dod/dod3.avif?no-inline";
import dod4Avif from "./showcases/dod/dod4.avif?no-inline";

export const avifVersions: Record<string, string> = {
  [me]: meAvif,
  [dod1]: dod1Avif,
  [dod2]: dod2Avif,
  [dod3]: dod3Avif,
  [dod4]: dod4Avif,
};

export const dodScreenshots = [dod1, dod2, dod3, dod4];

export const sushiOtokoScreenshots = [sushiOtoko1, sushiOtokoMobile1];
// order is the story: running timer, then the home screen it starts from,
// then the 1-5 module settings behind it
export const intervalScreenshots = [interval1, interval2, interval3];
// same story order as Interval: the running screen leads, then the setup it
// came from, then the first-run disclaimer
export const apneaScreenshots = [apnea1, apnea2, apnea3];

export { me };
