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
            <form action="">
              <h2>Client Feedback Form</h2>

              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" required />

              <label htmlFor="caseReference">Case Reference Number (if applicable):</label>
              <input type="text" id="caseReference" name="caseReference" />

              <label>How satisfied are you with the overall service you received?</label>
              <div className="radio-group">
                <label htmlFor="verySatisfied"><input type="radio" id="verySatisfied" name="satisfaction" value="Very Satisfied" /> Very Satisfied</label>
                <label htmlFor="satisfied"><input type="radio" id="satisfied" name="satisfaction" value="Satisfied" /> Satisfied</label>
                <label htmlFor="neutral"><input type="radio" id="neutral" name="satisfaction" value="Neutral" /> Neutral</label>
                <label htmlFor="dissatisfied"><input type="radio" id="dissatisfied" name="satisfaction" value="Dissatisfied" /> Dissatisfied</label>
                <label htmlFor="veryDissatisfied"><input type="radio" id="veryDissatisfied" name="satisfaction" value="Very Dissatisfied" /> Very Dissatisfied</label>
              </div>

              <label>Professionalism of our staff:</label>
              <div className="radio-group">
                <label htmlFor="professionalismExcellent"><input type="radio" id="professionalismExcellent" name="professionalism" value="Excellent" /> Excellent</label>
                <label htmlFor="professionalismGood"><input type="radio" id="professionalismGood" name="professionalism" value="Good" /> Good</label>
                <label htmlFor="professionalismFair"><input type="radio" id="professionalismFair" name="professionalism" value="Fair" /> Fair</label>
                <label htmlFor="professionalismPoor"><input type="radio" id="professionalismPoor" name="professionalism" value="Poor" /> Poor</label>
              </div>

              <label>Communication and responsiveness:</label>
              <div className="radio-group">
                <label htmlFor="communicationExcellent"><input type="radio" id="communicationExcellent" name="communication" value="Excellent" /> Excellent</label>
                <label htmlFor="communicationGood"><input type="radio" id="communicationGood" name="communication" value="Good" /> Good</label>
                <label htmlFor="communicationFair"><input type="radio" id="communicationFair" name="communication" value="Fair" /> Fair</label>
                <label htmlFor="communicationPoor"><input type="radio" id="communicationPoor" name="communication" value="Poor" /> Poor</label>
              </div>

              <label>Understanding of your needs:</label>
              <div className="radio-group">
                <label htmlFor="understandingExcellent"><input type="radio" id="understandingExcellent" name="understanding" value="Excellent" /> Excellent</label>
                <label htmlFor="understandingGood"><input type="radio" id="understandingGood" name="understanding" value="Good" /> Good</label>
                <label htmlFor="understandingFair"><input type="radio" id="understandingFair" name="understanding" value="Fair" /> Fair</label>
                <label htmlFor="understandingPoor"><input type="radio" id="understandingPoor" name="understanding" value="Poor" /> Poor</label>
              </div>

              <label>Quality of legal advice:</label>
              <div className="radio-group">
                <label htmlFor="qualityExcellent"><input type="radio" id="qualityExcellent" name="quality" value="Excellent" /> Excellent</label>
                <label htmlFor="qualityGood"><input type="radio" id="qualityGood" name="quality" value="Good" /> Good</label>
                <label htmlFor="qualityFair"><input type="radio" id="qualityFair" name="quality" value="Fair" /> Fair</label>
                <label htmlFor="qualityPoor"><input type="radio" id="qualityPoor" name="quality" value="Poor" /> Poor</label>
              </div>

              <label>Outcome of your case:</label>
              <div className="radio-group">
                <label htmlFor="outcomeExcellent"><input type="radio" id="outcomeExcellent" name="outcome" value="Excellent" /> Excellent</label>
                <label htmlFor="outcomeGood"><input type="radio" id="outcomeGood" name="outcome" value="Good" /> Good</label>
                <label htmlFor="outcomeFair"><input type="radio" id="outcomeFair" name="outcome" value="Fair" /> Fair</label>
                <label htmlFor="outcomePoor"><input type="radio" id="outcomePoor" name="outcome" value="Poor" /> Poor</label>
              </div>

              <label htmlFor="likeMost">What did you like most about our service?</label>
              <textarea id="likeMost" name="likeMost" rows="4"></textarea>

              <label htmlFor="improvement">What can we improve?</label>
              <textarea id="improvement" name="improvement" rows="4"></textarea>

              <label>Would you recommend our services to others?</label>
              <div className="radio-group">
                <label htmlFor="recommendYes"><input type="radio" id="recommendYes" name="recommend" value="Yes" /> Yes</label>
                <label htmlFor="recommendNo"><input type="radio" id="recommendNo" name="recommend" value="No" /> No</label>
              </div>

              <label htmlFor="comments">Additional comments or suggestions:</label>
              <textarea id="comments" name="comments" rows="4"></textarea>

              <label>May we contact you to discuss your feedback?</label>
              <div className="radio-group">
                <label htmlFor="contactYes"><input type="radio" id="contactYes" name="contact" value="Yes" /> Yes</label>
                <label htmlFor="contactNo"><input type="radio" id="contactNo" name="contact" value="No" /> No</label>
              </div>

              <label htmlFor="captcha">Please enter the code shown below:</label>
              <input type="text" id="captcha" name="captcha" required />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </main>
      </section>
    </>
  )
}

export default Feedback
