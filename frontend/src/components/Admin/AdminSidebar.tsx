import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import kindrLogo from '../../assets/kindr-logo-white 1.png';
import { RiDashboardFill, RiGroupFill, RiHandHeartFill, RiSettings4Fill } from "react-icons/ri";
import profileImage from '../../assets/man.png';
import '../../styles/donor/Sidebar.css';


interface SideBarProps {
  onLogout: () => void;
}

const AdminSidebar: React.FC<SideBarProps> = ({ onLogout }) => {
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
          <Link to="/admin/admin-dashboard" className={`sidebar-item ${getActiveClass('/admin/admin-dashboard')}`}>
            <RiDashboardFill className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/charities" className={`sidebar-item ${getActiveClass('/admin/charities')}`}>
            <RiGroupFill className="sidebar-icon" />
            <span>Charities</span>
          </Link>
          <Link to="/admin/donators" className={`sidebar-item ${getActiveClass('/admin/donators')}`}>
            <RiHandHeartFill className="sidebar-icon" />
            <span>Donators</span>
          </Link>
          <Link to="/admin/settings" className={`sidebar-item ${getActiveClass('/admin/settings')}`}>
            <RiSettings4Fill className="sidebar-icon" />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Profile Section */}
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-photo" />
          <div className="profile-details">
            <p className="profile-name">Admin One</p>
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

export default AdminSidebar;



