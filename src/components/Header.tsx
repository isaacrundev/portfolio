import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const y = useTransform(scrollY, [0, 50], [0, 0]);

  return (
    <motion.header 
      id="header" 
      className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 pointer-events-none"
    >
      <motion.div 
        style={{ opacity, y }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-3xl border-b border-white/5 pointer-events-none -z-10"
      />
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-transparent pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-extrabold tracking-tighter"
        >
          <span className="text-white hover:text-brand-cyan transition-colors cursor-pointer select-none">
            I.W
          </span>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-row gap-2 sm:gap-6 items-center p-2 rounded-full glass-card pointer-events-auto"
        >
          {children}
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
