import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface DonateModalProps {
  charityId: number;
  onClose: () => void;
  onDonate: (amount: number) => void;
}

const DonateModal: React.FC<DonateModalProps> = ({
  charityId,
  onClose,
  onDonate,
}) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [username, setUserName] = useState<string | null>(null);

  const [isSuccess, setIsSuccess] = useState(false); // State to track donation success

  useEffect(() => {
    // Fetch user data to get email
    const fetchUserEmail = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User is not authenticated");
        return;
      }

      try {
        const response = await fetch("https://kind-backend.onrender.com/current_user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        console.log("Fetched user email:", data.email); // Debug: Log fetched email
        setEmail(data.email);
        setUserName(data.username); // Debug: Log fetched username
      } catch (err) {
        console.error("Error fetching user email:", err);
        setError("Failed to fetch user email");
      }
    };

    fetchUserEmail();
  }, []);

  const handleDonate = async () => {
    console.log("Donation amount entered:", donationAmount);

    if (donationAmount <= 0) {
      setError("Please enter a valid donation amount");
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsSuccess(false); // Reset success state before donation

    try {
      const token = localStorage.getItem("token");
      if (!token || !email)
        throw new Error("User is not authenticated or email missing");

      const response = await fetch(`https://kind-backend.onrender.com/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: donationAmount, email, username }),
      });

      console.log("API request sent to /payment");

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `Request failed with status ${response.status}`
        );
      }

      const data = await response.json();
      console.log("Donation successful:", data);

      setIsSuccess(true); // Set success state to true
      onDonate(donationAmount);
      // Optionally, you can reset the donation amount after success
      setDonationAmount(0);
      // You might want to delay closing the modal to let the user see the success message
      setTimeout(onClose, 1000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to process donation";
      setError(errorMessage);
      console.error("Donation error:", err);
    } finally {
      setIsLoading(false);
      console.log("Donation process completed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white/10 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">
          Donate to Charity #{charityId}
        </h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
            {error}
          </div>
        )}

        {isSuccess && (
          <div className="mb-4 p-2 bg-green-100 text-green-600 rounded">
            Donation process completed successfully!
          </div>
        )}

        <input
          type="number"
          min="1"
          placeholder="Enter donation amount"
          value={donationAmount || ""}
          onChange={(e) => setDonationAmount(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <div className="flex justify-end gap-4">
          <Button onClick={onClose} variant="secondary" disabled={isLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleDonate}
            disabled={isLoading || donationAmount <= 0}
          >
            {isLoading ? "Processing..." : "Donate"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
