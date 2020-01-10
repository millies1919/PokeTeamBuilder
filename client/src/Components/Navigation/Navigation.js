import React from 'react';

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="ui secondary  menu">
        <div className="header item">Pokemon Team Builder</div>
        <div className="right menu">
          <button
            className="ui red button"
            onClick={() => onRouteChange('signin')}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  } else if (isSignedIn === false) {
    return (
      <div className="ui secondary  menu">
        <div className="header item">Pokemon Team Builder</div>
        <div className="right menu">
          <button
            className="ui red button"
            onClick={() => onRouteChange('signin')}
          >
            Sign In
          </button>
          <button
            className="ui red button"
            onClick={() => onRouteChange('register')}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
};

export default Nav;
