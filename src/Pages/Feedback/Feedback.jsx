import Nav from '../Dashboard/components/Nav'
import '../Dashboard/Dashboard.css'


function Feedback () {
  return (
    <>
<section className="container">
        <Nav></Nav>
        <main className="main-container">
          <h1 className="title">Feedback</h1>

          <div className="profile-button">
            <button className="sign-out">Sign Out</button>
            <div className="profile-circle"></div>
          </div>

        <div className="feedback-form">
          <form action=""></form>
        </div>
        </main>
        </section>
    </>
  )
}

export default Feedback