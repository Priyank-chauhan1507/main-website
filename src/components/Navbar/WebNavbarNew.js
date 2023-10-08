import React from "react";
import "./WebNavbarNew.css";
import logo from "../../assests/logo.svg";
import background from "../../assests/back.webp";
import facebook from "../../assests/facebook.svg";
import insta from "../../assests/instagram.svg";
import x from "../../assests/x.svg";
import youtube from "../../assests/youtube.svg";
import Footer from "../Footer/Mobfooter";
import { useLocation, Link, useNavigate  } from "react-router-dom";


const WebNavbarNew = () => {
  const navigate = useNavigate();
  const locator = useLocation();
  const onHandleClick = (e) => {
    navigate(`/${e}`);
  };
  const Locator = useLocation();


  return (
    <>
      {/* <img src={background} alt="background" style={{width:"100vw",height:"340px",zIndex:"100",overflowY:'hidden'}}/> */}
      <Footer className='mob-foot' />
      <div     className={
                          Locator.pathname === "/MUN"
                          ? "webNavbarMain clearbgmun"
                          : "webNavbarMain"
                        }>
        <div className="webNavbarLeft">
          <div className="webNavbarLeft1">Contact us</div>
          <div className="webNavbarLeft3">
            <div>Aadarsh</div>
            <div> 9155992335</div>
          </div>
          <div className="webNavbarLeft2">
            <div>Kartikey</div>
            <div>9205915692</div>
          </div>
        </div>
        <div className="webNavbarMiddle">
          <div className="webNavbarMiddle1">
            <img src={logo} alt="logo" />
          </div>
          <div className="webNavbarMiddle2">
            <a href="https://www.facebook.com/thomsoiitroorkee" target="_blank">
              <img
                src={facebook}
                alt="facebook"
                style={{ cursor: "pointer" }}
              />
            </a>
            <a href="https://www.instagram.com/thomso.iitr/" target="_blank">
              <img src={insta} alt="insta" style={{ cursor: "pointer" }} />
            </a>
            {/* <a href="https://twitter.com/Thomso_IITR">
              <img src={x} alt="x" style={{ cursor: "pointer" }} />
            </a> */}
            <a href="https://www.youtube.com/@iitrthomso" target="_blank">
              <img src={youtube} alt="youtube" style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
        <div className="webNavbarRight">
          <div className="webNavbarRight1">Get Directions</div>
          <div className="webNavbarRight2">
            <div>Thomso Office</div>
            <div>Multi Activity Centre</div>
            <div>Indian Institute of Technology</div>
            <div>Roorkee, 247543</div>
          </div>
        </div>

      </div>
      <a href="https://drive.google.com/file/d/1j3SrUhxlt6JUg3kjpK2mSLe6iy3onzCd/view?usp=drive_link" target="_blank">
      <div className="TNC" style={{color:"white"}}> Terms & Conditions</div>

      </a>
    </>
  );
};

export default WebNavbarNew;
