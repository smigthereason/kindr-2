// import "../../styles/donor/DonationHistory.css";
// import { useEffect, useState } from "react";

// // Define interfaces for the data structures
// interface Donation {
//   id: number;
//   cause_id: number;
//   donation_amount: number;
//   created_at: string;
//   donor_name: string; // Correctly defined donor name property
// }

// const DonationHistory: React.FC = () => {
//   const [donationData, setDonationData] = useState<Donation[]>([]);

//   useEffect(() => {
//     const fetchCharityDonations = async () => {
//       try {
//         const response = await fetch(`https://kind-backend.onrender.com/payment`, {
//           method: "GET",
//         });

//         if (!response.ok) {
//           throw new Error(`Error fetching donations: ${response.statusText}`);
//         }

//         const data = await response.json();

//         if (data.charity) {
//           setDonationData(data.charity);
//         } else {
//           console.warn("No charity donations found in the response.");
//         }
//       } catch (error) {
//         console.error("Error fetching donations:", error);
//       }
//     };

//     fetchCharityDonations();
//   }, []);

//   return (
//     <>
//       {donationData.length === 0 ? (
//         <h1>Please make a donation</h1>
//       ) : (
//         <div className="m-auto">
//           <p className="mb-4 font-semibold text-2xl">
//             {donationData.length} Donors
//           </p>
//           <div>
//             <h2 className="text-3xl">Donations History</h2>
//             <div className="transaction-list">
//               {donationData.map((donation) => (
//                 <div key={donation.id} className="transaction-item">
//                   <div className="transaction-details">
//                     <h4>Name: {donation.donor_name}</h4>
//                     <p>
//                       <strong>Amount:</strong> ${donation.donation_amount.toFixed(2)}
//                     </p>
//                     <p>
//                       <strong>Date:</strong>{" "}
//                       {new Date(donation.created_at).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default DonationHistory;

import "../../styles/donor/DonationHistory.css";
import { useEffect, useState } from "react";

// Define interfaces for the data structures
interface Donation {
  id: number;
  cause_id: number;
  donation_amount: number;
  created_at: string;
  donor_name: string;
}

const DonationHistory: React.FC = () => {
  const [donationData, setDonationData] = useState<Donation[]>([]);

  useEffect(() => {
    const fetchCharityDonations = async () => {
      try {
        const response = await fetch(`https://kind-backend.onrender.com/payment`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Error fetching donations: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.charity) {
          setDonationData(data.charity);
        } else {
          console.warn("No charity donations found in the response.");
        }
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchCharityDonations();
  }, []);

  // Check if there are no donations and return null to render nothing
  if (donationData.length === 0) {
    return <p>No donations available</p>; // You can render a message if you want, or just return null to show nothing
  }

  return (
    <div className="m-auto">
      <p className="mb-4 font-semibold text-2xl">
        {donationData.length} Donors
      </p>
      <div>
        <h2 className="text-3xl">Donations History</h2>
        <div className="transaction-list">
          {donationData.map((donation) => {
            // Ensure donation_amount is a valid number before rendering
            const donationAmount = isNaN(donation.donation_amount)
              ? 0 // Default to 0 if donation_amount is invalid
              : donation.donation_amount;

            return (
              <div key={donation.id} className="transaction-item">
                <div className="transaction-details">
                  <h4>Name: {donation.donor_name}</h4>
                  <p>
                    <strong>Amount:</strong> ${donationAmount.toFixed(2)}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(donation.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;



