import React from 'react'
import Committee from "../../../assests/COMMITTEE.png";
import UNGA from "../../../assests/UNGAnew.png";
import AIPPM from "../../../assests/AIPPMnew.png";
import Historic from "../../../assests/Historicnew.png";
import ArrowMUN from "../../../assests/ArrowMUN.png";
import "./Commitee.css"

function Commitee() {
  return (
    <div className="Committeemain">
      <div className="Committeeheading">
        <img src={Committee} alt="" className="CommitteeheadingImg" />
      </div>
      
      <div className="CommitteeBoxs">        
      <div className="CommitteeBox">
        <img src={UNGA} className="CommitteeBoxImg1" alt="" />
        <button className="CommitteeBoxBtn">
          <div className="CommitteeBoxBtnText">More Info</div>  
          <img src={ArrowMUN} alt="" />

        </button>
      </div>
      <div className="CommitteeBox">
        <img src={AIPPM} className="CommitteeBoxImg2" alt="" />
        <button className="CommitteeBoxBtn">
          <div className="CommitteeBoxBtnText">More Info</div>  
          <img src={ArrowMUN} alt="" />

        </button>
      </div>
      <div className="CommitteeBox">
        <img src={Historic} className="CommitteeBoxImg3" alt="" />
        <button className="CommitteeBoxBtn">
          <div className="CommitteeBoxBtnText">More Info</div>  
          <img src={ArrowMUN} alt="" />

        </button>
      </div>
      </div>
    </div>
  )
}
 
export default Commitee
