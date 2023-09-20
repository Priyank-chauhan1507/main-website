import EventCardPage from "./EventCardPage";
import React, { useState } from "react";
import "./eventcard.css";
import default_image from "./images/default_event.png";
// import { useState, useEffect } from "react";
// import a from "./images/ls.svg";
// import axios from "axios";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const EventCard = ({ data }) => {
  const [event, setEvent] = useState(null);
  const [like, setlike] = useState(false);

  console.log(data);

  // console.log(event, "");
  const openPage = (e) => {
    setEvent(e);
    // const evPage = document.getElementById("ev-page");
    // evPage.classList.remove("none");
  };
  const closePage = () => {
    setEvent(null);
  };
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
              {/* <div
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
                  <div id="text_1_card_ec_1">{datas?.name}</div>
                  <div id="text_1_card_ec_2">{datas?.category?.name}</div>
                </div>
              </div> */}
              <div
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
                  {/* <div style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 6.13%, rgba(0, 0, 0, 0.45) 25.45%, rgba(0, 0, 0, 0.86) 54.90%, #000 92.12%)'}}> */}

                  <div className="eventcard1" style={{textDecoration:"underline",color:"white"}}>
                    {datas?.solo_team ? (
                      <h2>
                        {datas?.name}({datas?.solo_team})
                      </h2>
                    ) : (
                      <h2>{datas?.name}</h2>
                    )}
                    {/* {like ? (
                      <>
                        <RiHeart2Fill
                          onClick={() => {
                            setlike(false);
                          }}
                          color="red"
                        />
                      </>
                    ) : (
                      <>
                        <RiHeart2Line
                          onClick={() => {
                            setlike(true);
                          }}
                          color="white"
                        />
                      </>
                    )} */}
                  </div>
                  {/* <hr /> */}
                  <p>{datas?.description.slice(0, 100)}....</p>
                </div>
                {/* </div> */}
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
