import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaMoneyBillWave,
  FaFileAlt,
  FaHandHoldingHeart,
  FaCog,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../../assets/kindr-logo-white 1.png";

const AdminSidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-64 bg-[#4C3E34] p-4 flex flex-col text-white">
      <div className="flex items-center mb-8">
        <img src={logo} alt="logo" className="h-10 w-30 mt-2" />
      </div>
      <nav className="flex-1">
        <ul className="text-white">
          <li className="mb-2">
            <Link
              to="#"
              className="flex items-center py-2 px-4 rounded text-white bg-[#3F2E1F] hover:text-white"
            >
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="#"
              className="flex items-center py-2 px-4 rounded text-white hover:bg-[#3F2E1F] hover:text-white"
            >
              <FaMoneyBillWave className="mr-2" />
              Donations
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="#"
              className="flex items-center py-2 px-4 rounded text-white hover:bg-[#3F2E1F] hover:text-white"
            >
              <FaHandHoldingHeart className="mr-2" />
              Charities
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="#"
              className="flex items-center py-2 px-4 rounded text-white hover:bg-[#3F2E1F] hover:text-white"
            >
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-4 left-4">
        <span className="text-sm">Jane Smith</span>
        <button onClick={toggleDropdown} className="ml-2 text-gray-300">
          <FaUser />
        </button>
        {isDropdownOpen && (
          <div className="absolute bottom-4 left-16 bg-[#3F2E1F] p-2 rounded shadow-lg">
            <ul>
              <li className="py-1 px-2 hover:bg-[#4C3E34] rounded">
                <a href="#manage-account" className="flex items-center">
                  <FaUser className="mr-2" />
                  Manage Account
                </a>
              </li>
              <li className="py-1 px-2 hover:bg-[#4C3E1F] rounded">
                <a href="#logout" className="flex items-center">
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
