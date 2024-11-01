// import React from 'react';

// const Partner: React.FC = () => {
//   return (
//     <div className="partner-page relative top-32 mb-40 p-8 max-w-4xl mx-auto bg-white/20 shadow-lg rounded-md">
//       <h2 className="text-3xl font-semibold text-center mb-6">Partner with Kindr</h2>
      
//       <section className="text-gray-200 space-y-8">
//         {/* Introduction */}
//         <div className="text-center">
//           <p className="text-lg">
//             At Kindr, we believe that positive change is driven by compassionate, dedicated partnerships. 
//             We are on a mission to provide support, resources, and opportunities to the less fortunate 
//             and communities in need. By partnering with us, you play a critical role in making this 
//             possible and expanding our reach and impact.
//           </p>
//         </div>

//         {/* Why Partner with Kindr */}
//         <div className="mt-8">
//           <h3 className="text-2xl font-semibold mb-4">Why Partner with Kindr?</h3>
//           <div className="flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-4 lg:mb-0">
//               <img src="path/to/why-partner-image.jpg" alt="Why Partner" className="rounded-md shadow-md" />
//             </div>
//             <p className="lg:w-1/2 text-lg">
//               Partnering with Kindr means being part of a cause that goes beyond basic needs. Together, 
//               we empower individuals and communities to improve their lives through direct support 
//               and sustainable programs. Whether you’re an individual, a corporation, or a charitable 
//               organization, partnering with Kindr allows you to directly impact lives and support 
//               communities in need.
//             </p>
//           </div>
//         </div>

//         {/* Ways to Partner */}
//         <div className="mt-8">
//           <h3 className="text-2xl font-semibold mb-4">How You Can Partner with Us</h3>

//           {/* Donation Partnerships */}
//           <div className="mt-6 flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-4 lg:mb-0">
//               <img src="path/to/donation-partnership-image.jpg" alt="Donation Partnerships" className="rounded-md shadow-md" />
//             </div>
//             <div className="lg:w-1/2">
//               <h4 className="text-xl font-semibold mb-2">1. Donation Partnerships</h4>
//               <p>
//                 Your donations can help sustain Kindr’s operations, provide immediate relief to communities 
//                 affected by crises, and fund essential services like healthcare, education, and shelter.
//               </p>
//             </div>
//           </div>

//           {/* Corporate Sponsorships */}
//           <div className="mt-6 flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-4 lg:mb-0">
//               <img src="path/to/corporate-sponsorship-image.jpg" alt="Corporate Sponsorships" className="rounded-md shadow-md" />
//             </div>
//             <div className="lg:w-1/2">
//               <h4 className="text-xl font-semibold mb-2">2. Corporate Sponsorships</h4>
//               <p>
//                 Corporations can have a significant impact by supporting Kindr’s initiatives. 
//                 We create mutually beneficial relationships where your company can increase visibility 
//                 while contributing to meaningful projects.
//               </p>
//             </div>
//           </div>

//           {/* Volunteering Services */}
//           <div className="mt-6 flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-4 lg:mb-0">
//               <img src="path/to/volunteering-image.jpg" alt="Volunteering Services" className="rounded-md shadow-md" />
//             </div>
//             <div className="lg:w-1/2">
//               <h4 className="text-xl font-semibold mb-2">3. Volunteering and Services</h4>
//               <p>
//                 Volunteering your time and expertise is a valuable way to support Kindr’s mission. 
//                 We are always looking for skilled professionals and passionate individuals to help 
//                 us carry out various initiatives.
//               </p>
//             </div>
//           </div>

