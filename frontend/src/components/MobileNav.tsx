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
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-32 text-center text-2xl">
        <Link to="/">
          <img
            src={logo}
            alt="kindr logo"
            className="h-9 object-cover mx-auto my-2"
          />
        </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                to={link.path}
                key={index}
                className={`${
                  link.path === location.pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
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
