import React from 'react'
import "./Paymentbox.css"
import paymentpic from "../../../assests/paymentpic.webp"


function Paymentbox() {
    return (
        <div className='payment-box'>
            <img className='payment-img' src={paymentpic} alt="" />
            <div className="box-text1">
                Payment Portal will be live soon
            </div>
            <div className="box-text2">
                You will be get notify when payment portal will go live through your mail.
            </div>
        </div>
    )
}

export default Paymentbox