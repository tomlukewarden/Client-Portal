
import PropTypes from "prop-types";
import Nav from "../Dashboard/components/Nav";
import "../Dashboard/Dashboard.css";

function Feedback() {
  return (
    <section className="container">
      <Nav />
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
            {/* Satisfaction Radio Group */}
            <FeedbackRadioGroup
              title="How satisfied are you with the overall service you received?"
              name="satisfaction"
              options={["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]}
            />
            {/* Professionalism Radio Group */}
            <FeedbackRadioGroup
              title="Professionalism of our staff:"
              name="professionalism"
              options={["Excellent", "Good", "Fair", "Poor"]}
            />
            {/* Other Radio Groups */}
            {/* ... */}
            <label htmlFor="captcha">Please enter the code shown below:</label>
            <input type="text" id="captcha" name="captcha" required />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
    </section>
  );
}

function FeedbackRadioGroup({ title, name, options }) {
  return (
    <>
      <label>{title}</label>
      <div className="radio-group">
        {options.map((option) => (
          <label key={option} htmlFor={`${name}${option}`}>
            <input type="radio" id={`${name}${option}`} name={name} value={option} />
            {option}
          </label>
        ))}
      </div>
    </>
  );
}

FeedbackRadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Feedback;
