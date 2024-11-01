import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import kindrLogo from '../../assets/kindr-logo-white 1.png';
import { RiDashboardFill, RiGroupFill, RiHandHeartFill, RiSettings4Fill } from "react-icons/ri";
import profileImage from '../../assets/man.png';
import '../../styles/donor/Sidebar.css';

interface SideBarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
        <div className="logo-divider"></div>

        <nav className="sidebar-nav">
          <Link to="/charity/dashboard" className={`sidebar-item ${getActiveClass('/charity/dashboard')}`}>
            <RiDashboardFill className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
          <Link to="/charity/beneficiaries" className={`sidebar-item ${getActiveClass('/charity/beneficiaries')}`}>
            <RiGroupFill className="sidebar-icon" />
            <span>Beneficiaries</span>
          </Link>
          <Link to="/charity/history" className={`sidebar-item ${getActiveClass('/charity/history')}`}>
            <RiHandHeartFill className="sidebar-icon" />
            <span>Donation Page</span>
          </Link>
          <Link to="/charity/settings" className={`sidebar-item ${getActiveClass('/charity/settings')}`}>
            <RiSettings4Fill className="sidebar-icon" />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Profile Section */}
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-photo" />
          <div className="profile-details">
            <p className="profile-name">Charity One</p>
          </div>
          <div className="profile-controls">
            <button className="arrow-button" onClick={toggleDropdown}>▲</button>
            {isDropdownOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-item" onClick={handleLogout}>Log Out</div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
  );
};

export default Sidebar;

