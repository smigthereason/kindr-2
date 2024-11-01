import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import worldImage from '../../assets/world2.jpg';

const AdminDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const donors = [
    {
      name: "Bluenose",
      status: "Active",
      ratings: 40,
      projects: 400,
      highestSale: "$400,000",
      icon: <FaUser />,
    },
    {
      name: "Penny-wise",
      status: "Inactive",
      ratings: 57,
      projects: 200,
      highestSale: "$400,000",
      icon: <FaUser />,
    },
    {
      name: "Flotsam",
      status: "Active",
      ratings: 89,
      projects: 40000,
      highestSale: "$1,400,000",
      icon: <FaUser />,
    },
    {
      name: "Greg",
      status: "Inactive",
      ratings: 0,
      projects: 0,
      highestSale: "$0",
      icon: <FaUser />,
    },
    {
      name: "Patricia",
      status: "Active",
      ratings: 50,
      projects: 30,
      highestSale: "$225,000",
      icon: <FaUser />,
    },
    {
      name: "Shirley",
      status: "Active",
      ratings: 64,
      projects: 400,
      highestSale: "$400,000",
      icon: <FaUser />,
    },
  ];

  const filteredDonors = donors.filter((donor) =>
    donor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex ml-60 w-[1080px]">

      {/* Main Content */}
      <div className="w-[1280px] p-6 bg-black text-gray-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${worldImage})` }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <span className="text-sm text-gray-500">11/05/2024</span>
        </div>
        <div className="flex space-x-4 mb-8">
          <div className="w-1/3 bg-[#4C3E34] p-4 rounded">
            <h2 className="text-xl font-bold">30,000</h2>
            <p>Donors</p>
          </div>
          <div className="w-1/3 bg-[#4C3E34] p-4 rounded">
            <h2 className="text-xl font-bold">250</h2>
            <p>New donors</p>
          </div>
          <div className="w-1/3 bg-[#4C3E34] p-4 rounded">
            <h2 className="text-xl font-bold">$400,000</h2>
            <p>Revenue generated</p>
          </div>
        </div>
        <div className="bg-black bg-opacity-70 p-4 rounded mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">All donors</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search donors"
                className="bg-[#3F2E1F] text-gray-300 p-2 pl-10 rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-300">
              <thead>
                <tr className="text-left border-b border-gray-600">
                  <th className="pb-4 px-2">Donor</th>
                  <th className="pb-4 px-2">Status</th>
                  <th className="pb-4 px-2">Ratings</th>
                  <th className="pb-4 px-2">Projects sold</th>
                  <th className="pb-4 px-2">Highest sale</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonors.map((donor, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="py-2 px-2 flex items-center">
                      <span className="mr-2">{donor.icon}</span>
                      <span>{donor.name}</span>
                    </td>
                    <td className="py-2 px-2">
                    <span
                        className={`inline-block px-2 py-1 rounded ${
                          donor.status === "Active" ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {donor.status}
                      </span>
                    </td>
                    <td className="py-2 px-2">{donor.ratings}</td>
                    <td className="py-2 px-2">{donor.projects}</td>
                    <td className="py-2 px-2">{donor.highestSale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

                       
