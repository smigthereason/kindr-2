import React, { useState } from 'react';
import '../../styles/donor/Settings.css'; 
import Account from '../../components/donor/Account'; 
import Password from '../../components/donor/Password';
import worldImage from "../../assets/world2.jpg";


const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('account');

  return (
    <div className="settings-container"
    style={{ backgroundImage: `url(${worldImage})` }}>
      
        <div className="settings-nav">
          <button 
            className={`settings-nav-button ${activeSection === 'account' ? 'active' : ''}`}
            onClick={() => setActiveSection('account')}
          >
            Account Settings
          </button>
          <button 
            className={`settings-nav-button ${activeSection === 'password' ? 'active' : ''}`}
            onClick={() => setActiveSection('password')}
          >
            Password
          </button>
        </div>
        
        <div className="settings-content">
          {activeSection === 'account' && (
            <div className="settings-section">
              
              <h2>Account Settings</h2>
              <Account />
            </div>
          )}
          
          {activeSection === 'password' && (
            <div className="settings-section">
              <h3>Password</h3>
              <Password />
            </div>
          )}
        </div>
      </div>
   
  );
};

export default Settings;
