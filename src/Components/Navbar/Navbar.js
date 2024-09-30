import React from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import nav_logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={nav_logo} alt="nav-logo" />
        <p className="nav-name">Shopping</p>
      </div>
      <ul className="nav-menu">
        <li className="nav-item ">
          Shop <hr />
        </li>
        <li className="nav-item" onClick={() => {}}>
          Men
        </li>
        <li className="nav-item">Women</li>
        <li className="nav-item">Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button className="login-button">login</button>
        <img src={cart_icon} alt="cart-icon" />
        <p className="nav-bar-count">0</p>
      </div>
    </div>
  );
};

export default Navbar;
