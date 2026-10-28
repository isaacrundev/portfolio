type Props = {
  text: string;
  linkTo: string;
};

function MenuButton({ text, linkTo }: Props) {
  return (
    <a
      href={linkTo}
      className="group relative rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-wide text-foam/65 transition-colors hover:text-foam sm:px-4 sm:py-2 sm:text-sm"
    >
      {text}
      <span className="absolute inset-x-2.5 -bottom-0.5 h-px origin-left scale-x-0 bg-reef/70 transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-4" />
    </a>
  );
}

export default MenuButton;
