import { Link } from "react-router-dom";
import "../Dashboard.css";

function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav">
        <li>
          <Link to="/">
            <img src="./nav-bar-icons/home.png" alt="Home" width={37} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/mailbox">
            <img src="./nav-bar-icons/contact-mail.png" alt="Mail" width={37} />
            Mail
          </Link>
        </li>
        <li>
          <Link to="/important-dates">
            <img src="./nav-bar-icons/schedule.png" alt="Calendar" width={37} />
            Important Dates
          </Link>
        </li>
        <li>
          <Link to="/case-file">
            <img src="./nav-bar-icons/folder.png" alt="Folder" width={37} />
            Case File
          </Link>
        </li>
        <li>
          <Link to="/fees">
            <img
              src="./nav-bar-icons/card-payment.png"
              alt="Card Payment"
              width={37}
            />
            Fees
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src="./nav-bar-icons/sent.png" alt="Contact" width={37} />
            Contact
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src="./nav-bar-icons/user.png" alt="Profile" width={37} />
            My Profile
          </Link>
        </li>
        <li>
          <Link to="/feedback">
            <button className="feedback">Give Us Feedback</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
