import React, { useEffect } from "react";
import "./RegPage.css";
import { useState } from "react";
import logbg1 from "../../../assests/Landing-page-2-1.webp";
import logo from "../../../assests/reg-logo.svg"
import { message } from "antd";
import OtpInput from "react-otp-input";
import background from "../../../assests/Regback.webp";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  // const [otp, setotp] = useState(Array(4).fill(""));
  const [active, setActive] = useState(false);
  const [IsCorrectOtp, setIsCorrectOtp] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({
    otp: "",
    type: "participant",
    user_id: localStorage.getItem("user_id"),
  });
  const [code, setCode] = useState("");

  const handleChange = (code) => {
    setCode(code);
  };
  let navigate = useNavigate();

  const Verify = async (e) => {
    e.preventDefault();
    console.log(Number(code));
    setUser({ ...user, otp: Number(code) });

    setLoading({ loading: true });

    try {
      const response = await axios.post(`/apiV1/verifyOTP`, {
        ...user,
        otp: Number(code),
      });
      const { data } = response;
      if (response.status === 201) {
        setLoading(false);
      }
      setLoading(false);
      navigate("/regcompleted");
    } catch (err) {
      message.error("Invalid OTP");
      setLoading(false);
      const { data } = err?.response;
      console.log("register Error:", data);
      var errorData = "";
      setErrorMsg(errorData);
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (code.length === 4) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [code]);
  return (
    <div className="otpVerify" style={{ overflowY: "hidden" }}>
      {/* <Nav /> */}
      <div className="thomso_logo">
        <Link to='/'>
        <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <img className="otpBack" src={background} alt="back" />
        <p className="mob_view">Registration</p>
      </div>
      <div id="log_bg2" className="otpBox">
        {/* <img src={logbg1} id ="wel_log_back" alt="" />
        <img src={logbg2}  id="campus_ambd" /> */}
        <div className="otpContainer">
          <div className="verifyEmailText">Verify your Email</div>
          <div className="otpSent">
            A mail has been sent to the submitted email address. Check your
            inbox to verify your email address.
          </div>
          <div className="inputBoxes">
            <OtpInput
              value={code}
              onChange={handleChange}
              numInputs={4}
              shouldAutoFocus={true}
              renderSeparator={<span style={{ width: "8px" }}></span>}
              inputType={true}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                border: "1px solid black",
                borderRadius: "8px",
                width: "54px",
                height: "54px",
                fontSize: "20px",
                color: "#000",
                fontWeight: "400",
                caretColor: "blue",
              }}
            />
          </div>
          {IsCorrectOtp === false && <div>Incorrect OTP</div>}
          {/* <Button variant="outlined" size="small" onClick={Verify}>
        verify
      </Button> */}
          <button
            className="verify_btn"
            onClick={Verify}
            disabled={!active}
            style={
              active == true
                ? { background: " rgba(237, 215, 41, 1)" }
                : { background: "rgb(204, 204, 204)" }
            }
          >
            verify
          </button>
          {/* <div className="resendOtp">
        <div>Haven’t received OTP yet?</div>
        <button>Resend</button>
      </div> */}
        </div>
      </div>
    </div>
  );
}