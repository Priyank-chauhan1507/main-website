import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import "./Paymentbox.css";
import "../LeftSideProfile/leftsideprofile.css";
import log from "../../../assests/logout-logo.svg";
import cs1 from "../../../assests/CautionSign1.svg";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/profile1.png.jpg";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/events.svg";
import icon3 from "../../../assests/payment.svg";
import { message } from "antd";
import icon31 from "../../../assests/payment.svg";
import line from "../../../assests/line1.svg";
import paymentcenterpic from "../../../assests/paymentpic.webp";
// import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import id_card_bg from "../../../assests/idback.webp";
import qrcode from "../../../assests/qr.webp";
import qr from "../../../PdfRenderer/qr.png";
import "./Id_Card.css";
import QRcode from 'qrcode.react'
import { useNavigate } from "react-router-dom";
import PDFFile from '../../../PdfRenderer/Renderer';
import { PDFDownloadLink } from "@react-pdf/renderer";

import "./MobilePaymentBox.css";

const Id_Card = () => {
  //   const navigate = useNavigate();
  const [logout, setLogout] = useState(0);
  const [userDetails, setuserDetails] = useState({});
  const [qr, setQr] = useState("");
  const [vall,setVall] = useState("");
  const [visible ,setVisible] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(vall));
  }, [vall]);

  useEffect(()=>{
    if(!localStorage.getItem("token") || !localStorage.getItem("user_id")){
      navigate(`/login`);
    }
  })


  const getData = async () => {
    const ress = axios
      .get(`/apiV1/current_user_participant`)
      .then((ress) => {
        setuserDetails(ress.data);
        setQr(userDetails?.thomso_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Verify = ()=>{
   if(!(userDetails.avtar)){
    message.warning("Please upload your photo");
   }
   else{
    setQr(userDetails?.thomso_id);
    setVisible(true);
    setTimeout(() => {
      const canvas =   document.getElementById("myqr");
    console.log(canvas,"sdkcjanh")
    const pngUrl =   canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    
    setVall(pngUrl);
    }, 1000);
   
  };
    };

    

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("Userobj");
    setLogout(!logout);
    window.location.pathname = "/";
  }

  const locator = useLocation();
  const Locator = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const toggling2 = () => setIsOpen2(!isOpen2);
  const toggling3 = () => setIsOpen3(!isOpen3);


  return (
    <>
      <div className="nnp-container">
        <img src={Back} className="pro-back-img" alt="" />
        <img src={Back1} className="pro-back-img2" alt="" />
        <div className="nnp-head">
          <Navbar color="transparent" data={userDetails} />
        </div>
        <div className="boxborder">
          <div className="nnp-laphead">
            <div className="nnp-content">
              <div className="lsp-box">
                <div className="lsp-pic">
                  <img
                    className="lsp-img1"
                    src={userDetails?.avtar ? userDetails?.avtar : pic}
                    alt="profilepic"
                  />
                  <span className="lsp-text1">
                    {userDetails?.name} {userDetails?.is_ca ? "(CA)" : ""}
                  </span>
                  <span className="lsp-text2">
                    Thomso ID:{userDetails?.thomso_id}
                  </span>
                  {userDetails?.is_ca && (
                    <span className="lsp-text2">
                      CA ID : {userDetails?.ca_thomso_id}
                    </span>
                  )}
                </div>
                {/* <div>
            {userDetails?.username}
            {userDetails?.thomso_id}
          </div> */}
                <div className="lsp-centre event-space payment-profile">
                  <div
                    className={
                      locator.pathname === "/profile"
                        ? "lsp-c1 c1-text"
                        : "lsp-c2 c2-text"
                    }
                  >
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
                  <div
                    className={
                      locator.pathname === "/eventbox"
                        ? "lsp-c1 c1-text"
                        : "lsp-c2 c2-text"
                    }
                  >
                    <img src={icon2} alt="icon2" />
                    <Link
                      to="/pevents"
                      className={
                        locator.pathname === "/eventbox" ? "c1-text" : "c2-text"
                      }
                    >
                      My Events
                    </Link>
                  </div>
                  <div className="lsp-c1" style={{color: "white", background: "transparent"}}>
                    <img src={icon3} alt="icon3" style={{color: "white"}} />
                    <Link
                      to="/payment"
                      className={
                        locator.pathname === "/payment" ? "c1-text" : "c2-text"
                      }
                    >
                      Payment
                    </Link>
                  </div>
                  <button
                    className="main-logout-btn"
                    onClick={() => setLogout(!logout)}
                  >
                    <img src={log} alt="log" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
              <div className="c-line1">
                <img className="c-line1-img" src={line} alt="line" />
              </div>

              <div
                className="Paycontainer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >



        <div  className="id_border1">
            <div  className="id_border2">
              <div  className="id_box">
                <div  className="id_box_left">
                  <img
                    src={
                      userDetails?.avtar
                    }
                    className="id_box_image"
                  />
                  
                  {visible ? (<QRcode 
              
                        id="myqr"
                        value={qr} 
                        size={100}
                        
                    /> ):<div className= "id_box_qr"> Qr not generated</div>}
                </div>

                <div  className="id_box_right">
                  <p  className="id_box_id">{userDetails?.thomso_id}</p>

                  <p  className="id_box_text1">Name</p>
                  <p  className="id_box_text2">{userDetails?.name}</p>

                  <div  className="id_box_text_split">
                    <div>
                      <p  className="id_box_text1">Contact</p>
                      <p  className="id_box_text2">{userDetails?.contact}</p>
                    </div>
                    {userDetails?.is_ca &&
                      <div>
                      <p className="id_box_text1">CA ID</p>
                      <p  className="id_box_text2"> {userDetails?.ca_thomso_id}</p>
                    </div>
                    }

                  </div>

                  <p  className="id_box_text1">College</p>
                  <p  className="id_box_text2">
                    Indian Institute of Technology, Roorkee
                  </p>

                  <p className="id_box_text1">CA Referral & Name</p>
                  {userDetails?.referred_by_id ? (
                  <p  className="id_box_text2">
                  {userDetails?.ca_thomso_id} ({userDetails?.ca_name})
                  </p>
                ) : (<p  className="id_box_text2">None</p>)}

                  <p  className="id_box_textB">Accommodation - {userDetails?.accommodation ? "Yes" : "No"}</p>
                  {/* <p style={styles.id_box_text2}>None</p> */}
                </div>
              </div>
            </div>
          </div>
          <div>
         <div className="generate"> <button disabled={visible}
          style={{cursor:"pointer",zIndex:"100"}}
            onClick={Verify}
            
          >{!visible?"Generate your Qr code": "Qr code Generated "}
          </button> </div> 
          <div className="generate">   <button disabled={!visible} ><Link to="/pdf"
           style={{cursor:"pointer",color:"black",}}
            
            >
            Download Id card
          </Link></button> </div> 
          
          </div>
          
                {/* <div className="id_card_main_div">
                  <div className="id_card_div">
                    <img src={id_card_bg} className="id_card_bg1" alt="" />
                    <div className="contain1_id">
                      <div className="left_id">
                        <div className="profile_id_pic">
                          <img
                            src={userDetails.avtar}
                            className="profile_pic_image"
                            alt=""
                          />
                        </div>
                        <div className="id_qr">
                          <img src={qrcode} className="qr_image" alt="" />
                        </div>
                      </div>
                      <div className="right_id">
                        <div className="thomso_card_id">{userDetails.thomso_id}</div>
                        <div className="id_card_name">
                          <div>Name :</div>
                          <div className="dataSize">{userDetails.name}</div>
                        </div>
                        <div className="contain2_id">
                          <div className="id_contactno">
                            <div>Contact</div>
                            <div className="dataSize">{userDetails.contact}</div>
                          </div>
                          {userDetails.is_ca === true && (
                            <div className="id_ca_id">
                              <div>CA-ID :</div>
                              <div className="dataSize">
                                {userDetails.ca_thomso_id}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="id_college">
                          <div>College</div>
                          <div className="dataSize">{userDetails.college}</div>
                        </div>
                        {userDetails?.is_ca === false && (
                          <div className="id_ca_referral">
                            <div>CA-Referral and Name</div>
                            <div className="dataSize">
                              {userDetails.ca_thomso_id} and {userDetails.ca_name}
                            </div>
                          </div>
                        )}
                        <div className="id_accomodation">
                          <div>Accomodation:</div>
                          <div className="dataSize">
                            {" "}
                            {userDetails.accommodation ? "Yes" : "No"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}





              </div>
            </div>
           
          </div>
          <div className={!logout ? "none" : ""} id="logout">
            <div className="l_body">
              <div className="logout_body">
                <div className="redpic">
                  <img src={cs1} alt="redpic" />
                </div>
                <div className="textt">
                  <div className="fText">Are You Sure?</div>
                  <div className="sText">
                    Do you really want to leave and logout?
                  </div>
                </div>
                <div className="btns">
                  <button className="btn1">
                    <span
                      onClick={() => {
                        setLogout(!logout);
                      }}
                    >
                      Cancel
                    </span>
                  </button>
                  <button className="btn2" onClick={handleLogout}>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="nnp-mobile">
            <div
              className="mobpaymentcenterimg"
              style={{
                justifyContent: "flex-start",
              }}
            >
              <div className="mpb-mobileview">
                <div className="mv-top">
                  <div className="mv-top-1">
                    <Link
                      to="/profile"
                      className={
                        Locator.pathname === "/profile"
                          ? "nav-active"
                          : "nav-passive"
                      }
                    >
                      <img src={icon1} alt="profile" className="img--1" />
                      Profile
                    </Link>
                  </div>
                  <div className="mv-top-2">
                    <Link
                      to="/pevents"
                      className={
                        Locator.pathname === "/pevents"
                          ? "nav-active"
                          : "nav-passive"
                      }
                    >
                      <img src={icon2} alt="Events" className="img--1" />
                      Events
                    </Link>
                  </div>
                  <div className="mv-top-2">
                    <Link
                      to="/payment"
                      className={
                        Locator.pathname === "/payment"
                          ? "nav-active"
                          : "nav-passive"
                      }
                    >
                      <img src={icon31} alt="payment" className="img--1" />
                      Payment
                    </Link>
                  </div>
                </div>
                <div className="mpb-line1" />
              </div>



              <div  className="id_border1">
            <div  className="id_border2">
              <div  className="id_box">
                <div  className="id_box_left">
                  <img
                    src={
                      userDetails?.avtar
                    }
                    className="id_box_image"
                  />
                  <img src={qr} className="id_box_qr" />
                </div>

                <div  className="id_box_right">
                  <p  className="id_box_id">{userDetails?.thomso_id}</p>

                  <p  className="id_box_text1">Name</p>
                  <p  className="id_box_text2">{userDetails?.name}</p>

                  <div  className="id_box_text_split">
                    <div>
                      <p  className="id_box_text1">Contact</p>
                      <p  className="id_box_text2">{userDetails?.contact}</p>
                    </div>
                    {userDetails?.is_ca &&
                      <div>
                      <p className="id_box_text1">CA ID</p>
                      <p  className="id_box_text2">ThCA-2300138</p>
                    </div>
                    }

                  </div>

                  <p  className="id_box_text1">College</p>
                  <p  className="id_box_text2">
                    Indian Institute of Technology, Roorkee
                  </p>

                  <p className="id_box_text1">CA Referral & Name</p>
                  {userDetails?.referred_by_id ? (
                  <p  className="id_box_text2">
                  {userDetails?.ca_thomso_id} ({userDetails?.ca_name})
                  </p>
                ) : (<p  className="id_box_text2">None</p>)}

                  <p  className="id_box_textB">Accommodation - {userDetails?.accommodation ? "Yes" : "No"}</p>
                  {/* <p style={styles.id_box_text2}>None</p> */}
                </div>
              </div>
            </div>
          </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  return {
    userDetails,
  };
};

export default connect(mapStateToProps, null)(Id_Card);
