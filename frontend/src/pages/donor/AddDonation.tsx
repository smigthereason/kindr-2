import React, { useEffect, useState } from "react";
import axios from "axios";
import worldImage from "../../assets/world2.jpg";

const AddDonation: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeMonthly, setSubscribeMonthly] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in local storage");
        }

        const response = await fetch("http://localhost:5000/current_user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }

        const data = await response.json();
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
      const response = await axios.post(
        "http://127.0.0.1:5000/donate",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          user_id: user.id,
          comment,
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
      setFirstName("");
      setLastName("");
      setEmail("");
      setComment("");
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
          <label htmlFor="comment" className="block font-semibold text-2xl">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border p-2 rounded bg-inherit"
            rows={4}
          />
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
          <label htmlFor="agreeToTerms" className="font-semibold">
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
          <label htmlFor="subscribeMonthly" className="font-semibold">
            Subscribe to monthly donations
          </label>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Submit Donation
        </button>
      </form>
      {submissionMessage && (
        <p className="mt-6 text-xl font-semibold text-orange-500">
          {submissionMessage}
        </p>
      )}
    </div>
  );
};

export default AddDonation;
