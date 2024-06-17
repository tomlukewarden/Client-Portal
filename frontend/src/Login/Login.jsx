import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './SignupLogin.css';

function Login({ setAuthToken }) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!data.email) {
      newErrors.email = 'Email should not be empty';
    } else if (!emailPattern.test(data.email)) {
      newErrors.email = 'Email did not match';
    }

    if (!data.password) {
      newErrors.password = 'Password should not be empty';
    } else if (!passwordPattern.test(data.password)) {
      newErrors.password = 'Password did not match';
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Invalid email or password');
        }

        const userData = await response.json();
        console.log('User:', userData);

        setAuthToken(userData.token);

        window.location.href = '/profile';
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <img className='logo-img' src="../assests/c&mLogo.jpg" alt="logo" />
      <div className="signup-box">
        <h2>Login</h2>
        <p>
          Not a member yet? <Link to="/signup">Sign up here</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {error && <p className="error">{error}</p>}

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
