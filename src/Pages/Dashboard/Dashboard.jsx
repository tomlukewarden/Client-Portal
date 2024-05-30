import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <section className="container">
        <div className="nav-container">
          <ul className="nav">
            <li>
              <img src="assests/nav-bar-icons/sent.png" alt="image of mail" width={37} />
              Mail
            </li>
            <li>
              <img src="assests/nav-bar-icons/schedule.png" alt="Calender" width={37} />
              Important Dates
            </li>
            <li>
              <img src="assests/nav-bar-icons/folder.png" alt="Folder" width={37} />
              Case File
            </li>
            <li>
              <img src="assests/nav-bar-icons/card-payment.png" alt="Card Payment" width={37} />
              Fees
            </li>
            <li>
              <img src="assests/nav-bar-icons/contact-mail.png" alt="Contact" width={37} />
              Contact
            </li>
            <li>
              <img src="assests/nav-bar-icons/user.png" alt="Profile" width={37} />
              My Profile
            </li>
            <li><button className="feedback">Give Us Feedback</button></li>
          </ul>
        </div>
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
