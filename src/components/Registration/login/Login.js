import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { login, fetchEvents, fetchUser } from "../../User/UserActions";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "../../Loader/Loader";
// import setAuthToken from "../../User/setAuthToken";
import Regback from "../../../assests/Landing-page-2-1.webp";
import logo from "../../../assests/reg-logo.svg";
import "./Login.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = (props) => {
  let navigate = useNavigate();

  const validator = new SimpleReactValidator();

  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "ca",
  });

  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [verifiederror, setVerifiederror] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setLoading(true);
      await axios
        .post("/api-token-auth/", user)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.status === "not_verified") {
              setLoading(false);
              setVerifiederror(true);
              setNotFoundError(false);
            } else if (res.data.error === "CA not found") {
              setNotFoundError(true);
              setVerifiederror(false);
              setLoading(false);
            } else {
              // props.login(res.data);
              props.login(res.data);
              props.fetchUser(res.data);
              // props.fetchEvents();
              // localStorage.setItem("token", res.data?.access);
              // setAuthToken(localStorage.getItem("token"));
              navigate(`/profile`);
              // console.log(res);
            }
            setLoading(false);
          } else if (res.status === 400) {
            setError(true);
            // console.log(res);
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else {
      validator.showMessages();
    }
  };

  useEffect(() => {
    if (
      user.email &&
      user.password &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [user]);

  return (
    <>
    {loading && <Loader />}
      <div className="login-fullpage">
        <img src={Regback} className="regbg" alt="" />
        <Link to="/">
          <img src={logo} className="logo-log" alt="" />
        </Link>

        <div id="bg">
          <div id="log_bg1">
            <div id="box">
              <div id="center">
                <div id="login">Log In</div>
                <form id="form" onSubmit={(e) => onSubmit(e)}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id *"
                    id="email1"
                    value={user.email}
                    required
                    onChange={(e) => onInputChange(e)}
                  />
                  {validator.message("email", user.email, "required|email", {
                    className: "text-danger",
                  })}
                  <input
                    type="password"
                    name="password"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeTwoTone style={{ color: "black" }} />
                      ) : (
                        <EyeInvisibleOutlined style={{ color: "black" }} />
                      )
                    }
                    placeholder="Password *"
                    id="password1"
                    value={user.password}
                    required
                    onChange={(e) => onInputChange(e)}
                  />

                  <Link to="/forgotpassword" id="forget">
                    Forgot Password?
                  </Link>

                  <button
                    type="submit"
                    id="log"
                    disabled={!active}
                    style={
                      active == true
                        ? { background: "rgb(237,215,41)" }
                        : { background: "rgb(204, 204, 204)" }
                    }
                  >
                    Log In
                  </button>
                </form>
                {error && (
                  <div className="text-danger">Email/Password is Incorrect</div>
                )}
                {verifiederror && (
                  <div className="text-danger">
                    User is not verified. Please check registered mail.
                  </div>
                )}
                {notFoundError && (
                  <div className="text-danger">
                    <div className="text-info">
                      You are not registered as a CA.
                    </div>
                  </div>
                )}
                <div id="niche">
                  <div id="bottom">Don't have an account?</div>
                  <Link to="/collegedetails">
                    <div id="register"> Register Now!</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // login: (id) => dispatch(login(id)),
    login: (id) => dispatch(login(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    // fetchEvents: (id) => dispatch(fetchEvents()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
