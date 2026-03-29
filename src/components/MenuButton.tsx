type Props = {
  text: string;
  linkTo: string;
};

function MenuButton({ text, linkTo }: Props) {
  return (
    <a href={linkTo} className="relative px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold text-slate-300 hover:text-white transition-all group rounded-full hover:bg-white/10 overflow-hidden">
      <span className="relative z-10">{text}</span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-full bg-brand-cyan/20 blur-md transition-all duration-300 group-hover:w-full z-0"></span>
    </a>
  );
}

export default MenuButton;
