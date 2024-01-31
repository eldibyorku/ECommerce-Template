import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="navbar container-fluid">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="nav nav-underline mb-2 mb-lg-0">
            <li className="nav-item me-auto">
              <Link to="/" className="nav-link" aria-current="page">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mens" className="nav-link" aria-current="page">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/womens" className="nav-link" aria-current="page">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kids" className="nav-link" aria-current="page">
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="" className="cart-icon" />
          </Link>
          <div className="nav-cart-count"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
