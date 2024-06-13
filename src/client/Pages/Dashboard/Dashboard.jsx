
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import './Dashboard.css';

function Dashboard() {
  const [nextCourtDate, setNextCourtDate] = useState(null);

  useEffect(() => {
    setNextCourtDate('June 10, 2024'); // Example date
  }, []);

  return (
    <section className="container">
      <Nav />
      <main className="main-container">
        <h1 className="title">Your Dashboard</h1>
        <div className="profile-button">
          <button className="sign-out">Sign Out</button>
          <div className="profile-circle"></div>
        </div>
        <div className="banners-container">
          <span className="date-banner">
            Your Next Court Date is: {nextCourtDate}
          </span>
          <span className="fee-banner">
            Your Outstanding Fees are: {/* Add fee logic here */}
          </span>
        </div>
        <div className="box-container">
          <div className="updates-box">
            <h2>Latest Updates</h2>
            {/* Implement the updates component here */}
          </div>
          <div className="solicitor-box">
            <h2>Your Solicitors</h2>
            {/* Implement the solicitor component here */}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Dashboard;
