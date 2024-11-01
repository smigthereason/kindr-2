import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Volunteer from "./pages/Volunteer";
import Login from "./pages/Login";
import CharityDashboard from "./pages/Charity/Dashboard";
import Beneficiaries from "./pages/Charity/Beneficiaries";
import History from "./pages/Charity/History";
import CharitySettings from "./pages/Charity/Settings";
import CharitySidebar from "./components/Charity/Sidebar";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import DonorSidebar from './components/donor/SideBar';
import DonorDashboard from "./pages/donor/Dashboard";
import DonationHistory from "./pages/donor/DonationHistory";
import ManageProfile from "./pages/donor/ManageProfile";
import DonorSettings from "./pages/donor/Settings";
import BeneficiaryPage from "./pages/BeneficiaryPage";
import Impact from "./pages/donor/Impact";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Loading from "./pages/Loading";
import AdminSidebar from "./components/Admin/AdminSidebar";
import AdminCharity from "./pages/Admin/Charities";
import Donators from "./pages/Admin/Donators";
import AdminSettings from "./components/Admin/Settings"; 
import AddCharity from "./pages/Charity/AddCharity";
import "./App.css";
import AddDonation from "./pages/donor/AddDonation";
import GetCharity from "./pages/Admin/GetCharity";

interface User {
  role: 'charity' | 'donor' | 'admin';
  // Add any other relevant fields
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate authentication
    const authenticatedUser = localStorage.getItem("user");
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  }, []);

  const ProtectedRoute = ({
    children,
    requiredRole,
  }: {
    children: React.ReactNode;
    requiredRole: 'charity' | 'donor' | 'admin';
  }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    if (user.role !== requiredRole) {
      // Redirect to respective dashboard based on user role
      const roleRedirect = {
        charity: "/charity/dashboard",
        donor: "/donor/dashboard",
        admin: "/admin/admin-dashboard"
      };
      return <Navigate to={roleRedirect[user.role]} />;
    }

    return <>{children}</>;
  };

  function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const publicRoutes = ["/", "/beneficiary", "/contact", "/about", "/donation", "/FAQ", "/volunteer"];
    const isPublicRoute = publicRoutes.includes(location.pathname);

    return (
      <div className="flex flex-col min-h-screen">
        {isPublicRoute && <Header />}
        <main className="flex-grow">{children}</main>
        {isPublicRoute && <Footer />}
      </div>
    );
  }

  const handleLogout = () => {
    // Clear user data and tokens
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Update user state
    setUser(null);
  };
  

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/beneficiary" element={<BeneficiaryPage />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/login" element={<Login setUser={setUser} />} />

          {/* Protected Charity Routes */}
          <Route
            path="/charity/*"
            element={
              <ProtectedRoute requiredRole="charity">
                <div className="flex">
                  <CharitySidebar  onLogout={handleLogout} />
                  <div className="flex-1 p-4 ">
                    <Routes>
                      <Route path="dashboard" element={<CharityDashboard />} />
                      <Route path="beneficiaries" element={<Beneficiaries />} />
                      <Route path="history" element={<History />} />
                      <Route path="add-charity" element={<AddCharity />} />
                      <Route path="settings" element={<CharitySettings />} />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

                  {/* Protected Donor Routes */}
                  <Route
            path="/donor/*"
            element={
              <ProtectedRoute requiredRole="donor">
              <div className="flex">
                <DonorSidebar onLogout={handleLogout} />
                <div className="flex-1 p-4 ">
                  <Routes>
                    <Route path="dashboard" element={<DonorDashboard />} />
                    <Route path="donation-history" element={<DonationHistory />} />
                    <Route path="add-donation" element={<AddDonation />} />
                    <Route path="manage-profile" element={<ManageProfile />} />
                    <Route path="settings" element={<DonorSettings />} />
                    <Route path="impact" element={<Impact />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute requiredRole="admin">
                <div className="flex">
                  <AdminSidebar onLogout={handleLogout} />
                  <div className="flex-1 p-4 ">
                    <Routes>
                      <Route path="admin-dashboard" element={<AdminDashboard />} />
                      <Route path="charities" element={<AdminCharity />} />
                      <Route path="donators" element={<Donators />} />
                      <Route path="get-charity" element={<GetCharity />} />
                      <Route path="settings" element={<AdminSettings />} />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
