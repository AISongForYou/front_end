import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button">Menu</button>
      </div>
      <div className="navbar-center">
        <img src="/song4ulogo.png" alt="Logo" className="logo-fixed" />
      </div>
      <div className="navbar-right">
        <img src="/profile.png" alt="Profile" className="profile-icon" />
      </div>
    </div>
  );
};

export default Navbar;