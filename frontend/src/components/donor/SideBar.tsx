import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import kindrLogo from '../../assets/kindr-logo-white 1.png';
import { RiDashboardFill, RiGroupFill, RiHandHeartFill, RiSettings4Fill } from "react-icons/ri";
import profileImage from '../../assets/man.png';
import '../../styles/donor/Sidebar.css';

interface SideBarProps {
  onLogout: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleManageProfile = () => {
    navigate('/donor/manage-profile');
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const getActiveClass = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };


  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img src={kindrLogo} alt="Kindr Logo" className="kindr-logo" />
        <div className="logo-divider bg-transparent"></div>

        <nav className="sidebar-nav">
          <Link to="/donor/dashboard" className={`sidebar-item ${getActiveClass('/donor/dashboard')}`}>
            <RiDashboardFill className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
          <Link to="/donor/donation-history" className={`sidebar-item ${getActiveClass('/donor/donation-history')}`}>
            <RiGroupFill className="sidebar-icon" />
            <span>History</span>
          </Link>
          <Link to="/donor/add-donation" className={`sidebar-item ${getActiveClass('/donor/add-donation')}`}>
            <RiHandHeartFill className="sidebar-icon" />
            <span>Donate</span>
          </Link>
          <Link to="/donor/impact" className={`sidebar-item ${getActiveClass('/donor/impact')}`}>
            <RiHandHeartFill className="sidebar-icon" />
            <span>Donation Pages</span>
          </Link>
          <Link to="/donor/settings" className={`sidebar-item ${getActiveClass('/donor/settings')}`}>
            <RiSettings4Fill className="sidebar-icon" />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Profile Section */}
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-photo" />
          <div className="profile-details">
            <p className="profile-name">John Doe</p>
          </div>
          <div className="profile-controls">
            <button className="arrow-button" onClick={toggleDropdown}>▲</button>
            {isDropdownOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-item" onClick={handleManageProfile}>Manage Profile</div>
                <div className="dropdown-item" onClick={handleLogout}>Log Out</div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
  );
};

export default SideBar;