import React from "react";
import {Link} from 'react-router-dom'
import "./personalDetails.css";

const PersonalDetails = () => {
  return (
    <div className="personal">
      <div className="personal-steps">
        <div className="personal-step1">
          <div className="personal-step1-number">
            <div className="personal-step1-number-content">1</div>
          </div>
          <div className="personal-step1-description">
            <div className="personal-step1-description-content-para1">
              Step 1/2
            </div>
            <div className="personal-step1-description-content-para2">
              Personal Details
            </div>
          </div>
        </div>
        <div className="personal-step2">
          <div className="personal-step2-number">
            <div className="personal-step2-number-content">2</div>
          </div>
          <div className="personal-step2-description">
            <div className="personal-step2-description-content-para1">
              Step 2/2
            </div>
            <div className="personal-step2-description-content-para2">
              College Details
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="personal-inputs">
          <div className="personal-input1">
            <div>
              <input className="input-field" type="text" placeholder="Name *" />
            </div>
            <div>
              <input
                className="input-field"
                type="email"
                placeholder="Email ID *"
              />
            </div>
          </div>
          <div className="personal-input2">
            <div>
              <select defaultValue={""} className="input-field select-field">
                <option value="" disabled hidden>
                  Gender *
                </option>
                <option className="select-option" value="Gender 1">
                  Gender 1
                </option>
                <option className="select-option" value="Gender 2">
                  Gender 2
                </option>
                <option className="select-option" value="Gender 3">
                  Gender 3
                </option>
              </select>
            </div>
            <div>
              <input
                className="input-field"
                name="phone"
                placeholder="Phone Number *"
              />
            </div>
          </div>
          <div className="personal-input3">
            <div>
              <input
                className="input-field"
                type="password"
                placeholder="Create Password *"
              />
            </div>
            <div>
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Passpwrd *"
              />
            </div>
          </div>
        </div>

        <div className="personal-buttons">
          <button type="submit" className="personal-button-submit">
            Submit
          </button>
          <button type="button" className="personal-button-clear">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
