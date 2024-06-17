import Nav from "../Dashboard/components/Nav";
import "../Dashboard/Dashboard.css";
import "./Mailbox.css";

function Mailbox() {
  const emails = [
    { sender: "email of sender", subject: "letter re something", body: "Lorem ipsum..." },
    { sender: "email of sender", subject: "letter re something", body: "Lorem ipsum..." },
    { sender: "email of sender", subject: "letter re something", body: "Lorem ipsum..." },
  ];

  return (
    <section className="container">
      <Nav />
      <main className="main-container">
        <h1 className="title">Mailbox</h1>
        <div className="profile-button">
          <button className="sign-out">Sign Out</button>
          <div className="profile-circle"></div>
        </div>
        <div className="mailbox">
          {emails.map((email, index) => (
            <Email key={index} email={email} />
          ))}
        </div>
      </main>
    </section>
  );
}

function Email({ email }) {
  return (
    <div className="email">
      <h5 className="email-title">{email.sender}</h5>
      <h6 className="email-subject">{email.subject}</h6>
      <p className="email-body">{email.body}</p>
    </div>
  );
}

export default Mailbox;
