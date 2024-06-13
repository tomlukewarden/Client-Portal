function Nav() {
  return (
    <>
      <div className="nav-container">
        <ul className="nav">
          <li>
            <img src="" alt="Mail" width={37} />
            Mail
          </li>

          <li>
            <img
              src=""
              alt="Calendar"
              width={37}
            />
            Important Dates
          </li>
          <li>
            <img
              src=''
              alt="Folder"
              width={37}
            />
            Case File
          </li>
          <li>
            <img
              src=""
              alt="Card Payment"
              width={37}
            />
            Fees
          </li>

          <li>
            <img
              src=""
              alt="Contact"
              width={37}
            />
            Contact
          </li>
          <li>
            <img src="" alt="Profile" width={37} />
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
