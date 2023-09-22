import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./eventcardpage.css";
// import logo from "./images/logo.svg"
// import img from "./images/StreetSoccer.svg"
// import "animate.css";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { fetchEvents } from "../../User/UserActions";
import default_image from "./images/default_event.png";
import { IoIosArrowForward } from "react-icons/io";
import i1 from "../EventsPage/images/image1evt.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { useHistory } from "react-router-dom";
import AniButton from "../AnimatedButton/AniButton";

const options = ["Participate", "Attend"];

const EventCardPage = ({
  data,
  closePage,
  userDetails,
  userEvents,
  fetchEvent,
}) => {
  // const history = useHistory();
  // console.log(data);
  const reloadKarde = () => {
    // window.location.reload();
    closePage();
  };
  const [isOpen, setIsOpen] = useState(false);
  const [button, setButton] = useState("Login");
  const [selectedOption, setSelectedOption] = useState("Interested");
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  useEffect(() => {
    if (userDetails.id != null) {
      if (data?.link != null) {
        setButton("Link");
      } else if (userEvents.includes(data.id)) {
        setButton("Registered");
      } else {
        setButton("Register");
      }
    }
  }, []);
  const submit = () => {
    // this.setState({ loading: true });
    const eventuser = {
      event: data?.id,
      participant: userDetails?.id,
    };
    axios
      .post("/apiV1/registerevent", eventuser)
      .then((res) => {
        if (res.status == 201) {
          // console.log(res.data, "api data");
          if (button == "Register") {
            setButton("Registered");
          }
          // if (this.props.data.is_submission) {
          //   this.setState({ button: "Submit" });
          // } else {
          //   this.setState({ button: "Not Now" });
          // }
          fetchEvent();
          // this.fetchData();
          // history.push("/pevents");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="EPcontainer animate__animated animate__slideInUp">
      <div className="header-logo-cross-div">
        <img src={i1} alt="logo" class="image1" />
        <h4 onClick={() => reloadKarde()} className="x-hoge">
          X
        </h4>
      </div>
      <div className="EPbottom">
        <div className="EPleft">
          <div id="head1">
            <NavLink to="/events">
              <span className="span1">Events</span>
            </NavLink>
            <span className="tag1">
              <MdKeyboardArrowRight />
            </span>
            <NavLink to="/events">
              <span className="span1">
                {data === undefined ? "" : data.category.name}
              </span>
            </NavLink>
            <span className="tag1">
              <MdKeyboardArrowRight />
            </span>
            <span className="span1">{data === undefined ? "" : data.name}</span>
          </div>
          <div className="mian-head">
            <h1>{data === undefined ? "" : data.name}</h1>
          </div>
          <h2>{data === undefined ? "" : data.organiser}</h2>
          <p className="ecp_tm">{data?.description}</p>
          {/* <p className="EPNote">
            <p style={{ fontSize: "16px" }}>Note:</p>
            <p>{data?.note}</p>
          </p> */}
          <div className="EPprice">
            { data.name!=="SILENT DJ" && data?.is_price &&  (
              <div className="ecp_price">
                <p className="ecp_price-para">Prize Worth</p>
                <div className="vl"></div>
                <div
                  className="ecp_te"
                  style={{
                    fontFamily: "Oxanium",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "48px",
                    lineHeight: "100%",
                    /* identical to box height, or 48px */
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    paddingBottom: "40px",
                    color: "#FFFFFF",
                  }}
                >
                  {data?.price === null ? "To be Decided" : data.price}
                </div>
              </div>
            )}
            <div className="EPbtns">
              {button === "Login" && (
                <Link to="/login">

          <AniButton onSubmit={""} name={"Login"} />

                </Link>
              )}
              {button === "Link" && (
                <a href={data?.link}>

          <AniButton onSubmit={""} name={"Register"} />

                </a>
              )}
              {button === "Registered" && (
                <div className="EPbtn2" style={{ cursor: "not-allowed" }}>
                  Registered
                </div>
              )}
              {button === "Register" && (


          <AniButton onSubmit={submit} name={"Register"} />


              )}

              {/* <div className="EPdropdown">
                <div className="EPdropdown">
                  <div className="EPheadContainer">
                    <div className="EPheader" onClick={toggling}>
                      {selectedOption || "Interested"}
                    </div>
                    <span className="EParrow">
                      <AiFillCaretDown style={{ color: "black" }} />
                    </span>
                    {isOpen && (
                      <div className="EPlistContainer">
                        <ul>
                          {options.map((option) => (
                            <li
                              onClick={() => {
                                onOptionClicked(option);
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
              </div> */}

              {data.rulebook === null ? (
                ""
              ) : (
                <a
                  href={data.rulebook === null ? "/events" : `${data.rulebook}`}
                  target="_blank"
                >
                  <div className="EPrulebook">Rulebook</div>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="EPright"></div>
        <div className="EPevtimg">
          <img
            src={data?.image === null ? default_image : data.image}
            alt=""
            className="ep-img-img"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  let userEvents = state.user.events;

  return {
    userDetails,
    userEvents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: () => dispatch(fetchEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCardPage);
