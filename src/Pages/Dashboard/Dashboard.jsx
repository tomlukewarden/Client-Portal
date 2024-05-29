import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <section className="container">
        <ul className="nav">
          <li>
        
            <img src="assests/sent.png" alt="image of mail" width={37} />
            Mail
          </li>
          <li>
            <img src="assests/schedule.png" alt="Calender" width={37} />
            Important Dates
          </li>
          <li>
            <img src="assests/folder.png" alt="Folder" width={37} />
            Case File
          </li>
          <li>
            <img src="assests/card-payment.png" alt="Card Payment" width={37} />
            Fees
          </li>
          <li>
            <img src="assests/contact-mail.png" alt="Contact" width={37} />
            Contact
          </li>
          <li>
            <img src="assests/user.png" alt="Profile" width={37} />
            My Profile
          </li>
        </ul>

        <h1 className="title">Your Dashboard</h1>

        <div className="profile-button">
          <button className="sign-out">Sign Out</button>
          <div className="profile-circle">PC</div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
