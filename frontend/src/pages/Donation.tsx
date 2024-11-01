import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Donation: React.FC = () => {
  const [charities, setCharities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      // Redirect to login page if not logged in
      navigate('/login');
    } else {
      // Fetch the list of charities
      axios.get('/api/charities')
        .then(response => {
          setCharities(response.data);
        })
        .catch(() => {
          setError('Failed to fetch charities');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Donate to Charities</h1>
      {charities.length > 0 ? (
        <ul>
          {charities.map((charity) => (
            <li key={charity.id}>
              <h2>{charity.name}</h2>
              <p>{charity.description}</p>
              <button onClick={() => handleDonate(charity.id)}>Donate</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No charities available at the moment.</p>
      )}
    </div>
  );

  function handleDonate(charityId: number) {
    // Handle the donation process, e.g., open a donation form or redirect
    console.log(`Donate to charity with ID: ${charityId}`);
  }
};

export default Donation;
