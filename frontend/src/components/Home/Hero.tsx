"use client";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";
// import hero from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <section className="relative pt-40 xl:pt-20">
      <div className="flex flex-row justify-center xl:justify-between items-center relative top-0 xl:top-20 left-0 xl:left-60">
        {/* text */}
        <div className="xl:min-w-[600px] z-10  mb-20">
          <h1 className="h2  text-center  max-w-[400px]">
            Are You Seeking Financial Aid for Medical Emergencies or Social Causes?
          </h1>
          {/* btns */}
          <div className="flex flex-col xl:flex-row relative right-0 xl:right-20 items-center justify-center gap-8 mt-20">
            <Link to="/loading">
              <Button
                variant="default"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Request Donation</span>
              </Button>
            </Link>
            <Link to="/loading">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:text-white"
              >
                <span className="transition-colors duration-100">
                  Donate and help
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* hero image */}
        {/* <div className="hidden xl:inline relative w-full h-[600px] z-20">
          <img
            src={hero}
            alt="hero"
            className="relative scale-[1.8] left-28 top-48 h-[420px]  hero_image "
          />

          <svg
            width="670"
            height="900"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[4.2rem] -right-[20rem] " // Ensure it positions correctly
          >
            <rect
              width="1000"
              height="380"
              x="100"
              y="80"
              rx="190"
              ry="190"
              stroke="orange"
              strokeWidth="4"
              strokeDasharray="10, 20"
              fill="none"
              transform="rotate(30, 380, 200)"
            />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
