import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/donor/Side-bar';
import '../../styles/donor/MainLayout.css';

const MainLayout: React.FC = () => {
  const [] = useState(false);



  return (
    <div className="dashboard-container">
   <Sidebar />

      <div className="main-content">
        <Outlet /> {/* This is where the child routes, like Manage Profile, will render */}
      </div>
    </div>
  );
};

export default MainLayout;
