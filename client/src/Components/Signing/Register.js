import React from 'react';
import './SignIn.css';

const Register = ({ onRouteChange }) => {
  return (
    <div className="register-container">
      <div className="ui card">
        <h1 className="ui header">Register:</h1>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="text" name="password" placeholder="Password" />
          </div>
          <button
            className="ui red button"
            type="submit"
            onClick={() => onRouteChange('teamlist')}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
