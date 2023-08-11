import { SignalWifi1Bar } from "@material-ui/icons";
import React from "react";
import cs1 from "../../assets/images/CautionSign1.svg";
import "./LogoutModel.css";

const LogoutModel = () => {
  return (
    <div className="l_body">
      <div className="logout_body">
        <div className="redpic">
          <img src={cs1} alt="redpic" />
        </div>
        <div className="textt">
          <div className="fText">Are You Sure?</div>
          <div className="sText">Do you really want to leave and logout?</div>
        </div>
        <div className="btns">
          <button className="btn1">
            <a>Cancel</a>
          </button>
          <button className="btn2">
            <a>Logout</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModel;
