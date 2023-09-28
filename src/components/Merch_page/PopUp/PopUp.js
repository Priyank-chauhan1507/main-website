import React from 'react'
import './PopUp.css'

const PopUp = () => {
  return (
    <>
      <div className='blur'></div>
    <div className="mainPopUp">

    <div className='blur'></div>
    <div className="semimainPopUp" style={{background:"white",borderRadius:"6px",padding:"25px"}}>
      <div className="headingPopUp">ADD ADDRESS</div>
      <div>
        <div className="rulerPopup"></div>
      <form action="">
        <input type="text" placeholder="Name" className="PopUpMerch"/>
        <input type="email" placeholder="Email Id" className="PopUpMerch"/>
        <input type="number" placeholder="Phone Number" className="PopUpMerch"/>
        <input type="text" placeholder="State" className="PopUpMerch"/>
        <input type="text" placeholder="City" className="PopUpMerch"/>
        <input type="number" placeholder="Pin Code" className="PopUpMerch"/>
        <input type="text" placeholder="Address" className="PopUpMerch"/>

      </form>
      <div className="btnPopUp">
        <button className="cancelPopUp">Cancel</button>
        <button className="PayNowPopUp">Pay Now</button>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default PopUp
