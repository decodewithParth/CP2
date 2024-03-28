import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Logo</div>
        <div className="navbar-item">Recipes</div>
        <div className="navbar-item">Seasonal</div>
        <div className="navbar-item">Easy Kitchen</div>
        <div className="navbar-item">Explore</div>
        <div className="navbar-item">About Us</div>
      </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
