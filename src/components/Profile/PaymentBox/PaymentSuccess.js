import React from "react";
import { Link } from "react-router-dom";
// import { Checkmark } from "react-checkmark";
import Button from "@mui/material/Button";
import "./PaymentSuccess.css"
import done from "../../../assests/PaymentDone.svg"
import tick from "../../../assests/TickCorrect.svg"
import download from "../../../assests/downloadsign.png"


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
        overflow: "hidden" 
      }}
    >
      {/* <Checkmark size={100} /> */}
      <br />
      <div className="paymentsuccessful" style={{
          //  display:"flex",
             alignItems: "center", gap:"10px"}}>
            <img src={tick} alt="" />
      <h1
        style={{
          textAlign: "center",
          color: "#28A745",
          fontFamily: "Comic Neue",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          
          
        }}
      >
        Payment Done Successfully
      </h1>
      </div>
      
      <div
        style={{
          display: "flex",
        }}
      >
        <Link to="/id_card">
          <Button variant="contained" style={{color:"black", backgroundColor:"white",marginTop:"2vh"}}>
            <img src={download} style={{height:"15px", width:"15px", marginRight:"5px"}} alt="" />
            Download ID Card</Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
