import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  hidden?: boolean;
};

const Header = ({ children, hidden = false }: Props) => {
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Written straight to the node instead of held in state: the backdrop only
    // needs to fade in over the first 50px of scroll, and going through React
    // re-rendered the whole header on every scroll event.
    const fade = () => {
      if (backdrop.current) {
        backdrop.current.style.opacity = String(Math.min(window.scrollY / 50, 1));
      }
    };

    fade();
    window.addEventListener("scroll", fade, { passive: true });
    return () => window.removeEventListener("scroll", fade);
  }, []);

  return (
    <header
      id="header"
      inert={hidden}
      className={`pointer-events-none fixed left-0 top-0 z-50 w-full px-4 py-4 transition-[translate,opacity] duration-300 ease-out motion-reduce:transition-none sm:px-6 md:px-10 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div
        ref={backdrop}
        className="absolute inset-0 -z-10 border-b border-foam/5 bg-deep/55 backdrop-blur-xl"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#main"
          className="enter-left pointer-events-auto flex items-center gap-2.5"
          aria-label="Isaac Wu — back to top"
        >
          <span className="font-mono text-[11px] font-medium tracking-[0.32em] text-foam/90 drop-shadow-[0_1px_8px_rgba(1,12,18,0.4)] transition-colors hover:text-reef">
            I.W
          </span>
          <span className="h-1 w-1 rounded-full bg-reef/70" />
        </a>

        <nav
          style={{ animationDelay: "0.1s" }}
          className="enter-down pointer-events-auto flex flex-nowrap items-center gap-0.5 rounded-full border border-foam/10 bg-deep/40 px-1 py-1 backdrop-blur-md sm:gap-1 sm:px-2"
        >
          {children}
        </nav>
      </div>
    </header>
  );
};

export default Header;
