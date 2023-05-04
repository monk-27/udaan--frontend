"use client";

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <center className="footer">
        <table className="my-table" cellSpacing="10">
          <tr>
            <td>
              <img src="./images/logo.png" alt="your-image-alt" />{" "}
            </td>
            <td>
              <h4>Home</h4>{" "}
            </td>
            <td>
              <h4>Latest Courses</h4>
            </td>
            <td>
              <h4>Community</h4>
            </td>
            <td>
              <h4>Stay Connected</h4>
            </td>
          </tr>
          <tr>
            <td>Privacy Policy</td>
            <td>Home</td>
            <td>General Science</td>
            <td>Go Premium</td>
            <td>
              <img src="./images/twitter.png" alt="your-image-alt" /> Twitter
            </td>
          </tr>
          <tr>
            <td>
              Copyright@Milton 2020,
              <br />
              All right reserved
            </td>
            <td>About Us</td>
            <td>Web Development</td>
            <td>Team Plans</td>
            <td>
              <img src="./images/instagram.png" alt="your-image-alt" />{" "}
              Instagram
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Our Process</td>
            <td>Civil Engineering</td>
            <td>Refer a Friend</td>
            <td>
              <img src="./images/youtube.png" alt="your-image-alt" />
              Youtube
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Services</td>
            <td>Business Studies</td>
            <td>Gift Cards</td>
            <td></td>
          </tr>
        </table>
      </center>
    </>
  );
};

export default Footer;
