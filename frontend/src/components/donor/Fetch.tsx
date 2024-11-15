import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import worldImage from "../../assets/world2.jpg";
import DonateModal from "./DonorModal"; // Import the modal

interface Charity {
  id: number;
  first_name: string;
  last_name: string;
  title: string;
  description: string;
  category: string;
  image: string;
  amount: number;
  document: string;
}

const Fetch: React.FC = () => {
  const [charities, setCharities] = useState<Charity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharityId, setSelectedCharityId] = useState<number | null>(null);

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    try {
      const response = await axios.get("https://kind-backend.onrender.com/charity");
      setCharities(response.data.charity);
    } catch (err) {
      setError("Failed to fetch charities. Please try again later.");
      console.error("Error fetching charities:", err);
    }
  };

  const handleDonateClick = (charityId: number) => {
    setSelectedCharityId(charityId);
    setIsModalOpen(true);
  };

  const handleDonate = async (amount: number) => {
    if (!selectedCharityId) return;
    try {
      await axios.post(`https://kind-backend.onrender.com/charity/${selectedCharityId}/donate`, {
        amount,
      });
      // Re-fetch the charities to update donation amounts after a successful donation
      fetchCharities();
    } catch (err) {
      console.error("Error processing donation:", err);
    }
  };

  return (
    <section
      className="bg-black text-white"
      style={{ backgroundImage: `url(${worldImage})` }}
    >
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="min-h-28 z-10">
          <div className="max-w-screen-lg mx-auto py-4">
            <h2 className="h2 relative right-44 sm:right-0 bottom-40 text-center text-white font-display mb-8">
              More Charities
            </h2>
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}
            <ScrollArea className="w-[80vh] xl:w-full  whitespace-nowrap rounded-md z-10">
              <div className="flex flex-col sm:flex-row relative gap-6">
                {charities.map((charity) => (
                  <div
                    key={charity.id}
                    className="w-[50vh] sm:w-1/3 shadow rounded-lg overflow-hidden mb-4 sm:mb-0"
                  >
                    <img
                      src={`http://localhost:5000/${charity.image}`}
                      className="object-cover h-52 w-full z-0"
                      alt={`${charity.first_name} ${charity.last_name}`}
                    />
                    <div className="relative -top-5 p-4 mx-3 bg-secondary z-10 border-white/50 border-2">
                      {charity.category && (
                        <span className="bg-white/20 text-accent w-fit rounded-md px-2 py-1 font-semibold text-sm">
                          {charity.category}
                        </span>
                      )}
                      <h3 className="mt-3 font-bold text-md pb-4">
                        {charity.title ?? "No title available"}
                      </h3>
                      <p className="text-sm text-white/80">
                        {charity.description ?? "No description available"}
                      </p>
                      <div className="mt-4">
                        <Progress value={(charity.amount / 10000) * 100} />
                      </div>
                      <div className="flex flex-row mt-4 gap-10 items-center pb-4 border-b border-white/50">
                        <div className="text-sm text-white/40">
                          <p>Amount</p>
                          <p className="text-[16px] text-white/60">
                            ${charity.amount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4">
                        <a
                          href={`http://localhost:5000/${charity.document}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="uppercase flex items-center gap-2 min-w-[150px]"
                        >
                          <Button className="bg-accent hover:bg-accent/80">
                            View Document
                          </Button>
                        </a>
                        <Button
                          onClick={() => handleDonateClick(charity.id)}
                          className="bg-green-500 hover:bg-green-600"
                        >
                          Donate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        {isModalOpen && selectedCharityId && (
          <DonateModal
            charityId={selectedCharityId}
            onClose={() => setIsModalOpen(false)}
            onDonate={handleDonate}
          />
        )}
      </div>
    </section>
  );
};

export default Fetch;
