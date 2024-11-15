import React, { useEffect, useState } from "react";
import axios from "axios";
import worldImage from "../../assets/world2.jpg";

// Define the User type
interface User {
  id: string; // or number, depending on your database schema
  email: string;
  username: string;
  // Add other properties as needed
}

const causes = [
  {
    name: "Healthcare & Medical",
    id: 1,
  },
  {
    name: "Educational & Tutoring",
    id: 2,
  },
  {
    name: "Elder & Disabled Care",
    id: 3,
  },
  {
    name: "Construction & Repair",
    id: 4,
  },
  {
    name: "Construction & Repair",
    id: 5,
  },
  {
    name: "Relief Support",
    id: 6,
  },
  {
    name: "Food Services",
    id: 7,
  },
  {
    name: "Home & Shelter Services",
    id: 8,
  },
  {
    name: "Other",
    id: 9,
  },
];

const AddDonation: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCause, setSelectedCause] = useState<string>("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeMonthly, setSubscribeMonthly] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [user, setUser] = useState<User | null>(null); // Change to User type or null

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in local storage");
        }

        // const response = await fetch("http://localhost:5000/current_user", {
        const response = await fetch("https://kind-backend.onrender.com/current_user", {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }

        const data: User = await response.json(); // Assume data matches the User structure
        console.log("User data fetched successfully:", data);
        setUser(data);
        setEmail(data.email);
        setFirstName(data.username);
        // Set additional user properties if needed
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }

    fetchCurrentUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!user) {
        throw new Error("User is not defined");
      }

      const response = await axios.post(
        // "http://127.0.0.1:5000/donate",
        "https://kind-backend.onrender.com/donate",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          user_id: user.id, // Access the id property safely
          cause_id: selectedCause, // Include selected cause
          agree_to_terms: agreeToTerms,
          subscribe_monthly: subscribeMonthly,
          donation_amount: parseFloat(donationAmount),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT token in Authorization header
          },
        }
      );

      console.log(response.data);
      setSubmissionMessage(
        `Thank you for your generosity! Your donation of $${donationAmount} has been successfully made.`
      );

      // Clear form fields

      setLastName("");
      setSelectedCause(""); // Clear selected cause
      setAgreeToTerms(false);
      setSubscribeMonthly(false);
      setDonationAmount("");
    } catch (error) {
      console.error("Error submitting donation:", error);
      setSubmissionMessage(
        "An error occurred while processing your donation. Please try again."
      );
    }
  };

  return (
    <div
      className="add-donation-page relative min-h-screen mt-8 w-full lg:ml-10 xl:ml-40"
      style={{ backgroundImage: `url(${worldImage})` }}
    >
      <h2 className="text-4xl font-bold mb-4">Make a Donation</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-md mx-auto"
      >
        <div>
          <label htmlFor="firstName" className="block font-semibold text-2xl">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-semibold text-2xl">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="cause" className="block font-semibold text-2xl">
            Select a Cause
          </label>
          <select
            id="cause"
            value={selectedCause}
            onChange={(e) => setSelectedCause(e.target.value)}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select a cause</option>
            {causes.map((cause) => (
              <option key={cause.id} value={cause.name}>
                {cause.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="donationAmount"
            className="block font-semibold text-2xl"
          >
            Donation Amount
          </label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeToTerms"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="mr-2"
            required
          />
          <label htmlFor="agreeToTerms" className="text-lg">
            I agree to the terms and conditions
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="subscribeMonthly"
            checked={subscribeMonthly}
            onChange={(e) => setSubscribeMonthly(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="subscribeMonthly" className="text-lg">
            Subscribe to monthly updates
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Submit Donation
        </button>
      </form>
      {submissionMessage && (
        <p className="mt-6 text-center text-lg text-orange-500">
          {submissionMessage}
        </p>
      )}
    </div>
  );
};

export default AddDonation;
