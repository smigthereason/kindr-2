import React from 'react';

interface CharityCardProps {
  title: string;
  description: string;
  cost: number;
  current: number;
  raised: number;
  imageUrl: string;
}

const CharityCard: React.FC<CharityCardProps> = ({ title, description, cost, current, raised, imageUrl }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="rounded-t-lg w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <div className="flex justify-between mt-4">
          <span>Cost: £{cost}</span>
          <span>Current: £{current}</span>
          <span>Raised: £{raised}</span>
        </div>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Donate</button>
      </div>
    </div>
  );
};

const CharityList: React.FC = () => {
  const charities = [
    {
      title: 'Help Azan to continue his study',
      description: '',
      cost: 11234,
      current: 1234,
      raised: 1234,
      imageUrl: '/src/assets/Photo 2.png',
    },
    {
      title: 'Save Peter\'s life',
      description: '',
      cost: 11234,
      current: 1234,
      raised: 1234,
      imageUrl: '/src/assets/Photo 3.png',
    },
    {
      title: 'Build School for poor students',
      description: '',
      cost: 11234,
      current: 1234,
      raised: 1234,
      imageUrl: '/src/assets/Photo 4.png',
    },
    {
      title: 'Make them happy',
      description: '',
      cost: 11234,
      current: 1234,
      raised: 1234,
      imageUrl: '/src/assets/Photo 2.png',
    }
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Available Charities</h1>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Donate</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {charities.map((charity, index) => (
            <CharityCard key={index} {...charity} />
          ))}
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        <div className="flex justify-center space-x-8">
          <div>Company</div>
          <div>About Us</div>
          <div>About Us</div>
          <div>About Us</div>
        </div>
      </footer>
    </div>
  );
};

export default CharityList;
