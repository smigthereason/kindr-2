// import React, { useState } from 'react';
// import '../../styles/donor/Password.css'; 

// const Password: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     // Simple validation for email
//     if (!email) {
//       setError('Email address is required');
//       return;
//     }

//     // Clear error and proceed with form submission
//     setError('');
//     // Handle form submission logic here
//     console.log('Form submitted', { email });
//   };

//   return (
//     <div className="password-container">
//       <div className="password-inner">
//         <h2 className="title">Password Settings</h2>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="label" htmlFor="email">Email Address</label>
//             <input 
//               className="input" 
//               id="email" 
//               type="email" 
//               placeholder="Enter email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           {error && <div className="error-message">{error}</div>}
//           <div className="form-group">
//             <button className="save-changes-button" type="submit">
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Password;
import React, { useState } from "react";

const Password: React.FC = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Call API to update the password
      console.log("Password updated successfully");
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div className="bg-[#29221D]  p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      
      <form onSubmit={handlePasswordUpdate}> <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Current Password</span>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">New Password</span>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">Confirm New Password</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#ff6633] text-white py-2 px-4 rounded hover:bg-[#e55c2e]"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Password;
