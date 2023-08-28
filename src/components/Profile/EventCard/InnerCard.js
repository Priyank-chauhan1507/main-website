import React, { useState } from "react";
import "./EventCard.css";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import DeleteModule from "../MainProfileBox/DeleteModule";
import Loader from "../../Loader/Loader";

function InnerCard({ data, getEvents }) {
  const [like, setlike] = useState(false);
  const [loading, setLoading] = useState(false);
  const [module, setmodule] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    await axios.delete(`/apiV1/registerevent/${data.id}`).then((res) => {});
    getEvents();
    setLoading(false);
    setmodule(false);
  };
  return (
    <>
      <div
        className="eventcard"
        style={{
          background: `url(${data?.event__image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div
          className="card-delete"
          onClick={() => {
            setmodule(true);
          }}
        >
          <MdDelete color="red" size="20px" />
        </div>
        {/* <div style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 6.13%, rgba(0, 0, 0, 0.45) 25.45%, rgba(0, 0, 0, 0.86) 54.90%, #000 92.12%)'}}> */}
        <div className="eventcard1">
          {data?.event__solo_team ? (
            <h2>
              {data?.event__name}({data?.event__solo_team})
            </h2>
          ) : (
            <h2>{data?.event__name}</h2>
          )}
          {like ? (
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
          )}
        </div>
        <hr />
        {data?.event__solo_team === "Solo" ||
        data?.event__solo_team === "solo" ? (
          <p>{data?.event__note}</p>
        ) : (
          <>
            {data?.sub_event && (
              <span className="events-team-name">
                Subevent - {data?.sub_event}
              </span>
            )}
            <span className="events-team-name">
              Team Name - {data?.team_name}
            </span>
            <span className="events-team-name">
              Team Coordinator Name -{data?.team_leader_name}
            </span>
          </>
        )}
        {/* </div> */}
      </div>
    </>
  );
}

export default InnerCard;
