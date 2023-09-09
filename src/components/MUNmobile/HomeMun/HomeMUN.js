import React, { useEffect, useState } from 'react'
import BG from "../../../assests/MUNmobileBG.webp";
import MUNTop from "../../../assests/IITRMUN.png";
import Navbar from "../../../components/EventsNavbar/MobEventnavbar";
import Contact from "../../../components/MUNmobile/ContactUs/ContactUs";
import Executives from "../Executive/Executive";
import Executive from "../../../assests/Executive.png";
import Comittee from "../Committee/Committee";
import Prizes from "../../../assests/PrizesWorth.png";
import Committee from "../../../assests/COMMITTEE.png";
import "./HomeMUN.css"
import FAQ from '../../MUN/FAQ/FAQ';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomeMUN() {
  const navigate = useNavigate();
  const [user, setuser] = useState({})
  const [check, setCheck] = useState(false)

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      axios
        .get(`/apiV1/current_user_participant`)
        .then((res) => {
          setuser(res.data);
          localStorage.setItem("user_id", res.data?.user_id);
          localStorage.setItem("id", res.data?.id);
          console.log("data", res.data);
          setCheck(true);
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status == 401) {
            if (localStorage.getItem("token")) {
              localStorage.removeItem("token");
              localStorage.removeItem("user_id");
              window.location.pathname = "/";
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="HomeMUN-body">
      <img src={BG} className="HomeMUN-bg" alt="" />
      <Navbar/>
      <div className="top-HomeMUN">
        <img src={MUNTop} className="top-HomeMUN-img" alt="" />
      </div>
      <div className="registerMUNNowBtn">
      {check ?
          (<button
           onClick={() => navigate("/MUNregister")}
           className="registerMUNNowBtnClick">Register Now</button>)
          :
          (<button
            onClick={() => navigate("/login")}
            className="registerMUNNowBtnClick">Register Now</button>)}
          
      </div>  
      <div className="prizesMUNWorth">
          <div className="prizesMUNWorthDiv">
          <img src={Prizes} alt="" className="prizesMUNWorth1" />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed quisque auctor suspendisse tortor, risus. Natoque aliquet phasellus orci et a ut justo quis. Consequat arcu aliquam consectetur adipiscing cras ultricies ornare nec. Vulputate venenatis, blandit blandit
        </div>
        <div className="CommitteeHead" id="committeeHead1">
          <img src={Committee} alt="" />
        </div>
        <Comittee/>
        <div className="CommitteeHead" id="committeeHead2">
          <img src={Executive} alt="" />
        </div>
        <div className="ExecutiveMobile">
        <Executives/>
        </div>
        
        
        
        <FAQ/>
        <Contact/>



    </div>
  )
}

export default HomeMUN
