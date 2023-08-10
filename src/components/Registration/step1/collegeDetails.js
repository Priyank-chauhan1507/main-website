import React from "react";
import "./collegeDetails.css";
import { Link,useNavigate } from "react-router-dom";
import backImg from "../../../assests/Landing-page-2.webp";
import logo from "../../../assests/reg-logo.svg";
import backdropmob from '../../../assests/RegbackMobile.webp'

const CollegeDetails = () => {
  return (
    <>
    <div className="regNav">
      <div>
      <Link to="/">
        <img src={logo} alt="" className="th-logo" />
      </Link>
      </div>
      <div className="logButton">
       <button  className="registerNow">LOG IN</button>
      </div>
      </div>
      <img className="bkimg" src={backImg}/>
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

      <form>
        <div className="college-inputs">
        <div className="college-input2">
            <div id="reg-college-1">
              <select defaultValue={""} className="input-field select-field" id="reg-college-2">
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
              </select>
            </div>
          </div>
          <div className="college-input1">
            <div>
              <select defaultValue={""} className="input-field select-field" id="rgs-state-uks">
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
              </select>
            </div>
            <div>
              <select defaultValue={""} className="input-field select-field" id="rgs-district-uks">
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
              </select>
            </div>
          </div>
 
          <div className="college-input3">
            <div>
              <input
                className="input-field"
                type=""
                placeholder="Branch *"
              />
            </div>
            <div>
              <input
                className="input-field"
                type=""
                placeholder="Year of Study *"
              />
            </div>
          </div>
        </div>

        <div className="college-buttons">
          <button type="button" className="college-button-submit">
            Next
          </button>
          <button type="button" className="college-button-clear">
            Clear
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CollegeDetails;