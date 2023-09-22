// import { SignalWifi1Bar } from "@material-ui/icons";
import React, { useState } from "react";
// import cs1 from "../../assets/images/CautionSign1.svg";
import "./LogoutModel.css";
import axios from "axios";

const ProfileNameEditModel = () => {
  const [name, setname] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        `/apiV1/registeruser/${localStorage.getItem("user_id")}`,
        { name: name },
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
            <div className="fText">Edit Your Profile Name</div>
            <input
              type="text"
              name="name"
              className="edit-name"
              placeholder="Write here..."
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
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

export default ProfileNameEditModel;
