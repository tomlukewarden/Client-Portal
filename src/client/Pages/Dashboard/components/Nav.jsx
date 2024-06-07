import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Mailbox from "../../Mail/Mailbox";
import ImportantDates from "../../Important-Dates/ImportantDates";
import Feedback from "../../Feedback/Feedback";
import Profile from "../../Profile/Profile";
import CaseFile from "../../Case-File/CaseFile";
import Login from "../../../../Login/Login";
import SignUp from "../../../../Login/Signup";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <ul className="nav">
          <Link to="/mail">
            <li>
              <img src="assets/nav-bar-icons/sent.png" alt="Mail" width={37} />
              Mail
            </li>
          </Link>
          <Link to="/important-dates">
            <li>
              <img src="assets/nav-bar-icons/schedule.png" alt="Calendar" width={37} />
              Important Dates
            </li>
          </Link>
          <Link to="/case">
            <li>
              <img src="assets/nav-bar-icons/folder.png" alt="Folder" width={37} />
              Case File
            </li>
          </Link>
          <Link to="/fees">
            <li>
              <img src="assets/nav-bar-icons/card-payment.png" alt="Card Payment" width={37} />
              Fees
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <img src="assets/nav-bar-icons/contact-mail.png" alt="Contact" width={37} />
              Contact
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <img src="assets/nav-bar-icons/user.png" alt="Profile" width={37} />
              My Profile
            </li>
          </Link>
          <Link to="/feedback">
            <li>
              <button className="feedback">Give Us Feedback</button>
            </li>
          </Link>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mail" element={<Mailbox />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/case" element={<CaseFile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default Nav;
