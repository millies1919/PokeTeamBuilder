import React, { useState } from 'react';
import './SignIn.css';

const Register = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onUsernameChange = e => {
    setUsername(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmitReigster = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          loadUser(user);
          onRouteChange('signin');
        }
      });
  };

  return (
    <div className="register-container">
      <div className="ui card">
        <h1 className="ui header">Register:</h1>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onEmailChange}
            />
          </div>
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
            onClick={onSubmitReigster}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
