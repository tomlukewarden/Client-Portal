
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import GridLayout from 'react-grid-layout';
import './Dashboard.css';

function Dashboard() {
  const [nextCourtDate, setNextCourtDate] = useState(null);

  useEffect(() => {
    setNextCourtDate('June 10, 2024'); // Example date
  }, []);

  const layout = [
    { i: 'updates-box', x: 0, y: 0, w: 1, h: 2 },
    { i: 'solicitor-box', x: 1, y: 0, w: 1, h: 2 },
  ];

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
        <GridLayout className="layout" layout={layout} cols={2} rowHeight={100} width={1200}>
          <div key="updates-box" className="box">
            <div className="updates-box">
              <h2>Latest Updates</h2>
              {/* Implement the updates component here */}
            </div>
          </div>
          <div key="solicitor-box" className="box">
            <div className="solicitor-box">
              <h2>Your Solicitors</h2>
              {/* Implement the solicitor component here */}
            </div>
          </div>
        </GridLayout>
      </main>
    </section>
  );
}

export default Dashboard;
