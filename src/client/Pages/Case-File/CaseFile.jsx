import './CaseFile.css'
import Nav from "../../../Dashboard/components/Nav";
import CaseItem from "./components/CaseItem";
function CaseFile() {
  return (
    <>
      <section className="container">
        <Nav></Nav>
        <main className="main-container">
          <h1 className="title">Your Cases</h1>
          <div className="profile-button">
            <button className="sign-out">Sign Out</button>
            <div className="profile-circle"></div>
          </div>
          <h4 className="case-subheading">View Your Cases Below:</h4>
          <section className="case">
            <CaseItem></CaseItem>
          </section>
        </main>
      </section>
    </>
  );
}

export default CaseFile;
