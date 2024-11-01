import React, { useState } from 'react';
import '../../styles/donor/ManageProfile.css';
import defaultAvatar from '../../assets/man.png';

const ManageProfile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const [preferredGender, setPreferredGender] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Implement save logic here
    console.log('Profile updated with:', { profileImage, preferredGender });
  };

  return (
    <div className="manage-profile-container">
      <div className='profile-place'>
        <h2>Manage Profile</h2>

        <div className="profile-photo-section">
          <div className="current-photo">
            <img src={profileImage as string || defaultAvatar} alt="Current Profile" />
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="gender-section">
          <label htmlFor="gender">Preferred Gender</label>
          <select
            id="gender"
            value={preferredGender}
            onChange={(e) => setPreferredGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="other">Other</option>
          </select>
        </div>


        <button className="save-button" onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default ManageProfile;
