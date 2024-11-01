import React from "react";
import { NavLink } from "react-router-dom";
import {
  RiBookOpenFill,
  RiDashboardFill,
  RiGroupFill,
  RiHandHeartFill,
  RiSettings4Fill,
} from "react-icons/ri";
import logo from "../assets/images/kindr-logo-white.png";
import placeholder from "../assets/images/placeholder.png";

const Sidebar = () => {
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 bg-secondary shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center">
              <img
                src={logo}
                alt="kindr logo"
                className="h-6 object-cover mx-auto my-4"
              />
              <hr className="mx-3 border-stone-500" />
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "bg-zinc-600 text-white"
                          : "bg-secondary hover:bg-stone-500 hover:text-white text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiDashboardFill size={21} />
                    <span className="pl-4 ">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/beneficiaries"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "bg-zinc-600 text-white"
                          : "bg-secondary hover:bg-stone-500 hover:text-white text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiGroupFill size={21} />
                    <span className="pl-4">Beneficiaries</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/donations"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "bg-zinc-600 text-white"
                          : "bg-secondary hover:bg-stone-500 hover:text-white text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiHandHeartFill size={21} />
                    <span className="pl-4">Donations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/storymngt"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "bg-zinc-600 text-white"
                          : "bg-secondary hover:bg-stone-500 hover:text-white text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiBookOpenFill size={21} />
                    <span className="pl-4">Story Management</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "bg-zinc-600 text-white"
                          : "bg-secondary hover:bg-stone-500 hover:text-white text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiSettings4Fill size={21} />
                    <span className="pl-4">Settings</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <hr className="mx-1 mb-3 border-stone-500" />
            <div className=" flex items-center justify-center">
              <img src={placeholder} alt="User" className="rounded-full mr-2 h-8" />
              <span className="text-white">Jane Smith</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
