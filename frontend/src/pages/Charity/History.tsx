import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import worldImage from "../../assets/world2.jpg";
import "../../styles/donor/Impact.css";
import DonationHistory from "./DonationHistory";

// Helper functions
const getRandomDonationAmount = () => {
  return Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000;
};

const getRandomName = () => {
  const names = [
    "Alex",
    "Jordan",
    "Taylor",
    "Jamie",
    "Casey",
    "Morgan",
    "Riley",
    "Avery",
    "Sydney",
    "Drew",
    "Cameron",
    "Dakota",
    "Reese",
    "Quinn",
    "Finley",
    "Parker",
    "Sawyer",
    "Rowan",
    "Emerson",
    "Kendall",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const History: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [currentDonation, setCurrentDonation] = useState(0);
  const [targetDonation] = useState(500000);
  const [donors, setDonors] = useState<{ name?: string; amount: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentDonation >= targetDonation) {
        clearInterval(interval); // Stop updating if target is reached
        return;
      }

      const newDonation = getRandomDonationAmount();
      const isAnonymous = Math.random() > 0.5; // 50% chance to be anonymous

      setCurrentDonation((prevDonation) => {
        const newTotal = prevDonation + newDonation;

        // Update the donors list
        setDonors((prevDonors) => [
          ...prevDonors,
          {
            name: isAnonymous ? undefined : getRandomName(),
            amount: newDonation,
          },
        ]);

        return newTotal > targetDonation ? targetDonation : newTotal;
      });
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, [currentDonation, targetDonation]);

  const handleAddCharityClick = () => {
    navigate("/charity/add-charity"); // Navigate to the add charity page
  };

  return (
    <div
      className="min-h-screen ml-0 xl:ml-72 w-[360px] xl:w-[1000px] p-8 text-white"
      style={{ backgroundImage: `url(${worldImage})` }}
    >
      <h1 className="text-4xl mb-4">Charity Donation History</h1>
      {/* Button */}
      <button
        onClick={handleAddCharityClick}
        className="bg-orange-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Charity
      </button>
      <aside className="relative p-8 bg-black/80 rounded min-h-screen">
        <div className="mb-8">
          <h3 className="text-4xl mb-2">Charity</h3>
          <h4 className="text-3xl mb-2">${currentDonation.toLocaleString()}</h4>
          <p className="mb-4">${targetDonation.toLocaleString()} target</p>
          <progress
            className="progress-bar"
            value={currentDonation}
            max={targetDonation}
          ></progress>
        </div>

        <div>
          <h4 className="text-xl mb-4">Recent Donors</h4>
          <ul className="space-y-2 m-auto">
            <DonationHistory />
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default History;
