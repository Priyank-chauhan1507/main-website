import React, { useState } from "react";
import logo from "../../assests/logo.svg";
import logo1 from "../../assests/logo2.png";
import bgmobile from "../../assests/bgmobile.webp";
import { useNavigate } from "react-router-dom";
function MobEventnavbar() {
  const navigate = useNavigate();

  const events = [
    {
      par: "Music",
      child: [
        { event:"Sargam (Solo)",href:2},
        { event:"Sargam (Duet)",href:3},
        { event:"Sargam (Team)",href:1},
        { event:"Battle Of Bands",href:4},
        { event:"Gully War",href:5},
        { event:"War of DJ'S",href:6},
      ],
    },
    {
      par: "Dramatics",
      child: [{ event:"Abhivyakti",href:7}, { event:"Nukkad Natak",href:null}, { event:"Mimicry",href:null}, { event:"Monologue",href:null}],
    },
    {
      par: "Gaming",
      child: [{ event:"Apocalypse",href:51}, { event:"Queen's Gambit",href:53}, { event:"Snooker's Elite",href:56}]
    },
    {
      par: "Culinary",
      child: [{ event:"Food Fiesta",href:38 }],
    },
    {
      par: "Choreo",
      child: [
       { event: "Footloose (Solo)",href:33 },
        { event:"Footloose (Duet)",href: 31},
        { event:"Footloose (Team)",href:32 },
       { event: "Step up (Solo)",href:48},
       { event: "Step up (Duet)",href: 45},
      ],
    },
    {
      par: "Fashion",
      child: [{ event:"Campus Princess",href:74 }, { event:"Mr & Ms Thomso",href:76 },{ event: "Vogue",href:null}, { event:"Cosplay",href:null}],
    },
    {
      par: "Entertainment",
      child: [{ event:"Thomso's Got Talent(solo)",href: 19}, { event:"Thomso's Got Talent(team)",href: 18},{ event:"Open MIC",href:21 }, { event:"The Dank Knight",href:68 }],
    },
    {
      par: "Cinematic",
      child: [{ event:"16 Frames",href:15 }, { event:"Box Office",href:16 }],
    },
    {
      par: "Da Vinci's Gala",
      child: [
        { event:"Art Talkies",href:62 },
        { event:"Naqaab",href:63 },
        { event:"Paint Fiesta",href: 64},
       { event: "Costume Design",href: 65},
        { event:"Relay Rangoli",href: 66},
        { event:"Live Sketching",href:67 },
        { event:"Sneaker Design",href:null },
      ],
    },
    {
      par: "Adventure",
      child: [{ event:"Seiger",href: 57}, { event:"Treasure Hunt",href:58 }, { event:"Street Soccer",href:60 }, { event:"Scavenger Hunt",href: 61}],
    },
    {
      par: "LITFest",
      child: [
        { event:"Literati",href:17 },
        { event:"Pictionary",href:20 },
        { event:"Spin a Yarn",href:22 },
        { event:"Big Ideas",href: 25},
        { event:"Desi Twist",href:28 },
        { event:"Nerdy-Bate",href: 29},
        { event:"Slam Poetry",href: 30},
      ],
    },
    {
      par: "Marketing and Finance",
      child: [{ event:"Auction Frenzy",href:23 }, { event:"Corporata",href:24 }, { event:"Mark Sense",href: 26}, { event:"A(d)esign",href:27 }],
    },
    {
      par: "MUN",
      child: [{ event:"IITR-MUN",href: 35}],
    },
    {
      par: "LITFest",
      child: [
        { event:"Hunger Games",href:42 },
        { event:"Sumo Wrestling",href:43 },
        { event:"Air Rifle Shooting",href:44},
        { event:"Caricature",href: 49},
        { event:"Body Zorbing",href: 50},
       { event: "Human Foosball",href: 52},
     { event:   "The Boulevard Games",href: 54},
       { event: "Tattoo Artist",href:55 },
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
      child: [{ event:"Silent DJ",href: 11}, { event:"Nightlife Cafe",href:null }, { event:"Movie Screening",href: null}],
    },
    {
      par: "New Events",
      child: [
       { event: "Sneaker Design*",href:null },
       { event: "Mimicry*",href:null },
       { event: "Monologue*",href:null },
        { event:"Thomsography*",href:null },
       { event: "Vlogging*",href:null },
      ],
    },
  ];
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState({ check: false, first: "" });
  localStorage.setItem("show", show);
  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
  };
  return (
    <div className="nav-comp1">
      <img className="event-nav-left logo-width" src={logo} alt="" onClick={()=>{navigate("/")}} />
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
                    show1.check === false
                      ? setshow1({ check: true, first: child[0]?.event })
                      : setshow1({ check: false, first: "" });
                  }}
                >
                  {par}
                </span>
                {show1?.check &&
                  show1?.first === child[0]?.event &&
                  child.map((post) => {
                    return <h3 onClick={() => {post?.href!==null&&onHandleClick(post?.href); setshow(false)}}>{post?.event}</h3>;
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
