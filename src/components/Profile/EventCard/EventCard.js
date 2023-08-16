import React, { useState } from "react";
import "./EventCard.css";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
function EventCard({data}) {
  const [like, setlike] = useState(false)
  return (
    <div className="eventcard">
      <div className="eventcard1">
        <h2>{data?.event__name}</h2>
        {like?(<><RiHeart2Fill  onClick={()=>{setlike(false)}} color="red"/></>):(<><RiHeart2Line onClick={()=>{setlike(true)}} color="white"/></>)}
        
      </div>
      <hr />
      <p>{data?.event__note}</p>
    </div>
  );
}

export default EventCard;
