type Props = {
  children: JSX.Element | JSX.Element[];
};

const Header = ({ children }: Props) => {
  return (
    <div id="header" className="flex flex-row h-6 mx-10 mt-6 mb-4 ">
      <nav className="flex flex-row gap-5">{children}</nav>
    </div>
  );
};

export default Header;
