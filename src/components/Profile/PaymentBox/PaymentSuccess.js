import React from "react";
import { Link } from "react-router-dom";
// import { Checkmark } from "react-checkmark";
import Button from "@mui/material/Button";
import "./PaymentSuccess.css"
import done from "../../../assests/PaymentDone.svg"

const PaymentSuccess = () => {
  return (
    <div
      style={{
        padding: "5%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        textAlign: "center",
        marginTop: "10vh",
      }}
    >
      {/* <Checkmark size={100} /> */}
      <br />
      <h1
        style={{
          textAlign: "center",
          color: "#28A745",
          fontFamily: "Comic Neue",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          borderRadius: "8px",
          border: "1px solid #28A745",
          padding: "16px 32px",
        }}
      >
        Payment Done Successfully
      </h1>
      <span
        style={{
          marginTop: "10px",
          textAlign: "left",
          fontSize: "16px",
          lineHeight: "22px",
        }}
      >
        <span
          style={{ marginTop: "10px", fontSize: "18px", fontWeight: "600" }}
        >
          Guidelines:
        </span>
        <li>
          Participant has to bring a cash amount of Rs.200 to be deposited as
          security money ( to be submitted at entrance and will be returned
          while exiting).
        </li>
        <li>
          All participant must ensure to bring NOC and college id card along
          with them.
        </li>
        <li>
          Participants can start reaching Roorkee from 13th,October 6:00 a.m and
          till 14th,October 6:00 p.m.
        </li>
        <li>
          Participants themselves have to make travel arrangements to reach IITR
          Campus.
        </li>
        <li>
          Each and every candidate has to reach MAC (Multi Activity Centre) upon
          reaching IITR campus, where participants will be provided with
          identity cards, accommodation and food coupons.
        </li>
        <li>
          General E-Rickshaw charges for reaching IITR main gate from Railway
          Station: Rs 20/-
        </li>
        <li>
          Please ensure to bring light woolens, as per the weather of roorkee.
        </li>
        <li>Please bring two passport size photographs along with it.</li>
        <li>Optional : Do bring extra blanket to be on the safer side.</li>
      </span>
      <div
        style={{
          display: "flex",
        }}
      >
        <Link to="/id_card" style={{ marginTop: "10px", marginRight: "30px" }}>
          <Button variant="contained">Download ID</Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
