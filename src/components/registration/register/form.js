import React, { useEffect } from "react";
import "./index.css";
// import { Button } from "@mui/material";
import { useState } from "react";

export default function VerifyEmail() {
  const [otp, setotp] = useState(Array(4).fill(""));
  const [IsCorrectOtp, setIsCorrectOtp] = useState(true);

  const HandleChange = (element, index) => {
    setotp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.value === "") {
      return element.focus();
    } else if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const Verify = function() {
    const NewOtp = otp.join("");
    setIsCorrectOtp(false);
    // if (NewOtp === otpsent) {
    //   return
    // }
  };
  return (
    <div className="otpContainer">
      <div className="verifyEmailText">Verify your Email</div>
      <div className="otpSent">
        A mail has been sent to the submitted email address. Check your inbox to
        verify your email address.
      </div>
      <div className="inputBoxes">
        {otp.map((data, index) => {
          return (
            <input
              type="number"
              onChange={(e) => HandleChange(e.target, index)}
              key={index}
              maxLength="1"
              value={data}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      {IsCorrectOtp === false && <div>Incorrect OTP</div>}
      {/* <Button variant="outlined" size="small" onClick={Verify}>
        verify
      </Button> */}
      <button>verify</button>
      <div className="resendOtp">
        <div>Haven’t received OTP yet?</div>
        {/* <Button>Resend otp</Button> */}
        <button>resend otp</button>
      </div>
    </div>
  );
}
