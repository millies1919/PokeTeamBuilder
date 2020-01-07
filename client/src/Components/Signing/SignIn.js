import React from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="signin-container">
      <div className="ui card">
        <h1 className="ui header">Sign In:</h1>
        <div className="ui form">
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
            onClick={() => onRouteChange('home')}
          >
            Sign In
          </button>
        </div>
        <button
          className="ui button"
          type="submit"
          onClick={() => onRouteChange('register')}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SignIn;
