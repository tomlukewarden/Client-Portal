import Nav from "../Dashboard/components/Nav";
import "../Dashboard/Dashboard.css";
import "./Profile.css";

function Profile() {
  return (
    <section className="container">
      <Nav />
      <main className="main-container">
        <h1 className="title">My Profile</h1>
        <div className="profile-button">
          <button className="sign-out">Sign Out</button>
          <div className="profile-circle"></div>
        </div>
        <div className="profile">
          <ProfileForm />
        </div>
      </main>
    </section>
  );
}

function ProfileForm() {
  return (
    <form className="profile-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio"></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="save-button">Save</button>
      </div>
    </form>
  );
}

export default Profile;
