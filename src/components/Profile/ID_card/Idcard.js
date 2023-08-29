import React from "react";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/propic.svg";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/events.svg";
import icon3 from "../../../assests/payment.svg";
import id_card_bg from "../../../assests/Id_card_bg.webp";
import id_card_bg_white from "../../../assests/id_card_white_bg.webp";
import profileimg from "../../../assests/profile1.webp";
import qrcode from "../../../assests/profile1.webp";
import "./Idcard.css"
import { connect } from "react-redux";

const Idcard = ({ userDetails }) => {
  const locator = useLocation();
  console.log(userDetails);
  return (
    <div className="id_card_main_div">
        <div className="id_card_div">
        <img src={id_card_bg} className="id_card_bg1" alt="" />
        <div className="contain1_id">
            <div className="left_id">
                <div className="profile_id_pic">
                <img src={profileimg} className="profile_pic_image" alt="" />
                </div>
                <div className="id_qr">
                <img src={qrcode} className="qr_image" alt="" />
                </div>
            </div>
            <div className="right_id">
                <div className="thomso_card_id">
                Thomso ID : {userDetails.id}
                </div>
                <div className="id_card_name">
                    <div>
                    Name : 
                    </div>
                    <div>
                    {userDetails.name}name1
                    </div>
                </div>
                <div className="contain2_id">
                    <div className="id_contactno">
                        <div>
                            Contact
                        </div>
                        <div>
                    12345678{userDetails.contact}
                    </div>
                    </div>
                    <div className="id_ca_id">
                    <div>
                        CA-ID :
                    </div>
                     12345678{userDetails.CAid}
                    </div>
                </div>
                <div className="id_college">
                    <div>
                        College
                    </div>
                    <div>
                        IIT Roorkee {userDetails.college}
                    </div>
                </div>
                <div className="id_ca_referral">
                    <div>
                        CA-Referral and Name
                    </div>
                    <div>
                        12345678{userDetails.CA_Referral}
                    </div>
                </div>
                <div className="id_accomodation">
                        Accomodation:{userDetails.isAccomodation?"Yes":"No"}
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
