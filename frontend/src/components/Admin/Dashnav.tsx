import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardFill, RiSettings4Fill } from "react-icons/ri";

interface DashnavProps {
  title: string;
}

const Dashnav: React.FC<DashnavProps> = ({ title }) => {
  return (
    <div className="bg-[#3F2E1F] p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">{title}</h1>
      <nav className="flex space-x-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#ff6633]" : "text-white hover:text-[#ff6633]"
          }
        >
          <RiDashboardFill size={24} />
        </NavLink>
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? "text-[#ff6633]" : "text-white hover:text-[#ff6633]"
          }
        >
          <RiSettings4Fill size={24} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Dashnav;
