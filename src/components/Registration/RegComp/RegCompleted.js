import React from "react";
import "./RegComp.css";
// import Nav from "../../web/NewNavbar/Nav"
import logbg1 from "../../../assests/Landing-page-2-1.webp";
import logbg2 from "../../../assests/reg-logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisComp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="regComp">
        <div class="log_bg12">
          <img
            src={logbg1}
            className="regcompleteback"
            id="welcomebckbg"
            alt=""
          />
          <div id="log_bg1">
            <Link to="/">
              <img src={logbg2} id="nav_ev" alt="" />
            </Link>
            <p className="mob_view">Registration</p>
            <div className="Box">
              <div className="Box2">
                <h2>
                  <strong>Registration Completed!</strong>
                </h2>
                <br />
                <br />
                <p>
                  Voila! Your Registration for Thomso '23 IIT Roorkee is
                  successfully completed.
                </p>
              </div>
              <button className="submit-log" onClick={() => navigate('/login')} type="submit">Login Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisComp;
