type Props = {
  text: string;
  linkTo: string;
};

function MenuButton({ text, linkTo }: Props) {
  return (
    <a href={linkTo} className="relative font-medium text-slate-300 hover:text-white transition-colors group py-1">
      {text}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </a>
  );
}

export default MenuButton;
