import React, { useEffect } from "react";
import "../Profile/Profile.css";
import LeftSideProfile from "../LeftSideProfile/Leftsideprofile";
import "../LeftSideProfile/leftsideprofile.css";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../Navbar/Profilenavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/profilepic.png";
import icon1 from "../../../assests/icon1.png";
import icon2 from "../../../assests/events.svg";
import icon3 from "../../../assests/payment.svg";
import line from "../../../assests/line1.svg";
import eventcenterpic from "../../../assests/eventpic.webp";

const EventBox = ({ userDetails }) => {
  const navigate = useNavigate();
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
          <Navbar />
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
            <span className="lsp-text2">{userDetails?.thomso_id}</span>
          </div>
          <div>
            {userDetails?.username}
            {userDetails?.thomso_id}
          </div>
          <div className="lsp-centre">
            <div                   className={
                    locator.pathname === "/profile" ? "lsp-c1 c1-text" : "lsp-c2 c2-text"
                  }>
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
              <div className={
                locator.pathname === "/eventbox" ? "lsp-c1 c1-text" : "lsp-c2 c2-text"
              }>
                <img src={icon2} alt="icon2" />
                <Link
                  to="/eventbox"
                  className={
                    locator.pathname === "/eventbox" ? "c1-text" : "c2-text"
                  }
                >
                  Events
                </Link>
              </div>
            )}
            {userDetails?.is_iitr_alumn ? (
              <div className={
                locator.pathname === "/paymentbox" ? "lsp-c2 c2-text" : "lsp-c2 c2-text"
              }>
                <img src={icon3} alt="icon3" />
                <Link
                  to="/paymentbox"
                  className={
                    locator.pathname === "/paymentbox" ? "c1-text" : "c2-text"
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
                    locator.pathname === "/payment" ? "c1-text" : "c2-text"
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
            <img src={eventcenterpic} alt="" />
        </div>


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
