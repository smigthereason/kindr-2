import { Link } from "react-router-dom";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8 xl:py-8 text-white z-50 bg-opacity-80 bg-primary bg-cover bg-center bg-blend-darken fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <img
            src={logo}
            alt="kindr logo"
            className="h-auto w-48  "
          />
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8 ">
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
