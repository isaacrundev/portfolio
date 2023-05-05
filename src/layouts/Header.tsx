type Props = {
  children: JSX.Element | JSX.Element[];
};

const Header = ({ children }: Props) => {
  return (
    <div className="flex flex-row h-6 mx-10 mb-5 mt-7">
      <div className="w-full text-5xl">Delicate Title</div>
      <nav className="flex flex-row gap-5">{children}</nav>
    </div>
  );
};

export default Header;
