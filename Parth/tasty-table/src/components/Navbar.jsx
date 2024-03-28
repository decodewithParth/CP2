import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Logo</div>
        <ul className="navbar-menu">
          <li className="navbar-item">Recipes
            <ul className="dropdown-menu">
              <li className="dropdown-item">Recipe 1</li>
              <li className="dropdown-item">Recipe 2</li>
              <li className="dropdown-item">Recipe 3</li>
            </ul>
          </li>
          <li className="navbar-item">Seasonal
            <ul className="dropdown-menu">
              <li className="dropdown-item">Spring</li>
              <li className="dropdown-item">Summer</li>
              <li className="dropdown-item">Autumn</li>
              <li className="dropdown-item">Winter</li>
            </ul>
          </li>
          <li className="navbar-item">Easy Kitchen</li>
          <li className="navbar-item">Explore
            <ul className="dropdown-menu">
              <li className="dropdown-item">Explore 1</li>
              <li className="dropdown-item">Explore 2</li>
              <li className="dropdown-item">Explore 3</li>
            </ul>
          </li>
          <li className="navbar-item">About Us</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
