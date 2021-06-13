import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="container pt-3 mb-5 pb-5">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className='logo-image' src='./asset/Group 228.png' alt="" />
          <h1 className="brand-name">organic</h1>
        </div>
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">
            <button className="nav-button">Contact</button>
          </li>
        </ul>
      </div>
    </header>
    );
};

export default Header