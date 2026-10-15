import dod1 from "./showcases/dod/dod1.webp";
import dod2 from "./showcases/dod/dod2.webp";
import dod3 from "./showcases/dod/dod3.webp";
import dod4 from "./showcases/dod/dod4.webp";

import cardGame1 from "./showcases/CardGame/cardGame1.webp";
import cardGame2 from "./showcases/CardGame/cardGame2.webp";
import cardGame3 from "./showcases/CardGame/cardGame3.webp";

import cardGameMobile1 from "./showcases/CardGame/cardGame-mobile1.webp";
import cardGameMobile2 from "./showcases/CardGame/cardGame-mobile2.webp";
import cardGameMobile3 from "./showcases/CardGame/cardGame-mobile3.webp";

import whistlerApp1 from "./showcases/WhistlerApp/whistlerApp1.webp";
import whistlerApp2 from "./showcases/WhistlerApp/whistlerApp2.webp";
import whistlerApp3 from "./showcases/WhistlerApp/whistlerApp3.webp";
import whistlerAppMobile1 from "./showcases/WhistlerApp/whistlerApp-mobile1.webp";
import whistlerAppMobile2 from "./showcases/WhistlerApp/whistlerApp-mobile2.webp";
import whistlerAppMobile3 from "./showcases/WhistlerApp/whistlerApp-mobile3.webp";

import foxBook1 from "./showcases/FoxBook/foxBook1.webp";
import foxBook2 from "./showcases/FoxBook/foxBook2.webp";
import foxBook3 from "./showcases/FoxBook/foxBook3.webp";
import foxBookMobile1 from "./showcases/FoxBook/foxBook-mobile1.webp";
import foxBookMobile2 from "./showcases/FoxBook/foxBook-mobile2.webp";
import foxBookMobile3 from "./showcases/FoxBook/foxBook-mobile3.webp";

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

import mvdbMobile1 from "./MVDB/mvdb_mobile_1.webp";
import mvdbMobile2 from "./MVDB/mvdb_mobile_2.webp";
import mvdbMobile3 from "./MVDB/mvdb_mobile_3.webp";
import mvdbDesktop1 from "./MVDB/mvdb_desktop_1.webp";
import mvdbDesktop2 from "./MVDB/mvdb_desktop_2.webp";
import mvdbDesktop3 from "./MVDB/mvdb_desktop_3.webp";

// AVIF, but only where encoding from the original beat WebP at matched quality:
// 9 of the 31 images. The rest are flat app screenshots that WebP already handles
// well -- for those, AVIF at the same PSNR comes out the same size or larger, so a
// second copy would cost bytes instead of saving them.
// ?no-inline for the same reason as the contact icons below: Vite inlines assets
// under 4KB as base64, which for `cardGame2.avif` would undo the point of encoding it.
// Keyed by the WebP URL, so the screenshot lists below stay plain strings.
import meAvif from "./me.avif?no-inline";
import mvdbMobile3Avif from "./MVDB/mvdb_mobile_3.avif?no-inline";
import youbikeMobile1Avif from "./showcases/Youbike/youbike-mobile1.avif?no-inline";
import dod1Avif from "./showcases/dod/dod1.avif?no-inline";
import dod2Avif from "./showcases/dod/dod2.avif?no-inline";
import dod3Avif from "./showcases/dod/dod3.avif?no-inline";
import dod4Avif from "./showcases/dod/dod4.avif?no-inline";
import cardGame1Avif from "./showcases/CardGame/cardGame1.avif?no-inline";
import cardGame2Avif from "./showcases/CardGame/cardGame2.avif?no-inline";

export const avifVersions: Record<string, string> = {
  [me]: meAvif,
  [mvdbMobile3]: mvdbMobile3Avif,
  [youbikeMobile1]: youbikeMobile1Avif,
  [dod1]: dod1Avif,
  [dod2]: dod2Avif,
  [dod3]: dod3Avif,
  [dod4]: dod4Avif,
  [cardGame1]: cardGame1Avif,
  [cardGame2]: cardGame2Avif,
};

export const mvdbScreenshots = [
  mvdbMobile1,
  mvdbMobile2,
  mvdbMobile3,
  mvdbDesktop1,
  mvdbDesktop2,
  mvdbDesktop3,
];

export const youbikeScreenshots = [youbikeMobile1, youbikeDesktop1];

export const dodScreenshots = [dod1, dod2, dod3, dod4];

export const cardGameScreenshots = [
  cardGame1,
  cardGame2,
  cardGame3,
  cardGameMobile1,
  cardGameMobile2,
  cardGameMobile3,
];
export const whistlerAppScreenshots = [
  whistlerApp1,
  whistlerApp2,
  whistlerApp3,
  whistlerAppMobile1,
  whistlerAppMobile2,
  whistlerAppMobile3,
];

export const foxBookScreenshots = [
  foxBook1,
  foxBook2,
  foxBook3,
  foxBookMobile1,
  foxBookMobile2,
  foxBookMobile3,
];

export { contactEmail, contactGithub, contactLinkedIn };
export { me };
