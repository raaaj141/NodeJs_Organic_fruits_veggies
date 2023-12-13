import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

function Login(){
  return (
    <div className="login-container">
      <form>
        <h2 className="head">Login</h2>
        <div className="form-group1">
          <label>Username:</label>
          <input
            type="text" 
          />
        </div>
        <div className="form-group1">
          <label>Password:</label>
          <input
            type="password" 
          />
        </div>
        <button className="login_button" type="button">
        <Link to="/Loginadmin" className='link'>Login</Link>
        </button>
        <div className="SignUp" >
        <Link to='/SignUp'>Don't have Account? SignUp Here</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
