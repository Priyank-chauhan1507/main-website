import React from "react";
import "./anibut.css";
const AniButton = ({ onSubmit,name }) => {
  return (
    <div className="ani-butt" onClick={onSubmit}>
      <span className="ani-butt-span">{name}</span>
    </div>
  );
};

export default AniButton;
