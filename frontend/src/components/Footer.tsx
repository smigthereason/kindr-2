// import React from "react";
// import { Link } from "react-router-dom";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black shadow-md z-50 w-full text-white relative text-4xl overflow-x-hidden">
//       <div className="container mx-auto pt-10">
//         <div className="flex flex-wrap justify-between items-start">
//           {/* Logo and tagline */}
//           <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
//             <img
//               className="h-auto w-48"
//               src="/src/assets/logo.png"
//               alt="Kind Logo"
//             />
//           </div>

//           {/* About */}
//           <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
//             <h3 className="font-bold mb-2">About</h3>
//             <ul className="text-xl space-y-1">
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Our Mission
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/team"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Team
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/impact"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Impact Stories
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Get Involved */}
//           <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
//             <h3 className="font-bold mb-2">Get Involved</h3>
//             <ul className="text-xl space-y-1">
//               <li>
//                 <Link
//                   to="/donate"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Donate
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/volunteer"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Events
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/fundraise"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Fundraise
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
//             <h3 className="font-bold mb-2">Support</h3>
//             <ul className="text-xl space-y-1">
//               <li>
//                 <Link
//                   to="/feedback"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Feedback
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/referrals"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Referrals
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/FAQ"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   F.A.Q
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Network */}
//           <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
//             <h3 className="font-bold mb-2">Social Network</h3>
//             <ul className="text-xl space-y-1">
//               <li>
//                 <Link
//                   to="https://facebook.com"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Facebook
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="https://instagram.com"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   Instagram
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="https://tiktok.com"
//                   className="text-white no-underline hover:text-[#ff6633]"
//                 >
//                   TikTok
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-8 flex justify-center">
//   <div className="w-full pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
//     Copyright © All Rights Reserved
//   </div>
// </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent shadow-md z-50 w-full text-white relative text-4xl overflow-x-hidden">
      <div className="w-full px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          {/* Logo and tagline */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0 flex justify-center md:justify-start">
            <img
              className="h-auto w-48"
              src="/src/assets/logo.png"
              alt="Kind Logo"
            />
          </div>

          {/* About */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2 text-center md:text-left">About</h3>
            <ul className="text-xl space-y-1 text-center md:text-left">
              <li>
                <Link
                  to="/about"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Impact Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2 text-center md:text-left">Get Involved</h3>
            <ul className="text-xl space-y-1 text-center md:text-left">
              <li>
                <Link
                  to="/donate"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteer"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/fundraise"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Fundraise
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2 text-center md:text-left">Support</h3>
            <ul className="text-xl space-y-1 text-center md:text-left">
              <li>
                <Link
                  to="/feedback"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/referrals"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Referrals
                </Link>
              </li>
              <li>
                <Link
                  to="/FAQ"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  F.A.Q
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Network */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold mb-2 text-center md:text-left">Social Network</h3>
            <ul className="text-xl space-y-1 text-center md:text-left">
              <li>
                <Link
                  to="https://facebook.com"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://instagram.com"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="https://tiktok.com"
                  className="text-white no-underline hover:text-[#ff6633]"
                >
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex justify-center">
          <div className="w-full pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
            Copyright © All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
