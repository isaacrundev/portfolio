type Props = {
  text: string;
  linkTo: string;
};

function MenuButton({ text, linkTo }: Props) {
  return (
    <a href={linkTo}>
      <div className="py-2 hover:pt-2 ">
        <div className="hover:border-b-2 hover:border-white hover:cursor-pointer">
          {text}
        </div>
      </div>
    </a>
  );
}

export default MenuButton;
