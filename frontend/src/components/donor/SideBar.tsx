import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import kindrLogo from '../../assets/kindr-logo-white 1.png';
import pieChartImage from '../../assets/pie-chart.png';
import barGraphImage from '../../assets/graph-bar.png';
import settingsImage from '../../assets/gear.png';
import profileImage from '../../assets/man.png';
import '../../styles/donor/Sidebar.css';

const SideBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleManageProfile = () => {
    navigate('/donor/manage-profile'); // Updated route to match donor route
    setIsDropdownOpen(false);
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
          <Link to="/donor/dashboard" className={`sidebar-item ${getActiveClass('/donor/dashboard')}`}>
            <img src={pieChartImage} alt="Dashboard" className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
          <Link to="/donor/donation-history" className={`sidebar-item ${getActiveClass('/donor/donation-history')}`}>
            <img src={barGraphImage} alt="Donations" className="sidebar-icon" />
            <span>Donation History</span>
          </Link>
          <Link to="/donor/settings" className={`sidebar-item ${getActiveClass('/donor/settings')}`}>
            <img src={settingsImage} alt="Settings" className="sidebar-icon" />
            <span>Settings</span>
          </Link>
          <Link to="/donor/beneficiary" className={`sidebar-item ${getActiveClass('/donor/beneficiary')}`}>
            <img src={settingsImage} alt="Beneficiary" className="sidebar-icon" />
            <span>Beneficiary</span>
          </Link>
          <Link to="/donor/donation-page" className={`sidebar-item ${getActiveClass('/donor/donation-page')}`}>
            <img src={settingsImage} alt="Donation Page" className="sidebar-icon" />
            <span>Donation Page</span>
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
                <div className="dropdown-item">Log Out</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
