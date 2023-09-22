import React from "react";
import { Link } from "react-router-dom";
import "./eventheader.css";
import logo from "./images/logo.svg";
import { connect } from "react-redux";

const EventHeader = ({ userDetails }) => {
  // console.log(userDetails);
  return (
    <>
      <div>
        <div className="eh-nav">
          <div className="eh-img">
            <Link to="/">
              <img src={logo} alt="logo" className="img-na" />
            </Link>
          </div>
          <div className="eh-nav-box">
            <span className="eh-li">
              <Link to="/">Home</Link>{" "}
            </span>
            <span className="eh-li">
              <Link to="/">Events</Link>{" "}
            </span>
            {/* <span className="eh-li"><Link to="/WhyVisitThomso"> Why visit Thomso? </Link></span> */}
            <span className="eh-li">
              <Link to="/zonals">Zonals </Link>
            </span>
            {/* <span className="eh-li">MUN</span> */}
            <span className="eh-li"><Link to="/sponsors">Sponsors</Link></span>
            {/* <span className="eh-li"><Link to="/contactUs">Contact Us</Link></span> */}
            {!userDetails?.id && (
              <Link to="/register">
                <button className="eh-button">
                  <span className="eh-but-text">Register</span>
                </button>
              </Link>
            )}
          </div>

          <div className="collapse">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
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

export default connect(mapStateToProps, null)(EventHeader);
