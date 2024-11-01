import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to My App</h1>
      <p>Explore the features of our application by navigating to:</p>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li><Link to="/app/dashboard">Dashboard</Link></li>
        <li><Link to="/app/donations">Donations</Link></li>
        <li><Link to="/app/settings">Settings</Link></li>
        <li><Link to="/app/manage-profile">Manage Profile</Link></li>
      </ul>
    </div>
  );
};

export default Home;
