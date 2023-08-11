import React, { useEffect } from "react";
import "./Profile.css";
import LeftSideProfile from "../LeftSideProfile/leftsideprofile";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../Navbar/Navbar";

const Profile = ({ userDetails }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userDetails?.id) {
      navigate.push("/login");
    }
  }, []);
  return (
    <>
      <div className="nnp-container">
        <div className="nnp-head">
          <div className="nnp-laphead">
            <Navbar/>
          </div>
          {/* <div className="nnp-mobhead">
            <EventMobileNav />
          </div> */}
        </div>
        <div className="nnp-content">
          <LeftSideProfile />
          <MainProfileBox />
        </div>
        <div className="nnp-mobile">
          <NewNewProfileMobile />
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
