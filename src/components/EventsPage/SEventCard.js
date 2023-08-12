// import EventCardPage from "./EventCardPage";
import React, { useState } from "react";
import "./eventcard.css";
import default_image from "./images/default_event.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { fetchEvents } from "../User/UserActions";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
// import { useState, useEffect } from "react";
// import a from "./images/ls.svg";
// import axios from "axios";

const SEventCard = ({ data, getEvents, fetchEvent, ispayment }) => {
  const [loading, setLoading] = useState(false);
  // const [event, setEvent] = useState(null);
  // console.log(data);

  // console.log(event, "");
  // const openPage = (e) => {
  //   setEvent(e);
  // const evPage = document.getElementById("ev-page");
  // evPage.classList.remove("none");
  // };
  // const closePage = () => {
  //   setEvent(null);
  // };
  const deleteEvent = () => {
    setLoading(true);
    axios.delete(`/apiV1/registerevent/${data.id}`).then((res) => {
      setLoading(false);
      fetchEvent();
      getEvents();
    });
  };
  const paynow = () => {
    if (!data?.is_payment) {
      window.location.href = `${data?.event__payment_link}`;
    }
  };
  console.log(data);
  return (
    <>
      {/* {data &&
        data?.map((datas, index) => { */}
      {/* return (
            <> */}
      <div
        id="card_icc"
        // key={datas?.id}
        // onClick={() => openPage(index)}
      >
        <div id="card_ic">
          <img
            src={data?.event__image == "" ? default_image : data?.event__image}
            alt="image"
            id="img_1__card_ec"
          />
        </div>
        <div id="text_1_card_ec">
          <div id="text_1_card_ec_1">{data?.event__name}</div>
          <div id="text_1_card_ec_2">
            {/* category */}
            {data?.event__category__name}
          </div>
        </div>
        {data?.event__is_payment == true && ispayment === true && (
          <div style={{ padding: "12px" }}>
            <div className="paynow" onClick={paynow}>
              {data?.is_payment === true ? "Paid" : "Pay Now"}
            </div>
          </div>
        )}
        {data?.is_payment === false && (
          <div
            style={{
              background: "rgb(255 44 44)",
              color: "#fff",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={deleteEvent}
          >
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              <>
                <RiDeleteBin6Line style={{ marginRight: "10px" }} size="18px" />
                Delete
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
  {
    /* })} */
  }
  {
    /* {event != null && (
        <div>
          <EventCardPage data={data[event]} closePage={closePage} />
        </div>
      )} */
  }
  //   </>
  // );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  let userEvents = state.user.events;
  let ispayment = state.user.user.payment;

  return {
    userDetails,
    userEvents,
    ispayment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: () => dispatch(fetchEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SEventCard);
