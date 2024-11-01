import React, { useState } from "react";

const Account: React.FC = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [username, setUsername] = useState("adminUser");
  // const [profilePicture, setProfilePicture] = useState("/path/to/profile-pic.jpg");

  const handleSaveChanges = () => {
  
    console.log("Changes saved");
  };

  return (
    <div className="p-4 bg-[#29221D] rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div className="flex items-center mb-4">
        {/* <img src={profilePicture} alt="Profile" className="rounded-full h-24 w-24 mr-4" /> */}
        <div>
          <button className="bg-[#ff6633] text-white px-4 py-2 rounded">Change Profile Picture</button>
        </div>
      </div>
      <div className="mb-4">
        <span className="block text-gray-100">Username</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <span className="block text-gray-100">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        onClick={handleSaveChanges}
        className="bg-[#ff6633] text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Account;
