import React from "react";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/propic.svg";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/events.svg";
import icon3 from "../../../assests/payment.svg";
import "./leftsideprofile.css";
import { connect } from "react-redux";

const LeftSideProfile = ({ userDetails }) => {
  const locator = useLocation();
  console.log(userDetails);
  return (
    <div className="lsp-background">
      <div className="lsp-box">
        <div className="lsp-pic">
          <img className="lsp-img1" src={pic} alt="profilepic" />
          <span className="lsp-text1">
            {userDetails?.name} {userDetails?.is_ca ? "(CA)" : ""}
          </span>
          <span className="lsp-text2">{userDetails?.thomso_id}</span>
        </div>
        <div className="lsp-centre">
          <div className="lsp-c1">
            <img src={icon1} alt="icon1" />
            <Link
              to="/profile"
              className={
                locator.pathname === "/profile" ? "c1-text" : "c2-text"
              }
            >
              Profile
            </Link>
          </div>
          {!userDetails?.is_iitr_alumn && (
            <div className="lsp-c2">
              <img src={icon2} alt="icon2" />
              <Link
                to="/pevents"
                className={
                  locator.pathname === "/pevents" ? "c1-text" : "c2-text"
                }
              >
                Events
              </Link>
            </div>
          )}
          {userDetails?.is_iitr_alumn ? (
            <div className="lsp-c3">
              <img src={icon3} alt="icon3" />
              <Link
                to="/payment-alumn"
                className={
                  locator.pathname === "/payment-alumn" ? "c1-text" : "c2-text"
                }
              >
                Payment
              </Link>
            </div>
          ) : (
            <div className="lsp-c3">
              <img src={icon3} alt="icon3" />
              <Link
                to="/payment"
                className={
                  locator.pathname === "/payment" ? "c1-text" : "c2-text"
                }
              >
                Payment
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;

  return {
    userDetails,
  };
};

export default connect(mapStateToProps, null)(LeftSideProfile);
