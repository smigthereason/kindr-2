import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import kindrLogo from '../../assets/kindr-logo-white 1.png';
import { RiDashboardFill, RiGroupFill, RiHandHeartFill, RiSettings4Fill } from "react-icons/ri";
import profileImage from '../../assets/man.png';
import '../../styles/donor/Sidebar.css';

interface SidebarProps {
  onLogout: () => void;
}

interface User {
  username: string;
  // Add any other properties of the user here
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [token] = useState<string | null>(localStorage.getItem("token"));

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

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        if (!token) throw new Error("No token found in local storage");

        const response = await fetch("http://localhost:5000/current_user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error(`Failed to fetch user data: ${response.statusText}`);

        const data: User = await response.json();
        console.log("User data fetched successfully:", data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, [token]);

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
            <p className="profile-name">{user?.username || 'User'}</p>
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
