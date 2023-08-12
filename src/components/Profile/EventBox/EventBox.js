import React from 'react';
import "./EventBox.css";
import IMG from "../../../assests/eventpic.webp";

const EventBox = () => {
  return (
    <div className="EventBox-background">
        <div className="EventBox-Image">
            <img src={IMG} alt="LOGO" />
        </div>
      <div className="EventBox-Text">
        You haven't participated 
      </div>
      <div className="EventBox-Text">
        in any event 
      </div>
      <div className="EventBox-BTN">
      <button className="EventBox-Button">
        Participte now
      </button>
      </div>
    </div>
  )
}

export default EventBox
