import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 select-none">
          I.W
        </div>
        <nav className="flex flex-row gap-6 sm:gap-10 items-center">
          {children}
        </nav>
      </div>
    </header>
  );
};

export default Header;
