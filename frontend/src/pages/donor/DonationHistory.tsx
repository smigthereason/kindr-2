import React, { useEffect, useState } from "react";
import "../../styles/donor/DonationHistory.css";
import worldImage from "../../assets/world2.jpg";

// Define interfaces for the data structures
interface User {
  id: number;
  // Add other user properties as needed
}

interface Donation {
  id: number;
  cause_id: number;
  donation_amount: number;
  created_at: string;
  // Add other donation properties as needed
}

const DonationHistory: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [donationData, setDonationData] = useState<Donation[]>([]);
  const [token] = useState<string | null>(localStorage.getItem("token"));

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        if (!token) throw new Error("No token found in local storage");

        const response = await fetch("http://localhost:5000/current_user", {
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
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }

    fetchCurrentUser();
  }, [token]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        if (!user || !token) return;

        const response = await fetch(
          `http://127.0.0.1:5000/donor/${user.id}/donations`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data: { donations: Donation[] } = await response.json();
          setDonationData(data.donations);
        } else {
          console.error("Failed to fetch donations", response.status);
        }
      } catch (error) {
        console.error("Error fetching donations", error);
      }
    };

    fetchDonations();
  }, [user, token]);

  console.log(donationData.length);
  
  return (
    <>
      {donationData.length === 0 ? (
        <h1>Please make a donation</h1>
      ) : (
        <div
          className="donation-history-container"
          style={{ backgroundImage: `url(${worldImage})` }}
        >
          <div className="content">
            <h2>Donations History</h2>
            <div className="transaction-list">
              {donationData.map((donation) => (
                <div key={donation.id} className="transaction-item">
                  <div className="transaction-details">
                    <h4>Cause ID: {donation.cause_id}</h4>
                    <p>
                      <strong>Amount:</strong> $
                      {donation.donation_amount.toFixed(2)}
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(donation.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <button className="donation-button">See More</button> */}
          {donationData.length > 4 && 
          <button className="donation-button">See More</button>
          }
          </div>
        </div>
      )}
    </>
  );
};

export default DonationHistory;