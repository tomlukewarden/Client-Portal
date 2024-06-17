import { Link } from 'react-router-dom';
import { useState } from 'react';
import Validation from './SignupValidation';
import './SignupLogin.css'

function SignUp() {

  const [values, setValues] = useState({
    name:'',
    email:'',
    password:''
  })

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
  };

  return (
    <>
    
    <div className="signup-container">
    <img className='logo-img' src="../../../assests/c&mLogo.jpg" alt="logo" />
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p>Already rgistered?<Link to="/">Log in here</Link></p>
        <form onSubmit={handleSignUp}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInput}
            required
          />
          {errors.email && <span className='text-danger'>{errors.email}</span>}

          <label htmlFor="name">Full Name</label>
          <input 
          type="text"
          id='name'
          name='name'
          onChange={handleInput}
          required
           />
           {errors.name && <span className='text-danger'>{errors.name}</span>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
            required
          />
          {errors.password && <span className='text-danger'>{errors.password}</span>}

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInput}
            required
          />
        {errors.password && <span className='text-danger'>{errors.password}</span>}
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
    </>
  );
}

export default SignUp;
