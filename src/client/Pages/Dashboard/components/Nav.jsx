function Nav() {
  return (
    <>
      <div className="nav-container">
        <ul className="nav">
          <li>
            <img src="assets/nav-bar-icons/sent.png" alt="Mail" width={37} />
            Mail
          </li>

          <li>
            <img
              src="assets/nav-bar-icons/schedule.png"
              alt="Calendar"
              width={37}
            />
            Important Dates
          </li>
          <li>
            <img
              src="assets/nav-bar-icons/folder.png"
              alt="Folder"
              width={37}
            />
            Case File
          </li>
          <li>
            <img
              src="assets/nav-bar-icons/card-payment.png"
              alt="Card Payment"
              width={37}
            />
            Fees
          </li>

          <li>
            <img
              src="assets/nav-bar-icons/contact-mail.png"
              alt="Contact"
              width={37}
            />
            Contact
          </li>
          <li>
            <img src="assets/nav-bar-icons/user.png" alt="Profile" width={37} />
            My Profile
          </li>

          <li>
            <button className="feedback">Give Us Feedback</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
