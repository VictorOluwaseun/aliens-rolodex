import React from "react";
import "./card.styles.css";

export const Card = ({ alien }) => (
 <div className="card-container">
  <h1>{alien.name}</h1>
 </div>
);
