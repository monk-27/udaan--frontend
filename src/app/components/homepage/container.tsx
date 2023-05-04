"use client";

import React, { useState } from "react";

import "./container.css";

const Container = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = [
    "Web Development",
    "Cyber Security",
    "Cloud Computing",
    "Networking",
    "Ethical Hacking",
    "Engish Communication and written",
    "Public Speaking",
    "UPSC Preparation",
    "SSC CGL Preparation",
    "Banking SCO Preparation",
    "Railways Preparation",
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <span
          style={{
            display: "inline-block",
            textAlign: "center",
            marginTop: "170px",
            color:"black"
            
          }}
        >
          <h1>Learn best Online Courses</h1>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px 0",
        }}
      >
        <span style={{ display: "inline-block", textAlign: "center", color:"black" }}>
          48000 Online Courses for you
        </span>
      </div>
      <div className="dropdown-search-container">
        <div className="drop">
        <div className={`dropdown ${isDropdownOpen ? "dropdown--open" : ""}`}>
          <button className="dropbtn" onClick={toggleDropdown}>
            Category <i className="arrow down"></i>
          </button>
          <div className="dropdown-content">
            {dropdownItems.map((item, index) => (
              <a href="#" key={index}>
                {item}
              </a>
            ))}
          </div>
        </div>
        </div>


        <div className="search-container">
          <input type="text" placeholder="What do you want to learn?" />
          <button type="submit">
            Search
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        
      </div>
    </div>
  );
};

export default Container;
