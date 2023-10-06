import React from 'react'
import Committee from "../../../assests/COMMITTEE.png";
import UNGA from "../../../assests/Component 1.png";
import AIPPM from "../../../assests/Component 2.png";
import Historic from "../../../assests/Component 3.png";
import ArrowMUN from "../../../assests/ArrowMUN.png";
import "./Commitee.css";
import { Link, useNavigate } from "react-router-dom";

function Commitee() {
  return (
    <div className="Committeemain">
      <div className="Committeeheading">
        <img src={Committee} alt="" className="CommitteeheadingImg" />
      </div>
      
      <div className="CommitteeBoxs">        
      <div className="CommitteeBox">
        <img src={UNGA} className="CommitteeBoxImg1" alt="" />
        <Link to="/muninfo_page1" >
        <button className="CommitteeBoxBtn">
          <div className="CommitteeBoxBtnText">More Info</div>  
          <img src={ArrowMUN} alt="" />
        </button>
        </Link>
      </div>
      <div className="CommitteeBox">
        <img src={AIPPM} className="CommitteeBoxImg2" alt="" />
        <Link to="/muninfo_page2" >
        <button className="CommitteeBoxBtn">
          <div className="CommitteeBoxBtnText">More Info</div>  
          <img src={ArrowMUN} alt="" />
        </button>
        </Link>
      </div>
      <div className="CommitteeBox">
        <img src={Historic} className="CommitteeBoxImg3" alt="" />
        <Link to="/muninfo_page3" >
        <button className="CommitteeBoxBtn">
          <div className="CommitteeBoxBtnText">More Info</div>  
          <img src={ArrowMUN} alt="" />
        </button>
        </Link>
      </div>
    </div>  
    </div>
  )
}
 
export default Commitee
