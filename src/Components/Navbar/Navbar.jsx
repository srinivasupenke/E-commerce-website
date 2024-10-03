import React, { useState } from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import nav_logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={nav_logo} alt="nav-logo" />
        <p className="nav-name">SHOPPING</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Women</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids </Link> {menu === "kids" ? <hr /> : <></>}
        </li>
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
