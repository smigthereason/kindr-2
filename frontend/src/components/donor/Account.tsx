import React from 'react';
import '../../styles/donor/Account.css';

const Account: React.FC = () => {
  return (
    <div className="account-container">
      <div className="account-inner">
        <h2 className="title">Account Settings</h2>
        <form className="form">
          <div className="form-group">
            <label className="label" htmlFor="country">Pick Your Country</label>
            <div className="select-container">
              <select className="select" id="country" required>
                <option>Choose...</option>
                <option>Kenya</option>
                <option>Tanzania</option>
                <option>Uganda</option>
                <option>Ethiopia</option>
                <option>Rwanda</option>
                <option>Burundi</option>
                <option>South Africa</option>
                <option>Nigeria</option>
                <option>Other</option> 
              </select>
              
            </div>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="language">Preferred Language</label>
            <div className="select-container">
              <select className="select" id="language" required>
                <option>Choose...</option>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
              
            </div>
          </div>
          <div className='line'></div>
          <div className="personal-info">
            <h2 className="section-title">Personal Info:</h2>
            <div className="flex-container">
              <div className="form-group half-width">
                <label className="label" htmlFor="first-name">First Name</label>
                <input className="input" id="first-name" type="text" required />
              </div>
              <div className="form-group half-width">
                <label className="label" htmlFor="last-name">Last Name</label>
                <input className="input" id="last-name" type="text" required />
              </div>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="username">Username</label>
              <input className="input" id="username" type="text" required />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="bio">Bio</label>
              <textarea className="textarea" id="bio" required></textarea>
            </div>
            <div className="actions">
              <button className="submit-button" type="submit">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
