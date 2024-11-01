import React from "react";
import { NavLink } from "react-router-dom";
import {
  RiBookOpenFill,
  RiDashboardFill,
  RiGroupFill,
  RiHandHeartFill,
  RiSettings4Fill,
} from "react-icons/ri";
import logo from "../../assets/kindr-logo-white 1.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import placeholder from "../../assets/images/placeholder.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = () => {
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 bg-secondary shadow-md w-60">
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
                    to="/charity/dashboard"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "text-[#ff6633]"
                          : "text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiDashboardFill size={21} />
                    <span className="pl-4 ">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/charity/beneficiaries"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "text-[#ff6633]"
                          : "text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiGroupFill size={21} />
                    <span className="pl-4">Beneficiaries</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/charity/donations"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "text-[#ff6633]"
                          : "text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiHandHeartFill size={21} />
                    <span className="pl-4">Donations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/charity/story-management"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "text-[#ff6633]"
                          : "text-gray-400"
                      } rounded-md font-bold text-sm py-3 px-4`
                    }
                  >
                    <RiBookOpenFill size={21} />
                    <span className="pl-4">Story Management</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/charity/settings"
                    className={({ isActive }) =>
                      `flex items-center ${
                        isActive
                          ? "text-[#ff6633]"
                          : "text-gray-400"
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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex flex-row items-center justify-center">
                  <img
                    src={placeholder}
                    alt="User"
                    className="rounded-full mr-2 h-8"
                  />
                  <span className="text-white">Jane Smith</span>
                  <MdKeyboardArrowDown className="text-white ml-2" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
