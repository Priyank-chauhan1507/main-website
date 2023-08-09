import React from "react";
import "./CollegeDetailes.css";

const CollegeDetails = () => {
  return (
    <div className="college">
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
              Personal Details
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
              College Details
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="college-inputs">
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
                placeholder="Year *"
              />
            </div>
          </div>
        </div>

        <div className="college-buttons">
          <button type="submit" className="college-button-submit">
            Submit
          </button>
          <button type="button" className="college-button-clear">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CollegeDetails;