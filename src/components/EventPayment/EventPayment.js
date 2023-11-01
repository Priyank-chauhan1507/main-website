import React, { useEffect, useState } from "react";
import "./EventPayment.css";
import logo from "../../assests/paymentlogo.png";
import axios from "axios";
// import PopUp from "../Merch_page/PopUp/PopUp";
import Loader from "../Loader/Loader";
function EventPayment() {
  const [events, setevents] = useState([]);
  const [event, setevent] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("/apiV1/event");
      // console.log(response);
      console.log(response.data);
      setevents(response.data);
      setLoading(false);
    };
    fetchdata();
  }, []);

  const [details, setdetails] = useState(false);
  return (
    <div className="eventpayment">
      {loading && <Loader />}
      <div className="eventpayment_header">
        <img className="eventpayment_logo" src={logo} alt="" />
      </div>
      <div className="eventpayment_body">
        <h1>Paid events</h1>
        {events
          .filter((el) => {
            return el.is_payment === true && el.name==="SILENT DJ";
          })
          .map((el) => {
            return (
              <div className="eventpayment_card" id={el.id}>
                <div className="eventpayment_left">
                  <img src={el.image} alt="" className="eventpayment_image" />
                </div>
                <div className="eventpayment_right">
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                  <div className="eventpayment_entry_fee">
                    <span className="entry">Entry Fee :</span>
                    <span className="fee">Rs. {el.payment_amount}/-</span>
                  </div>
                  <div
                    className="eventpayment_pay"
                    onClick={() => {
                      setdetails(!details);
                      setevent(el.name);
                    }}
                  >
                    PAY NOW
                  </div>
                </div>
              </div>
            );
          })}
        {events
          .filter((el) => {
            return el.is_payment === true && el.name!=="SILENT DJ";
          })
          .map((el) => {
            return (
              <div className="eventpayment_card" id={el.id}>
                <div className="eventpayment_left">
                  <img src={el.image} alt="" className="eventpayment_image" />
                </div>
                <div className="eventpayment_right">
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                  <div className="eventpayment_entry_fee">
                    <span className="entry">Entry Fee :</span>
                    <span className="fee">Rs. {el.payment_amount}/-</span>
                  </div>
                  <div
                    className="eventpayment_pay"
                    onClick={() => {
                      setdetails(!details);
                      setevent(el.name);
                    }}
                  >
                    PAY NOW
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* {details && (
        <PopUp details={details} setdetails={setdetails} event={event}/>
      )} */}
    </div>
  );
}

export default EventPayment;
