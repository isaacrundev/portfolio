import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as instance } from "../_libs/i18next.mjs";
import { B as Browser } from "../_libs/i18next-browser-languagedetector+[...].mjs";
import { i as initReactI18next } from "../_libs/react-i18next.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/html-parse-stringify.mjs";
import "../_libs/void-elements.mjs";
import "../_libs/use-sync-external-store.mjs";
const appCss = "/assets/index-DrM-MRdK.css";
const nav$1 = { "about": "About", "showcases": "Showcases", "contact": "Contact" };
const hero$1 = { "available": "Available for new projects", "greeting": "Hi, I am", "developer": "> Developer_", "problemSolver": "> Problem Solver_", "uiuxEngineer": "> UI/UX Engineer_", "lifelongLearner": "> Lifelong Learner_", "viewWork": "View Work", "contactMe": "Contact Me" };
const about$1 = { "title1": "About ", "title2": "Me", "intro": "Hello, I'm <1>Isaac Wu</1>, a passionate web developer and former project manager.", "story": "Sometimes I wondered—it would be perfect if I could know more about programming and software development when I was a project manager. That curiosity led me to dive deep into code.", "quote1": '"Now, web development is not only a way to understand how systems work behind the scenes, but a canvas to build something ', "quote2": "interesting, handy, and visually stunning.", "quote3": '"' };
const showcases$1 = { "subtitle": "Selected Work", "title1": "Featured ", "title2": "Projects", "mvdbDesc": "A multilanguage pure front-end website enables users to see and look up movie info.", "youbikeDesc": "A web-based service enables users to check live data of the bicycle-sharing system (YouBike) in Taipei city", "dodDesc": "A website for recording diet by bringing your own data or importing from OpenFoodFacts API *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.", "foxbookDesc": "A CRUD MERN stack website for sharing posts among registered users. *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.", "whistlerDesc": "An anonymous system for reporting inappropriate behaviors to admins. For both reporters and admins", "cardgameDesc": "Get a new deck of cards every single game. 100% no cheating guaranteed", "role": "Frontend developer" };
const contact$1 = { "title1": "Let's ", "title2": "Connect", "desc": "Currently open to new opportunities! Let's build something awesome together." };
const en = {
  nav: nav$1,
  hero: hero$1,
  about: about$1,
  showcases: showcases$1,
  contact: contact$1
};
const nav = { "about": "關於我", "showcases": "作品集", "contact": "聯絡我" };
const hero = { "available": "歡迎洽談新專案", "greeting": "你好，我是", "developer": "> 軟體工程師_", "problemSolver": "> 問題解決者_", "uiuxEngineer": "> UI/UX 工程師_", "lifelongLearner": "> 終身學習者_", "viewWork": "查看作品", "contactMe": "聯絡我" };
const about = { "title1": "關於 ", "title2": "我", "intro": "你好，我是 <1>Isaac Wu</1>，一名充滿熱忱的網頁開發者，也曾擔任專案經理。", "story": "我有時會想——如果我在當專案經理時能多了解一些程式設計和軟體開發，那就太完美了。這樣的好奇心驅使我深入學習程式碼。", "quote1": "「現在，網頁開發不僅是了解系統背後運作方式的途徑，更是創造出", "quote2": "有趣、實用且視覺驚豔", "quote3": "作品的畫布。」" };
const showcases = { "subtitle": "精選作品", "title1": "精選 ", "title2": "專案", "mvdbDesc": "支援多國語言的純前端網站，讓使用者可以瀏覽和搜尋電影資訊。", "youbikeDesc": "一個網頁服務，讓使用者可以查詢台北市 YouBike 微笑單車的即時站點資訊", "dodDesc": "一個可以透過自行輸入或串接 OpenFoodFacts API 來記錄飲食的網站。*此專案使用無伺服器資料庫，發送第一次請求時可能會發生錯誤，請稍後再試。", "foxbookDesc": "一個 MERN 組合的 CRUD 網站，讓註冊使用者可以分享貼文。*此專案使用無伺服器資料庫，發送第一次請求時可能會發生錯誤，請稍後再試。", "whistlerDesc": "一個供檢舉人向管理員檢舉不當行為的匿名系統。包含檢舉人與管理員雙端功能。", "cardgameDesc": "保證每局都是全新的牌組。百分之百無作弊。", "role": "前端開發工程師" };
const contact = { "title1": "與我 ", "title2": "聯絡", "desc": "目前開放新機會！讓我們一起打造很棒的作品吧。" };
const zhTW = {
  nav,
  hero,
  about,
  showcases,
  contact
};
const resources = {
  en: {
    translation: en
  },
  "zh-TW": {
    translation: zhTW
  }
};
instance.use(Browser).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
    // react already safes from xss
  }
});
const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Isaac Wu | Web Developer Portfolio"
      },
      {
        name: "description",
        content: "Isaac Wu - Passionate Web Developer portfolio showcasing modern user interfaces, performant coding, and digital experiences."
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://rsms.me/inter/inter.css"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "font-sans antialiased bg-gray-900 text-white min-h-screen", children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-BFTf28iU.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router;
}
export {
  getRouter
};
