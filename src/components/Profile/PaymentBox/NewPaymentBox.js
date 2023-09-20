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
import { message } from "antd";
import { clear } from "@testing-library/user-event/dist/clear";

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
        if (paymentData.length == 0) {
          var temp = paymentData;
          temp.push({ id: ress.data?.thomso_id, acco: acco1.toString() });
          setPaymentData(temp);
          var temp1 = paymentData1;
          temp1.push({
            id: ress.data?.thomso_id,
            acco: acco1.toString(),
            gender: ress.data?.gender,
          });
          setPaymentData1(temp1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(userDetails, "userdetails");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("Userobj");
    setLogout(!logout);
    window.location.pathname = "/";
  }

  const Locator = useLocation();

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
  const [acco, setacco] = useState(
    userDetails?.gender == "Female" ? true : null
  );
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
  // const [submitid, setSubmitid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [male, setMale] = useState("");
  const [paymentData, setPaymentData] = useState([]);
  const [paymentData1, setPaymentData1] = useState([]);
  const [acco1, setAcco1] = useState("true");
  const [agree, setAgree] = useState(false);

  console.log(paymentData1, "paymentData1");
  console.log(paymentData, "paymentData");

  const [style1, setStyle1] = useState({
    background: "transparent",
    color: "white",
  });
  const [style2, setStyle2] = useState(is_female ? ON : OFF);
  // const [totalpay, setTotalpay] = useState(acco1 == "true" ? 2799 : 2299);
  const [totalpay, setTotalpay] = useState(0);

  useEffect(() => {
    return () => {
      setTotalpay(0);
      for(let i=0;i<paymentData1.length;i++){
        if(paymentData1[i].acco == "true"){
          setTotalpay(totalpay + 2799);
        }else if(paymentData1[i].acco == "false"){
          setTotalpay(totalpay + 2299);
        }
      }
    }
  }, [paymentData1])

  const handleDataNo = () => {
    var temp = paymentData;
    temp.push({ id: inputValue, acco: "false" });
    setPaymentData(temp);
    var temp1 = paymentData1;
    temp1.push({ id: inputValue, acco: "false", gender: "Male" });
    setPaymentData1(temp1);
    // setTotalpay(() => totalpay + 2299);
    clearthomsoid();
  };

  const handleDataYes = () => {
    var temp = paymentData;
    temp.push({ id: inputValue, acco: "true" });
    setPaymentData(temp);
    var temp1 = paymentData1;
    temp1.push({ id: inputValue, acco: "true", gender: "Male" });
    setPaymentData1(temp1);
    // setTotalpay(() => totalpay + 2799);
    clearthomsoid();
  };

  const noAccommdation = () => {
    setacco(false);
    console.log(acco1, "accoNO");
    setStyle1({ background: "white", color: "black" });
    setStyle2({ background: "transparent", color: "white" });
  };

  const Accommdation = () => {
    setacco(true);
    console.log(acco1, "accoYES");
    setStyle2({ background: "white", color: "black" });
    setStyle1({ background: "transparent", color: "white" });
  };

  const onChangeInput = (index, value) => {
    let a = [...eventArray];
    a[index]["team_name"] = value;
    seteventArray(a);
  };

  const checkPayNow = () => {
    console.log("HERE");
    if (acco == null) {
      return false;
    } else {
      return true;
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const clearthomsoid = () => {
    setInputValue("");
  };

  async function checkInputExists(input) {
    setLoading(true);
    let obj1 = {
      id: input,
    };
    try {
      const response = await axios.post(
        `https://api1.thomso.in/apiV1/verify_thomso_id`,
        obj1
      );
      const u = response.data;
      // console.log("data", u);
      setLoading(false);
      if (u.status == "true" && u.gender == "Female") {
        var temp = paymentData;
        temp.push({ id: input, acco: "true" });
        setPaymentData(temp);
        var temp1 = paymentData1;
        temp1.push({ id: input, acco: "true", gender: u.gender });
        setPaymentData1(temp1);
        setGenderr(u.gender);
        setAddpar(!addpar);
        // setTotalpay(() => totalpay + 2799);
        clearthomsoid();
      }

      if (u.status == "false") {
        message.error("Invalid Thomso id");
      }
      if (u.status == "true" && u.gender == "Male") {
        setMale("Male");
        setGenderr("Male");
      }
    } catch (error) {
      console.error("Error checking input:", error);
      // throw error;
      message.error("Thomso ID not found");
      // return false;
    }
  }

  const [genderr, setGenderr] = useState("Female");
  const [paracco, setParacco] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     if (isChecked == true) {
  //       setParacco(true);
  //     }
  //   };
  // });

  const handleCheckboxChange = (event) => {
    // Update the state based on the checkbox's checked property
    setIsChecked(event.target.checked);
    if (isChecked == true) {
      setParacco(true);
    }
  };

  const paynow = () => {
    setPaying(true);
  };

  async function makePayment() {
    setLoading(true);

    try {
      const response = await axios.post(
        `https://api1.thomso.in/apiV1/participant_payment`,
        paymentData
      );
      const u = response.data;
      console.log("data", response.data);
      if (response.data.status == "true") {
        window.open(`${response.data.payment_url}`, "_blank");
      } else {
        message.error(`${response.data.error}`);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const deletePayment = (index) => {
    var spliced1 = paymentData1.splice(index,1);
    setPaymentData1(spliced1);
    var spliced = paymentData.splice(index,1);
    setPaymentData(spliced);
  }

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
                        locator.pathname === "/newpayment"
                          ? "lsp-c2 c2-text"
                          : "lsp-c2 c2-text"
                      }
                    >
                      <img src={icon3} alt="icon3" />
                      <Link
                        to="/newpayment"
                        className={
                          locator.pathname === "/newpayment"
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
                        to="/newpayment"
                        className={
                          locator.pathname === "/newpayment"
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
                              <tbody
                                className="pay-body-data"
                                style={{ overflowY: "scroll" }}
                              >
                                <>
                                  {paymentData1.map((data, index) => {
                                    return (
                                      <tr className="pay-tr">
                                        <td className="pay-th">{index + 1}.</td>
                                        <td className="pay-th">{data?.id}</td>
                                        <td className="pay-th">
                                          {data?.gender}
                                        </td>

                                        <td className="pay-th">
                                          {data?.acco == "true" ? "YES" : "NO"}
                                        </td>
                                        <td
                                          style={{ width: "20px" }}
                                          className="pay-th"
                                        >
                                          <MdDelete
                                          onClick={(index) => deletePayment(index)}
                                            style={{
                                              cursor: "pointer",
                                              size: "20px",
                                            }}
                                            color="red"
                                            size="20px"
                                          />
                                        </td>
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
                                <h2 className="total-pay-1-h2">
                                  No. of Participants
                                </h2>
                              </div>
                              <div className="total-pay-2">
                                <p className="total-pay-1-p1">
                                  ₹{totalpay}
                                  <span style={{ fontSize: "1vw" }}>
                                    {" "}
                                    + taxes
                                  </span>
                                </p>
                                <p className="total-pay-1-p2">
                                  {paymentData.length}
                                </p>
                              </div>
                              <div className="total-pay-3">
                                <button
                                  className="total-pay-3-btn"
                                  onClick={makePayment}
                                >
                                  Pay Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="Payleft"
                            style={{
                              marginRight: "auto",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10vw",
                              marginLeft: "auto",
                            }}
                          >
                            <div
                              className="Payleft-left"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <>
                                <p className="payheading">Payment Details</p>
                                <div className="amountBox">
                                  <div className="PayAmount">
                                    <div>
                                      <p>Thomso Fees</p>
                                      {acco == true || acco == null ? (
                                        <p>Accommodation</p>
                                      ) : (
                                        <p
                                          style={{
                                            color: "rgba(64, 64, 64, 1)",
                                          }}
                                        >
                                          Accommodation
                                        </p>
                                      )}
                                    </div>
                                    <div>
                                      <p>₹ 2299</p>
                                      {acco == true || acco == null ? (
                                        <p>₹ 500</p>
                                      ) : (
                                        <p
                                          style={{
                                            color: "rgba(64, 64, 64, 1)",
                                          }}
                                        >
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
                                    Accommodation includes 4 day-3 night stay
                                    and Food (Breakfast + Lunch){" "}
                                  </p>
                                </div>
                              </>
                            </div>
                            <div
                              className="Payleft-right"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginRight:"20px"
                              }}
                            >
                              <>
                                <p className="Payevent">
                                  Are you going to take Accommodation in IITR?
                                  (* Accommdation Compulsory for Female)
                                </p>
                                <div
                                  className="yesNo"
                                  style={{ opacity: is_female ? "0.5" : "1" }}
                                >
                                  <button
                                    className="yesbtn"
                                    disabled={is_female}
                                    onClick={() => {
                                      setAcco1("true");
                                      Accommdation();
                                    }}
                                    style={style2}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    className="nobtn"
                                    disabled={is_female}
                                    onClick={() => {
                                      setAcco1("false");
                                      noAccommdation();
                                    }}
                                    style={style1}
                                  >
                                    No
                                  </button>
                                </div>
                                <div className="agree-terms-and-conditions">
                                  <input
                                    className="agree-checkbox"
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(!agree)}
                                    required
                                  />
                                  <a
                                    className="agree-a"
                                    style={{
                                      color: "white",
                                      cursor: "pointer",
                                    }}
                                    href="https://drive.google.com/file/d/1j3SrUhxlt6JUg3kjpK2mSLe6iy3onzCd/view?usp=drive_link"
                                    target="_blank"
                                  >
                                    Agree Terms and Conditions *
                                  </a>
                                </div>

                                {checkPayNow() == true && agree == true ? (
                                  <button
                                    className="PayNowBtnActive"
                                    onClick={paynow}
                                  >
                                    {loading ? (
                                      <CircularProgress
                                        color="inherit"
                                        size={20}
                                      />
                                    ) : (
                                      "Pay Now"
                                    )}
                                  </button>
                                ) : (
                                  <button
                                    onClick={() =>{
                                          if(agree == true){
                                            message.info(
                                              "Please select one accomodation option"
                                            )
                                          }else{
                                            message.info(
                                              "Please agree terms and conditions"
                                            )
                                          }
                                    }
                                      
                                    }
                                    className="PayNowBtn"
                                  >
                                    Pay Now
                                  </button>
                                )}
                              </>
                            </div>
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
              <div
                className="logout_body"
                style={{ position: "relative", height: "318px" }}
              >
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

          {/* ------------------Add participant modal-------------- */}
          <div className={addpar ? "" : "none"} id="logout">
            <div className="l_body">
              <div className="logout_body" style={{ position: "relative" }}>
                {genderr === "Male" ? (
                  <div className="add-acco">
                    <div className="does-he">
                      <h1 className="dacc">Does he want accomodation?</h1>
                    </div>
                    <div className="fle-ro2">
                      <button
                        onClick={() => {
                          setAddpar(!addpar);
                          handleDataYes();
                          setGenderr("Female");
                          // clearthomsoid();
                        }}
                        className="submit-par"
                        style={{ fontSize: "16px", padding: "6px" }}
                      >
                        YES
                      </button>
                      <button
                        onClick={() => {
                          // setSubmitid(false);
                          setAddpar(!addpar);
                          handleDataNo();
                          // clearthomsoid();
                          setMale(false);
                          setGenderr("Female");
                        }}
                        className="clear-par"
                        style={{ fontSize: "16px", padding: "6px" }}
                      >
                        NO
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="add-par">
                    <h1 className="add-parti" style={{ fontSize: "20px" }}>
                      Add Participants
                    </h1>
                    <input
                      className="add-par-id"
                      type="text"
                      placeholder="thomso id *"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <div className="fle-ro2">
                      <button
                        onClick={() => {
                          setAddpar(!addpar);
                          // setSubmitid(false);
                          clearthomsoid();
                        }}
                        className="clear-par"
                        style={{ padding: "6px", fontSize: "16px" }}
                      >
                        Clear
                      </button>

                      <button
                        onClick={() => {
                          checkInputExists(inputValue);
                          // clearthomsoid();
                        }}
                        className="submit-par"
                        style={{ padding: "6px", fontSize: "16px" }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ----------------------------------------------- */}

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
                        to="/newpayment"
                        className={
                          Locator.pathname === "/newpayment"
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
                              <th className="pay-th">Thomso ID</th>
                              <th className="pay-th" style={{ width: "14vw" }}>
                                Gender
                              </th>
                              <th className="pay-th">Accomodation</th>
                            </tr>
                          </thead>
                          <hr />
                          <tbody
                            className="pay-body-data"
                            style={{ overflowY: "scroll" }}
                          >
                            <>
                              {paymentData1.map((data) => {
                                return (
                                  <tr className="pay-tr">
                                    <td className="pay-th">{data?.id}</td>
                                    <td
                                      className="pay-th"
                                      style={{ width: "14vw" }}
                                    >
                                      {data?.gender}
                                    </td>
                                    <td
                                      className="pay-th"
                                      style={{ width: "14vw" }}
                                      // style={{ gap: "10px",alignItems:"center" }}
                                    >
                                      <>
                                        {data?.acco == "true" ? "YES" : "NO"}
                                        
                                      </>
                                    </td>
                                    <td
                                      className="pay-th"
                                      style={{ width: "20px" }}
                                    >
                                      <>
                                        <MdDelete
                                        onClick={(index) => deletePayment(index)}
                                          style={{
                                            cursor: "pointer",
                                            size: "10px",
                                          }}
                                          color="red"
                                          size="20px"
                                        />
                                      </>
                                    </td>
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
                          <div className="total-pay-up">
                            <div className="total-pay-1">
                              <h1 className="total-pay-1-h1">TOTAL</h1>
                              <h2 className="total-pay-1-h2">
                                No. of Participants
                              </h2>
                            </div>
                            <div className="total-pay-2">
                              <p className="total-pay-1-p1">
                                ₹{totalpay}
                                <span style={{ fontSize: "18px" }}>
                                  {" "}
                                  + taxes
                                </span>
                              </p>
                              <p className="total-pay-1-p2">
                                {paymentData.length}
                              </p>
                            </div>
                          </div>

                          <div className="total-pay-3">
                            <button
                              className="total-pay-3-btn"
                              onClick={makePayment}
                            >
                              Pay Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="main_boxx" style={{overflowY:"scroll"}}>
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
                                    {acco == true || acco == null
                                      ? "2799"
                                      : "2299"}
                                  </span>
                                  <span className="MPayTaxes"> + Taxes</span>
                                </p>
                              </div>
                              <p className="MPayAccommodation">
                                Accommodation includes 4 day-3 night stay and
                                Food (Breakfast + Lunch){" "}
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
                                onClick={() => {
                                  setAcco1("true");
                                  Accommdation();
                                }}
                                style={style2}
                              >
                                Yes
                              </button>
                              <button
                                className="Mnobtn"
                                disabled={is_female}
                                onClick={() => {
                                  setAcco1("false");
                                  noAccommdation();
                                }}
                                style={style1}
                              >
                                No
                              </button>
                            </div>
                            <div className="agree-terms-and-conditions">
                                  <input
                                    className="agree-checkbox"
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(!agree)}
                                    required
                                  />
                                  <a
                                    className="agree-a"
                                    style={{
                                      color: "white",
                                      cursor: "pointer",
                                    }}
                                    href="https://drive.google.com/file/d/1j3SrUhxlt6JUg3kjpK2mSLe6iy3onzCd/view?usp=drive_link"
                                    target="_blank"
                                  >
                                    Agree Terms and Conditions *
                                  </a>
                                </div>
                            {checkPayNow() == true && agree == true ? (
                              <button
                                style={{ marginTop: "20px" }}
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
                              <button
                                style={{ marginTop: "20px" }}
                                onClick={() =>{
                                  if(agree == true){
                                    message.info(
                                      "Please select one accomodation option"
                                    )
                                  }else{
                                    message.info(
                                      "Please agree terms and conditions"
                                    )
                                  }
                            }
                              
                            }
                                className="PayNowBtn"
                              >
                                Pay Now
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
