import EventCardPage from "./EventCardPage";
import React, { useState } from "react";
import "./eventcard.css";
import default_image from "./images/default_event.png";
// import { useState, useEffect } from "react";
// import a from "./images/ls.svg";
// import axios from "axios";

const EventCard = ({ data }) => {
  const [event, setEvent] = useState(null);
  // console.log(data);

  // console.log(event, "");
  const openPage = (e) => {
    setEvent(e);
    // const evPage = document.getElementById("ev-page");
    // evPage.classList.remove("none");
  };
  const closePage = () => {
    setEvent(null);
  };
  return (
    <>
      {data &&
        data?.map((datas, index) => {
          return (
            <>
              <div
                id="card_icc"
                key={datas?.id}
                onClick={() => openPage(index)}
              >
                <div id="card_ic">
                  <img
                    src={datas?.image == null ? default_image : datas?.image}
                    alt="image"
                    id="img_1__card_ec"
                  />
                </div>
                <div id="text_1_card_ec">
                  <div id="text_1_card_ec_1">{datas?.name}({datas?.solo_team})</div>
                  <div id="text_1_card_ec_2">{datas?.category?.name}</div>
                </div>
              </div>
            </>
          );
        })}
      {event != null && (
        <div>
          <EventCardPage data={data[event]} closePage={closePage} />
        </div>
      )}
    </>
  );
};

export default EventCard;
