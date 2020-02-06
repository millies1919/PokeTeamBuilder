import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange, loadUser }) => {
  const [signInUser, setSignUser] = useState('');
  const [signInPW, setSignPW] = useState('');

  const onUsernameChange = e => {
    setSignUser(e.target.value);
  };

  const onPasswordChange = e => {
    setSignPW(e.target.value);
  };

  const onSubmitSignIn = () => {
    fetch('https://limitless-woodland-24227.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: signInUser,
        password: signInPW
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          onRouteChange('teamlist');
        }
      });
  };

  return (
    <div className="signin-container">
      <div className="ui card">
        <h1 className="ui header">Sign In:</h1>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={onUsernameChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={onPasswordChange}
            />
          </div>
          <button
            className="ui red button"
            type="submit"
            onClick={onSubmitSignIn}
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
