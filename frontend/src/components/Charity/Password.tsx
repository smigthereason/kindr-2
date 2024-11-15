import React, { useEffect, useState } from "react";

interface User {
  email: string;
  // Define other user properties if there are more fields in the response
}

const Password: React.FC = () => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [,setUser] = useState<User | null>(null); // Specify type as User or null

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

        if (!response.ok)
          throw new Error(`Failed to fetch user data: ${response.statusText}`);

        const data: User = await response.json();
        console.log("User data fetched successfully:", data);
        setUser(data);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }

    fetchCurrentUser();
  }, [token]);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setNewPassword("");
    setConfirmPassword("");
    setCurrentPassword("");

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://kind-backend.onrender.com/update-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password updated successfully");
      } else {
        setMessage(data.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="bg-[#29221D] p-6 rounded shadow-md relative right-8 xl:right-0">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>

      <form onSubmit={handlePasswordUpdate}>
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
        <div className="mb-4">
          <span className="block text-sm font-medium mb-2">
            Current Password
          </span>
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
          <span className="block text-sm font-medium mb-2">
            Confirm New Password
          </span>
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
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
  );
};

export default Password;
