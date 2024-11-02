import React from "react";
import image1 from "../../assets/Group 3.jpg";
import image2 from "../../assets/Group 3 (1).jpg";
import "../../styles/donor/DonationHistory.css";
import worldImage from "../../assets/world2.jpg";

const donationData = [
  {
    id: 1,
    charity: "Child",
    amount: "$1000000000",
    total: "$10.00",
    status: "Inactive",
    date: "02/21/2021",
    imageUrl: image1,
  },
  {
    id: 2,
    charity: "School",
    amount: "$250",
    total: "$10.00",
    status: "Active",
    date: "02/14/2021",
    imageUrl: image2,
  },
  {
    id: 3,
    charity: "Food",
    amount: "$300",
    total: "$10.00",
    status: "Active",
    date: "02/14/2021",
    imageUrl: image2,
  },
];

const DonationHistory: React.FC = () => {
  return (
    <div className="donation-history-container" style={{ backgroundImage: `url(${worldImage})` }}>
      <div className="content">
        <h2>Donations History</h2>
        <div className="transaction-list">
          {donationData.map((donation) => (
            <div key={donation.id} className="transaction-item">
              <img
                src={donation.imageUrl}
                alt={donation.charity}
                className="transaction-image"
              />
              <div className="transaction-details">
                <h4>{donation.charity}</h4>
                <p><strong>Amount:</strong> {donation.amount}</p>
                <p><strong>Total:</strong> {donation.total}</p>
                <p className={donation.status.toLowerCase()}><strong>Status:</strong> {donation.status}</p>
                <p><strong>Date:</strong> {donation.date}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="donation-button">See More</button>
      </div>
    </div>
  );
};

export default DonationHistory;
