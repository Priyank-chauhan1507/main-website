import React from "react";
import "./EmailVerify.css";
import logbg1 from "../../../assests/Regback.webp";
import logbg2 from "../../../assests/reg-logo.svg"
import { Link } from "react-router-dom";

const EmailVerify = () => {
  return (
    <div id="emailroot">
      {/* <Nav id="navemailbar" /> */}
      <Link to='/'>
        <img src={logbg2} id="nav_ev" alt="" />
        </Link>
      <div id="log_bg12">
        <img src={logbg1} className="emailVerifyBack" alt="" />
        <p className="mob_view">Registration</p>
        <div className="Box" id="box2_reg">
            
          <div className="Box2">
            <h2>
              <strong>Email Verified Successfully!</strong>
            </h2>
            <br />
            <br />
            <p>Voila! You have successfully verified your account.</p>

            {/* <Link to='/collegedetailes'> */}
            <button className="submit">
              <Link to="/regcompleted" className="reg-btn1">
                Continue Registration
              </Link>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;