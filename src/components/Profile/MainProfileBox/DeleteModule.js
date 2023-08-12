import React from "react";
import del1 from "../../../assests/bin1.svg";
import "./LogoutModel.css";

const DeleteModule = ({ handleDelete, handleCancel }) => {
  return (
    <div className="l_body">
      <div className="logout_body">
        <div className="redpic">
          <img src={del1} alt="delpic" />
        </div>
        <div className="textt">
          <div className="fText">Are You Sure?</div>
          <div className="sText">
            Do you really want to delete this file. This process can't be
            undone.
          </div>
        </div>
        <div className="btns">
          <button className="btn1" onClick={handleCancel}>
            <a>Cancel</a>
          </button>
          <button className="btn2" onClick={handleDelete}>
            <a>Delete</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModule;
