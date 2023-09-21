import React, { useEffect, useState } from "react";
import "./Home.css";
import MUNTop from "../../../assests/MUN-Top.webp";
import BG from "../../../assests/BGMUN.webp";
import BG_mob from "../../../assests/mun_mob.webp";
import Navbar from "../../../components/EventsNavbar/Eventsnavbar";
import Judges from "../Judges/Judges";
import FAQ from "../FAQ/FAQ";
import Contact from "../Footer/Footer";
import Commitee from "../Commitee/Commitee";
import Prizes from "../../../assests/PrizesWorth100.png";
import MUNmob from "../../../components/MUNmobile/HomeMun/HomeMUN";
import Footer from "../../../components/Navbar/WebNavbarNew";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Home() {
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

  // const RegisterMUN = () => {
  //   {localStorage.getItem("token") ? (navigate("/MUNregister")) : message.info("Please login to register for MUN")}
  // }
  
  return (
    <>
      {" "}
      <div className="MUN-bg">
        <img src={BG} className="MUN-Bg" alt="" />
        <Navbar color="transparent" />
        <div className="top-MUN-img">
          <img src={MUNTop} alt="" className="topImgMUN iitr_mun" />
        </div>
        
        <div className="registerNowBtn">
          {check ?
          (<button
           onClick={() => navigate("/MUNregister")}
           className="registerNowBtnClick">Register Now</button>)
          :
          (<button
            onClick={() => navigate("/login")}
            className="registerNowBtnClick">Register Now</button>)}
        </div>
        <div className="prizesWorth">
          <div className="prizesWorthDiv">
            <img src={Prizes} alt="" className="prizesWorth1" />
          </div>
          Model United Nations, referred to as MUN, offers participants a distinctive opportunity to immerse themselves in the realm of international diplomacy and the resolution of global challenges through constructive forums for open dialogue. MUN conferences foster a range of critical skills, including public speaking, research, negotiation, and teamwork, while also promoting a deeper understanding of global affairs and international relations. Delegates will uphold their countries' national policies while engaging in negotiations amid other, at times divergent, international policies.
        </div>
        <div className="MUNCommitee">
          <Commitee />
        </div>
        <div className="MUNjuDges">
          <Judges />
        </div>
        <FAQ />
        <div className="MUNFooter">
          <Contact />
        </div>
        <div className="MUNFooter">
          <Footer color="transparent" />
        </div>
      </div>
      <div className="MUN-mob">
        <MUNmob/>
      </div>
    </>
  );
}

export default Home;
