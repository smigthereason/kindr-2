import { Link } from "react-router-dom";

import logo from "../assets/images/kindr-logo-white.png";
import { footerLinks } from "../constants/index";


const Foot = () => {
  return (
    <section className="py-8 xl:py-20 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* logo */}
        <Link to="/">
          <img
            src={logo}
            alt="kindr logo"
            className="h-10 object-cover mx-auto my-2"
          />
        </Link>

        {/* footer menu */}
        <div className="flex-1 w-full flex flex-row justify-center lg:justify-end flex-wrap md:mt-0 mt-6 md:px-0 px-2">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <Link to={link.link}>
                  <li key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-white/60 hover:text-accent cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}
                    >
                    {link.name}
                  </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foot;
