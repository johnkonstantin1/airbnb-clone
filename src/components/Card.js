import React from "react";
import Star from "../images/Star.png";
import "./Card.css";
export default function Card(props) {
  return (
    <section>
      <div className="card">
        <img src={props.img} className="card--image" />
        <div className="card--status">
          <img src={Star} className="star--image" />
          <span>{props.rating}</span>
          <span className="gray">({props.rewiewCount}) </span>
          <span className="gray">{props.country} </span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold--text">From {props.price}</span> / person
        </p>
      </div>
    </section>
  );
}
