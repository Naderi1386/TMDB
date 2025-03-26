import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="bg-blue-950 py-5 px-[10rem] flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
