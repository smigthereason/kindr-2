import "../../styles/donor/DonationHistory.css";
import { useEffect, useState } from "react";

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
  const [donationData, setDonationData] = useState<Donation[]>([]);
  useEffect(() => {
    const fetchCharityDonations = async () => {
      const response = await fetch(`https://kind-backend.onrender.com/payment`, {
        method: "GET",
      });
      const data = await response.json();

      setDonationData(data.charity);
    };

    fetchCharityDonations();
  }, []);

  return (
    <>
      {donationData.length === 0 ? (
        <h1>Please make a donation</h1>
      ) : (
        <div className="m-auto">
          <p className="mb-4 font-semibold text-2xl">
            {donationData.length} Donors
          </p>
          <div className="text-">
            <h2 className="text-3xl">Donations History</h2>
            <div className="transaction-list">
              {donationData.map((donation) => (
                <div key={donation.id} className="transaction-item">
                  <div className="transaction-details">
                    <h4>Name: {donation.username}</h4>
                    <p>
                      <strong>Amount:</strong> ${donation.amount.toFixed(2)}
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(donation.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationHistory;
