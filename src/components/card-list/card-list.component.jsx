import React from "react";
import "./card-list.style.css";

export const CardList = ({ aliens }) => (
 <div className="card-list">
  {aliens.map(alien => (
   <h1 key={alien.id}>{alien.name}</h1>
  ))}
 </div>
);
