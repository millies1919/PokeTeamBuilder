import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="right menu">
      <Link to="/signin" className="item">
        Sign In
      </Link>
      <Link to="/register" className="item">
        Register
      </Link>
    </div>
  );
};

export default Nav;
