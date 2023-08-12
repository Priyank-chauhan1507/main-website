import React, { useEffect } from "react";
import "./Profile.css";
import LeftSideProfile from "../LeftSideProfile/Leftsideprofile";
import PaymentBox from "../../Profile/PaymentBox/Paymentbox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../Navbar/Profilenavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
const Events = ({ userDetails }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userDetails?.id) {
      // navigate.push("/login");
    }
  }, []);
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
            <PaymentBox />
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

export default connect(mapStateToProps, null)(Events);
