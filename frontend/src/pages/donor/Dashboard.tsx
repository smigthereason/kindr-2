import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../../styles/donor/Dashboard.css';
import '../../App.css';
import worldImage from "../../assets/world2.jpg";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define interfaces for your data types
interface User {
  id: number;
  // Add other user properties as needed
}

interface Donation {
  id: number;
  donation_amount: number;
  created_at: string;
  cause_id: number;
  // Add other donation properties as needed
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [donationHistory, setDonationHistory] = useState<Donation[]>([]);
  const [token] = useState<string | null>(localStorage.getItem("token"));

  // Fetch current user
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
        setUser(data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }

    fetchCurrentUser();
  }, [token]);

  // Fetch donations
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        if (!user || !token) return;

        const response = await fetch(
          `https://kind-backend.onrender.com/donor/${user.id}/donations`,
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
          setDonationHistory(data.donations);
        } else {
          console.error("Failed to fetch donations", response.status);
        }
      } catch (error) {
        console.error("Error fetching donations", error);
      }
    };

    fetchDonations();
  }, [user, token]);

  // Calculate donation metrics
  const calculateMetrics = () => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();

    const totalDonations = donationHistory.reduce((sum, donation) => 
      sum + donation.donation_amount, 0);

    const thisMonthDonations = donationHistory
      .filter(donation => {
        const donationDate = new Date(donation.created_at);
        return donationDate.getMonth() === thisMonth && 
               donationDate.getFullYear() === thisYear;
      })
      .reduce((sum, donation) => sum + donation.donation_amount, 0);

    const thisYearDonations = donationHistory
      .filter(donation => {
        const donationDate = new Date(donation.created_at);
        return donationDate.getFullYear() === thisYear;
      })
      .reduce((sum, donation) => sum + donation.donation_amount, 0);

    return { totalDonations, thisMonthDonations, thisYearDonations };
  };

  // Prepare chart data
  const prepareChartData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyData = new Array(12).fill(0);

    donationHistory.forEach(donation => {
      const date = new Date(donation.created_at);
      const month = date.getMonth();
      monthlyData[month] += donation.donation_amount;
    });

    return {
      labels: months,
      datasets: [{
        label: 'Donation Trends',
        data: monthlyData,
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        borderWidth: 2,
      }],
    };
  };

  const metrics = calculateMetrics();
  const chartData = prepareChartData();

  return (
    <div style={{ backgroundImage: `url(${worldImage})` }}>
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Donor Dashboard</h1>
          <div className="header-icons">
            <span className="notification-icon">🔔</span>
            <span className="options-icon">⋮</span>
          </div>
        </header>

        <div className="card-row">
          <div className="card overview-card this-month-card">
            <h2>This Month</h2>
            <p className="amount">${metrics.thisMonthDonations.toLocaleString()}</p>
            <Line data={chartData} />
          </div>

          <div className="card-wrapper">
            <div className="card overview-card this-year-card">
              <h2>This Year</h2>
              <p className="amount">${metrics.thisYearDonations.toLocaleString()}</p>
              <Line data={chartData} />
            </div>
          </div>

          <div className="card overview-card total-donations-card">
            <h2>Total Donations</h2>
            <p className="amount">${metrics.totalDonations.toLocaleString()}</p>
            <Line data={chartData} />
          </div>
        </div>

        <div className="card recent-transactions-card">
          <h2>Recent Transactions</h2>
          <ul>
            {donationHistory.slice(0, 5).map((donation) => (
              <li key={donation.id} className="recent-transaction-item">
                Donated ${donation.donation_amount.toFixed(2)} to Cause #{donation.cause_id} on{' '}
                {new Date(donation.created_at).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;