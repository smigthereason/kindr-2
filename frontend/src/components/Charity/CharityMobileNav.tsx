"use client";

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import kindrLogo from "../../assets/kindr-logo-white 1.png";
import profileImage from '../../assets/man.png';
import {
  RiDashboardFill,
  RiGroupFill,
  RiHandHeartFill,
  RiSettings4Fill,
} from "react-icons/ri";


interface DonorMobileNavProps {
  onLogout: () => void;
}

const links = [
  {
    name: "Dashboard",
    path: "/charity/dashboard",
    icon: <RiDashboardFill />,
  },
  {
    name: "Beneficiaries",
    path: "/charity/beneficiaries",
    icon: <RiGroupFill />,
  },
  {
    name: "Donation Page",
    path: "/charity/history",
    icon: <RiHandHeartFill />,
  },
  {
    name: "Settings",
    path: "/charity/settings",
    icon: <RiSettings4Fill />,
  },
  
];

const CharityMobileNav: React.FC<DonorMobileNavProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-end items-start md:hidden">
        <CiMenuFries className="text-[40px] text-accent" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col bg-[#29221D] p-6 w-3/4 max-w-xs">
        
        {/* Logo */}
        <div className="mt-6 mb-10 text-left text-2xl">
          
            <img
              src={kindrLogo}
              alt="Kindr logo"
              className="h-8 object-cover ml-0 my-2"
            />
          
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col gap-12">
          {links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className={`flex items-center gap-8 text-2xl capitalize transition-all ${
                link.path === location.pathname
                  ? "text-accent"
                  : "hover:text-accent"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="profile-section relative top-32 mt-8">
          <img src={profileImage} alt="Profile" className="profile-photo w-12 h-12 rounded-full" />
          <div className="profile-details mt-2">
            <p className="profile-name text-lg text-white">Charity One</p>
          </div>
          <div className="profile-controls mt-4">
            <button className="arrow-button text-white" onClick={toggleDropdown}>▼</button>
            {isDropdownOpen && (
              <div className="profile-dropdown mt-2 bg-gray-800 rounded-lg shadow-lg">
                <div className="dropdown-item p-2 text-white cursor-pointer" onClick={handleLogout}>Log Out</div>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CharityMobileNav;
