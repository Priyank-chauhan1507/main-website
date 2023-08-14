import React, { useState } from "react";
import logo from "../../assests/logo.svg";
import "./Eventsnavbar.css";
import MobEventnavbar from "./MobEventnavbar";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ color, disable }) {
  const [display1, setdisplay] = useState("none");
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };

  const onHandleClick = (e) =>{
    navigate(`/events/${e}`)
    setdisplay("none")
  }


  return (
    <div style={{ background: color }} className="nav-comp">
      <MobEventnavbar />
      <div className="mainnav">
        <Link to="/">
          <img className="event-nav-left" src={logo} alt="" />
        </Link>
        <div className="event-nav-right">
          <div
            className="drop2"
            onMouseOver={() => {
              setdisplay("flex");
            }}
            onMouseLeave={() => {
              setdisplay("none");
            }}
          >
            {disable === "disable" ? (
              <>
                <a className="event-nav-right-compo">Events</a>
              </>
            ) : (
              <>
                <a
                  className="event-nav-right-compo"
                  onMouseOver={() => {
                    setdisplay("flex");
                  }}
                  onMouseLeave={() => {
                    setdisplay("none");
                  }}
                >
                  Events
                </a>
                <div
                  className="drop"
                  style={{ display: display1 }}
                  onMouseOver={() => {
                    setdisplay("flex");
                  }}
                  onMouseLeave={() => {
                    setdisplay("none");
                  }}
                >
                  <div className="drop-row">
                    {/* <div className="nav-events"/> */}
                    <div className="col col-yellow">Dramatics</div>
                    <div className="col">Abhivyakti</div>
                    <div className="col">Nukkad Natak</div>
                    <div className="col">Mimicry</div>
                    <div className="col">Monologue</div>
                    <div className="col col-yellow">Music</div>
                    <div className="col" onClick={(e) => onHandleClick(2)}>Sargam (Solo)</div>
                    <div className="col" onClick={(e) => onHandleClick(3)}>Sargam (Duet)</div>
                    <div className="col" onClick={(e) => onHandleClick(1)}>Sargam (Team)</div>
                    <div className="col" onClick={(e) => onHandleClick(4)} >Battle Of Bands</div>
                    <div className="col" onClick={(e) => onHandleClick(5)} >Gully War</div>
                    <div className="col" onClick={(e) => onHandleClick(6)} >War of DJ'S</div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Gaming</div>
                    <div className="col">Apocalypse</div>
                    <div className="col">Queen's Gambit</div>
                    <div className="col">Snooker's Elite</div>
                    <div className="col col-yellow">Culinary</div>
                    <div className="col">Food Fiesta</div>
                    <div className="col col-yellow">Choreo</div>
                    <div className="col">Footloose (Solo)</div>
                    <div className="col">Footloose (Duet)</div>
                    <div className="col">Footloose (Team)</div>
                    <div className="col">Step up (Solo)</div>
                    <div className="col">Step up (Duet)</div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Fashion</div>
                    <div className="col">Campus Princess</div>
                    <div className="col">Mr & Ms Thomso</div>
                    <div className="col">Vogue</div>
                    <div className="col">Cosplay</div>
                    <div className="col col-yellow">Entertainment</div>
                    <div className="col">Thomso's Got Talent</div>
                    <div className="col">Open MIC</div>
                    <div className="col">The Dank Knight</div>
                    <div className="col col-yellow">Cinematic</div>
                    <div className="col">16 Frames</div>
                    <div className="col">Box Office</div>
                  </div>
                  <div className="drop-row">
                    {" "}
                    <div className="col col-yellow">Da Vinci's Gala</div>
                    <div className="col">Art Talkies</div>
                    <div className="col">Naqaab</div>
                    <div className="col">Paint Fiesta</div>
                    <div className="col">Costume Design</div>
                    <div className="col">Relay Rangoli</div>
                    <div className="col">Live Sketching</div>
                    <div className="col">Sneaker Design</div>
                    <div className="col col-yellow">Adventure</div>
                    <div className="col">Seiger</div>
                    <div className="col">Treasure Hunt</div>
                    <div className="col">Street Soccer</div>
                    <div className="col">Scavenger Hunt</div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">LITFest</div>
                    <div className="col">Literati</div>
                    <div className="col">Pictionary</div>
                    <div className="col">Spin a Yarn</div>
                    <div className="col">Big Ideas</div>
                    <div className="col">Desi Twist</div>
                    <div className="col">Nerdy-Bate</div>
                    <div className="col">Slam Poetry</div>
                    <div className="col col-yellow">Marketing and Finance</div>
                    <div className="col">Auction Frenzy</div>
                    <div className="col">Corporata</div>
                    <div className="col">Mark Sense</div>
                    <div className="col">A(d)esign</div>
                  </div>
                  <div className="drop-row">
                    {" "}
                    <div className="col col-yellow">MUN</div>
                    <div className="col">IITR-MUN</div>
                    <div className="col">LITFest</div>
                    <div className="col">Hunger Games</div>
                    <div className="col">Sumo Wrestling</div>
                    <div className="col">Air Rifle Shooting</div>
                    <div className="col">Caricature</div>
                    <div className="col">Body Zorbing</div>
                    <div className="col">Human Foosball</div>
                    <div className="col">The Boulevard Games</div>
                    <div className="col">Tattoo Artist</div>
                    <div className="col col-yellow">Cultural Workshops</div>
                    <div className="col col-yellow1">Technical Workshops</div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Night Life</div>
                    <div className="col">Silent DJ</div>
                    <div className="col">Nightlife Cafe</div>
                    <div className="col col-yellow">Movie Screening</div>
                    <div className="col">New Events</div>
                    <div className="col">Sneaker Design*</div>
                    <div className="col">Mimicry*</div>
                    <div className="col">Monologue*</div>
                    <div className="col">Thomsography*</div>
                    <div className="col">Vlogging*</div>
                  </div>
                </div>
              </>
            )}
          </div>
          <a
            className="event-nav-right-compo"
            href="https://ca.thomso.in/"
            target="blank"
          >
            CA Portal
          </a>
          <a
            className="event-nav-right-compo"
            href="https://zonals.thomso.in/"
            target="blank"
          >
            Zonals
          </a>
          {localStorage.getItem("token") ? (
            <>
              {/* <img src={profile} alt=""  onClick={() => navigate("/newprofile")} className="ca-profile1" /> */}
              <button
                onClick={handleLogout}
                className="event-regi-btn"
                id="registernow"
              >
                LOG OUT
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="event-regi-btn"
                id="registernow"
              >
                LOG IN
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
