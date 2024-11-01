"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/images/kindr-logo-white.png";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Donations",
    path: "/donation",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const location = useLocation();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[40px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-black/70">
        {/* logo */}
        <div className="mt-14 mb-12 text-left text-2xl">
        <Link to="/">
          <img
            src={logo}
            alt="kindr logo"
            className="h-8 object-cover ml-0 mt-0"
          />
        </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-start items-start gap-8">
          {links.map((link, index) => {
            return (
              <Link
                to={link.path}
                key={index}
                className={`${
                  link.path === location.pathname &&
                  "text-accent border-b-2 border-accent"
                } text-3xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;