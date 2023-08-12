import React, { useState } from "react";
import logo from "../../assests/logo.svg";
import logo1 from "../../assests/logo2.png";
import bgmobile from "../../assests/bgmobile.webp";
function MobEventnavbar() {
  const events = [
    {
      par: "Music",
      child: [
        "Sargam (Solo)",
        "Sargam (Duet)",
        "Sargam (Team)",
        "Battle Of Bands",
        "Gully War",
        "War of DJ'S",
      ],
    },
    {
      par: "Dramatics",
      child: ["Abhivyakti", "Nukkad Natak", "Mimicry", "Monologue"],
    },
    {
      par: "Gaming",
      child: ["Apocalypse", "Queen's Gambit", "Snooker's Elite"],
    },
    {
      par: "Culinary",
      child: ["Food Fiesta"],
    },
    {
      par: "Choreo",
      child: [
        "Footloose (Solo)",
        "Footloose (Duet)",
        "Footloose (Team)",
        "Step up (Solo)",
        "Step up (Duet)",
      ],
    },
    {
      par: "Fashion",
      child: ["Campus Princess", "Mr & Ms Thomso", "Vogue", "Cosplay"],
    },
    {
      par: "Entertainment",
      child: ["Thomso's Got Talent", "Open MIC", "The Dank Knight"],
    },
    {
      par: "Cinematic",
      child: ["16 Frames", "Box Office", "Box Office"],
    },
    {
      par: "Da Vinci's Gala",
      child: [
        "Art Talkies",
        "Naqaab",
        "Paint Fiesta",
        "Costume Design",
        "Relay Rangoli",
        "Live Sketching",
        "Sneaker Design",
      ],
    },
    {
      par: "Adventure",
      child: ["Seiger", "Treasure Hunt", "Street Soccer", "Scavenger Hunt"],
    },
    {
      par: "LITFest",
      child: [
        "Literati",
        "Pictionary",
        "Spin a Yarn",
        "Big Ideas",
        "Desi Twist",
        "Nerdy-Bate",
        "Slam Poetry",
      ],
    },
    {
      par: "Marketing and Finance",
      child: ["Auction Frenzy", "Corporata", "Mark Sense", "A(d)esign"],
    },
    {
      par: "MUN",
      child: ["IITR-MUN"],
    },
    {
      par: "LITFest",
      child: [
        "Hunger Games",
        "Sumo Wrestling",
        "Air Rifle Shooting",
        "Caricature",
        "Body Zorbing",
        "Human Foosball",
        "The Boulevard Games",
        "Tattoo Artist",
      ],
    },
    {
      par: "Cultural Workshops",
      child: [],
    },
    {
      par: "Technical Workshops",
      child: [],
    },
    {
      par: "Night Life",
      child: ["Silent DJ", "Nightlife Cafe", "Movie Screening"],
    },
    {
      par: "New Events",
      child: [
        "Sneaker Design*",
        "Mimicry*",
        "Monologue*",
        "Thomsography*",
        "Vlogging*",
      ],
    },
  ];
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState({check:false,first:""});
  localStorage.setItem("show", show);
  return (
    <div className="nav-comp1">
      <img className="event-nav-left logo-width" src={logo} alt="" />
      <img
        src={logo1}
        alt=""
        onClick={() => {
          show === false ? setshow(true) : setshow(false);
        }}
        className="logo2"
      />
      {show && (
        <div className="slidebar1">
          <h1>Choose your Event</h1>
          {events.map((el) => {
            const { par, child } = el;
            return (
              <>
                <span
                  onClick={() => {
                    show1.check === false ? setshow1({check:true,first:child[0]}) : setshow1({check:false,first:""});
                  }}
                >
                  {par}
                </span>
                {show1.check &&show1.first===child[0]&&
                  child.map((post) => {
                    return <h3>{post}</h3>;
                  })}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MobEventnavbar;
