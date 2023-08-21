import React from "react";
import { Link } from "react-router-dom";
// import { Checkmark } from "react-checkmark";
import Button from "@mui/material/Button";

const PaymentSuccess = () => {
  return (
    <div
      className="text-center"
      style={{
        padding: "10%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Checkmark size={100} /> */}
      <br />
      <h1 className="text-center th-green">Payment Success</h1>
      <b style={{ marginTop: "10px", textAlign: "center" }}>
        Note: Please wait for 1-2 minutes for the payment to be processed.
      </b>
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
          identity cards, accommodation and coupons.
        </li>
        <li>
          General E-Rickshaw charges: for reaching IITR main gate from Railway
          Station: Rs 20/-
        </li>
        <li>
          Please ensure to bring light woolens, as per the weather of roorkee.
        </li>
        <li>Please bring two passport size photographs along with it.</li>
        <li>Mask are compulsary to bring.</li>
        <li>Optional : Do bring extra blanket to be on the safer side.</li>
      </span>
      <div
        style={{
          display: "flex",
        }}
      >
        <a
          href="https://drive.google.com/file/d/1wp-nx1QmelQCisDOtOr_kumXGSbWxqDq/view?usp=sharing"
          style={{ marginTop: "10px", marginRight: "30px" }}
          target="_blank"
        >
          <Button variant="contained">Download NOC</Button>
        </a>
        <Link to="/profile" style={{ marginTop: "10px" }}>
          <Button variant="contained">Go To Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
