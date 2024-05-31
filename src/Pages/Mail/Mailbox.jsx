import Nav from "../Dashboard/components/Nav";
import "../Dashboard/Dashboard.css";
import './Mailbox.css'

function Mailbox() {
  return (
    <>
      <section className="container">
        <Nav></Nav>
        <main className="main-container">
          <h1 className="title">Mailbox</h1>

          <div className="profile-button">
            <button className="sign-out">Sign Out</button>
            <div className="profile-circle"></div>
          </div>
          <div className="mailbox">
            <div className="email">
              <h5 className="email-title">email of sender</h5>
              <h6 className="email-subject">letter re something</h6>
              <p className="email-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, facere omnis? Repellendus aspernatur exercitationem,
                odit eos accusantium, maiores consequuntur voluptatum quos id
                omnis sequi labore veritatis tempore recusandae qui aut!
              </p>
            </div>
            <div className="email">
              <h5 className="email-title">email of sender</h5>
              <h6 className="email-subject">letter re something</h6>
              <p className="email-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, facere omnis? Repellendus aspernatur exercitationem,
                odit eos accusantium, maiores consequuntur voluptatum quos id
                omnis sequi labore veritatis tempore recusandae qui aut!
              </p>
            </div>
            <div className="email">
              <h5 className="email-title">email of sender</h5>
              <h6 className="email-subject">letter re something</h6>
              <p className="email-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, facere omnis? Repellendus aspernatur exercitationem,
                odit eos accusantium, maiores consequuntur voluptatum quos id
                omnis sequi labore veritatis tempore recusandae qui aut!
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Mailbox;
