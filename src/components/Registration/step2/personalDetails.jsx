import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./personalDetails.css";
import Select from "react-select";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import backdrop from "../../../assests/Landing-page-2-1.webp";
import logo from "../../../assests/reg-logo.svg";
import backdropmob from '../../../assests/RegbackMobile.webp'
const gender_choice = ["Male", "Female", "Others"].map((state) => ({
  value: state,
  label: state,
}));

const PersonalDetails = ({college,state,district,degree,year}) => {
    let navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [confirm_err, setConfirm_err] = useState(false);
  const [mobile_check, setMobile_check] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    password: "",
    confirmpassword: "",
    referral: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!confirm_err) {
      setLoading({ loading: true });
    }

    if (user.password !== user.confirmpassword) return;

    try {
      const userresponse = {
        name: user.name,
        email: user.email,
        contact: user.contact,
        password: user.password,
        gender: user.gender,
        referred_by: user.referral,
        college: college,
        state:state,
        city:district,
        branch:degree,
        year:year


      };
      console.log(userresponse);
      const response = await axios.post(`/apiV1/registeruser`, userresponse);
      const { data } = response;
          if (response.status === 201) {
        localStorage.setItem("user_id", data.user_id);
        setLoading(false);
        // setActive(false)
      }
      setLoading(false);
      navigate("/otpverify");
    } catch (err) {
      setLoading(false);
      const { data } = err?.response;
      console.log("register Error:", data);
      var errorData = "";
      if (data?.error == "user_not_verified") {
        errorData = `Please verify your registered email. <a href=/otpverify>Click Here.`;
      } else {
        for (var key in data) {
          errorData += data[key] + "<br>";
        }
      }
      setErrorMsg(errorData);
      setError(true);
      setLoading(false);
    }
  };

  const confirm = (confirm) => {
    if (confirm === user.password) {
      setConfirm_err(false);
      // setActive(true);
    } else {
      setConfirm_err(true);
      // setActive(false);
    }
  };

  const clearInput = () => {
    setUser({
      name: "",
      email: "",
      contact: "",
      gender: "",
      password: "",
      confirmpassword: "",
      referral: "",
    });
  };

  const handleChange3 = (gender) => {
    setUser({ ...user, gender: gender?.value });
  };

  const validateMobileNumber = (e) => {
    if (e.target.value.length <= 10) {
      setMobile_check(true);
      setUser({ ...user, [e.target.name]: e.target.value });
      let mnumber = e.target.value;
      if (mnumber.length == 10) {
        setMobile_check(false);
      }
    }
  };

  useEffect(() => {
    if (
      user.name &&
      user.email &&
      user.gender &&
      user.contact &&
      user.password &&
      user.confirmpassword &&
      user.password === user.confirmpassword &&
      user.contact.length === 10 &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [user]);

  return (
    <>
      <Link to="/">
        <img src={logo} alt="" className="th-logo" />
      </Link>
      <img src={backdrop} alt="" className="backdrop" />
      <img src={backdropmob} alt="" className="backdropmob" />
      <div className="mobRegis2">
        <h2>Registration</h2>
      </div>
      <div className="personal">
        <div className="personal-steps">
          <div className="personal-step1">
            <div className="personal-step1-number">
              <div className="personal-step1-number-content">1</div>
            </div>
            <div className="personal-step1-description">
              <div className="personal-step1-description-content-para1 comic-neue">
                Step 1/2
              </div>
              <div className="personal-step1-description-content-para2 comic-neue">
                College Details
              </div>
            </div>
          </div>
          <div className="personal-step2">
            <div className="personal-step2-number">
              <div className="personal-step2-number-content">2</div>
            </div>
            <div className="personal-step2-description">
              <div className="personal-step2-description-content-para1 comic-neue">
                Step 2/2
              </div>
              <div className="personal-step2-description-content-para2 comic-neue">
                Personal Details
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="personal-inputs">
            <div className="personal-input1">
              <div>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={user.name}
                  required
                  // pattern="[a-zA-Z]"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email ID *"
                  name="email"
                  value={user.email}
                  required
                  // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="personal-input2">
              <div>
                {/* <select className="input-field select-field" onChange={handleChange3}>
                <option value="" disabled hidden>
                  Gender *
                </option>
                <option className="select-option" value="Gender 1">
                  Male
                </option>
                <option className="select-option" value="Gender 2">
                  Female
                </option>
                <option className="select-option" value="Gender 3">
                  Others
                </option>
              </select> */}

                <Select
                  className="select-option"
                  placeholder="Select Gender*"
                  required
                  onChange={handleChange3}
                  options={gender_choice}
                  isSearchable={false}
                />
              </div>
              <div>
                <input
                  type="number"
                  className="input-field"
                  name="contact"
                  placeholder="Phone Number *"
                  value={user.contact}
                  pattern="/^[6-9]{1}+[0-9]{9}$/"
                  
                  required
                  onChange={(e) => validateMobileNumber(e)}
                />
                {mobile_check && (
                  <div className="text-danger">
                    Please enter valid Mobile Number
                  </div>
                )}
              </div>
            </div>
            <div className="personal-input3">
              <div>
                <Input.Password
                  className="input-field"
                  type="password"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone style={{ color: "black" }} />
                    ) : (
                      <EyeInvisibleOutlined style={{ color: "black" }} />
                    )
                  }
                  placeholder="Create Password *"
                  name="password"
                  value={user.password}
                  required
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <Input.Password
                  className="input-field"
                  type="password"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone style={{ color: "black" }} />
                    ) : (
                      <EyeInvisibleOutlined style={{ color: "black" }} />
                    )
                  }
                  placeholder="Confirm Passpwrd *"
                  name="confirmpassword"
                  value={user.confirmpassword}
                  required
                  onChange={(e) => {
                    onInputChange(e);
                    confirm(e.target.value);
                  }}
                />
                {confirm_err && (
                  <div className="text-danger">Password didn't match</div>
                )}
              </div>
            </div>
            <div>
              <input
                className="input-field"
                type="text"
                placeholder="CA Referral Code"
                name="referral"
                value={user.referral}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {error && (
              <div
                className="text-danger"
                style={{ marginTop: "-10px" }}
                dangerouslySetInnerHTML={{ __html: errorMsg }}
              ></div>
            )}
          </div>

          <div className="personal-buttons">
            <button
              type="submit"
              className="personal-button-submit"
              disabled={!active}
              style={
                active == true
                  ? { background: "#ff5c00" }
                  : { background: "rgb(204, 204, 204)" }
              }
            >
              {loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Register"
              )}
            </button>
            <button className="personal-button-clear" onClick={clearInput}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  )
};

export default PersonalDetails;