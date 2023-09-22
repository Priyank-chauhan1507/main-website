import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/propic.svg";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/events.svg";
import icon3 from "../../../assests/payment.svg";
import id_card_bg from "../../../assests/idback.webp";
import id_card_bg_white from "../../../assests/id_card_white_bg.webp";
import profileimg from "../../../assests/profile1.webp";
import qrcode from "../../../assests/qr.webp";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import axios from "axios";
import "./Idcard.css";
import { connect } from "react-redux";
import QRcode from 'qrcode.react'

const Idcard = ({ userDetails }) => {
  const locator = useLocation();
  // console.log(userDetails);
  const [user, setuser] = useState({});
  const [qr, setQr] = useState("");
  const [vall,setVall] = useState("");
  const [visible ,setVisible] = useState(false);
  //   const [userDetails, setuserDetails] = useState({});

  //   useEffect(() => {
  //     setuserDetails(user);
  //   }, [user]);

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(vall));
  }, [vall]);

  
  const loadUserData = async () => {
    try {
      axios.get(`/apiV1/current_user_participant`).then((res) => {
        setuser(res.data);
        localStorage.setItem("user_id", res.data?.user_id);
        localStorage.setItem("id", res.data?.id);
        // console.log("data", res.data);
        setQr(user.thomso_id);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userDetails);
  
  const Verify = ()=>{
    // console.log("sajclx");
    setQr(user.thomso_id);
    setVisible(true);
    setTimeout(() => {
      const canvas =   document.getElementById("myqr");
    // console.log(canvas,"sdkcjanh")
    const pngUrl =   canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    
    setVall(pngUrl);
    }, 1000);
   

    
  };


  return (
    <div className="id_card_main_div">
      <div className="id_card_div">
        <img src={id_card_bg} className="id_card_bg1" alt="" />
        <div className="contain1_id">
          <div className="left_id">
            <div className="profile_id_pic">
             {user.avtar &&  <img src={user.avtar} className="profile_pic_image" alt="" />}
            </div>
            <div className="id_qr">
              {/* <img src={qrcode} className="qr_image" alt="" /> */}
             {!visible && (<button
          style={{cursor:"pointer",zIndex:"100"}}
            onClick={Verify}
            
          >
            verify
          </button> )}
            {visible && (<QRcode 
              style={{marginTop:"3vh",}}
                        id="myqr"
                        value={qr} 
                        size={100}
                        
                    /> )}
            </div>
          </div>
          <div className="right_id">
            <div className="thomso_card_id">{user.thomso_id}</div>
            <div className="id_card_name">
              <div>Name :</div>
              <div className="dataSize">{user.name}</div>
            </div>
            <div className="contain2_id">
              <div className="id_contactno">
                <div>Contact</div>
                <div className="dataSize">{user.contact}</div>
              </div>
              {/* {" "} */}
              {user.is_ca === true &&
              (<div className="id_ca_id">
                <div>CA-ID :</div>
                <div className="dataSize">{user.ca_thomso_id}</div>
              </div>)
              }
            </div>
            <div className="id_college">
              <div>College</div>
              <div className="dataSize">{user.college}</div>
            </div>
            {/* {" "} */}
            {user?.is_ca === false &&
            (<div className="id_ca_referral">
              <div>CA-Referral and Name</div>
              <div className="dataSize">
                {user.ca_thomso_id} and {user.ca_name}
              </div>
            </div>)}
            <div className="id_accomodation">
              <div>Accomodation:</div>
              <div className="dataSize">
                {" "}
                {user.accommodation ? "Yes" : "No"}
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, null)(Idcard);
