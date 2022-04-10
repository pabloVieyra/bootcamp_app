import React from "react";
import "./TitleCard.css";

const TitleCard = ({ title, subtitle }) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default TitleCard;
