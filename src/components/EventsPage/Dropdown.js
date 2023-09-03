import React from "react";
import { NavLink } from "react-router-dom";
import "./mobdropdown.css";
import { connect } from "react-redux";

const Dropdown = ({ userDetails }) => {
  const pathname = window?.location?.pathname;
  return (
    <div className="mob-nav-menu">
      <div className="mob-nav-links">
        <NavLink to="/">
          <span className={`${pathname == "/" ? "active" : "mob-nav-text"}`}>
            Home
          </span>
        </NavLink>
        <NavLink to="/events">
          <span
            className={`${pathname == "/events" ? "active" : "mob-nav-text"}`}
          >
            Events
          </span>
        </NavLink>
        <NavLink to="/highlights">
          <span
            className={`${
              pathname == "/highlights" ? "active" : "mob-nav-text"
            }`}
          >
            HighLights
          </span>
        </NavLink>
        <NavLink to="/sponsors">
          <span
            className={`${pathname == "/sponsors" ? "active" : "mob-nav-text"}`}
          >
            Sponsors
          </span>
        </NavLink>
        <NavLink to="/team">
          <span
            className={`${pathname == "/team" ? "active" : "mob-nav-text"}`}
          >
            Team
          </span>
        </NavLink>
        <NavLink to="/mun">
          <span className={`${pathname == "/mun" ? "active" : "mob-nav-text"}`}>
            Mun
          </span>
        </NavLink>
        <a href="ca.thomso.in">
          <span className="mob-nav-text">CA Portal</span>
        </a>
        <NavLink to="/zonals">
          <span
            className={`${pathname == "/zonals" ? "active" : "mob-nav-text"}`}
          >
            Zonals
          </span>
        </NavLink>
        <NavLink to="/faqs">
          <span
            className={`${pathname == "/faqs" ? "active" : "mob-nav-text"}`}
          >
            FAQs
          </span>
        </NavLink>
        {userDetails?.id && (
          <NavLink to="/profile">
            <span
              className={`${
                pathname == "/profile" ? "active" : "mob-nav-text"
              }`}
            >
              Profile
            </span>
          </NavLink>
        )}
      </div>
      {!userDetails?.id && (
        <NavLink to="/register">
          <span className="reg-but-mib">Register</span>
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  return {
    userDetails,
  };
};

export default connect(mapStateToProps, null)(Dropdown);
