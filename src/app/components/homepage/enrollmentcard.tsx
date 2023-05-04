"use client"

import React from "react";
import "./ecard.css";

const Enrollmentcards = () => {
  const cards = [
    {
      imgSrc: "./images/log1.png",
      title: "Enrolled Students",
      count: "80,000+",
    },
    {
      imgSrc: "./images/log2.png",
      title: "Online Courses",
      count: "1,200+",
    },
    {
      imgSrc: "./images/log3.png",
      title: "Expert instructors",
      count: "80,000+",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt={card.title} />
          <div className="card-info">
            <h4 style={{ color: "black", fontWeight: "bold" }}>
              {card.title}
            </h4>
            <h2>{card.count}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Enrollmentcards;
