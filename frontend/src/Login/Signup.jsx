import { Link } from 'react-router-dom';
import { useState } from 'react';
import './SignupLogin.css';

function SignUp() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
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

    if (!data.name) {
      newErrors.name = 'Full name should not be empty';
    }

    if (!data.password) {
      newErrors.password = 'Password should not be empty';
    } else if (!passwordPattern.test(data.password)) {
      newErrors.password = 'Password did not match';
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password should not be empty';
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error);
        }

        window.location.href = '/login';
      } catch (error) {
        setError(error.message || 'Sign up failed');
      }
    }
  };

  return (
    <>
      <div className="signup-container">
        <img className="logo-img" src="../assets/c&mLogo.jpg" alt="logo" />
        <div className="signup-box">
          <h2>Sign Up</h2>
          <p>
            Already registered? <Link to="/">Log in here</Link>
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

            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

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

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

            {error && <p className="error">{error}</p>}

            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
