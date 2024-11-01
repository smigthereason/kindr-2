"use client";

import { Link, useLocation } from "react-router-dom";

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

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return <nav className="flex gap-8 ">
  {links.map((link, index) => {
    return <Link to={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium text-3xl hover:text-accent transition-all`}>{link.name}</Link>
  })}
  </nav>;
};

export default Nav;