import Nav from "../Dashboard/components/Nav"
import MyCalendar from "./components/MyCalender"

function ImportantDates (){
  return (
    <>
    <section className="container">
        <Nav></Nav>
        <main className="main-container">
          <h1 className="title">Important Dates</h1>
          <div className="profile-button">
            <button className="sign-out">Sign Out</button>
            <div className="profile-circle"></div>
          </div>
          <MyCalendar></MyCalendar>
          </main>
          </section>
          </>
  )
}

export default ImportantDates
