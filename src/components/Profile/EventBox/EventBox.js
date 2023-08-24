import React, { useEffect, useState } from "react";
import "../Profile/Profile.css";
import "../LeftSideProfile/leftsideprofile.css";
import log from "../../../assests/logout-logo.svg";
import cs1 from "../../../assests/CautionSign1.svg";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/profile1.png.jpg";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/event_black.png";
import icon21 from "../../../assests/events.svg";
import icon3 from "../../../assests/payment.svg";
import line from "../../../assests/line1.svg";
import eventcenterpic from "../../../assests/eventpic.webp";
import axios from "axios";
import EventCard from "../EventCard/EventCard";
import EventTable from "./EventTable";
const EventBox = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(0);
  const [display1, setdisplay] = useState(false);
  const [display2, setdisplay2] = useState(false);
  const [clicked, setclicked] = useState("")
  const [disable, setdisable] = useState("notdisable");
  const [events, setEvents] = useState([]);
  const [userDetails, setuserDetails] = useState({});
  // const [filter, setFilter] = useState("solo");
  const getEvents = async () => {
    const res = axios
      .get(
        `/apiV1/registerusereventdetailed?participant_id=${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const ress = axios
      .get(`/apiV1/current_user_participant`)
      .then((ress) => {
        setuserDetails(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("Userobj");
    setLogout(!logout);
    window.location.pathname = "/";
  }


 

  useEffect(() => {
    if (!userDetails?.id) {
      // navigate.push("/login");
    }
  }, []);

  const locator = useLocation();
  const onHandleClick = (e) => {
    navigate(`/events/${e}`);
  };
  const Locator = useLocation();

  return (
    <>
      <div className="nnp-container">
        <img src={Back} className="pro-back-img" alt="" />
        <img src={Back1} className="pro-back-img2" alt="" />
        <div className="nnp-head">
          <Navbar color="transparent" disable={disable} data={userDetails}/>
        </div>
        <div className="boxborder">
          <div className="nnp-laphead">
            <div className="nnp-content">
              <div className="lsp-box">
                <div className="lsp-pic">
                  <img className="lsp-img1" src={userDetails?.avtar ? userDetails?.avtar : pic} alt="profilepic" />
                  <span className="lsp-text1">
                    {userDetails?.name} {userDetails?.is_ca ? "(CA)" : ""}
                  </span>
                  <span className="lsp-text2">
                    Thomso ID:{userDetails?.thomso_id}
                  </span>
                  {userDetails?.is_ca &&
            (<span className="lsp-text2">
              CA ID : {userDetails?.ca_thomso_id}
            </span>)}
                </div>
                {/* <div>
                  {userDetails?.username}
                  {userDetails?.thomso_id}
                </div> */}

                <div className="lsp-centre event-space">
                  <div
                    className={
                      locator.pathname === "/profile"
                        ? "lsp-c1 c1-text"
                        : "lsp-c2 c2-text"
                    }
                  >
                    <img src={icon1} alt="icon1" />
                    <Link
                      to="/profile"
                      className={
                        locator.pathname === "/profile" ? "c1-text" : "c2-text"
                      }
                    >
                      Profile
                    </Link>
                  </div>
                  {!userDetails?.is_iitr_alumn && (
                    <div
                      className={
                        locator.pathname === "/pevents"
                          ? "lsp-c1 c1-text"
                          : "lsp-c2 c2-text"
                      }
                    >
                      <img src={icon2} alt="icon2" />
                      <Link
                        to="/pevents"
                        className={
                          locator.pathname === "/pevents"
                            ? "c1-text"
                            : "c2-text"
                        }
                      >
                        Events
                      </Link>
                    </div>
                  )}
                  {userDetails?.is_iitr_alumn ? (
                    <div
                      className={
                        locator.pathname === "/paymentbox"
                          ? "lsp-c2 c2-text"
                          : "lsp-c2 c2-text"
                      }
                    >
                      <img src={icon3} alt="icon3" />
                      <Link
                        to="/paymentbox"
                        className={
                          locator.pathname === "/paymentbox"
                            ? "c1-text"
                            : "c2-text"
                        }
                      >
                        Payment
                      </Link>
                    </div>
                  ) : (
                    <div className="lsp-c3">
                      <img src={icon3} alt="icon3" />
                      <Link
                        to="/payment"
                        className={
                          locator.pathname === "/payment"
                            ? "c1-text"
                            : "c2-text"
                        }
                      >
                        Payment
                      </Link>
                    </div>
                  )}
                               <button
            className="main-logout-btn"
            onClick={() => setLogout(!logout)}
          >
            <img src={log} alt="log" />
            <span>Logout</span>
          </button>
                </div>
              </div>
              <div className={!logout ? "none" : ""} id="logout">
        <div className="l_body">
          <div className="logout_body">
            <div className="redpic">
              <img src={cs1} alt="redpic" />
            </div>
            <div className="textt">
              <div className="fText">Are You Sure?</div>
              <div className="sText">
                Do you really want to leave and logout?
              </div>
            </div>
            <div className="btns">
              <button className="btn1">
                <span
                  onClick={() => {
                    setLogout(!logout);
                  }}
                >
                  Cancel
                </span>
              </button>
              <button className="btn2" onClick={handleLogout}>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
              <div className="c-line1">
                <img className="c-line1-img" src={line} alt="line" />
              </div>
              {events ? (
                <div className="eventcard-body">
                  <div className="eventcard-nav">
                    <span
                      style={{
                        cursor: "default",
                      }}
                    >
                      Participate
                    </span>
                    
                    {/* <span
                      onClick={() => {
                        setFilter("solo");
                      }}
                      className={filter === "solo" ? "event-type-select" : ""}
                    >
                      Solo
                    </span>
                    <span
                      onClick={() => {
                        setFilter("duet");
                      }}
                      className={filter === "duet" ? "event-type-select" : ""}
                    >
                      Duet
                    </span>
                    <span
                      onClick={() => {
                        setFilter("team");
                      }}
                      className={filter === "team" ? "event-type-select" : ""}
                    >
                      Team
                    </span> */}
                    <button
                      onClick={() => {
                        setdisplay2(!display2);
                        setdisable("disable");
                      }}
                    >
                      + Add Event
                    </button>
                  </div>
                  {display2 ? (
                    <>
                      <EventTable />
                    </>
                  ) : (
                    <div className="eventcards">
                      {events.map((el) => {
                        return <EventCard data={el} getEvents={getEvents} getData={getData} setclicked={setclicked}/>;
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {display1 === false ? (
                    <div className="event-box">
                      <img src={eventcenterpic} alt="" />
                      <button
                        onClick={() => {
                          setdisplay(true);
                          setdisable("disable");
                        }}
                      >
                        Participate Now
                      </button>
                    </div>
                  ) : (
                    <div
                      style={{ top: "5vh", right: "1vw", width: "70vw" }}
                      className="drop"
                    >
                      <div className="drop-row">
                        <div className="col col-yellow">Choreo</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(76);
                          }}
                        >
                          Footloose (Solo)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(77);
                          }}
                        >
                          Footloose (Duet)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(75);
                          }}
                        >
                          Footloose (Team)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(42);
                          }}
                        >
                          Step up (Solo)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(43);
                          }}
                        >
                          Step up (Team)
                        </div>
                        <div className="col col-yellow">Da Vinci's Gala</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(56);
                          }}
                        >
                          Art Talkies
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(57);
                          }}
                        >
                          Naqaab
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(58);
                          }}
                        >
                          Paint Fiesta
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(59);
                          }}
                        >
                          Costume Design
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(60);
                          }}
                        >
                          Relay Rangoli
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(61);
                          }}
                        >
                          Live Sketching
                        </div>
                        {/* <div className="nav-events"/> */}
                      </div>
                      <div className="drop-row">
                        <div className="col col-yellow">Fashion</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(29);
                          }}
                        >
                          Campus Princess
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(31);
                          }}
                        >
                          Mr & Ms Thomso
                        </div>
                        <div className="col colhover">Vogue</div>
                        <div className="col colhover">Cosplay</div>
                        <div className="col col-yellow">LITFest</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(16);
                          }}
                        >
                          Literati
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(19);
                          }}
                        >
                          Pictionary
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(21);
                          }}
                        >
                          Spin a Yarn
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(24);
                          }}
                        >
                          Big Ideas
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(27);
                          }}
                        >
                          Desi Twist
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(30);
                          }}
                        >
                          Slam Poetry
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(28);
                          }}
                        >
                          Nerdy Bait
                        </div>
                      </div>
                      <div className="drop-row">
                        <div className="col col-yellow">Music</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(4);
                          }}
                        >
                          Sargam (Solo)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(5);
                          }}
                        >
                          Sargam (Duet)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(3);
                          }}
                        >
                          Sargam (Team)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(6);
                          }}
                        >
                          Battle Of Bands
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(7);
                          }}
                        >
                          Gully War
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(8);
                          }}
                        >
                          War of DJ'S
                        </div>
                        <div className="col col-yellow">Carnival</div>
                        {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(39);
                      }}
                    >
                      Hunger Games
                    </div> */}
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(40);
                          }}
                        >
                          Sumo Wrestling
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(41);
                          }}
                        >
                          Air Rifle Shooting
                        </div>
                        {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(44);
                      }}
                    >
                      Caricature
                    </div> */}
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(45);
                          }}
                        >
                          Body Zorbing
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(47);
                          }}
                        >
                          Human Foosball
                        </div>
                        {/* <div
                      className="col colhover"
                      onClick={(e) => {
                        onHandleClick(49);
                      }}
                    >
                      The Boulevard Games
                    </div> */}
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(50);
                          }}
                        >
                          Tattoo Artist
                        </div>
                      </div>
                      <div className="drop-row">
                        <div className="col col-yellow">Entertainment</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(17);
                          }}
                        >
                          Thomso's Got Talent(Solo)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(18);
                          }}
                        >
                          Thomso's Got Talent(Team)
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(20);
                          }}
                        >
                          Open MIC
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(62);
                          }}
                        >
                          The Dank Knight
                        </div>

                        <div className="col col-yellow">Adventure</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(52);
                          }}
                        >
                          Seiger
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(53);
                          }}
                        >
                          Treasure Hunt
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(54);
                          }}
                        >
                          Street Soccer
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(55);
                          }}
                        >
                          Scavenger Hunt
                        </div>
                      </div>
                      <div className="drop-row">
                        <div className="col col-yellow">Dramatics</div>
                        <div
                          className="col"
                          onClick={(e) => {
                            onHandleClick(9);
                          }}
                        >
                          Abhivyakti
                        </div>

                        <div className="col colhover">Nukkad Natak</div>
                        {/* <div className="col colhover">Mimicry</div>
                    <div className="col colhover">Monologue</div> */}

                        {/* <div className="col col-yellow">Marketing and Finance</div> */}

                        <div className="col col-yellow">
                          Marketing and Finance
                        </div>

                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(22);
                          }}
                        >
                          Auction Frenzy
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(23);
                          }}
                        >
                          Corporata
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(25);
                          }}
                        >
                          Mark Sense
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(26);
                          }}
                        >
                          A(d)esign
                        </div>
                        <div className="col col-yellow">Quizzing</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(12);
                          }}
                        >
                          Quriosity
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(13);
                          }}
                        >
                          Telly sporcle
                        </div>
                      </div>
                      <div className="drop-row">
                        <div className="col col-yellow">Gaming</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(46);
                          }}
                        >
                          Apocalypse
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(48);
                          }}
                        >
                          Queen's Gambit
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(51);
                          }}
                        >
                          Snooker's Elite
                        </div>
                        <div className="col col-yellow">Culinary</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(35);
                          }}
                        >
                          Food Fiesta
                        </div>
                        <div className="col col-yellow">MUN</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(32);
                          }}
                        >
                          IITR-MUN
                        </div>
                        <div className="col col-yellow">Cinematic</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(14);
                          }}
                        >
                          16 Frames
                        </div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(15);
                          }}
                        >
                          Box Office
                        </div>

                        {/* <div className="col col-yellow">Cultural Workshops</div> */}
                        {/* <div className="col col-yellow1">Technical Workshops</div> */}
                      </div>
                      <div className="drop-row">
                        <div className="col col-yellow">Online</div>
                        <div className="col colhover">Bgmi</div>
                        <div className="col colhover">Quizardry</div>
                        <div className="col col-yellow">Night Life</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(1);
                          }}
                        >
                          Silent DJ
                        </div>
                        <div className="col colhover">Nightlife Cafe</div>
                        <div className="col colhover ">Karaoke</div>
                        <div className="col col-yellow">New Events</div>
                        <div className="col colhover">Sneaker Design*</div>
                        <div className="col colhover">Mimicry*</div>
                        <div className="col colhover">Monologue*</div>
                        <div
                          className="col colhover"
                          onClick={(e) => {
                            onHandleClick(73);
                          }}
                        >
                          Thomsography*
                        </div>
                        <div className="col colhover">Vlogging*</div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="nnp-mobile">
            <div className="mobpaymentcenterimg">
              <div className="mpb-mobileview">
                <div className="mv-top">
                  <div className="mv-top-1">
                    <img src={icon1} alt="profile" className="img--1" />
                    <Link
                      to="/profile"
                      className={
                        Locator.pathname === "/profile"
                          ? "nav-active"
                          : "nav-passive"
                      }
                    >
                      Profile
                    </Link>
                  </div>
                  {userDetails?.is_iitr_alumn ? null : (
                    <div className="mv-top-2">
                      <img src={icon21} alt="Events" className="img--1" />
                      <Link
                        to="/pevents"
                        className={
                          Locator.pathname === "/pevents"
                            ? "nav-active"
                            : "nav-passive"
                        }
                      >
                        Events
                      </Link>
                    </div>
                  )}
                  {userDetails?.is_iitr_alumn ? (
                    <div className="mv-top-2">
                      <img src={icon3} alt="payment" className="img--1" />
                      <Link
                        to="/payment-alumn"
                        className={
                          Locator.pathname === "/payment-alumn"
                            ? "nav-active"
                            : "nav-passive"
                        }
                      >
                        Payment
                      </Link>
                    </div>
                  ) : (
                    <div className="mv-top-2">
                      <img src={icon3} alt="payment" className="img--1" />
                      <Link
                        to="/payment"
                        className={
                          Locator.pathname === "/payment"
                            ? "nav-active"
                            : "nav-passive"
                        }
                      >
                        Payment
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mpb-line1" />
              </div>
              {events ? (
                <>
                  <div className="eventcard-nav">
                    <span
                    className="eventcard-nav-part"
                      style={{
                        cursor: "default",
                      }}
                    >
                      Participate
                    </span>
                    <button className="eventcard-button" style={{margin:'auto'}} onClick={() => navigate('/eventslist')}>Add an Event</button>
                    {/* <span
                      onClick={() => {
                        setFilter("solo");
                      }}
                      className={filter === "solo" ? "event-type-select" : ""}
                    >
                      Solo
                    </span>
                    <span
                      onClick={() => {
                        setFilter("duet");
                      }}
                      className={filter === "duet" ? "event-type-select" : ""}
                    >
                      Duet
                    </span>
                    <span
                      onClick={() => {
                        setFilter("team");
                      }}
                      className={filter === "team" ? "event-type-select" : ""}
                    >
                      Team */}
                    {/* </span> */}
                  </div>
                  <div className="eventcards">
                    {events.map((el) => {
                      return <EventCard data={el} getEvents={getEvents} getData={getData} setclicked={setclicked}/>;
                    })}
                  </div>
                </>
              ) : (
                <img src={eventcenterpic} alt="" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  return {
    userDetails,
  };
};

export default connect(mapStateToProps, null)(EventBox);
