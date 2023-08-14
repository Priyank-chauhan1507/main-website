import React, { useEffect, useState } from "react";
import "../Profile/Profile.css";
import "../LeftSideProfile/leftsideprofile.css";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/profilepic.png";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/event_black.png";
import icon3 from "../../../assests/payment.svg";
import line from "../../../assests/line1.svg";
import eventcenterpic from "../../../assests/eventpic.webp";

const EventBox = ({ userDetails }) => {
  const navigate = useNavigate();
  const [display1, setdisplay] = useState(false);
  const [disable, setdisable] = useState("notdisable");
  useEffect(() => {
    if (!userDetails?.id) {
      // navigate.push("/login");
    }
  }, []);
  const locator = useLocation();
  return (
    <>
      <div className="nnp-container">
        <img src={Back} className="pro-back-img" alt="" />
        <img src={Back1} className="pro-back-img2" alt="" />
        <div className="nnp-head">
          <Navbar color="transparent" disable={disable}/>
          {/* <div className="nnp-mobhead">
            <EventMobileNav />
          </div> */}
        </div>
        <div className="boxborder">
          <div className="nnp-laphead">
            <div className="nnp-content">
              <div className="lsp-box">
                <div className="lsp-pic">
                  <img className="lsp-img1" src={pic} alt="profilepic" />
                  <span className="lsp-text1">
                    {userDetails?.name} {userDetails?.is_ca ? "(CA)" : ""}
                  </span>
                  <span className="lsp-text2">Thomso ID:{userDetails?.thomso_id}</span>
                </div>
                <div>
                  {userDetails?.username}
                  {userDetails?.thomso_id}
                </div>
                <div className="lsp-centre">
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
                </div>
              </div>
              <div className="c-line1">
                <img className="c-line1-img" src={line} alt="line" />
              </div>
              {display1===false ? (
                <div className="event-box">
                  <img src={eventcenterpic} alt="" />
                  <button onClick={() => {setdisplay(true); setdisable("disable") }}>Participate Now</button>
                </div>
              ) : (
                <div style={{top:"12vh",right:"1vw",width:"70vw"}} className="drop">
                  <div className="drop-row">
                    {/* <div className="nav-events"/> */}
                    <div className="col col-yellow">Dramatics</div>
                    <div className="col">Abhivyakti</div>
                    <div className="col">Nukkad Natak</div>
                    <div className="col">Mimicry</div>
                    <div className="col">Monologue</div>
                    <div className="col col-yellow">Music</div>
                    <div className="col">Sargam (Solo)</div>
                    <div className="col">Sargam (Duet)</div>
                    <div className="col">Sargam (Team)</div>
                    <div className="col">Battle Of Bands</div>
                    <div className="col">Gully War</div>
                    <div className="col">War of DJ'S</div>
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
              )}
            </div>
          </div>
          <div className="nnp-mobile">
            <NewNewProfileMobile />
            <div className="mobpaymentcenterimg">
              <img src={eventcenterpic} alt="" />
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
