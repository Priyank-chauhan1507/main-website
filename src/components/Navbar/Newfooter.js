import React from "react";
import "./Newfooter.css";
import mainlogo from "../../assests/Merch_moblogo.png";
import background from "../../assests/back.webp";
// import facebook from "../../assests/facebook.svg";
import Facebook from "../../assests/Fb1.png";
// import insta from "../../assests/instagram.svg";
import Insta from "../../assests/Insta1.png";
import x from "../../assests/x.svg";
// import youtube from "../../assests/youtube.svg";
import Youtube from "../../assests/Youtube1.png";
import Footer from "../Footer/Newmobfooter";
import footernewbg from "../../assests/newfooterbg.webp"
// import Newfooter from "newfooterbg.webp"
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
                          ? "webNavbarMainnew clearbgmun"
                          : "webNavbarMainnew"
                        }>
                          <img src={footernewbg}
                          className="footer-new-bg" alt="..."/>
        <div className="webNavbarLeft" style={{paddingLeft:"5vh"}}>
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
            <img src={mainlogo} alt="logo" />
          </div>
          <div className="webNavbarMiddle2">
            <a href="https://www.facebook.com/thomsoiitroorkee" target="_blank">
              <img
                src={Facebook}
                alt="facebook"
                style={{ cursor: "pointer" }}
              />
            </a>
            <a href="https://www.instagram.com/thomso.iitr/" target="_blank">
              <img src={Insta} alt="insta" style={{ cursor: "pointer" }} />
            </a>
            {/* <a href="https://twitter.com/Thomso_IITR">
              <img src={x} alt="x" style={{ cursor: "pointer" }} />
            </a> */}
            <a href="https://www.youtube.com/@iitrthomso" target="_blank">
              <img src={Youtube} alt="youtube" style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
        <div className="webNavbarRight" style={{paddingRight:"5vh"}}>
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
