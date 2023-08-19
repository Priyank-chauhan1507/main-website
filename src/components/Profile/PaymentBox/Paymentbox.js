import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import "../LeftSideProfile/leftsideprofile.css";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/profile1.png.jpg";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/events.svg";
import icon3 from "../../../assests/pay_black.png";
import icon31 from "../../../assests/payment.svg";
import line from "../../../assests/line1.svg";
import paymentcenterpic from "../../../assests/paymentpic.webp";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({});

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
  const Locator = useLocation();
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
          <Navbar color="transparent" />
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
                  <span className="lsp-text2">
                    Thomso ID:{userDetails?.thomso_id}
                  </span>
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
                        locator.pathname === "/eventbox"
                          ? "lsp-c1 c1-text"
                          : "lsp-c2 c2-text"
                      }
                    >
                      <img src={icon2} alt="icon2" />
                      <Link
                        to="/pevents"
                        className={
                          locator.pathname === "/eventbox"
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
                        locator.pathname === "/payment"
                          ? "lsp-c2 c2-text"
                          : "lsp-c2 c2-text"
                      }
                    >
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
                  ) : (
                    <div className="lsp-c1">
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

              <div className="paymentcenterimg">
                <img src={paymentcenterpic} alt="" />
              </div>
            </div>
          </div>
          <div className="nnp-mobile">
            <div
              className="mobpaymentcenterimg"
              style={{
                justifyContent: "flex-start",
              }}
            >
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
                      <img src={icon2} alt="Events" className="img--1" />
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
                      <img src={icon31} alt="payment" className="img--1" />
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
              <img
                src={paymentcenterpic}
                alt=""
                style={{ padding: "12vh 0", justifyContent: "flex-start" }}
              />
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

export default connect(mapStateToProps, null)(Profile);
