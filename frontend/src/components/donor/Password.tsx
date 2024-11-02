import React, { useState } from 'react';
import '../../styles/donor/Password.css'; 

const Password: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simple validation for email
    if (!email) {
      setError('Email address is required');
      return;
    }

    // Clear error and proceed with form submission
    setError('');
    // Handle form submission logic here
    console.log('Form submitted', { email });
  };

  return (
    <div className="password-container">
      <div className="password-inner">
        <h2 className="title">Password Settings</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="email">Email Address</label>
            <input 
              className="input" 
              id="email" 
              type="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <button className="save-changes-button" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
