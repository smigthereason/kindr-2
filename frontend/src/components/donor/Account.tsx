import React, { useState } from "react";
import "../../styles/donor/Account.css";
import defaultAvatar from "../../assets/man.png";

const Account: React.FC = () => {
  const [profileImage] = useState<string | ArrayBuffer | null>(null);
  const [email, setEmail] = useState("");

  // const handleSaveChanges = () => {
  //   // Implement save logic here
  //   console.log('Profile updated with:', { profileImage, preferredGender });
  // };
  return (
    <div className="account-container">
      <div className="account-inner">
        <h2 className="title">Account Settings</h2>
        <form className="form">
          {/* <div className="form-group">
            <label className="label" htmlFor="country">
              Pick Your Country
            </label>
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
          </div> */}
          {/* <div className="form-group">
            <label className="label" htmlFor="language">
              Preferred Language
            </label>
            <div className="select-container">
              <select className="select" id="language" required>
                <option>Choose...</option>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
          </div> */}
          {/* <div className="line"></div> */}
          <div className="personal-info">
            <h2 className="section-title">Personal Info:</h2>
            <div className="profile-photo-section">
              <div className="current-photo mt-4">
                <img
                  src={(profileImage as string) || defaultAvatar}
                  alt="Current Profile"
                />
              </div>
              {/* <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              /> */}
            </div>

            <div className="form-group">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input className="input" id="username" type="text" required />
            </div>

            <div className="mb-4">
              <span className="block text-sm font-medium mb-2">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="actions">
              <button className="submit-button" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
