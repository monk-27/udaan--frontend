import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "./image/logo.png";
import Login from "../login/register/login";
import Register from "../login/register/register";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [registerpopup, setRegister] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleregister = () => {
    setRegister(!registerpopup);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            className="img"
            src="./images/logo.png"
            style={{ width: "80px", marginLeft: "10px" }}
            alt="my logo img"
          />
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="navbar-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="navbar-item" onClick={togglePopup}>
              <a href="#" className="btn">
                Login
              </a>
            </li>
            <li className="navbar-item" onClick={toggleregister}>
              <a href="#" className="btn-register">
                Signup
              </a>
            </li>
          </ul>
        </div>

        {showPopup && (
          <div className="popup-container">
            <div className="popup-blur" onClick={togglePopup}></div>
            <div className="login-container">
              <div className="popup">
                <button onClick={togglePopup} className="button" style={{cursor:"pointer"}}>
                  ❌
                </button>
                <Login />
              </div>
            </div>
          </div>
        )}
        {registerpopup && (
          <div className="popup-container">
            <div className="popup-blur" onClick={toggleregister}></div>
            <div className="register-container">
              <div className="popup">
                <button onClick={toggleregister} className="button" style={{cursor:"pointer"}}>
                  ❌
                </button>
                <Register />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
