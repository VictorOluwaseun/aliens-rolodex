import React from "react";
import "./card-list.style.css";
import { Card } from "./../card/card.component";

export const CardList = ({ aliens }) => (
 <div className="card-list">
  {aliens.map(alien => (
   <Card key={alien.id} alien={alien} />
  ))}
 </div>
);
