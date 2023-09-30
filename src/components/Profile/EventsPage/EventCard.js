// import EventCardPage from "./EventCardPage";
import React, { useState } from "react";
import "./eventcard.css";
import default_image from "./images/default_event.png";
// import { useState, useEffect } from "react";
// import a from "./images/ls.svg";
// import axios from "axios";
// import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const EventCard = ({ data }) => {

  const navigate = useNavigate();
  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
  };
  return (
    <>
      {data &&
        data?.map((datas, index) => {
          return (
            <>

              <div
                key={index}
                className="eventcard"
                onClick={() => onHandleClick(datas?.id)}
              >
                <img
                  src={datas?.image == null ? default_image : datas?.image}
                  alt="image"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                  id="img_1__card_ec"
                />
                <div className="blackShield">

                  <div className="eventcard1" style={{color:"white"}}>
                    {datas?.solo_team ? (
                      <h2>
                        {datas?.name}({datas?.solo_team})
                      </h2>
                    ) : (
                      <h2>{datas?.name}</h2>
                    )}

                  </div>
                  {/* <hr /> */}
                  <p>{datas?.description.slice(0, 100)}....</p>
                </div>
                {/* </div> */}
              </div>
            </>
          );
        })}
    </>
  );
};

export default EventCard;
