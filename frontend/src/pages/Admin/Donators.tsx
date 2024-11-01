import React from "react";
import image1 from "../../assets/Group 3.jpg";
import image2 from "../../assets/Group 3 (1).jpg";
import worldImage from '../../assets/world2.jpg';

// Assuming you want the background image to be set via CSS, you can use an inline style or Tailwind classes.

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

const Donator: React.FC = () => {
  return (
    <div
      className="donation-container ml-60 w-[1080px] mt-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${worldImage})` }}
    >
      <div className="content p-4  bg-opacity-20 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 mr-8 mt-6">Donation Progress</h2>
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="py-2 px-4">Charity</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Total</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Image</th>
            </tr>
          </thead>
          <tbody>
            {donationData.map((donation) => (
              <tr key={donation.id}>
                <td className="py-2 px-4">{donation.charity}</td>
                <td className="py-2 px-4">{donation.amount}</td>
                <td className="py-2 px-4">{donation.total}</td>
                <td className={`py-2 px-4 ${donation.status.toLowerCase()}`}>
                  {donation.status}
                </td>
                <td className="py-2 px-4">{donation.date}</td>
                <td className="py-2 px-4">
                  <img
                    src={donation.imageUrl}
                    alt={donation.charity}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="donation-button mt-4 px-4 py-2 bg-orange-500 text-white rounded">
          See More
        </button>
      </div>
    </div>
  );
};

export default Donator;
