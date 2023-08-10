import logo from "../../../assests/reg-logo.svg";
import "./resetPassword.scss";
import Regback from "../../../assests/Regback.webp"
import Regback1 from "../../../assests/RegbackMobile.webp"
import { Input, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const ResetPassword = () => {
    const { email, token } = useParams();
    const [password, setPassword] = useState("");
    const [confirm_err, setConfirm_err] = useState(false);
    const [confirm_pass, setConfirm_pass] = useState("");
    let navigate = useNavigate();
  
    async function handleResetPassword() {
      if (!confirm_err) {
        const data = {
          email: email,
          token: token,
          password: password,
        };
        const response = await axios.post("/apiV1/verifypassword", data);
        if (response?.status === 200) {
          message.success("Password changed successfully");
          navigate("/login");
        } else {
          message.error("Something went wrong");
        }
      } else {
        message.error("Please enter the same password");
      }
    }
  
    const checkPass = (new_pass) => {
      setPassword(new_pass);
      if (confirm_pass !== "") {
        if (confirm_pass === new_pass) {
          setConfirm_err(false);
        } else {
          setConfirm_err(true);
        }
      }
    };
  
    const confirm = (confirm) => {
      setConfirm_pass(confirm);
      if (confirm === password) {
        setConfirm_err(false);
      } else {
        setConfirm_err(true);
      }
    };

    return(
        <div className="fullpage">
            <img src={Regback}  className='regbg'alt="" />
            <img src={Regback1}  className='regbg1'alt="" />
            <Link to='/'>
        <img src={logo} className='logo-res' alt=""/>
        </Link>

        <div className="rp-page">
      <div className="rp-content">
        <h3>Reset Password</h3>
        <form className="rp-form">
          <Input.Password
            className="Form-input"
            placeholder="New password"
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone style={{ color: "black" }} />
              ) : (
                <EyeInvisibleOutlined style={{ color: "black" }} />
              )
            }
            onChange={(e) => checkPass(e.target.value)}
          />
          <Input.Password
            className="Form-input"
            placeholder="Confirm password"
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone style={{ color: "black" }} />
              ) : (
                <EyeInvisibleOutlined style={{ color: "black" }} />
              )
            }
            onChange={(e) => {
              confirm(e.target.value);
            }}
          />
          {confirm_err && (
            <div className="text-danger">Passwords don't match</div>
          )}
        </form>
        <button className="btn_primary" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </div>
        </div>

    );
};

export default ResetPassword;