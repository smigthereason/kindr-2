import { Link } from "react-router-dom";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8 xl:py-8 text-white z-50 bg-opacity-80 bg-primary bg-cover bg-center bg-blend-darken fixed w-full left-0 top-0">
      {/* Full-width container without max-width */}
      <div className="flex justify-between items-center w-full px-4">
        {/* logo */}
        <Link to="/">
          <img
            src={logo}
            alt="kindr logo"
            className="h-auto w-48"
          />
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
