import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Validation from './LoginValidation'
import './SignupLogin.css';

function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
  })

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleLogin = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
  };

  return (
    <div className="signup-container">
      <img className='logo-img' src="/assets/c&mLogo.jpg" alt="logo" />
      <div className="signup-box">
        <h2>Login</h2>
        <p>Not a member yet? <Link to="/signup">Sign up here</Link></p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInput}
            required
          />
          {errors.email && <span className='text-danger'>{errors.email}</span>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
            required
          />
           {errors.password && <span className='text-danger'>{errors.password}</span>}

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setAuthToken: PropTypes.func.isRequired,
};

export default Login;
