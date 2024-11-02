import React, { useState } from 'react';
import profileImage from '../../assets/man.png'; 
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../../styles/donor/Dashboard.css'; 
import '../../App.css'
import worldImage from "../../assets/world2.jpg";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample donor data
const donorData = {
  profileImageUrl: profileImage,
  donorName: 'John Doe',
  contactInfo: {
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main St, Springfield, IL'
  },
  totalDonations: 125000,
  thisMonthDonations: 15000,
  thisYearDonations: 95000,
  recentDonations: [
    { charity: 'Child Fund', amount: '$100', date: 'August 1, 2024' },
    { charity: 'School Supplies', amount: '$250', date: 'July 15, 2024' }
  ],
  recentTransactions: [
    { date: '2024-08-01', amount: '$100', charity: 'Child Fund' },
    { date: '2024-07-15', amount: '$250', charity: 'School Supplies' }
  ]
};

const donationData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: 'Donation Trends',
      data: [12000, 15000, 18000, 21000, 25000, 30000, 35000, 20000], // Data including August
      borderColor: '#28a745',
      backgroundColor: 'rgba(40, 167, 69, 0.2)',
      borderWidth: 2,
    },
  ],
};

const Dashboard: React.FC = () => {
  const [] = useState(donorData.contactInfo);
  const [] = useState(false);



  return (
    <div 
    style={{ backgroundImage: `url(${worldImage})` }}>
    <div className="dashboard">
      {/* Dashboard Title */}
      <header className="dashboard-header">
        <h1>Donor Dashboard</h1>
        <div className="header-icons">
          <span className="notification-icon">🔔</span>
          <span className="options-icon">⋮</span>
        </div>
      </header>

      {/* Overview Cards */}
      <div className="card-row">
        

        {/* This Month */}
        <div className="card overview-card this-month-card">
          <h2>This Month</h2>
          <p className="amount">${donorData.thisMonthDonations.toLocaleString()}</p>
          <div className="trend">
            <span className="trend-icon">📉</span>
            <span className="trend-percentage">-23.5%</span>
          </div>
          <Line data={donationData} />
        </div>

        {/* Wrapper for centering "This Year" */}
        <div className="card-wrapper">
          <div className="card overview-card this-year-card">
            <h2>This Year</h2>
            <p className="amount">${donorData.thisYearDonations.toLocaleString()}</p>
            <div className="trend">
              <span className="trend-icon">📈</span>
              <span className="trend-percentage">+19.3%</span>
            </div>
            <Line data={donationData} />
          </div>
    
        </div>

        {/* Total Donations */}
        <div className="card overview-card total-donations-card">
          <h2>Total Donations</h2>
          <p className="amount">${donorData.totalDonations.toLocaleString()}</p>
          <div className="trend">
            <span className="trend-icon">📈</span>
            <span className="trend-percentage">+6.9%</span>
          </div>
          <Line data={donationData} />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card recent-transactions-card">
        <h2>Recent Transactions</h2>
        <ul>
          {donorData.recentTransactions.map((transaction, index) => (
            <li key={index} className="recent-transaction-item">
              Donated {transaction.amount} to {transaction.charity} on {transaction.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import '../../styles/donor/Dashboard.css'; 
// import '../../App.css';
// import worldImage from "../../assets/world2.jpg";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Dashboard: React.FC = () => {
//   const [donorData, setDonorData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch donor data from your API
//     const fetchDonorData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/donor/donations'); // Replace with your actual API endpoint
//         const data = await response.json();
//         setDonorData(data);
//       } catch (error) {
//         console.error('Error fetching donor data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonorData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const hasDonations = donorData && donorData.totalDonations > 0;

//   // Set donation data for charts
//   const donationData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//     datasets: [
//       {
//         label: 'Donation Trends',
//         data: donorData ? donorData.donationTrends : [0, 0, 0, 0, 0, 0, 0, 0], // Placeholder if no data
//         borderColor: '#28a745',
//         backgroundColor: 'rgba(40, 167, 69, 0.2)',
//         borderWidth: 2,
//       },
//     ],
//   };

//   return (
//     <div style={{ backgroundImage: `url(${worldImage})` }}>
//       <div className="dashboard">
//         {/* Dashboard Title */}
//         <header className="dashboard-header">
//           <h1>Donor Dashboard</h1>
//           <div className="header-icons">
//             <span className="notification-icon">🔔</span>
//             <span className="options-icon">⋮</span>
//           </div>
//         </header>

//         {/* Overview Cards */}
//         <div className="card-row">
//           {/* Conditional Rendering for Donations */}
//           {!hasDonations ? (
//             <button className="donate-now-button" style={{ backgroundColor: 'orange' }}>
//               Donate Now to Begin
//             </button>
//           ) : (
//             <>
//               {/* This Month */}
//               <div className="card overview-card this-month-card">
//                 <h2>This Month</h2>
//                 <p className="amount">${donorData.thisMonthDonations.toLocaleString()}</p>
//                 <div className="trend">
//                   <span className="trend-icon">📉</span>
//                   <span className="trend-percentage">-23.5%</span>
//                 </div>
//                 <Line data={donationData} />
//               </div>

//               {/* Wrapper for centering "This Year" */}
//               <div className="card-wrapper">
//                 <div className="card overview-card this-year-card">
//                   <h2>This Year</h2>
//                   <p className="amount">${donorData.thisYearDonations.toLocaleString()}</p>
//                   <div className="trend">
//                     <span className="trend-icon">📈</span>
//                     <span className="trend-percentage">+19.3%</span>
//                   </div>
//                   <Line data={donationData} />
//                 </div>
//               </div>

//               {/* Total Donations */}
//               <div className="card overview-card total-donations-card">
//                 <h2>Total Donations</h2>
//                 <p className="amount">${donorData.totalDonations.toLocaleString()}</p>
//                 <div className="trend">
//                   <span className="trend-icon">📈</span>
//                   <span className="trend-percentage">+6.9%</span>
//                 </div>
//                 <Line data={donationData} />
//               </div>
//             </>
//           )}
//         </div>

//         {/* Recent Transactions */}
//         {hasDonations && (
//           <div className="card recent-transactions-card">
//             <h2>Recent Transactions</h2>
//             <ul>
//               {donorData.recentTransactions.map((transaction, index) => (
//                 <li key={index} className="recent-transaction-item">
//                   Donated {transaction.amount} to {transaction.charity} on {transaction.date}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
