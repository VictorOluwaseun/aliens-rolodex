import React from "react";
import "./card.styles.css";

export const Card = ({ alien }) => (
 <div className="card-container">
  <img
   alt="alien"
   src={`https://robohash.org/${alien.id}?set=set2&size=180x180`}
  />
  <h2>{alien.name}</h2>
  <p>{alien.email.toLowerCase()}</p>
 </div>
);
