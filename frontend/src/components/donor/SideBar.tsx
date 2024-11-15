// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import kindrLogo from "../../assets/kindr-logo-white 1.png";
// import {
//   RiDashboardFill,
//   RiGroupFill,
//   RiHandHeartFill,
//   RiSettings4Fill,
// } from "react-icons/ri";
// import profileImage from "../../assets/man.png";
// import "../../styles/donor/Sidebar.css";

// interface SideBarProps {
//   onLogout: () => void;
// }

// const SideBar: React.FC<SideBarProps> = ({ onLogout }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     onLogout();
//     navigate("/");
//   };

//   const getActiveClass = (path: string) => {
//     return location.pathname === path ? "active" : "";
//   };
//   const [user, setUser] = useState<User | null>(null);
//   const [token] = useState<string | null>(localStorage.getItem("token"));
//   useEffect(() => {
//     async function fetchCurrentUser() {
//       try {
//         if (!token) throw new Error("No token found in local storage");

//         const response = await fetch("https://kind-backend.onrender.com/current_user", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok)
//           throw new Error(`Failed to fetch user data: ${response.statusText}`);

//         const data: User = await response.json();
//         console.log("User data fetched successfully:", data);
//         setUser(data);
//       } catch (error) {
//         console.error("Error fetching current user:", error);
//       }
//     }

//     fetchCurrentUser();
//   }, [token]);

//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <img src={kindrLogo} alt="Kindr Logo" className="kindr-logo" />
//         <div className="logo-divider bg-transparent"></div>

//         <nav className="sidebar-nav">
//           <Link
//             to="/donor/dashboard"
//             className={`sidebar-item ${getActiveClass("/donor/dashboard")}`}
//           >
//             <RiDashboardFill className="sidebar-icon" />
//             <span>Dashboard</span>
//           </Link>
//           <Link
//             to="/donor/donation-history"
//             className={`sidebar-item ${getActiveClass(
//               "/donor/donation-history"
//             )}`}
//           >
//             <RiGroupFill className="sidebar-icon" />
//             <span>History</span>
//           </Link>
//           <Link
//             to="/donor/add-donation"
//             className={`sidebar-item ${getActiveClass("/donor/add-donation")}`}
//           >
//             <RiHandHeartFill className="sidebar-icon" />
//             <span>Donate to Kindr</span>
//           </Link>
//           <Link
//             to="/donor/impact"
//             className={`sidebar-item ${getActiveClass("/donor/impact")}`}
//           >
//             <RiHandHeartFill className="sidebar-icon" />
//             <span>Donation Pages</span>
//           </Link>
//           <Link
//             to="/donor/settings"
//             className={`sidebar-item ${getActiveClass("/donor/settings")}`}
//           >
//             <RiSettings4Fill className="sidebar-icon" />
//             <span>Settings</span>
//           </Link>
//         </nav>

//         {/* Profile Section */}
//         <div className="profile-section">
//           <img src={profileImage} alt="Profile" className="profile-photo" />
//           <div className="profile-details">
//             <p className="profile-name">{user?.username}</p>
//           </div>
//           <div className="profile-controls">
//             <button className="arrow-button" onClick={toggleDropdown}>
//               ▲
//             </button>
//             {isDropdownOpen && (
//               <div className="profile-dropdown">
//                 <div className="dropdown-item">
//                   <Link to="/donor/settings">Manage Profile</Link>
//                 </div>
//                 <div className="dropdown-item" onClick={handleLogout}>
//                   Log Out
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import kindrLogo from "../../assets/kindr-logo-white 1.png";
import {
  RiDashboardFill,
  RiGroupFill,
  RiHandHeartFill,
  RiSettings4Fill,
} from "react-icons/ri";
import profileImage from "../../assets/man.png";
import "../../styles/donor/Sidebar.css";

interface SideBarProps {
  onLogout: () => void;
}

interface User {
  id: number;
  username: string;
  email: string;
  [key: string]: any; // Add additional fields as needed
}

const SideBar: React.FC<SideBarProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token] = useState<string | null>(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  const getActiveClass = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        if (!token) throw new Error("No token found in local storage");

        const response = await fetch(
          "https://kind-backend.onrender.com/current_user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }

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
        <div className="logo-divider bg-transparent"></div>

        <nav className="sidebar-nav">
          <Link
            to="/donor/dashboard"
            className={`sidebar-item ${getActiveClass("/donor/dashboard")}`}
          >
            <RiDashboardFill className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/donor/donation-history"
            className={`sidebar-item ${getActiveClass(
              "/donor/donation-history"
            )}`}
          >
            <RiGroupFill className="sidebar-icon" />
            <span>History</span>
          </Link>
          <Link
            to="/donor/add-donation"
            className={`sidebar-item ${getActiveClass("/donor/add-donation")}`}
          >
            <RiHandHeartFill className="sidebar-icon" />
            <span>Donate to Kindr</span>
          </Link>
          <Link
            to="/donor/impact"
            className={`sidebar-item ${getActiveClass("/donor/impact")}`}
          >
            <RiHandHeartFill className="sidebar-icon" />
            <span>Donation Pages</span>
          </Link>
          <Link
            to="/donor/settings"
            className={`sidebar-item ${getActiveClass("/donor/settings")}`}
          >
            <RiSettings4Fill className="sidebar-icon" />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-photo" />
          <div className="profile-details">
            <p className="profile-name">{user?.username || "Loading..."}</p>
          </div>
          <div className="profile-controls">
            <button className="arrow-button" onClick={toggleDropdown}>
              ▲
            </button>
            {isDropdownOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-item">
                  <Link to="/donor/settings">Manage Profile</Link>
                </div>
                <div className="dropdown-item" onClick={handleLogout}>
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
