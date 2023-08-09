import React from "react";
import "./EmailVerify.css";
// import Nav from "../../web/NewNavbar/Nav";
import logbg1 from "../../../assests/Regback.webp";
import logbg2 from "../../../assests/Thomso_Navbar.png";
// import logbg2 from "../../../assets/Campus_Ambassador.svg";
import { Link } from "react-router-dom";

const EmailVerify = () => {
  return (
    <div id="emailroot">
      {/* <Nav id="navemailbar" /> */}
      <div id="nav_ev">
        <Link to="/">
          <img src={logbg2} alt="" />
        </Link>
      </div>
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
              <Link to="./../CollegeDetails.js" className="reg-btn1">
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
