import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ handleNavigation }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button">Menu</button>
      </div>
      <div className="navbar-center">
        <img
          src="/song4ulogo.png"
          alt="Logo"
          className="logo-fixed"
          onClick={() => handleNavigation("/")}
          style={{ cursor: "pointer" }} // 스타일로 커서 모양 변경
        />
      </div>
      <div className="navbar-right">
        <img src="/profile.png" alt="Profile" className="profile-icon" />
      </div>
    </div>
  );
};

export default Navbar;
