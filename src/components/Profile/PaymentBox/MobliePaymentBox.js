import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import payment from "./pay.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import PaymentSuccess from "./PaymentSuccess";
import "./MobilePaymentBox.css";
import payment2 from "./payment (2).svg";
import profile from "./profile.svg";
import events from "./events.svg";
import frame from "./Frame.svg";
import text from "./text.svg";
import icon1 from "../../assets/images/profile.svg";
import icon2 from "../../assets/images/events.svg";
import icon3 from "../../assets/images/payment.svg";
import { Link, useLocation } from "react-router-dom";

const options = [
  "Footloose",
  "Sargam",
  "Silent DJ",
  "Campus Clicks",
  "Blunder's Pride",
  "Street Soccre",
  "Photography",
  "Body Zorbing",
];
const options2 = [
  "Nine Muses (Western Group Dance Comp.)",
  "Nritya (Folk and Classical Group Dance Comp.)",
];
const options3 = [
  "Swaranjali: Indian Choir CompetitionA",
  "Euphony: Instrumentalist CompetitionA",
  "Ensemble: A capella CompetitionA",
];

const ON = {
  background: "white",
  color: "black",
};

const OFF = {
  background: "transparent",
  color: "white",
};

const MobliePaymentBox = ({
  events,
  participant_id,
  paymentstatus,
  is_female,
  is_payment = false,
}) => {
  const Locator = useLocation();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventArray, seteventArray] = useState([]);
  const [acco, setacco] = useState(is_female ? true : null);
  const [teamevent, setTeamEvent] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Select Event");
  const [selectedOption2, setSelectedOption2] = useState("Select SubEvent");
  const [selectedOption3, setSelectedOption3] = useState("Select SubEvent");
  const toggling = () => setIsOpen(!isOpen);
  const toggling2 = () => setIsOpen2(!isOpen2);
  const toggling3 = () => setIsOpen3(!isOpen3);
  const [paymentLive, setPaymentLive] = useState(false);

  const [mystyle, setMystyle] = useState({
    display: "none",
  });
  const [mystyle1, setMystyle1] = useState({
    display: "block",
  });

  const [style1, setStyle1] = useState({
    background: "transparent",
    color: "white",
  });
  const [style2, setStyle2] = useState(is_female ? ON : OFF);
  const [style3, setStyle3] = useState({
    background: "transparent",
    color: "white",
  });
  const [style4, setStyle4] = useState({
    background: "transparent",
    color: "white",
  });

  const [showTeamInput, setShowTeamInput] = useState({
    display: "none",
  });

  // const a = []

  const onCrossClick = (index) => {
    const a = [...eventArray];
    a.splice(index, 1);
    seteventArray(a);
  };

  const onOptionClicked = (value) => {
    console.log(value);
    setSelectedOption(value);
    setIsOpen(false);
    setShowTeamInput({ display: "block" });
    if (eventArray.includes(value)) {
      alert("Event already added");
    } else {
      seteventArray([...eventArray, value]);
    }
  };

  const onOptionClicked2 = (value, index) => {
    let a = [...eventArray];
    a[index]["sub_event_name"] = value;
    seteventArray(a);
    setSelectedOption2(value);
    setIsOpen2(false);
  };

  const onOptionClicked3 = (value, index) => {
    let a = [...eventArray];
    a[index]["sub_event_name"] = value;
    seteventArray(a);
    setSelectedOption3(value);
    setIsOpen3(false);
  };

  console.log(eventArray);

  const performTeamEvent = () => {
    setTeamEvent(true);
    setMystyle({ display: "block" });
    setMystyle1({ display: "none" });
    setStyle4({ background: "white", color: "black" });
    setStyle3({ background: "transparent", color: "white" });
    // checkPayNow();
  };

  const notPerformTeamEvent = () => {
    setTeamEvent(false);
    setMystyle({ display: "none" });
    setMystyle1({ display: "block" });
    setStyle3({ background: "white", color: "black" });
    setStyle4({ background: "transparent", color: "white" });
    // checkPayNow();
  };

  // function deleteEvent(eventName) {
  //   let index = eventArray.indexOf(eventName)
  //   seteventArray((oldArray) => oldArray.splice(index,1))
  // }

  const noAccommdation = () => {
    setacco(false);
    setStyle1({ background: "white", color: "black" });
    setStyle2({ background: "transparent", color: "white" });
  };

  const Accommdation = () => {
    setacco(true);
    setStyle2({ background: "white", color: "black" });
    setStyle1({ background: "transparent", color: "white" });
  };

  const onChangeInput = (index, value) => {
    let a = [...eventArray];
    a[index]["team_name"] = value;
    seteventArray(a);
  };

  const paynow = () => {
    setLoading(true);
    let event_team = [];
    for (let i = 0; i < eventArray.length; i++) {
      event_team.push({
        event: eventArray[i]?.event,
        team_name: eventArray[i]?.team_name,
        sub_event_name: eventArray[i]?.sub_event_name,
      });
    }
    let obj = {
      participant_id: participant_id,
      acco: acco,
      event_team: event_team,
    };
    console.log(obj);
    axios
      .post("apiV1/participant_payment", obj)
      .then((res) => {
        setLoading(false);
        window.location.href = res?.data?.link;
      })
      .then((err) => {
        setLoading(false);
        alert("Something went wrong");
        console.log(err);
      });
  };

  const checkPayNow = () => {
    console.log("HERE");
    if (acco == null || teamevent == null) {
      return false;
    }
    if (teamevent === false) {
      return true;
    } else {
      if (eventArray.length === 0) {
        return true;
      }
      for (let i = 0; i < eventArray.length; i++) {
        if (
          eventArray[i].team_name === undefined ||
          eventArray[i].team_name === ""
        ) {
          return false;
        } else if (
          (eventArray[i].event === 8 || eventArray[i].event === 12) &&
          (eventArray[i].sub_event_name === undefined ||
            eventArray[i].sub_event_name === "")
        ) {
          return false;
        }
      }
      return true;
    }
  };
  return (
    <div className="body">
      <div className="mv-top">
        <div className="mv-top-1">
          <img src={icon1} alt="profile" className="img--1" />
          <Link
            to="/profile"
            className={
              Locator.pathname === "/profile" ? "nav-active" : "nav-passive"
            }
          >
            Profile
          </Link>
        </div>
        <div className="mv-top-2">
          <img src={icon2} alt="Events" className="img--1" />
          <Link
            to="/pevents"
            className={
              Locator.pathname === "/pevents" ? "nav-active" : "nav-passive"
            }
          >
            Events
          </Link>
        </div>
        <div className="mv-top-2">
          <img src={icon3} alt="payment" className="img--1" />
          <Link
            to="/payment"
            className={
              Locator.pathname === "/payment" ? "nav-active" : "nav-passive"
            }
          >
            Payment
          </Link>
        </div>
      </div>
      <div className="mpb-line1" />
      {!is_payment ? (
        <h3 style={{ margin: "30px 10px 0px 10px", textAlign: "center" }}>
          Payment portal will be live soon.
        </h3>
      ) : (
        <div className="main_boxx">
          <div className="MPaycontainer">
            {paymentstatus ? (
              <PaymentSuccess />
            ) : (
              <>
                <div className="MPayleft">
                  <p className="Mpayheading">Payment Details</p>
                  <div className="MamountBox">
                    <div className="MPayAmount">
                      <div>
                        <p>Thomso Fees</p>
                        {acco == true || acco == null ? (
                          <p>Accommodation</p>
                        ) : (
                          <p style={{ color: "rgba(64, 64, 64, 1)" }}>
                            Accommodation
                          </p>
                        )}
                      </div>
                      <div>
                        <p>₹ 2299</p>
                        {acco == true || acco == null ? (
                          <p>₹ 500</p>
                        ) : (
                          <p style={{ color: "rgba(64, 64, 64, 1)" }}>₹ 500</p>
                        )}
                      </div>
                    </div>
                    <div className="MPayline1"></div>
                    <div className="MTotalAmount">
                      <p className="MPaylarge">TOTAL</p>
                      <p>
                        <span className="MPaylarge">
                          ₹ {acco == true || acco == null ? "2799" : "2399"}
                        </span>
                        <span className="MPayTaxes"> + Taxes</span>
                      </p>
                    </div>
                    <p className="MPayAccommodation">
                      Accommodation includes 3 day-3 night stay and Food
                      (Breakfast + Lunch){" "}
                    </p>
                  </div>
                  <p className="MPayinfo"></p>

                  <p className="MPayevent">
                    Are you going to take Accommodation in IITR? (* Accommdation
                    Compulsory for Female)
                  </p>
                  <div
                    className="MyesNo"
                    style={{ opacity: is_female ? "0.5" : "1" }}
                  >
                    <button
                      className="Myesbtn"
                      disabled={is_female}
                      onClick={Accommdation}
                      style={style2}
                    >
                      Yes
                    </button>
                    <button
                      className="Mnobtn"
                      disabled={is_female}
                      onClick={noAccommdation}
                      style={style1}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="MPayRight">
                  <p
                    className="MPayevent"
                    style={{ marginTop: "-12px", maxWidth: "450px" }}
                  >
                    Are you going to perform in Footloose, Sargam, Vogue, Nukkad
                    Natak, Abhivyakti, Battle of Bands as a team?
                  </p>
                  <div className="MyesNo">
                    <button
                      className="Myesbtn"
                      style={style4}
                      onClick={performTeamEvent}
                    >
                      Yes
                    </button>
                    <button
                      className="Mnobtn"
                      style={style3}
                      onClick={notPerformTeamEvent}
                    >
                      No
                    </button>
                  </div>

                  <div className="MpayDetailScroll" style={mystyle}>
                    <div className="MpayRightHeader"> Team Details</div>

                    {eventArray &&
                      eventArray.map((eventName, index) => (
                        <div className="MpayDis2" key={index}>
                          <div key={index}>
                            <div className="MPayevntnm">
                              <p>{eventName?.event__name}</p>
                              <p onClick={() => onCrossClick(index)}>
                                <IoMdClose size="1.5rem" />
                              </p>
                            </div>

                            {eventName?.event == 8 && (
                              <div style={{ height: "135px" }}>
                                <div className="MpayheadContainer">
                                  <div
                                    className="Mpayheader"
                                    onClick={toggling2}
                                  >
                                    {selectedOption2 || "Select Subevent"}
                                  </div>
                                  <span className="Mpayarrow">
                                    <AiFillCaretDown
                                      style={{ color: "black" }}
                                    />
                                  </span>
                                  {isOpen2 && (
                                    <div className="MpaylistContainer">
                                      <ul>
                                        {options2.map((option) => (
                                          <li
                                            onClick={() => {
                                              onOptionClicked2(option, index);
                                            }}
                                            key={Math.random()}
                                          >
                                            {option}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {eventName?.event == 12 && (
                              <div style={{ height: "160px" }}>
                                <div className="MpayheadContainer">
                                  <div
                                    className="Mpayheader"
                                    onClick={toggling3}
                                  >
                                    {selectedOption3 || "Select Subevent"}
                                  </div>
                                  <span className="Mpayarrow">
                                    <AiFillCaretDown
                                      style={{ color: "black" }}
                                    />
                                  </span>
                                  {isOpen3 && (
                                    <div className="MpaylistContainer">
                                      <ul>
                                        {options3.map((option) => (
                                          <li
                                            onClick={() => {
                                              onOptionClicked3(option, index);
                                            }}
                                            key={Math.random()}
                                          >
                                            {option}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                            <div className="MPayTeamNm">
                              <input
                                // className="PayInputDetail"
                                onChange={(e) =>
                                  onChangeInput(index, e.target.value)
                                }
                                type="text"
                                placeholder="Enter team name"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                    <div className="MPayline2"></div>

                    <div className="MpayheadContainer">
                      <div className="Mpayheader" onClick={toggling}>
                        {"Select Event"}
                      </div>
                      <span className="Mpayarrow">
                        <AiFillCaretDown style={{ color: "black" }} />
                      </span>
                      {isOpen && (
                        <div className="MpaylistContainer">
                          <ul>
                            {Object.keys(events).map((option) => {
                              console.log(option);
                              return (
                                <li
                                  onClick={() => {
                                    onOptionClicked(events[option]);
                                  }}
                                  key={Math.random()}
                                >
                                  {events[option]?.event__name}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  {checkPayNow() == true ? (
                    <button className="MPayNowBtnActive" onClick={paynow}>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : (
                        "Pay Now"
                      )}
                    </button>
                  ) : (
                    <button className="MPayNowBtn">Pay Now</button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobliePaymentBox;
