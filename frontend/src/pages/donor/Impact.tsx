import React, { useState, useEffect } from "react";
import Charities from "../../components/Home/Charities";
import "../../styles/donor/Impact.css";
import Fetch from "@/components/donor/Fetch";

// Expanded list of random names
const names = [
  "Alex", "Jordan", "Taylor", "Jamie", "Casey", "Morgan", "Riley", "Avery", "Sydney", "Drew",
  "Cameron", "Dakota", "Reese", "Quinn", "Finley", "Parker", "Sawyer", "Rowan", "Emerson", "Kendall"
];

const getRandomName = () => {
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomDonationAmount = () => {
  return Math.floor(Math.random() * (2500 - 1000 + 1)) + 1000;
};

const Impact: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Approach");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentDonation, setCurrentDonation] = useState(50520);
  const [targetDonation, setTargetDonation] = useState(200000);
  const [contributors, setContributors] = useState([
    { name: "Sam", amount: 19720 },
    { name: "Abdulahi", amount: 20000 },
    { name: "Antony", amount: 10800 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [campaign, setCampaign] = useState("Unicef Kids Foundation");

  useEffect(() => {
    const interval = setInterval(() => {
      const newDonation = getRandomDonationAmount();
      const newTotal = currentDonation + newDonation;

      if (newTotal >= targetDonation) {
        // Switch to a new campaign (e.g., UNEP)
        setCurrentDonation(0);
        setTargetDonation(150000);
        setCampaign("UNEP"); // Update campaign
        setContributors([
          { name: getRandomName(), amount: newDonation },
        ]);
      } else {
        setCurrentDonation(newTotal);
        setContributors((prevContributors) => [
          { name: getRandomName(), amount: newDonation },
          ...prevContributors,
        ]);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [currentDonation, targetDonation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contributors.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [contributors]);

  const handleTabClick = (tab: string) => {
    if (selectedTab !== tab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTab(tab);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Approach":
        return (
          <p className={`text-xl sm:text-2xl w-1/3 sm:w-full ml-8 sm:ml-4 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            At Kindr, our approach is centered on empathy and comprehensive support. We are dedicated to treating each donor and recipient with the utmost respect and appreciation, ensuring they feel valued and connected. Our platform is designed to address the unique needs of each individual by facilitating meaningful contributions and fostering a sense of community. By focusing on personalized and impactful engagement, we aim to create an environment where everyone can contribute to and benefit from a culture of giving.
          </p>
        );
      case "Mission":
        return (
          <p className={`text-xl sm:text-2xl w-1/3 sm:w-full ml-8 sm:ml-4 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            Our mission at Kindr is to deliver outstanding support and services in a warm, welcoming, and secure environment. We are dedicated to enhancing the quality of life for each individual through committed service, creating a community built on trust, compassion, and respect. We aim to be a leader in our field, continually evolving and innovating to meet the dynamic needs of our users and their families.
          </p>
        );
      case "Target":
        return (
          <p className={`text-xl sm:text-2xl w-1/3 sm:w-full ml-8 sm:ml-4 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            Our target at Kindr is to foster an environment where everyone can flourish and enjoy their experience. We strive for a 100% satisfaction rate among our users and their families by providing top-quality services and building meaningful connections. We are committed to maintaining a highly skilled and empathetic team, ensuring every user receives the attention and support they deserve. Our goal is to become the preferred platform in our community, recognized for our excellence and dedication to enhancing the lives of those we serve.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black ml-0 md:ml-40 lg:ml-60 xl:ml-80 w-5/6 text-white">
      <main className="p-8">
        <h1 className="text-2xl sm:text-4xl mb-2 relative top-10 sm:top-0 right-44 sm:right-20 ">Empowering Lives Through Generosity</h1>
        <h2 className="text-xl sm:text-2xl mb-8 relative top-10 sm:top-0 right-44 sm:right-20  text-orange-500">Kindr Donation Platform</h2>

        <section className="ml-22 bg-black text-white">
          <Charities />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 relative top-4 ml-6">
          <div className="flex flex-col">
            <section className="mt-6">
              <div className="flex space-x-4 mb-4 text-xl sm:text-2xl">
                <span className={`cursor-pointer ${selectedTab === "Approach" ? "text-orange-500 text-3xl" : ""}`} onClick={() => handleTabClick("Approach")}>Approach</span>
                <span className={`cursor-pointer ${selectedTab === "Mission" ? "text-orange-500 text-3xl" : ""}`} onClick={() => handleTabClick("Mission")}>Mission</span>
                <span className={`cursor-pointer ${selectedTab === "Target" ? "text-orange-500 text-3xl" : ""}`} onClick={() => handleTabClick("Target")}>Target</span>
              </div>
              {renderContent()}
            </section>
          </div>

          <aside className="p-8 text-white w-2/4 sm:w-full relative top-20 sm:top-0 right-8 sm:right-0">
            <div className="mb-8">
              <h3 className="text-4xl mb-2">{campaign}</h3>
              <h4 className="text-3xl mb-2">${currentDonation}</h4>
              <p className="mb-4">${targetDonation} target</p>
              <progress className="progress-bar" value={currentDonation} max={targetDonation}></progress>
              <p className="mb-4">{contributors.length} Contributors</p>
              <button className="px-4 py-2 bg-orange-500 rounded-lg">Donate</button>
            </div>

            <div>
              <h4 className="text-xl mb-4">Recent Contributors</h4>
              <div className="list relative">
                <ul className="space-y-2" style={{ transform: `translateY(-${currentIndex * 2}rem)`, transition: "transform 0.5s" }}>
                  {contributors.map((contributor, index) => (
                    <li key={index}>{contributor.name} contributed ${contributor.amount}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </section>
        <Fetch />
      </main>
    </div>
  );
};

export default Impact;
