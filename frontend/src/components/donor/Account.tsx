import React, { useState, useEffect } from "react";
import "../../styles/donor/Account.css";
import defaultAvatar from "../../assets/man.png";

const Account: React.FC = () => {
  const [profileImage] = useState<string | ArrayBuffer | null>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token] = useState<string | null>(localStorage.getItem("token"));

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        if (!token) throw new Error("No token found in local storage");

        const response = await fetch("https://kind-backend.onrender.com/current_user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setUsername(data.username);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }

    fetchCurrentUser();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      if (!token) throw new Error("No token found in local storage");

      const response = await fetch("https://kind-backend.onrender.com/update-account", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Account information updated successfully");
      } else {
        setMessage(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error updating account information:", error);
      setMessage("Failed to update account. Please try again.");
    }
  };

  return (
    <div className="account-container">
      <div className="account-inner">
        <h2 className="title">Account Settings</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="personal-info">
            <h2 className="section-title">Personal Info:</h2>
            <div className="profile-photo-section">
              <div className="current-photo mt-4">
                <img
                  src={(profileImage as string) || defaultAvatar}
                  alt="Current Profile"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                className="input"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="actions">
              <button className="submit-button" type="submit">
                Save Changes
              </button>
            </div>
            {message && <p className="message">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
