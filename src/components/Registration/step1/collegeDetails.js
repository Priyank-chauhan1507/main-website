import React, { useState, useEffect } from "react";
import "./collegeDetails.css";
import axios from "axios";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import backImg from "../../../assests/Landing-page-2-1.webp";
import logo from "../../../assests/reg-logo.svg";
import backdropmob from "../../../assests/RegbackMobile.webp";
import CircularProgress from "@mui/material/CircularProgress";
import colleges from "./college";

import PersonalDetails from "../step2/PersonalDetails";
const states = [ 
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Ladakh",
  "Kathmandu",
].map((state) => ({
  value: state,
  label: state,
}));

const year_choice = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "passout",
].map((state) => ({
  value: state,
  label: state,
}));

const CollegeDetails = () => {
  let navigate = useNavigate();
  const [personal,setPersonal] = useState(false);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [active, setActive] = useState(false);

  const [user, setUser] = useState({
    state: "",
    district: "",
    college: "",
    degree: "",
    year: "",
  });

  const clearInput = () => {
    setUser({
      state: "",
      district: "",
      college: "",
      degree: "",
      year: "",
    });
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const formSubmit = async (e) => {
  //   e.preventDefault();

  //   setLoading({ loading: true });

  //   try {
  //     const userresponse = {
  //       state: user.state,
  //       district: user.district,
  //       college: user.college,
  //       degree: user.degree,
  //       year: user.year,
  //     };
  //     const response = await axios.post("/apiV1/registeruser", userresponse);
  //     const { data } = response;
  //     if (response.status === 201) {
  //       localStorage.setItem("user_id", data.user_id);
  //       setLoading(false);
  //     }
  //     setLoading(false);
  //     navigate("/personaldetails");
  //   } catch (err) {
  //     setLoading(false);
  //     const { data } = err?.response;
  //     console.log("register Error:", data);
  //     var errorData = "";
  //     setErrorMsg(errorData);
  //     setError(true);
  //     setLoading(false);
  //   }
  // };


  const handleChange1 = (state) => {
    setUser({ ...user, state: state?.value });
  };

  const handleChange2 = (college) => {
    setUser({ ...user, college: college?.value });
  };

  // const handleChange4 = (year) => {
  //   setUser({ ...user, year: year?.value });
  // };
  useEffect(() => {
    if (
      user.state &&
      user.district &&
      user.college &&
      user.degree &&
      user.year
    ) {
      setActive(true);

    } else {
      setActive(false);
    }
  }, [user]);

  const nextStep = ()=>{
    setPersonal(true);
  }

  return (
    <>

   {!personal ?  ( <><div className="regNav">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="th-logo" />
          </Link>
        </div>
        <div className="logButton">
          <button onClick={() => navigate('/login')} className="registerNow">LOG IN</button>
        </div>
      </div>
      <img className="bkimg" src={backImg} />
      <img src={backdropmob} alt="" className="backdropmob" />
      <div className="mobRegis">
        <h2>Registration</h2>
      </div>
      <div className="college">
        <div className="regis">
          <h2>Registration</h2>
        </div>
        <div className="college-steps">
          <div className="college-step1">
            <div className="college-step1-number">
              <div className="college-step1-number-content">1</div>
            </div>
            <div className="college-step1-description">
              <div className="college-step1-description-content-para1">
                Step 1/2
              </div>
              <div className="college-step1-description-content-para2">
                College Details
              </div>
            </div>
          </div>
          <div className="college-step2">
            <div className="college-step2-number">
              <div className="college-step2-number-content">2</div>
            </div>
            <div className="college-step2-description">
              <div className="college-step2-description-content-para1">
                Step 2/2
              </div>
              <div className="college-step2-description-content-para2">
                Personal Details
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="college-inputs">
            <div className="college-input2">
              <div id="reg-college-1">
                {/* <select defaultValue={""} className="input-field select-field" id="reg-college-2">
                <option value=""  disabled hidden>
                  College Name *
                </option>
                <option className="select-option" value="Gender 1">
                  IIT K
                </option>
                <option className="select-option" value="Gender 2">
                  IIT D
                </option>
                <option className="select-option" value="Gender 3">
                  IIT M
                </option>
              </select> */}
                <Creatable
                  className="select-option-2 select-college input-field select-field widthController"
                  required
                  // value={this.state.college}
                  value={user.selectedOption}
                  placeholder="Enter the College*"
                  onChange={handleChange2}
                  options={colleges}
                />
              </div>
            </div>
            <div className="college-input1">
              <div>
                {/* <select defaultValue={""} className="input-field select-field" id="rgs-state-uks">
                <option value="" disabled hidden>
                  State *
                </option>
                <option className="select-option" value="Gender 1">
                  Uttar Pradesh
                </option>
                <option className="select-option" value="Gender 2">
                  Delhi
                </option>
                <option className="select-option" value="Gender 3">
                  Gujrat
                </option>
              </select> */}
                <Select
                  className="select-option-2 input-field select-field"
                  placeholder="Select State"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={states}
                />
              </div>
              <div>
                {/* <select defaultValue={""} className="input-field select-field" id="rgs-district-uks">
                <option value="" disabled hidden>
                  District *
                </option>
                <option className="select-option" value="Gender 1">
                  Lucknow
                </option>
                <option className="select-option" value="Gender 2">
                  Gorakhpur
                </option>
                <option className="select-option" value="Gender 3">
                  Kanpur
                </option>
              </select> */}
                <input
                  className="select-option-2 input-field select-field"
                  type="text"
                  placeholder="District*"
                  name="district"
                  value={user.district}
                  required
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="college-input3">
              <div>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Degree*"
                  name="degree"
                  value={user.degree}
                  required
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Year *"
                  name="year"
                  value={user.year}
                  required
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>

          <div className="college-buttons">
            <button
              onClick ={nextStep}
              className="college-button-submit"
              disabled={!active}
              style={
                active == true
                  ? { background: "#ff5c00" }
                  : { background: "rgb(204, 204, 204)" }
              }
            > Next

            </button>
            <button className="college-button-clear" onClick={clearInput}>
              Clear
            </button>
          </div>
        </div>
      </div> </>) :(<PersonalDetails  college={user.college} state={user.state} district={user.district} degree ={user.degree} year ={user.year} />)};



      </>
  );

};

export default CollegeDetails;
