


import { useState } from 'react';
import './Signup.css'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // add sign up logic please
  };

  return (
    <>
    
    <div className="signup-container">
    <img className='logo-img' src="../../../assests/c&mLogo.jpg" alt="logo" />
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p>Already rgistered?<a href='#'>Log in here</a></p>
        <form onSubmit={handleSignUp}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
    </>
  );
}

export default SignUp;
