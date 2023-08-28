import React, { useState ,useEffect } from "react";
import "./forget.scss";
import welcomebckbg from "../../assests/Landing-page-2-1.webp";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import { message } from "antd";
import logo from "../../assests/reg-logo.svg";
import mobilewp from "../../assests/RegbackMobile.webp";

const Forget = () => {

  const [active, setActive] = useState(false);
  const validator = new SimpleReactValidator();
  const [email, setEmail] = useState();


  async function handleSendEmail(e) {
    e.preventDefault();
    if (validator.allValid()) {
      const response = await axios.post("/apiV1/resetpassword", {
        email: email,
      });
      if (response?.status === 200) {
        message.success(
          "Email sent successfully. Please check promotions or spam folder."
        );
        e.target.reset();
      } else if (response?.status === 204) {
        message.error("Email not found");
        e.target.reset();
      } else {
        message.error("Something went wrong");
        e.target.reset();
      }
    } else {
      message.error("Please enter a valid email");
      e.target.reset();
    }
  }

  useEffect(() => {
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      setActive(true);
    }else{
      setActive(false);
    }
  }, [email])

  return (
    <>
           <div id="bg">
            {/* <Nav /> */}
             <a className="forget-a" href="/">
                 <img src={logo} className="logo-for" alt="" />
             </a>
             <img src={welcomebckbg} id="welcomebckbg" alt="" className="newBg" />
             <img src={mobilewp} id="mobilewp" alt="" className="newBgmob" />
             <div id="log_bg1" className="fp_maindiv">
               {/* <img src={logbg1} id="wel_log_back" alt="" /> */}
               {/* <img src={logbg2} id="campus_ambd" /> */}
               <div className="forgot">
                 <h2 className="f-h2">
                   <strong>Forgot Password</strong>
                 </h2>
                 <p className="f-pa">
                   Don't worry! It happens. Please enter the Email through which you
                   had registered.
                 </p>
                 <form onSubmit={handleSendEmail}>
                   {/* <label> */}
                   <input
                    className="email"
                    placeholder="Email Id*"
                    type="email"
                    name="email"
                    required
                    // pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
                    onChange={(e) => {setEmail(e.target.value); setActive(true)}}
                  />
                  {validator.message("email", email, "required|email", {
                    className: "text-danger",
                  })}
                  <button
                    type="submit"
                    className="send"
                    disabled={!active}
                    style={
                      active === true
                        ? { background: "#ff5c00" }
                        : { background: "rgb(204, 204, 204)" }
                    }
                  >
                    Send Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>

  )
}

export default Forget







// function forget() {

//   return (
//
//   );
// }

// export default forget;
