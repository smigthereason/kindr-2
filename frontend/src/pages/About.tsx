import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { RiCheckFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const About = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/loading");
  };

  
  const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

  return (
    <section className="h-full pt-24 xl:pt-20">
      <div className="bg-about img-bg min-h-[20vh] xl:min-h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <h1 id="goal" className="h2">About Us</h1>
      </div>
      <div  className="container mx-auto mt-40">
        <div className="flex flex-col">
          <div className="relative flex flex-col items-center xl:items-start xl:flex-row gap-10">
            <div className="xl:min-w-[500px] z-10 ">
              <h1 className="h2 font-semibold mb-8">Where it all Began</h1>
              <p  className="h3 mb-6">Who Are We?</p>

              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[420px] w-[420px] object-cover z-[2]"
              />
            </div>
            <div className="xl:self-end max-w-[90vw] flex flex-col justify-between gap-6 z-10">
              <p className="text-xl pl-4 border-l-2 border-accent text-white/60 ">
                We are a dedicated organization committed to addressing the
                critical issue of menstrual health and education in sub-Saharan
                Africa. Founded in response to alarming statistics about girls
                missing school due to lack of sanitary supplies, we've expanded
                our focus to include providing clean water and proper sanitation
                facilities.
              </p>
              <p className="text-sm text-white/40"></p>
              <div className="flex flex-col xl:flex-row gap-4">
                <div className="p-4 flex flex-col justify-center items-center bg-stone-700  xl:min-h-[300px] xl:p-8 xl:justify-around rounded-md">
                  <h1 className="text-xl mb-5 xl:text-2xl">Our Mission</h1>
                  <p className="text-white/50">
                    Our mission is to provide a platform for people to help
                    others in need.
                  </p>
                 
                </div>
                <div className="p-4 flex flex-col justify-center items-center bg-stone-700 xl:min-h-[300px] xl:p-8 xl:justify-around rounded-md">
                  <h1 className="text-xl mb-5 xl:text-2xl">Our Vision</h1>
                  <p className="text-white/50">
                    Our vision is to provide a platform for people to help
                    others in need.
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center mt-40 mr-14 relative">
            <div className="hidden xl:flex relative top-20 right-40 ">
              <img
                src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[250px] sm:h-[300px] xl:h-[360px] w-[250px] sm:w-[300px] xl:w-[360px] object-cover rounded-md z-0  relative -bottom-10 left-20 xl:left-10 "
              />
              <img
                src="https://images.unsplash.com/photo-1490424660416-359912d314b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[250px] sm:h-[300px] xl:h-[360px] w-[250px] sm:w-[300px] xl:w-[360px] object-cover relative -inset-20 xl:-inset-40 rounded-md z-10"
              />
            </div>
            <div className="ml-20 flex flex-col gap-12 z-10 text-xl">
              <h1 className="h2 text-center mb-5">
                <span className="border-b-2 border-accent">Our </span>Values
              </h1>
              <div className="flex items-center self-start flex-col  ">
                {/* dot */}
                <p className="flex items-center  gap-4 relative right-10">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 h3">Accredited Causes</h2>
                </p>
                <p className="text-white/60 ">
                  We partner only with verified, reputable organizations
                  dedicated to improving menstrual health and education. Our
                  rigorous vetting process ensures your donations make a real,
                  measurable impact.
                </p>
              </div>
              <div className="flex items-center self-start flex-col ">
                {/* dot */}
                <p className="flex items-center gap-4 relative right-10">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 h3">Focused Support</h2>
                </p>
                <p className="text-white/60 ">
                  We concentrate our efforts on providing sanitary supplies,
                  clean water, and proper sanitation facilities. By addressing
                  these specific needs, we maximize our impact on girls'
                  education and community development.
                </p>
              </div>
              <div className="flex text-start items-center  self-start flex-col ">
                {/* dot */}
                <p className="flex items-center text-start gap-4 relative right-14">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 h3">Data Driven</h2>
                </p>
                <p className="text-white/60 ">
                  We rely on robust data and research to guide our initiatives.
                  By tracking attendance rates, academic performance, and
                  community feedback, we continuously refine our approach for
                  optimal results.
                </p>
              </div>
            </div>

            <div className="absolute z-[0] w-[50%] h-[50%] left-20 bottom-40 blue__gradient" />
          </div>
          <div className="relative mt-20 xl:mt-40">
            <div className="mb-10 flex flex-col items-center justify-center">
              <h1 className="h2 text-center mb-5">Want to get Involved ?</h1>
              <p className="text-xl text-white/50 text-center max-w-[600px]">
                Your involvement can make a significant difference in the lives
                of countless girls across sub-Saharan Africa. By supporting our
                cause, you're not just providing sanitary supplies - you're
                opening doors to education, empowerment, and a brighter future.
                Whether you choose to make a one-time donation or set up
                recurring support, every contribution counts. Your generosity
                helps us provide essential resources, build proper facilities,
                and implement educational programs that create lasting change.
                Join us in breaking the cycle of missed school days and limited
                opportunities. Together, we can ensure that no girl has to
                choose between her education and her dignity.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-around gap- xl:gap-0 ">
              <div className="bg-stone-700 py-8 px-10 rounded-lg flex flex-col items-center justify-center h-[300px] w-[350px] z-10 mb-8 mt-8">
                <h2 className="text-4xl mb-7 text-center text-white/80">
                  Create <br />
                  Your Cause
                </h2>
                <Button variant="secondary" size="md" onClick={handleRedirect}>
                  Get Accredited
                </Button>
              </div>
              <div className="bg-stone-700 rounded-lg pb-6 px-6 flex flex-col justify-center items-center h-[300px] w-[350px] z-10">
                <h2 className="text-3xl mb-5 text-center text-white/80">
                  The Long Journey
                  <br /> to End Poverty <br />
                  begins here
                </h2>
                <Button
                  variant="outline"
                  size="md"
                  className="hover:text-white"
                  onClick={handleRedirect}
                >
                  Donate
                </Button>
              </div>
            </div>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 pink__gradient" />
          </div>
          <div  className="flex flex-col justify-center items-center mb-20">
            <h1 id="team" className="h2 font-semibold mt-20 mb-8 border-b-2 border-accent">
              Our Team
            </h1>
            <p className="h3 mb-6">A Strong and Devoted Team</p>
            <p className="text-xl text-center text-white/60 xl:max-w-[500px] ">
              We are a diverse group of passionate individuals united by a
              common goal: to improve girls' education through better menstrual
              health management. Our team combines expertise in education,
              public health, technology, and nonprofit management. From
              on-the-ground coordinators working directly with schools and
              communities, to our tech experts developing this donation
              platform, each member plays a crucial role. We're driven by the
              belief that every girl deserves the opportunity to attend school
              without interruption, and we work tirelessly to make this a
              reality. Together, we're not just distributing supplies - we're
              building a movement for lasting change in sub-Saharan Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
