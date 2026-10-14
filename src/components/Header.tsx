import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
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
      className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 md:px-12 pointer-events-none"
    >
      <div
        ref={backdrop}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-3xl border-b border-white/5 pointer-events-none -z-10"
      />
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-transparent pointer-events-auto">
        <div className="enter-left text-xl sm:text-2xl font-extrabold tracking-tighter">
          <span className="text-white hover:text-brand-cyan transition-colors cursor-pointer select-none">
            I.W
          </span>
        </div>

        <nav
          style={{ animationDelay: "0.1s" }}
          className="enter-down flex flex-row gap-1 sm:gap-6 items-center p-1.5 sm:p-2 rounded-full glass-card pointer-events-auto"
        >
          {children}
        </nav>
      </div>
    </header>
  );
};

export default Header;
