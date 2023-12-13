import React from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css'; 

function SignUp(){
  return (
    <div className="signup-container">
      <form>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
          />
        </div>
        <div className="form-group">
          <label>Create Password:</label>
          <input
            type="password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
          />
        </div>
        <button type="button" >
          <Link to="/Login" className='link'>SignUp</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
