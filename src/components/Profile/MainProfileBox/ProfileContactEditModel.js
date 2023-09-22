// import { SignalWifi1Bar } from "@material-ui/icons";
import React, { useState } from "react";
// import cs1 from "../../assets/images/CautionSign1.svg";
import "./LogoutModel.css";
import axios from "axios";

const ProfileContactEditModel = () => {
  const [mobile_check, setMobile_check] = useState(false);

  const [contact, setcontact] = useState("");
  const validateMobileNumber = (e) => {
    if (e.target.value.length <= 10) {
      setMobile_check(true);
      setcontact(e.target.value);
      let mnumber = e.target.value;
      if (mnumber.length == 10) {
        setMobile_check(false);
      }
    }
  };
  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        `/apiV1/registeruser/${localStorage.getItem("user_id")}`,
        { contact: contact },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        // console.log("Success");
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="l_body">
      <div className="logout_body">
        <div className="textt">
          <>
            <div className="fText">Edit Your Contact</div>
            <input
              type="text"
              name="contact"
              className="edit-name"
              placeholder="Write here..."
              pattern="/^[6-9]{1}+[0-9]{9}$/"
              required
              value={contact}
              onChange={(e) => validateMobileNumber(e)}
            />
            {mobile_check && (
              <div className="text-danger">
                Please enter valid Mobile Number
              </div>
            )}
          </>
        </div>
        <div className="btns">
          <button
            className="btn1"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            <a>Cancel</a>
          </button>
          <button className="btn3" onClick={handleSubmit}>
            <a>Confirm</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileContactEditModel;
