import React from "react";
import Container from "../homepage/container";
import Enrollmentcards from "../homepage/enrollmentcard";
import Footer from "../footer/footer";
import Navbar from "../Navbar/Navbar";
import "./home.css";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* <img id="main-image" src="./images/main image.jpg" alt="graphic design" /> */}
        <Container />
        <Enrollmentcards />
      </div>

      <footer>
          <Footer />
      </footer>
    </>
  );
};

export default Home;
