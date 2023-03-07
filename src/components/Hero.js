import React from "react";
import Experience from "../images/air-bnb-experience.png"
import "./Hero.css"
export default function Hero() {
  return (
    <section className="hero"> 
      <img className="hero--image" src={Experience}/>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}






