import Nav from "./components/Nav";
import "./Dashboard.css";


function Dashboard() {
  return (
    <>
      <section className="container">
        <Nav></Nav>
        <main className="main-container">
          <h1 className="title">Your Dashboard</h1>

          <div className="profile-button">
            <button className="sign-out">Sign Out</button>
            <div className="profile-circle"></div>
          </div>

          <div className="banners-container">
            <span className="date-banner">
              Your Next Court Date is: {/*ADD JS HERE TO GENERATE THE MOST RECENT DATE FOR CLIENT*/}
            </span>
            <span className="fee-banner">
              Your Outstanding Fees are:
            </span>
          </div>
          <div className="box-container">
          <div className="updates-box">
            <h2>Latest Updates</h2>
            <h4>POST COMPONENT HERE</h4>
          </div>
          <div className="solicitor-box">
          <h2>Your Solicitors</h2>
          <h4>SOLICITOR COMPONENT HERE</h4>
          </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Dashboard;
