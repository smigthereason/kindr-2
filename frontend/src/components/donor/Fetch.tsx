import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import worldImage from "../../assets/world2.jpg";

interface Charity {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
  amount: string;
  document: string;
}

const Fetch: React.FC = () => {
  const [charities, setCharities] = useState<Charity[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    try {
      const response = await axios.get("https://backend-kindr.onrender.com/charity");
      setCharities(response.data.charity);
    } catch (err) {
      setError("Failed to fetch charities. Please try again later.");
      console.error("Error fetching charities:", err);
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
            <h2 className="h2 text-center text-white font-display mb-8">
              More Charities
            </h2>
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}
            <ScrollArea className="w-[95vh] xl:w-full whitespace-nowrap rounded-md z-10">
              <div className="flex relative gap-6">
                {charities.map((charity) => (
                  <div
                    key={charity.id}
                    className="w-1/3 shadow rounded-lg overflow-hidden"
                  >
                    <img
                      src={`http://localhost:5000/${charity.image}`}
                      className="object-cover h-52 w-full z-0"
                      alt={`${charity.first_name} ${charity.last_name}`}
                    />
                    <div className="relative -top-5 p-4 mx-3 bg-secondary z-10 border-white/50 border-2">
                      <span className="bg-white/20 text-accent w-fit rounded-md px-2 py-1 font-semibold text-sm">
                        Charity
                      </span>
                      <h3 className="mt-3 font-bold text-md pb-4">
                        {charity.first_name} {charity.last_name}
                      </h3>
                      <div className="">
                        <Progress value={5} />{" "}
                        {/* You might want to calculate this */}
                      </div>
                      <div className="flex flex-row mt-4 gap-10 items-center pb-4 border-b border-white/50">
                        <div className="text-sm text-white/40">
                          <p>Amount</p>
                          <p className="text-[16px] text-white/60">
                            ${charity.amount}
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fetch;
