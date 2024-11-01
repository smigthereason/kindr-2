// "use client";

// import { Link, useLocation } from "react-router-dom";

// const links = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "About Us",
//     path: "/about",
//   },
//   {
//     name: "Donations",
//     path: "/loading",
//   },
//   {
//     name: "contact",
//     path: "/contact",
//   },
// ];

// const Nav = () => {
//   const location = useLocation();
//   const pathname = location.pathname;
  
//   return <nav className="flex gap-8 ">
//   {links.map((link, index) => {
//     return <Link to={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium text-3xl hover:text-accent transition-all`}>{link.name}</Link>
//   })}
//   </nav>;
// };

// export default Nav;

import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Donations", path: "/loading" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <nav className="flex gap-4 md:gap-8 lg:gap-12 flex-wrap justify-center md:justify-start">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`${
            link.path === pathname ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium text-xl md:text-2xl lg:text-3xl hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
