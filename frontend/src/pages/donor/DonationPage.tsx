import React, { useState } from "react";
import "../../styles/donor/DonationPage.css"; // Assuming you have this CSS file

const DonationPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Approach");
  const [isTransitioning, setIsTransitioning] = useState(false);

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
          <p
            className={`transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            At Passionate Angels, our approach is centered around holistic and
            compassionate care. We believe in treating every resident with
            dignity and respect, ensuring they feel valued and cherished in
            their new home. Our care plans are individualized to meet the unique
            needs of each resident, promoting physical, emotional, and social
            well-being through comprehensive, person-centered care.
          </p>
        );
      case "Mission":
        return (
          <p
            className={`transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            Our mission at Passionate Angels is to provide exceptional care and
            support to our residents in a warm, welcoming, and safe environment.
            We are committed to enhancing the quality of life for each
            individual through dedicated service, fostering a community of
            trust, compassion, and respect. We strive to be a leader in senior
            care, continuously improving and innovating to meet the evolving
            needs of our residents and their families.
          </p>
        );
      case "Target":
        return (
          <p
            className={`transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            Our target is to create a nurturing environment where seniors can
            thrive and enjoy their golden years. We aim to achieve a 100%
            satisfaction rate among our residents and their families by
            delivering top-tier care services and building meaningful
            relationships. We are dedicated to maintaining a highly skilled and
            compassionate staff, ensuring every resident receives the attention
            and care they deserve. Our goal is to be the preferred choice for
            senior living in our community, known for our excellence in care and
            commitment to enhancing the lives of those we serve.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
    

      <main className="p-8">
        <button className="mb-4 text-sm text-orange-500 hover:underline">
          &lt; Back
        </button>
        <h1 className="text-4xl mb-2">Let's Make Education For All</h1>
        <h2 className="text-2xl mb-8 text-orange-500">
          Kindr Donation Platform
        </h2>

        <section className="grid grid-cols-4 gap-4 mb-3 h-[600px]">
  {/* <!-- Left image --> */}
  <div className="  col-span-1 relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <img
      src="https://images.pexels.com/photos/4274337/pexels-photo-4274337.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Image 1"
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* <!-- Middle images --> */}
  <div className=" col-span-2 grid grid-rows-2 gap-4">
    <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src="https://images.pexels.com/photos/25309967/pexels-photo-25309967/free-photo-of-children-kissing-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 2"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src="https://images.pexels.com/photos/25309967/pexels-photo-25309967/free-photo-of-children-kissing-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 3"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>

  {/* <!-- Right images --> */}
  <div className="col-span-1 grid grid-rows-2 gap-4">
    <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src="https://images.pexels.com/photos/25402169/pexels-photo-25402169/free-photo-of-a-group-of-boys-and-girls-posing-for-a-picture-together.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 4"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src="https://images.pexels.com/photos/25402169/pexels-photo-25402169/free-photo-of-a-group-of-boys-and-girls-posing-for-a-picture-together.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Image 5"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col">
            

            <section className="mb-8">
              <div className="flex space-x-4 mb-4">
                <span
                  className={`cursor-pointer ${
                    selectedTab === "Approach" ? "text-orange-500" : ""
                  }`}
                  onClick={() => handleTabClick("Approach")}
                >
                  Approach
                </span>
                <span
                  className={`cursor-pointer ${
                    selectedTab === "Mission" ? "text-orange-500" : ""
                  }`}
                  onClick={() => handleTabClick("Mission")}
                >
                  Mission
                </span>
                <span
                  className={`cursor-pointer ${
                    selectedTab === "Target" ? "text-orange-500" : ""
                  }`}
                  onClick={() => handleTabClick("Target")}
                >
                  Target
                </span>
              </div>
              {renderContent()}
            </section>

            <section className="mb-8">
              <h3 className="text-xl mb-4">Documents</h3>
              <div className="flex space-x-4">
                <div className="w-32 h-32 bg-gray-500 flex items-center justify-center rounded-lg">
                  Document 1
                </div>
                <div className="w-32 h-32 bg-gray-500 flex items-center justify-center rounded-lg">
                  Document 2
                </div>
                <div className="w-32 h-32 bg-gray-500 flex items-center justify-center rounded-lg">
                  Document 3
                </div>
              </div>
            </section>
          </div>

          <aside className="p-8 text-white">
            <div className="mb-8">
              <h4 className="text-3xl mb-2">₹124,000</h4>
              <p className="mb-4">₹200,000 target</p>
              <progress
                className="progress-bar"
                value="124000"
                max="200000"
              ></progress>
              <p className="mb-4">12 days left</p>
              <p className="mb-4">12354 Contributors</p>
              <button className="px-4 py-2 bg-orange-500 rounded-lg">
                Donate
              </button>
            </div>

            <div>
              <h4 className="text-xl mb-4">Recent Contributors</h4>
              <ul className="space-y-2">
                <li>Sam contributed ₹20,000</li>
                <li>Abdulahi contributed ₹20,000</li>
                <li>Antony contributed ₹20,000</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>

    
    </div>
  );
};

export default DonationPage;