import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import "./Paymentbox.css";
import "../LeftSideProfile/leftsideprofile.css";
import log from "../../../assests/logout-logo.svg";
import cs1 from "../../../assests/CautionSign1.svg";
import MainProfileBox from "../MainProfileBox/MainProfileBox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
import { useLocation, Link } from "react-router-dom";
import pic from "../../../assests/profile1.png.jpg";
import icon1 from "../../../assests/profile.svg";
import icon2 from "../../../assests/events.svg";
import icon3 from "../../../assests/pay_black.png";
import icon31 from "../../../assests/payment.svg";
import line from "../../../assests/line1.svg";
import paymentcenterpic from "../../../assests/paymentpic.webp";
import PaymentSuccess from "./PaymentSuccess";
// import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import payment from "./pay.svg";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import SuccessPaymentPage from "./index";
import "./MobilePaymentBox.css";
import { MdDelete } from "react-icons/md";

const NewPaymentBox = (
  events,
  participant_id,
  paymentstatus,
  is_female,
  is_payment = false
) => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(0);
  const [userDetails, setuserDetails] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const ress = axios
      .get(`/apiV1/current_user_participant`)
      .then((ress) => {
        setuserDetails(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("Userobj");
    setLogout(!logout);
    window.location.pathname = "/";
  }

  const Locator = useLocation();
  // useEffect(() => {
  //   if (!userDetails?.id) {
  //     // navigate.push("/login");
  //   }
  // }, []);
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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eventArray, seteventArray] = useState([]);
  const [acco, setacco] = useState(is_female ? true : null);
  const [teamevent, setTeamEvent] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Select Event");
  const [selectedOption2, setSelectedOption2] = useState("Select Event");
  const [selectedOption3, setSelectedOption3] = useState("Select Event");
  const toggling = () => setIsOpen(!isOpen);
  const toggling2 = () => setIsOpen2(!isOpen2);
  const toggling3 = () => setIsOpen3(!isOpen3);
  const [paymentLive, setPaymentLive] = useState(false);
  const [paying, setPaying] = useState(false);
  const [addpar, setAddpar] = useState(false);
  const [submitid, setSubmitid] = useState(false);

  let team_pay = [];

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
    setPaying(true);
    // let event_team = [];
    // for (let i = 0; i < eventArray.length; i++) {
    //   event_team.push({
    //     event: eventArray[i]?.event,
    //     team_name: eventArray[i]?.team_name,
    //     sub_event_name: eventArray[i]?.sub_event_name,
    //   });
    // }
    let obj = {
      participant_id: participant_id,
      acco: acco,
      // event_team: event_team,
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
    if (acco == null) {
      return false;
    } else {
      return true;
    }
    // if (teamevent === false) {
    //   return true;
    // } else {
    //   if (eventArray.length === 0) {
    //     return true;
    //   }
    //   for (let i = 0; i < eventArray.length; i++) {
    //     if (
    //       eventArray[i].team_name === undefined ||
    //       eventArray[i].team_name === ""
    //     ) {
    //       return false;
    //     } else if (
    //       (eventArray[i].event === 8 || eventArray[i].event === 12) &&
    //       (eventArray[i].sub_event_name === undefined ||
    //         eventArray[i].sub_event_name === "")
    //     ) {
    //       return false;
    //     }
    //   }
    //   return true;
    // }
  };

  let getid = "";

  // async function checkInputExists(inputValue) {
  //   try {
  //     const response = await axios.get(`/${inputValue}`);
  //     return response.data.exists;
  //   } catch (error) {
  //     console.error('Error checking input:', error);
  //     throw error;
  //   }
  // }

  const locator = useLocation();
  return (
    <>
      <div className="nnp-container">
        <img src={Back} className="pro-back-img" alt="" />
        <img src={Back1} className="pro-back-img2" alt="" />
        <div className="nnp-head">
          <Navbar color="transparent" data={userDetails} />
          {/* <div className="nnp-mobhead">
            <EventMobileNav />
          </div> */}
        </div>
        <div className="boxborder">
          <div className="nnp-laphead">
            <div className="nnp-content">
              <div className="lsp-box">
                <div className="lsp-pic">
                  <img
                    className="lsp-img1"
                    src={userDetails?.avtar ? userDetails?.avtar : pic}
                    alt="profilepic"
                  />
                  <span className="lsp-text1">
                    {userDetails?.name} {userDetails?.is_ca ? "(CA)" : ""}
                  </span>
                  <span className="lsp-text2">
                    Thomso ID:{userDetails?.thomso_id}
                  </span>
                  {userDetails?.is_ca && (
                    <span className="lsp-text2">
                      CA ID : {userDetails?.ca_thomso_id}
                    </span>
                  )}
                </div>
                {/* <div>
            {userDetails?.username}
            {userDetails?.thomso_id}
          </div> */}
                <div className="lsp-centre event-space payment-profile">
                  <div
                    className={
                      locator.pathname === "/profile"
                        ? "lsp-c1 c1-text"
                        : "lsp-c2 c2-text"
                    }
                  >
                    <img src={icon1} alt="icon1" />
                    <Link
                      to="/profile"
                      className={
                        locator.pathname === "/profile" ? "c1-text" : "c2-text"
                      }
                    >
                      Profile
                    </Link>
                  </div>
                  {!userDetails?.is_iitr_alumn && (
                    <div
                      className={
                        locator.pathname === "/eventbox"
                          ? "lsp-c1 c1-text"
                          : "lsp-c2 c2-text"
                      }
                    >
                      <img src={icon2} alt="icon2" />
                      <Link
                        to="/pevents"
                        className={
                          locator.pathname === "/eventbox"
                            ? "c1-text"
                            : "c2-text"
                        }
                      >
                        My Events
                      </Link>
                    </div>
                  )}
                  {userDetails?.is_iitr_alumn ? (
                    <div
                      className={
                        locator.pathname === "/payment"
                          ? "lsp-c2 c2-text"
                          : "lsp-c2 c2-text"
                      }
                    >
                      <img src={icon3} alt="icon3" />
                      <Link
                        to="/payment"
                        className={
                          locator.pathname === "/payment"
                            ? "c1-text"
                            : "c2-text"
                        }
                      >
                        Payment
                      </Link>
                    </div>
                  ) : (
                    <div className="lsp-c1">
                      <img src={icon3} alt="icon3" />
                      <Link
                        to="/payment"
                        className={
                          locator.pathname === "/payment"
                            ? "c1-text"
                            : "c2-text"
                        }
                      >
                        Payment
                      </Link>
                    </div>
                  )}
                  <button
                    className="main-logout-btn"
                    onClick={() => setLogout(!logout)}
                  >
                    <img src={log} alt="log" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
              <div className="c-line1">
                <img className="c-line1-img" src={line} alt="line" />
              </div>

              <div
                className="Paycontainer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <>
                  {/* <img src={paymentcenterpic} alt="" /> */}
                  {paymentstatus ? (
                    <PaymentSuccess />
                  ) : (
                    <>
                      {paying ? (
                        <>
                          <div
                            className="Payleft1"
                            style={{ marginRight: "auto", marginTop: "0" }}
                          >
                            <table className="pay-table">
                              <thead className="par-head">
                                <tr className="pay-tr-head">
                                  <th className="pay-th">Sr. No.</th>
                                  <th className="pay-th">Thomso ID</th>
                                  <th className="pay-th">Gender</th>
                                  <th className="pay-th">Accomodation</th>
                                </tr>
                              </thead>
                              <hr />
                              <tbody className="pay-body-data">
                                <>
                                  <tr className="pay-tr">
                                    <td className="pay-th">1.</td>
                                    <td className="pay-th">
                                      {userDetails?.thomso_id}
                                    </td>
                                    <td className="pay-th">
                                      {userDetails?.gender}
                                    </td>
                                    {acco ? (
                                      <td className="pay-th">
                                        <input
                                          type="checkbox"
                                          checked
                                        // onChange={}
                                        />
                                      </td>
                                    ) : (
                                      <td className="pay-th">
                                        <input
                                          type="checkbox"
                                        // checked
                                        // onChange={}
                                        />
                                      </td>
                                    )}
                                    <td><MdDelete style={{ cursor: "pointer" }} color="white" size="20px" /></td>
                                    <td>
                                      <MdDelete
                                        style={{ cursor: "pointer" }}
                                        color="white"
                                        size="20px"
                                      />
                                    </td>
                                  </tr>
                                  {team_pay.map((data) => {
                                    return (
                                      <tr className="pay-tr">
                                        <td className="pay-th">{data?.id}.</td>
                                        <td className="pay-th">
                                          {data?.thomsoid}
                                        </td>
                                        <td className="pay-th">
                                          {data?.gender}
                                        </td>
                                        {acco ? (
                                          <td className="pay-th">
                                            <input
                                              type="checkbox"
                                              checked
                                            // onChange={}
                                            />
                                          </td>
                                        ) : (
                                          <td className="pay-th">
                                            <input
                                              type="checkbox"
                                            // checked
                                            // onChange={}
                                            />
                                          </td>
                                        )}
                                      </tr>
                                    );
                                  })}
                                </>
                              </tbody>
                            </table>
                            <div
                              onClick={() => setAddpar(!addpar)}
                              className="add-participant"
                              style={{
                                color: "Selective-Yellow",
                                cursor: "pointer",
                              }}
                            >
                              + Add Participant
                            </div>
                            <div className="total-pay">
                              <div className="total-pay-1">
                                <h1 className="total-pay-1-h1">TOTAL</h1>
                                <h2 className="total-pay-1-h2">No. of Participants</h2>
                              </div>
                              <div className="total-pay-2">
                                <p className="total-pay-1-p1">₹ 2799</p>
                                <p className="total-pay-1-p2">1</p>
                              </div>
                              <div className="total-pay-3">
                                <button className="total-pay-3-btn" type="submit">Pay Now</button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="Payleft"
                            style={{ marginRight: "auto" }}
                          >
                            <p className="payheading">Payment Details</p>
                            <div className="amountBox">
                              <div className="PayAmount">
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
                                    <p style={{ color: "rgba(64, 64, 64, 1)" }}>
                                      ₹ 500
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="Payline1"></div>
                              <div className="TotalAmount">
                                <p className="Paylarge">TOTAL</p>
                                <p>
                                  <span className="Paylarge">
                                    ₹{" "}
                                    {acco == true || acco == null
                                      ? "2799"
                                      : "2299"}
                                  </span>
                                  <span className="PayTaxes"> + Taxes</span>
                                </p>
                              </div>
                              <p className="PayAccommodation">
                                Accommodation includes 3 day-3 night stay and
                                Food (Breakfast + Lunch){" "}
                              </p>
                            </div>
                            <p className="Payinfo"></p>

                            <p className="Payevent">
                              Are you going to take Accommodation in IITR? (*
                              Accommdation Compulsory for Female)
                            </p>
                            <div
                              className="yesNo"
                              style={{ opacity: is_female ? "0.5" : "1" }}
                            >
                              <button
                                className="yesbtn"
                                disabled={is_female}
                                onClick={Accommdation}
                                style={style2}
                              >
                                Yes
                              </button>
                              <button
                                className="nobtn"
                                disabled={is_female}
                                onClick={noAccommdation}
                                style={style1}
                              >
                                No
                              </button>
                            </div>
                            {checkPayNow() == true ? (
                              <button
                                className="PayNowBtnActive"
                                onClick={paynow}
                              >
                                {loading ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : (
                                  "Pay Now"
                                )}
                              </button>
                            ) : (
                              <button className="PayNowBtn">Pay Now</button>
                            )}
                          </div>
                        </>
                      )}
                    </>
                  )}

                </>
              </div>
            </div>
          </div>
          <div className={!logout ? "none" : ""} id="logout">
            <div className="l_body">
              <div className="logout_body" style={{ position: "relative" }}>
                <div className="redpic">
                  <img src={cs1} alt="redpic" />
                </div>
                <div className="textt">
                  <div className="fText">Are You Sure?</div>
                  <div className="sText">
                    Do you really want to leave and logout?
                  </div>
                </div>
                <div className="btns">
                  <button className="btn1">
                    <span
                      onClick={() => {
                        setLogout(!logout);
                      }}
                    >
                      Cancel
                    </span>
                  </button>
                  <button className="btn2" onClick={handleLogout}>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={addpar ? "" : "none"} id="logout">
            <div className="l_body">
              <div className="logout_body" style={{ position: "relative" }}>
                {submitid ? (
                  <div className="add-acco">
                    <h1 className="dacc">Does he want accomodation?</h1>
                    <input type="checkbox" />
                    <div className="fle-ro22" >
                      {/* <input className="add-par-id" type="text" name="parid" placeholder="thomso id *" /> */}

                      <button onClick={() => {
                        setAddpar(!addpar);
                        setSubmitid(false);
                      }} className="clear-par-1" style={{fontSize: "16px" }}>Clear</button>

                      <button onClick={() => setSubmitid(true)} className="submit-par-1" style={{ fontSize: "16px" }} >Submit</button>
                    </div>

                  {/* </div> */}
                  <div className="fle-ro22" >
                    <h1>Does he want accomodation?</h1>
                    <input type="checkbox" />
                  </div>
                  </div>
                ) : (

                  <div className="add-par">
                    <h1 className="add-parti" style={{ fontSize: "20px" }}>Add Participants</h1>
                    {/* <div className="fle-ro"></div> */}
                    <input className="add-par-id" type="text" name="parid" placeholder="thomso id *" />
                    <div className="fle-ro2" >
                      {/* <input className="add-par-id" type="text" name="parid" placeholder="thomso id *" /> */}

                      <button onClick={() => {
                        setAddpar(!addpar);
                        setSubmitid(false);
                      }} className="clear-par" style={{ padding: "6px", fontSize: "16px" }}>Clear</button>

                      <button onClick={() => setSubmitid(true)} className="submit-par" style={{ padding: "6px", fontSize: "16px" }} >Submit</button>
                    </div>

                  </div>

                )}

                    {/* <h1>Add Participants</h1>
                    <input
                      className="add-par-id"
                      type="text"
                      name="parid"
                      placeholder="thomso id *"
                    /> */}
                  {/* </div> */}
                {/* )} */}
                

                {/* <button
                  onClick={() => {
                    setAddpar(!addpar);
                    setSubmitid(false);
                  }}
                  className="clear-par"
                >
                  Clear
                </button>
                <button
                  onClick={() => setSubmitid(true)}
                  className="submit-par"
                >
                  Submit
                </button> */}
              </div>
            </div>
          </div>

          <div className="nnp-mobile">
            <div
              className="mobpaymentcenterimg"
              style={{
                justifyContent: "flex-start",
              }}
            >
              <div className="mpb-mobileview">
                <div className="mv-top">
                  <div className="mv-top-1">
                    <Link
                      to="/profile"
                      className={
                        Locator.pathname === "/profile"
                          ? "nav-active"
                          : "nav-passive"
                      }
                    >
                      <img src={icon1} alt="profile" className="img--1" />
                      Profile
                    </Link>
                  </div>
                  {userDetails?.is_iitr_alumn ? null : (
                    <div className="mv-top-2">
                      <Link
                        to="/pevents"
                        className={
                          Locator.pathname === "/pevents"
                            ? "nav-active"
                            : "nav-passive"
                        }
                      >
                        <img src={icon2} alt="Events" className="img--1" />
                        Events
                      </Link>
                    </div>
                  )}
                  {userDetails?.is_iitr_alumn ? (
                    <div className="mv-top-2">
                      <img src={icon3} alt="payment" className="img--1" />
                      <Link
                        to="/payment-alumn"
                        className={
                          Locator.pathname === "/payment-alumn"
                            ? "nav-active"
                            : "nav-passive"
                        }
                      >
                        Payment
                      </Link>
                    </div>
                  ) : (
                    <div className="mv-top-2">
                      <Link
                        to="/payment"
                        className={
                          Locator.pathname === "/payment"
                            ? "nav-active"
                            : "nav-passive"
                        }
                      >
                        <img src={icon31} alt="payment" className="img--1" />
                        Payment
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mpb-line1" />
              </div>
              {paymentstatus ? (
                <PaymentSuccess />
              ) : (
                <>
                {paying ? (
                        <>
                          <div
                            className="Payleft1"
                            style={{ marginRight: "auto", marginTop: "0" }}
                          >
                            <table className="pay-table">
                              <thead className="par-head">
                                <tr className="pay-tr-head">
                                  {/* <th className="pay-th">Sr. No.</th> */}
                                  <th className="pay-th">Thomso ID</th>
                                  <th className="pay-th">Gender</th>
                                  <th className="pay-th">Accomodation</th>
                                </tr>
                              </thead>
                              <hr />
                              <tbody className="pay-body-data">
                                <>
                                  <tr className="pay-tr">
                                    {/* <td className="pay-th">1.</td> */}
                                    <td className="pay-th">
                                      {userDetails?.thomso_id}
                                    </td>
                                    <td className="pay-th">
                                      {userDetails?.gender}
                                    </td>
                                    {acco ? (
                                      <td className="pay-th">
                                        <input
                                          type="checkbox"
                                          checked
                                          // onChange={}
                                        />
                                      </td>
                                    ) : (
                                      <td className="pay-th">
                                        <input
                                          type="checkbox"
                                          // checked
                                          // onChange={}
                                        />
                                      </td>
                                    )}
                                    <td>
                                      <MdDelete
                                        style={{ cursor: "pointer" }}
                                        color="white"
                                        size="20px"
                                      />
                                    </td>
                                  </tr>
                                  {team_pay.map((data) => {
                                    return (
                                      <tr className="pay-tr">
                                        {/* <td className="pay-th">{data?.id}.</td> */}
                                        <td className="pay-th">
                                          {data?.thomsoid}
                                        </td>
                                        <td className="pay-th">
                                          {data?.gender}
                                        </td>
                                        {acco ? (
                                          <td className="pay-th">
                                            <input
                                              type="checkbox"
                                              checked
                                              // onChange={}
                                            />
                                          </td>
                                        ) : (
                                          <td className="pay-th">
                                            <input
                                              type="checkbox"
                                              // checked
                                              // onChange={}
                                            />
                                          </td>
                                        )}
                                      </tr>
                                    );
                                  })}
                                </>
                              </tbody>
                            </table>
                            <div
                              onClick={() => setAddpar(!addpar)}
                              className="add-participant"
                              style={{
                                color: "Selective-Yellow",
                                cursor: "pointer",
                              }}
                            >
                              + Add Participant
                            </div>
                            <div className="total-pay">
                              <div className="total-pay-1">
                                <h1 className="total-pay-1-h1">TOTAL</h1>
                                <h2 className="total-pay-1-h2">No. of Participants</h2>
                              </div>
                              <div className="total-pay-2">
                                <p className="total-pay-1-p1">₹ 2799</p>
                                <p className="total-pay-1-p2">1</p>
                              </div>
                              <div className="total-pay-3">
                                <button className="total-pay-3-btn" type="submit">Pay Now</button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                <>
                  <div className="main_boxx">
                    <div className="MPaycontainer">
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
                                <p style={{ color: "rgba(64, 64, 64, 1)" }}>
                                  ₹ 500
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="MPayline1"></div>
                          <div className="MTotalAmount">
                            <p className="MPaylarge">TOTAL</p>
                            <p>
                              <span className="MPaylarge">
                                ₹{" "}
                                {acco == true || acco == null ? "2799" : "2299"}
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
                          Are you going to take Accommodation in IITR? (*
                          Accommdation Compulsory for Female)
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
                        {checkPayNow() == true ? (
                              <button
                                className="PayNowBtnActive"
                                onClick={paynow}
                              >
                                {loading ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : (
                                  "Pay Now"
                                )}
                              </button>
                            ) : (
                              <button className="PayNowBtn">Pay Now</button>
                            )}
                      </div>
                    </div>
                  </div>
                </>)}
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  return {
    userDetails,
  };
};

export default connect(mapStateToProps, null)(NewPaymentBox);
