import { useNavigate } from "react-router-dom";

// Components
import DonorMobileNav from "./DonorMobileNav";
import SideBar from "./SideBar";

const DonorHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic, e.g., clearing tokens or user data
    console.log("User logged out");
    // Redirect to the homepage or login page after logout
    navigate("/");
  };

  return (
    <header className="py-8 xl:py-8 text-white z-50 bg-opacity-80 bg-primary bg-cover bg-center bg-blend-darken fixed w-full left-0 top-0">
      {/* Full-width container without max-width */}
      <div className="flex justify-between items-center w-full px-4">


        {/* Desktop Sidebar for larger screens */}
        <div className="hidden xl:flex items-center gap-8">
          <SideBar onLogout={handleLogout} />
        </div>

        {/* Mobile Navigation for smaller screens */}
        <div className="xl:hidden">
          <DonorMobileNav onLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
};

export default DonorHeader;
