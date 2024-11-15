import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from "chart.js";
import "../../styles/Charity/Dashboard.css";
import worldImage from "../../assets/world2.jpg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface User {
  id: number;
  // Add other user properties as needed
}

interface CharityDonation {
  id: number;
  donation_amount: number;
  amount: number;
  created_at: string;
  cause_id: number;
  charity_title: string;
  username?: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [donationHistory, setDonationHistory] = useState<CharityDonation[]>([]);
  const [token] = useState<string | null>(localStorage.getItem("token"));

  // Chart options
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#333',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#666'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: '#666',
          callback: (value) => `$${value}`
        }
      }
    }
  };

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        if (!token) throw new Error("No token found in local storage");

        const response = await fetch("https://kind-backend.onrender.com/current_user", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error(`Failed to fetch user data: ${response.statusText}`);

        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }

    fetchCurrentUser();
  }, [token]);

  useEffect(() => {
    const fetchCharityDonations = async () => {
      try {
        if (!user || !token) return;

        const response = await fetch(`https://kind-backend.onrender.com/payment`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch charity donations");

        const data = await response.json();
        setDonationHistory(data.charity);
      } catch (error) {
        console.error("Error fetching charity donations:", error);
      }
    };

    fetchCharityDonations();
  }, [user, token]);

  const calculateMetrics = () => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();

    const totalDonations = donationHistory.reduce(
      (sum, donation) => sum + (donation.amount || donation.donation_amount),
      0
    );

    const thisMonthDonations = donationHistory
      .filter((donation) => {
        const donationDate = new Date(donation.created_at);
        return (
          donationDate.getMonth() === thisMonth &&
          donationDate.getFullYear() === thisYear
        );
      })
      .reduce((sum, donation) => sum + (donation.amount || donation.donation_amount), 0);

    const thisYearDonations = donationHistory
      .filter((donation) => {
        const donationDate = new Date(donation.created_at);
        return donationDate.getFullYear() === thisYear;
      })
      .reduce((sum, donation) => sum + (donation.amount || donation.donation_amount), 0);

    return { totalDonations, thisMonthDonations, thisYearDonations };
  };

  const prepareChartData = () => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    const currentYear = new Date().getFullYear();
    const monthlyData = new Array(12).fill(0);

    // Process donations
    donationHistory.forEach((donation) => {
      const date = new Date(donation.created_at);
      // Only include current year's donations
      if (date.getFullYear() === currentYear) {
        const month = date.getMonth();
        monthlyData[month] += (donation.amount || donation.donation_amount);
      }
    });

    return {
      labels: months,
      datasets: [
        {
          label: "Monthly Donations",
          data: monthlyData,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointRadius: 4,
          pointBackgroundColor: "rgb(75, 192, 192)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(75, 192, 192)",
          pointHoverBorderWidth: 2,
        }
      ]
    };
  };

  const metrics = calculateMetrics();
  const chartData = prepareChartData();

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${worldImage})` }}>
      <div className="dashboard p-6">
        <header className="dashboard-header mb-6">
          <h1 className="text-3xl font-bold">Charity Dashboard</h1>
          <div className="header-icons">
            <span className="notification-icon mr-4">🔔</span>
            <span className="options-icon">⋮</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#382f29] rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">This Month</h2>
            <p className="text-2xl font-bold text-green-600 mb-4">
              ${metrics.thisMonthDonations.toLocaleString()}
            </p>
            <div className="h-48">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-[#382f29] rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">This Year</h2>
            <p className="text-2xl font-bold  text-green-600 mb-4">
              ${metrics.thisYearDonations.toLocaleString()}
            </p>
            <div className="h-48">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-[#382f29] rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Total Donations</h2>
            <p className="text-2xl font-bold text-green-600 mb-4">
              ${metrics.totalDonations.toLocaleString()}
            </p>
            <div className="h-48">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="bg-[#382f29] rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
          <ul className="space-y-3">
            {donationHistory?.slice(0, 5).map((donation) => (
              <li key={donation.id} className="p-3 bg-slate-600 rounded-lg">
                <span className="font-semibold">
                  ${(donation.amount || donation.donation_amount).toFixed(2)}
                </span>
                {donation.username && <span> by {donation.username}</span>} on{" "}
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