//           {/* Technology and Resource Support */}
//           <div className="mt-6 flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-4 lg:mb-0">
//               <img src="path/to/technology-support-image.jpg" alt="Technology and Resource Support" className="rounded-md shadow-md" />
//             </div>
//             <div className="lg:w-1/2">
//               <h4 className="text-xl font-semibold mb-2">4. Technology and Resource Support</h4>
//               <p>
//                 Organizations with resources such as technology, educational materials, and medical 
//                 supplies are encouraged to partner with us to ensure these reach those who need 
//                 them most.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-12 text-center">
//           <h3 className="text-2xl font-semibold mb-4">Become a Partner Today</h3>
//           <p className="text-lg">
//             Join us in our mission to uplift and support the less fortunate, providing them with resources 
//             and opportunities for a brighter future.
//           </p>
//           <button className="px-6 py-2 mt-4 bg-orange-500 text-white rounded-md hover:bg-gray-700 transition">
//             Contact Us to Get Started
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Partner;
import { Button } from "@/components/ui/button";
import { RiCheckFill } from "react-icons/ri";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Partner = () => {
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
      <div className="bg-partner img-bg min-h-[20vh] xl:min-h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <h1 id="partner" className="h2">Partner with Us</h1>
      </div>
      <div className="container mx-auto mt-40">
        <div className="flex flex-col">
          <div className="relative flex flex-col items-center xl:items-start xl:flex-row gap-10">
            <div className="xl:min-w-[500px] z-10 ">
              <h1 className="h2 font-semibold mb-8">Why Partner with Us?</h1>
              <p className="h3 mb-6">Our Commitment</p>

              <img
                src="https://images.unsplash.com/photo-1498805983167-a523078d762c?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[420px] w-[420px] object-cover z-[2] rounded-full"
              />
            </div>
            <div className="xl:self-end max-w-[90vw] flex flex-col justify-between gap-6 z-10">
              <p className="pl-4 border-l-2 border-accent text-white/60">
                Partnering with us means joining a community dedicated to creating meaningful and sustainable change. Our partnerships are designed to bring value to both our organization and our partners, ensuring mutual benefits and impactful results.
              </p>
              <div className="flex flex-col xl:flex-row gap-4">
                <div className="p-4 flex flex-col justify-center items-center bg-stone-700 xl:min-h-[300px] xl:p-8 xl:justify-around rounded-md">
                  <h1 className="text-xl mb-5 xl:text-2xl">Our Values</h1>
                  <p className="text-white/50">
                    Our values guide us in building partnerships that focus on integrity, transparency, and impact.
                  </p>
                </div>
                <div className="p-4 flex flex-col justify-center items-center bg-stone-700 xl:min-h-[300px] xl:p-8 xl:justify-around rounded-md">
                  <h1 className="text-xl mb-5 xl:text-2xl">Our Vision</h1>
                  <p className="text-white/50">
                    We envision partnerships that create long-lasting positive changes in the communities we serve.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          </div>
          
          <div className="flex flex-col xl:flex-row justify-center items-center mt-40 ml-10 relative">
          
            <div className="ml-2 flex flex-col gap-12 z-10">
              <h1 className="h2 text-center mb-5">
                <span className="border-b-2 border-accent">Core </span>Values
              </h1>
              <div className="flex items-start self-start flex-col">
                <p className="flex items-center gap-4 relative left-10">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 text-2xl">Integrity</h2>
                </p>
                <p className="text-white/60">
                  We believe in building trust through honesty and transparency with our partners.
                </p>
              </div>
              <div className="flex items-start self-start flex-col">
                <p className="flex items-center gap-4 relative left-10">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 text-2xl">Sustainability</h2>
                </p>
                <p className="text-white/60">
                  Our focus on sustainability ensures that our projects bring lasting benefits.
                </p>
              </div>
              
            </div>
            <div className="hidden xl:flex relative top-20 ">
              <img
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[350px] max-w-full object-cover rounded-md relative -bottom-4 left-20 xl:left-10 z-10"
              />
             
            </div>

            <div className="absolute z-[0] w-[50%] h-[50%] left-20 bottom-40 blue__gradient" />
          </div>

          <div className="relative top-20 mt-10 mb-40 xl:mt-20">
            <div className="mb-10 flex flex-col items-center justify-center">
              <h1 className="h2 text-center mb-5">Get Involved</h1>
              <p className="h3 text-white/50 text-center max-w-[600px]">
                Join us in making a difference. Whether you're a business, NGO, or an individual, your support drives real change.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-around gap- xl:gap-0">
              <div className="bg-stone-700 py-8 px-10 rounded-lg flex flex-col items-center justify-center h-[300px] w-[350px] z-10 mb-8">
                <h2 className="text-4xl mb-7 text-center text-white/80">
                  Become a Partner
                </h2>
                <Button variant="secondary" size="md" onClick={handleRedirect}>
                  Start Here
                </Button>
              </div>
              <div className="bg-stone-700 rounded-lg pb-6 px-6 flex flex-col justify-center items-center h-[300px] w-[350px] z-10">
                <h2 className="text-3xl mb-5 text-center text-white/80">
                  Support Our Mission
                </h2>
                <Button
                  variant="outline"
                  size="md"
                  className="hover:text-white"
                  onClick={handleRedirect}
                >
                  Donate Now
                </Button>
              </div>
            </div>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 pink__gradient" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
