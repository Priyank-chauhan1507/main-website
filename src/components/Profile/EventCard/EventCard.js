import React, { useState } from "react";
import "./EventCard.css";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
function EventCard({ data }) {
  const [like, setlike] = useState(false);
  return (
    <div className="eventcard" style={{background:`url(${data?.event__image})`,    backgroundSize: "cover",backgroundPosition:"center center"}}>
      <div className="eventcard1">
        <h2>{data?.event__name}</h2>
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
      {data?.event__solo_team === "solo" ? (
        <p>{data?.event__note}</p>
      ) : (
        <>
          <span className="events-team-name">Team Name - {data?.team_name}</span>
          <span className="events-team-name">Team Coordinator Name -{data?.team_leader_name}</span>
        </>
      )}
    </div>
  );
}

export default EventCard;
