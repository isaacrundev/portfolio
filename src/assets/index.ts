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
