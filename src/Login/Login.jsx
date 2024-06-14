import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './SignupLogin.css'

function Login({setAuthToken}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <>
    
    <div className="signup-container">
    <img className='logo-img' src="../../../assests/c&mLogo.jpg" alt="logo" />
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p>Not a member yet? <Link to="/signup">Sign up here</Link></p>
        <form onSubmit={handleLogin}>
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

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
