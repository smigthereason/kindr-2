// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// // import Navbar from './components/Footer';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Donation from './pages/Donation';
// import Login from './pages/Login';
// import Dashboard from './pages/Charity/Dashboard';
// import Beneficiaries from './pages/Charity/Beneficiaries';
// import Donations from './pages/Charity/Donations';
// import Settings from './pages/Charity/Settings';
// import Sidebar from './components/Charity/Sidebar';
// import StoryMngt from './pages/StoryMngt';
// // import HomePage from './pages/donor/HomePage'; // Example Donor homepage
// // import FAQ from './pages/donor/FAQ';
// import './App.css';
// import Footer from './components/Footer';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // This is a mock authentication. In a real app, you'd check for an actual logged-in user.
//     const authenticatedUser = localStorage.getItem('user');
//     if (authenticatedUser) {
//       setUser(JSON.parse(authenticatedUser));
//     }
//   }, []);

//   const ProtectedRoute = ({ children, role }: { children: React.ReactNode, role: string }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }

//     if (user.role !== role) {
//       return user.role === 'charity' ? <Navigate to="/charity/dashboard" /> : <Navigate to="/donor/home" />;
//     }

//     return <>{children}</>;
//   };

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/donation" element={<Donation />} />
//             <Route path="/login" element={<Login setUser={setUser} />} />

//             {/* Protected Charity Routes */}
//             <Route path="/charity/*" element={
//               <ProtectedRoute role="charity">
//                 <div className="flex">
//                   <Sidebar />
//                   <div className="ml-60 flex-1 p-4">
//                     <Routes>
//                       <Route path="dashboard" element={<Dashboard />} />
//                       <Route path="beneficiaries" element={<Beneficiaries />} />
//                       <Route path="donations" element={<Donations />} />
//                       <Route path="settings" element={<Settings />} />
//                       <Route path="story-management" element={<StoryMngt />} />
//                     </Routes>
//                   </div>
//                 </div>
//               </ProtectedRoute>
//             } />

//             {/* Protected Donor Routes */}
//             <Route path="/donor/*" element={
//               <ProtectedRoute role="donor">
//                 <Routes>
//                   <Route path="home" element={<div>Donor Home Page</div>} />
//                   <Route path="faq" element={<div>Donor FAQ Page</div>} />
//                 </Routes>
//               </ProtectedRoute>
//             } />

//             {/* Catch-all route */}
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Login from "./pages/Login";
import Dashboard from "./pages/Charity/Dashboard";
import Beneficiaries from "./pages/Charity/Beneficiaries";
import Donations from "./pages/Charity/Donations";
import Settings from "./pages/Charity/Settings";
import Sidebar from "./components/Charity/Sidebar";
import StoryMngt from "./pages/StoryMngt";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import SideBar from './components/donor/SideBar';
import DonorDashboard from "./pages/donor/Dashboard";
import DonationHistory from "./pages/donor/DonationHistory";
// import MainLayout from "./pages/donor/MainLayout";
import ManageProfile from "./pages/donor/ManageProfile";
import DonorSettings from "./pages/donor/Settings";
import BeneficiaryPage from "./pages/donor/BeneficiaryPage";
import DonationPage from "./pages/donor/DonationPage";
import "./App.css";
import AdminDashboard from "./pages/Admin/AdminDashboard";
// import AdminSidebar from "./components/Admin/AdminSidebar";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // import AOS styles

// AOS.init();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This is a mock authentication. In a real app, you'd check for an actual logged-in user.
    const authenticatedUser = localStorage.getItem("user");
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  }, []);

  const ProtectedRoute = ({
    children,
    role,
  }: {
    children: React.ReactNode;
    role: string;
  }) => {
    // Comment out the authentication logic for now
    // if (!user) {
    //   return <Navigate to="/login" />;
    // }

    // if (user.role !== role) {
    //   return user.role === 'charity' ? <Navigate to="/charity/dashboard" /> : <Navigate to="/donor/home" />;
    // }

    return <>{children}</>;
  };

  // Move the Router inside the component where useLocation is used
  function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const location = useLocation(); // Now useLocation is within the Router context

    // Determine if the current route is public
    const isPublicRoute = [
      "/",
      "/contact",
      "/about",
      "/donation",
      "/login",
      "/FAQ",
    ].includes(location.pathname);

    return (
      <div className="flex flex-col min-h-screen">
        {isPublicRoute && <Header />}
        <main className="flex-grow">{children}</main>
        {isPublicRoute && <Footer />}
      </div>
    );
  }

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
          <Route path="/login" element={<Login setUser={setUser} />} />

          {/* Protected Charity Routes */}
          <Route
            path="/charity/*"
            element={
              <ProtectedRoute role="charity">
                <div className="flex ">
                  <Sidebar />
                  <div className="ml-60 flex-1 p-4  shadow-lg">
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route
                        path="/beneficiaries"
                        element={<Beneficiaries />}
                      />
                      <Route path="/donations" element={<Donations />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/story-management" element={<StoryMngt />} />
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
              <ProtectedRoute role="donor">
                <div className="flex ">
                  <SideBar />
                  <div className="ml-60 flex-1 p-4  shadow-lg">
                  <Routes>
                    <Route path="dashboard" element={<DonorDashboard />} />
                    <Route path="donation-history" element={<DonationHistory />} />
                    <Route path="manage-profile" element={<ManageProfile />} />
                    <Route path="settings" element={<DonorSettings />} />
                    <Route path="beneficiary" element={<BeneficiaryPage />} />
                    <Route path="donation-page" element={<DonationPage />} />
                  </Routes>
                  </div>
                  </div>
                {/* </MainLayout> */}
              </ProtectedRoute>
            }
          />

             {/* Protected Admin Routes */}
             <Route
            path="/admin/*"
            element={
              <ProtectedRoute role="admin">
              <div className="flex">
                {/* <AdminSidebar /> */}
                <div className="main-content shadow-lg">
                  <Routes>
                    <Route path="admin-dashboard" element={<AdminDashboard />} />
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
