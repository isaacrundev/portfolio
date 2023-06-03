type Props = {
  children: JSX.Element | JSX.Element[];
};

const Header = ({ children }: Props) => {
  return (
    <div id="header" className="absolute z-10 flex flex-row w-full">
      <nav className="flex flex-row gap-5 py-4">{children}</nav>
    </div>
  );
};

export default Header;
