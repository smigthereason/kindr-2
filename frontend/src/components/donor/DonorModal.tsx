import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface DonateModalProps {
  charityId: number;
  onClose: () => void;
  onDonate: (amount: number) => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ charityId, onClose, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = async () => {
    if (donationAmount <= 0) {
      setError("Please enter a valid donation amount");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/charity/${charityId}/donate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: donationAmount }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Donation successful:", data);
      
      onDonate(donationAmount);
      onClose();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process donation';
      setError(errorMessage);
      console.error("Donation error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white/10 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Donate to Charity #{charityId}</h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
            {error}
          </div>
        )}
        
        <input
          type="number"
          min="1"
          placeholder="Enter donation amount"
          value={donationAmount || ''}
          onChange={(e) => setDonationAmount(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        
        <div className="flex justify-end gap-4">
          <Button 
            onClick={onClose} 
            variant="secondary"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDonate}
            disabled={isLoading || donationAmount <= 0}
            // className="bg-accent hover:bg-accent/80 disabled:bg-accent"
          >
            {isLoading ? 'Processing...' : 'Donate'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;