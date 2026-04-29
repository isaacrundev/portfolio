import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m } from "../_libs/react-type-animation.mjs";
import { u as useTranslation, T as Trans } from "../_libs/react-i18next.mjs";
import { u as useScroll, a as useTransform, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowUpFromLine, C as CodeXml, E as ExternalLink, U as UserRound, K as KeyRound } from "../_libs/lucide-react.mjs";
import { w as wrap } from "../_libs/popmotion.mjs";
import "../_libs/i18next.mjs";
import "../_libs/html-parse-stringify.mjs";
import "../_libs/void-elements.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: handleClick,
      className: "fixed flex items-center justify-center text-brand-cyan transition-all duration-500 ease-in-out bg-slate-900/60 backdrop-blur-xl border border-brand-cyan/30 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-brand-cyan/10 hover:border-brand-cyan hover:scale-110 w-12 h-12 sm:w-14 sm:h-14 bottom-6 right-6 group z-50 pointer-events-auto overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-brand-cyan/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArrowUpFromLine,
          {
            className: "group-hover:-translate-y-1 relative z-10 transition-transform",
            strokeWidth: 2.5,
            size: 22
          }
        )
      ]
    }
  );
};
const Header = ({ children }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const y = useTransform(scrollY, [0, 50], [0, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      id: "header",
      className: "fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 pointer-events-none",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { opacity, y },
            className: "absolute inset-0 bg-slate-900/60 backdrop-blur-3xl border-b border-white/5 pointer-events-none -z-10"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex justify-between items-center bg-transparent pointer-events-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "text-2xl font-extrabold tracking-tighter",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white hover:text-brand-cyan transition-colors cursor-pointer select-none", children: "I.W" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.nav,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
              className: "flex flex-row gap-2 sm:gap-6 items-center p-2 rounded-full glass-card pointer-events-auto",
              children
            }
          )
        ] })
      ]
    }
  );
};
function MenuButton({ text, linkTo }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: linkTo, className: "relative px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold text-slate-300 hover:text-white transition-all group rounded-full hover:bg-white/10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-full bg-brand-cyan/20 blur-md transition-all duration-300 group-hover:w-full z-0" })
  ] });
}
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const currentLang = i18n.language?.startsWith("zh") ? "zh-TW" : "en";
    const newLang = currentLang === "en" ? "zh-TW" : "en";
    i18n.changeLanguage(newLang);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      onClick: toggleLanguage,
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      className: "ml-1 sm:ml-2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 text-sm sm:text-base transition-colors pointer-events-auto",
      title: i18n.language?.startsWith("zh") ? "Switch to English" : "切換至中文",
      children: i18n.language?.startsWith("zh") ? "EN" : "中"
    }
  );
};
const dod1 = "/assets/dod1-WdJTRfAl.png";
const dod2 = "/assets/dod2-WX6KGgsR.png";
const dod3 = "/assets/dod3-D-Fs-ivw.png";
const dod4 = "/assets/dod4-CqewDsc4.png";
const cardGame1 = "/assets/cardGame1-cdb6cKA4.png";
const cardGame2 = "/assets/cardGame2-Z87eKbT8.png";
const cardGame3 = "/assets/cardGame3-BDdrh6WP.png";
const cardGameMobile1 = "/assets/cardGame-mobile1-Dp02_E8p.png";
const cardGameMobile2 = "/assets/cardGame-mobile2-CoHCge91.png";
const cardGameMobile3 = "/assets/cardGame-mobile3-Dg6GbFUc.png";
const whistlerApp1 = "/assets/whistlerApp1-BtHac4bb.png";
const whistlerApp2 = "/assets/whistlerApp2-YxQyETJG.png";
const whistlerApp3 = "/assets/whistlerApp3-BwRKIDF3.png";
const whistlerAppMobile1 = "/assets/whistlerApp-mobile1-CPinA0GK.png";
const whistlerAppMobile2 = "/assets/whistlerApp-mobile2-DNNdUfF6.png";
const whistlerAppMobile3 = "/assets/whistlerApp-mobile3-C3SpGP84.png";
const foxBook1 = "/assets/foxBook1-R6nyEk2X.png";
const foxBook2 = "/assets/foxBook2-CpGqTEB_.png";
const foxBook3 = "/assets/foxBook3-DdCgJiq_.png";
const foxBookMobile1 = "/assets/foxBook-mobile1-CHvVr3ar.png";
const foxBookMobile2 = "/assets/foxBook-mobile2-Cph_3s8d.png";
const foxBookMobile3 = "/assets/foxBook-mobile3-DyAQ49AK.png";
const contactEmail = "data:image/png;base64,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";
const contactGithub = "data:image/png;base64,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";
const contactLinkedIn = "data:image/png;base64,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";
const me = "/assets/14C60149-3736-4BE8-86D4-AAF1BDA7F2AF_1_201_a-e_jSj7GJ.jpeg";
const youbikeDesktop1 = "/assets/youbike-desktop1-C0fMXB6J.png";
const youbikeMobile1 = "/assets/youbike-mobile1-DscWBeFf.png";
const mvdbMobile1 = "/assets/mvdb_mobile_1-CXgbcNWg.png";
const mvdbMobile2 = "/assets/mvdb_mobile_2-B5Qt5YII.png";
const mvdbMobile3 = "/assets/mvdb_mobile_3-doIhfJOD.png";
const mvdbDesktop1 = "/assets/mvdb_desktop_1-BrNsSMcs.png";
const mvdbDesktop2 = "/assets/mvdb_desktop_2-DMuKbGdp.png";
const mvdbDesktop3 = "/assets/mvdb_desktop_3-B0eqVJH6.png";
const mvdbScreenshots = [
  mvdbMobile1,
  mvdbMobile2,
  mvdbMobile3,
  mvdbDesktop1,
  mvdbDesktop2,
  mvdbDesktop3
];
const youbikeScreenshots = [youbikeMobile1, youbikeDesktop1];
const dodScreenshots = [dod1, dod2, dod3, dod4];
const cardGameScreenshots = [
  cardGame1,
  cardGame2,
  cardGame3,
  cardGameMobile1,
  cardGameMobile2,
  cardGameMobile3
];
const whistlerAppScreenshots = [
  whistlerApp1,
  whistlerApp2,
  whistlerApp3,
  whistlerAppMobile1,
  whistlerAppMobile2,
  whistlerAppMobile3
];
const foxBookScreenshots = [
  foxBook1,
  foxBook2,
  foxBook3,
  foxBookMobile1,
  foxBookMobile2,
  foxBookMobile3
];
const contactMethods = [
  {
    name: "Email",
    link: "https://formsubmit.co/el/dobuye",
    icon: contactEmail,
    color: "group-hover:text-red-400 group-hover:glow-pink",
    border: "group-hover:border-red-500/50",
    bg: "group-hover:bg-red-500/10"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/isaac-842886255/",
    icon: contactLinkedIn,
    color: "group-hover:text-blue-400 group-hover:glow-cyan",
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/10"
  },
  {
    name: "GitHub",
    link: "https://github.com/isaacrundev",
    icon: contactGithub,
    color: "group-hover:text-purple-400 group-hover:glow-purple",
    border: "group-hover:border-purple-500/50",
    bg: "group-hover:bg-purple-500/10"
  }
];
const Contact = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-20 relative flex justify-center overflow-hidden scroll-mt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-full h-[600px] bg-gradient-to-t from-brand-purple/10 via-brand-pink/5 to-transparent -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/20 blur-[150px] rounded-[100%] pointer-events-none -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full max-w-5xl px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-7xl font-black tracking-tight text-white mb-6", children: [
              t("contact.title1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t("contact.title2") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl font-light text-slate-300 max-w-2xl mx-auto", children: t("contact.desc") })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          variants: {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
          },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "flex flex-col w-full glass-card rounded-[3rem] p-8 md:p-12 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[60px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full z-10 relative", children: contactMethods.map((each, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.a,
              {
                href: each.link,
                target: "_blank",
                rel: "noreferrer",
                whileHover: { y: -10 },
                whileTap: { scale: 0.95 },
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: idx * 0.15 },
                viewport: { once: true },
                className: `group flex flex-col items-center justify-center gap-6 bg-slate-900/40 p-10 rounded-[2rem] border border-white/10 transition-all duration-500 backdrop-blur-md ${each.border} ${each.bg} shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-2xl`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 flex items-center justify-center bg-slate-950 rounded-2xl p-4 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: each.icon, alt: each.name, className: "w-full h-full object-contain filter drop-shadow-lg" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xl font-bold tracking-wide text-slate-300 transition-colors duration-500 ${each.color}`, children: each.name })
                ]
              },
              each.name
            )) })
          ]
        }
      )
    ] })
  ] });
};
const containerVariants$1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};
const itemVariants$1 = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};
const Hero = () => {
  const { t, i18n } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "main", className: "flex flex-col min-h-screen pt-28 pb-12 justify-center items-center overflow-hidden relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_10s_infinite]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-brand-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_12s_infinite_4s]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[10%] left-[40%] w-[600px] h-[600px] bg-brand-pink/10 rounded-full mix-blend-screen filter blur-[120px] animate-[blob_15s_infinite_2s]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: containerVariants$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        className: "flex flex-col items-center justify-center text-center gap-6 px-6 sm:px-12 z-10 w-full max-w-5xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants$1,
              className: "inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-brand-cyan" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base font-semibold text-slate-200 tracking-wide", children: t("hero.available") })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              variants: itemVariants$1,
              className: "text-6xl sm:text-7xl lg:text-9xl py-2 font-black tracking-tighter leading-[1.1] text-white",
              children: [
                t("hero.greeting"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Isaac Wu" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants$1, className: "text-xl sm:text-2xl lg:text-3xl text-slate-400 font-mono h-16 sm:h-20 mt-6 lg:mt-8 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            m,
            {
              sequence: [
                t("hero.developer"),
                2e3,
                t("hero.problemSolver"),
                2e3,
                t("hero.uiuxEngineer"),
                2e3,
                t("hero.lifelongLearner"),
                2e3
              ],
              wrapper: "span",
              speed: 40,
              repeat: Infinity,
              className: "text-white/80"
            },
            i18n.language
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants$1, className: "flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#showcases", className: "group relative px-10 py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold tracking-wide transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink opacity-0 group-hover:opacity-20 transition-opacity" }),
              t("hero.viewWork")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "px-10 py-4 rounded-2xl w-full sm:w-auto backdrop-blur-md bg-white/5 hover:bg-white/10 text-slate-100 font-bold border border-white/10 transition-all hover:scale-[1.03] active:scale-95", children: t("hero.contactMe") })
          ] })
        ]
      }
    )
  ] });
};
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1e3 : -1e3,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1e3 : -1e3,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 1e4;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
function SlideCard({ screenshots }) {
  const [[page, direction], setPage] = reactExports.useState([0, 0]);
  const imageIndex = wrap(0, screenshots.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, custom: direction, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.img,
      {
        loading: "lazy",
        className: "absolute inset-0 object-contain w-full h-full p-2",
        src: screenshots[imageIndex],
        custom: direction,
        variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        },
        drag: "x",
        dragConstraints: { left: 0, right: 0 },
        dragElastic: 1,
        onDragEnd: (_e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }
      },
      page
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute z-10 flex items-center justify-center w-12 h-12 text-2xl text-white bg-black/30 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-md rounded-full cursor-pointer select-none right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group",
        onClick: () => paginate(1),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-0.5 transition-transform", children: "❯" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute z-10 flex items-center justify-center w-12 h-12 text-2xl text-white bg-black/30 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-md rounded-full cursor-pointer select-none left-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group",
        onClick: () => paginate(-1),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:-translate-x-0.5 transition-transform", children: "❮" })
      }
    )
  ] });
}
const Showcase = ({
  index,
  name,
  desc,
  libraries,
  screenshots,
  deployedUrl,
  githubUrl,
  role,
  demoUsername,
  demoPswd
}) => {
  const techStack = libraries.split(",").map((t) => t.trim()).filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: index % 2 * 0.2 },
      viewport: { once: true, margin: "-50px" },
      className: "flex flex-col w-full h-full mx-auto glass-card rounded-[2rem] overflow-hidden group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-[300px] sm:h-[350px] shrink-0 overflow-hidden bg-slate-900 border-b border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SlideCard, { screenshots }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 z-20 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-red-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-amber-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-green-400" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-grow w-full px-8 py-8 relative -mt-6 z-20 bg-slate-900/90 backdrop-blur-xl rounded-t-[2rem] border-t border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors duration-300", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              githubUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all text-slate-300 hover:text-white hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.05)]", href: githubUrl, target: "_blank", rel: "noreferrer", title: "View Source", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { size: 22, strokeWidth: 2 }) }),
              deployedUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "w-12 h-12 flex items-center justify-center rounded-full bg-brand-cyan/20 hover:bg-brand-cyan/40 border border-brand-cyan/30 transition-all text-brand-cyan hover:text-white hover:scale-110 active:scale-95 glow-cyan", href: deployedUrl, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 22, strokeWidth: 2 }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-300 leading-relaxed text-base flex-grow mb-6 font-light", children: desc }),
          role && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { size: 18, className: "text-brand-purple" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-brand-purple text-sm", children: "Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-200 font-medium text-sm", children: role })
          ] }),
          demoUsername && demoPswd && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-950/50 p-4 rounded-xl border border-white/10 text-xs text-slate-400 font-mono flex flex-col gap-3 mb-6 shadow-inner", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-300 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 16, className: "text-brand-pink" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tracking-widest text-[11px] uppercase text-brand-pink/90", children: "Test Credentials" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-black/40 px-4 py-2.5 rounded-lg border border-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium tracking-wide", children: "User" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-cyan select-all font-bold", children: demoUsername })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-black/40 px-4 py-2.5 rounded-lg border border-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium tracking-wide", children: "Pass" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-cyan select-all font-bold", children: demoPswd })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-6 mt-auto border-t border-white/10", children: techStack.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 text-[11px] font-bold tracking-wider text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 rounded-full hover:bg-brand-cyan/20 cursor-default transition-colors", children: tech }, tech)) })
        ] })
      ]
    }
  );
};
const showcaseData = [
  {
    name: "MVDB",
    desc: "A multilanguage pure front-end website enables users to see and look up movie info.",
    libraries: "Ant Design, Axios, TanStack Router, React-spring, TanStack Query, React-i18next",
    screenshots: mvdbScreenshots,
    deployedUrl: "https://spiffy-scone-79afc0.netlify.app/",
    githubUrl: "https://gitlab.com/isaac.run.dev/mvdb"
  },
  {
    name: "YouBike Live Data Tracker",
    desc: "A web-based service enables users to check live data of the bicycle-sharing system (YouBike) in Taipei city",
    libraries: "Vite, ReactJS, TailwindCSS, Shadcn/ui, React Query, Axios",
    screenshots: youbikeScreenshots,
    deployedUrl: "https://youbike-tan.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/Youbike"
  },
  {
    name: "Diet or Die",
    desc: "A website for recording diet by bringing your own data or importing from OpenFoodFacts API *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.",
    libraries: "NextJS, ReactJS, NextAuthJS, Prisma, PostgreSQL, TailwindCSS, Shadcn/ui, React Hook Form, Zod, BcryptJS",
    screenshots: dodScreenshots,
    deployedUrl: "https://dod-nextjs.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/dod-nextjs",
    demoUsername: "aloha@qmail.com",
    demoPswd: "111111"
  },
  {
    name: "FoxBook",
    desc: "A CRUD MERN stack website for sharing posts among registered users",
    libraries: "MongoDB, ExpressJS, ReactJS, NodeJS, Mongoose, TailwindCSS, Flowbite, React Hook Form, React-router-dom, Zod, BcryptJS. *This project is built by using serverless database, you might see errors when sending the first request. Please try again later.",
    screenshots: foxBookScreenshots,
    deployedUrl: "https://nodejs-final-client.vercel.app/",
    githubUrl: "https://github.com/isaacrundev/nodejs-final"
  },
  {
    name: "Whistler App",
    desc: "An anonymous system for reporting inappropriate behaviors to admins. For both reporters and admins",
    libraries: "React, TypeScript, Redux(Redux-toolkit), React Router DOM, Material-UI, React Query, Axios, React-beautiful-dnd",
    screenshots: whistlerAppScreenshots,
    deployedUrl: "https://dev-whistler-app.vercel.app/login",
    githubUrl: "https://github.com/WMAD-0522-Final-Project/whistleblower-app-backend",
    role: "Frontend developer"
  },
  {
    name: "Card Game",
    desc: "Get a new deck of cards every single game. 100% no cheating guaranteed",
    libraries: "HTML, CSS, JavaScript, Bootstrap, jQuery, GSAP",
    screenshots: cardGameScreenshots,
    deployedUrl: "https://shiny-haupia-090eab.netlify.app/",
    githubUrl: "https://github.com/isaacrundev/js_final"
  }
];
const getDescKey = (name) => {
  switch (name) {
    case "MVDB":
      return "mvdbDesc";
    case "YouBike Live Data Tracker":
      return "youbikeDesc";
    case "Diet or Die":
      return "dodDesc";
    case "FoxBook":
      return "foxbookDesc";
    case "Whistler App":
      return "whistlerDesc";
    case "Card Game":
      return "cardgameDesc";
    default:
      return "";
  }
};
const Showcases = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "showcases", className: "flex flex-col items-center py-16 md:py-20 relative scroll-mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] -z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-full max-w-7xl px-6 sm:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "flex flex-col items-center mb-12 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-cyan font-mono font-bold tracking-widest uppercase mb-4 text-sm", children: t("showcases.subtitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-black tracking-tight text-white relative", children: [
              t("showcases.title1"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t("showcases.title2") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 w-full items-stretch justify-items-center", children: showcaseData.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Showcase,
        {
          index: i,
          name: item.name,
          desc: t(`showcases.${getDescKey(item.name)}`, item.desc),
          libraries: item.libraries,
          screenshots: item.screenshots,
          deployedUrl: item.deployedUrl,
          githubUrl: item.githubUrl,
          role: item.role ? t("showcases.role") : void 0,
          demoUsername: item.demoUsername,
          demoPswd: item.demoPswd
        },
        item.name
      )) })
    ] })
  ] });
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};
const About = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-20 relative overflow-hidden flex justify-center scroll-mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-7xl px-8 flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true, margin: "-100px" },
        className: "text-center mb-12",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-6xl font-black tracking-tight text-white inline-block relative", children: [
          t("about.title1"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t("about.title2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "lg:col-span-5 relative group rounded-[2.5rem] p-2 glass-card overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                className: "relative object-cover w-full h-[500px] rounded-[2.2rem] transition-transform duration-700 group-hover:scale-[1.02] filter group-hover:contrast-110",
                src: me,
                alt: "Isaac Wu"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "lg:col-span-7 flex flex-col justify-center p-7 lg:p-10 glass-card rounded-[2.5rem] relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 -top-32 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 text-slate-300 text-xl leading-relaxed font-light z-10 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trans, { i18nKey: "about.intro", components: { 1: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white font-bold" }) } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.story") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "italic text-slate-200", children: [
                t("about.quote1"),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-bold not-italic", children: t("about.quote2") }),
                t("about.quote3")
              ] }) })
            ] })
          ] })
        ]
      }
    )
  ] }) });
};
const menuItem = ["about", "showcases", "contact"];
function App() {
  const [scrollPosition, setScrollPosition] = reactExports.useState(0);
  const {
    t
  } = useTranslation();
  const BackToTopVisibility = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  reactExports.useEffect(() => {
    window.addEventListener("scroll", BackToTopVisibility);
    return () => window.removeEventListener("scroll", BackToTopVisibility);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Header, { children: [
      menuItem.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuButton, { text: t(`nav.${item}`), linkTo: "#" + item }, item)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Showcases, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    scrollPosition > 64 && /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {})
  ] });
}
export {
  App as component
};
