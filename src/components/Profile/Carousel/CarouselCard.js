import React from "react";
import { useNavigate } from "react-router-dom";

function CarouselCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className="carouselcard">
      <div
        className="eventcard"
        style={{
          background: `url(${data?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height:"32vh"
        }}
      >
        <h1 className="carouselcard_name">{data?.name}</h1>
        <div className="carouselcard_participate" onClick={() => {navigate(`/events/`+data?.id)}}>
          Participate
        </div>
        <div className="car_gard" />
      </div>
    </div>
  );
}

export default CarouselCard;
