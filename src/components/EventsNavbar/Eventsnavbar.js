import React, { useState } from "react";
import logo from "../../assests/logo.svg";
import "./Eventsnavbar.css";
import MobEventnavbar from "./MobEventnavbar";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ color, disable, setregister, register }) {
  const [display1, setdisplay] = useState("none");
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };

  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
    setdisplay("none");
    if (register) {
      setregister(true);
    }
  };

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
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(9);
                      }}
                    >
                      Abhivyakti
                    </div>
                    <div className="col">Nukkad Natak</div>
                    <div className="col">Mimicry</div>
                    <div className="col">Monologue</div>
                    <div className="col col-yellow">Music</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(4);
                      }}
                    >
                      Sargam (Solo)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(5);
                      }}
                    >
                      Sargam (Duet)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(3);
                      }}
                    >
                      Sargam (Team)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(6);
                      }}
                    >
                      Battle Of Bands
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(7);
                      }}
                    >
                      Gully War
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(8);
                      }}
                    >
                      War of DJ'S
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Gaming</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(46);
                      }}
                    >
                      Apocalypse
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(48);
                      }}
                    >
                      Queen's Gambit
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(51);
                      }}
                    >
                      Snooker's Elite
                    </div>
                    <div className="col col-yellow">Culinary</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(35);
                      }}
                    >
                      Food Fiesta
                    </div>
                    <div className="col col-yellow">Choreo</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(76);
                      }}
                    >
                      Footloose (Solo)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(77);
                      }}
                    >
                      Footloose (Duet)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(75);
                      }}
                    >
                      Footloose (Team)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(42);
                      }}
                    >
                      Step up (Solo)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(43);
                      }}
                    >
                      Step up (Team)
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Fashion</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(29);
                      }}
                    >
                      Campus Princess
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(31);
                      }}
                    >
                      Mr & Ms Thomso
                    </div>
                    <div className="col">Vogue</div>
                    <div className="col">Cosplay</div>
                    <div className="col col-yellow">Entertainment</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(17);
                      }}
                    >
                      Thomso's Got Talent(Solo)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(18);
                      }}
                    >
                      Thomso's Got Talent(Team)
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(20);
                      }}
                    >
                      Open MIC
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(62);
                      }}
                    >
                      The Dank Knight
                    </div>
                    <div className="col col-yellow">Cinematic</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(14);
                      }}
                    >
                      16 Frames
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(15);
                      }}
                    >
                      Box Office
                    </div>
                  </div>
                  <div className="drop-row">
                    {" "}
                    <div className="col col-yellow">Da Vinci's Gala</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(56);
                      }}
                    >
                      Art Talkies
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(57);
                      }}
                    >
                      Naqaab
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(58);
                      }}
                    >
                      Paint Fiesta
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(59);
                      }}
                    >
                      Costume Design
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(60);
                      }}
                    >
                      Relay Rangoli
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(61);
                      }}
                    >
                      Live Sketching
                    </div>
                    <div className="col">Sneaker Design</div>
                    <div className="col col-yellow">Adventure</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(52);
                      }}
                    >
                      Seiger
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(53);
                      }}
                    >
                      Treasure Hunt
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(54);
                      }}
                    >
                      Street Soccer
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(55);
                      }}
                    >
                      Scavenger Hunt
                    </div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">LITFest</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(16);
                      }}
                    >
                      Literati
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(19);
                      }}
                    >
                      Pictionary
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(21);
                      }}
                    >
                      Spin a Yarn
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(24);
                      }}
                    >
                      Big Ideas
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(27);
                      }}
                    >
                      Desi Twist
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(28);
                      }}
                    >
                      Nerdy-Bate
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(30);
                      }}
                    >
                      Slam Poetry
                    </div>
                    <div className="col col-yellow">Marketing and Finance</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(22);
                      }}
                    >
                      Auction Frenzy
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(23);
                      }}
                    >
                      Corporata
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(25);
                      }}
                    >
                      Mark Sense
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(26);
                      }}
                    >
                      A(d)esign
                    </div>
                  </div>
                  <div className="drop-row">
                    {" "}
                    <div className="col col-yellow">MUN</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(32);
                      }}
                    >
                      IITR-MUN
                    </div>
                    <div className="col col-yellow">LITFest</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(39);
                      }}
                    >
                      Hunger Games
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(40);
                      }}
                    >
                      Sumo Wrestling
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(41);
                      }}
                    >
                      Air Rifle Shooting
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(44);
                      }}
                    >
                      Caricature
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(45);
                      }}
                    >
                      Body Zorbing
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(47);
                      }}
                    >
                      Human Foosball
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(49);
                      }}
                    >
                      The Boulevard Games
                    </div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(50);
                      }}
                    >
                      Tattoo Artist
                    </div>
                    <div className="col col-yellow">Cultural Workshops</div>
                    <div className="col col-yellow1">Technical Workshops</div>
                  </div>
                  <div className="drop-row">
                    <div className="col col-yellow">Night Life</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(1);
                      }}
                    >
                      Silent DJ
                    </div>
                    <div className="col">Nightlife Cafe</div>
                    <div className="col ">Movie Screening</div>
                    <div className="col col-yellow">New Events</div>
                    <div className="col">Sneaker Design*</div>
                    <div className="col">Mimicry*</div>
                    <div className="col">Monologue*</div>
                    <div
                      className="col"
                      onClick={(e) => {
                        onHandleClick(73);
                      }}
                    >
                      Thomsography*
                    </div>
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
