import React, { useState, useEffect } from "react";
import "./eventmainpage.css";
import EventSideMenu from "./EventSideMenu";
import "./eventcarddisplay.css";
import EventCard from "./EventCard";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import EventMainPageMob from "./EventMainPageMob";
import { Store } from "../../Config/Store";
import { connect } from "react-redux";
import { escapeRegex } from "./helper";
import { ImCross } from "react-icons/im";
import Navbar2 from "../EventsNavbar/Eventsnavbar";
import bgmobile from "../../assests/bgmobile.webp";
import bg from "../../assests/eventback.webp";
import photo from "../../assests/events.png";
import photo1 from "../../assests/street_soccer_1.png";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
// import Cross from "../../assests/cross.webp";
import loader from "../../assests/loader.gif";
import Loader from "../Loader/Loader";
import cross_img from "../../assests/Cross.webp";

const EventMainPage = ({ events }) => {
  const id = useParams()?.id;
  const navigate = useNavigate();
  const { dispatch } = Store;
  const [events1, setEvents1] = useState([]);
  const [filter, setfilter] = useState([]);
  const [eventdata, setEventData] = useState({});
  const [register, setregister] = useState(true);
  const [registerData, setregisterData] = useState({
    team_leader_name: "",
    team_name: "",
    sub_event_name: "",
  });
  const [loading, setLoading] = useState(false);
  // console.log(registerData.sub_event_name, "sfsfd");

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    axios
      .get(
        `/apiV1/registerusereventdetailed?participant_id=${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        // console.log(res.data);
        setEvents1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      setLoading(true);
      const eventuser = {
        event: eventdata[0]?.id,
        participant: localStorage.getItem("id"),
        team_leader_name: registerData.team_leader_name,
        team_name: registerData.team_name,
        sub_event_name: registerData.sub_event_name,
      };
      axios
        .post("/apiV1/registerevent", eventuser)
        .then((res) => {
          if (res.status == 201) {
            message.success(
              `🎉You are registerd successfully for ${eventdata[0]?.name}`
            );
            setregister(true);
            // if (button == "Register") {
            //   setButton("Registered");
            // }
            // if (this.props.data.is_submission) {
            //   this.setState({ button: "Submit" });
            // } else {
            //   this.setState({ button: "Not Now" });
            // }
            // fetchEvent();
            // this.fetchData();
            // history.push("/pevents");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  useEffect(() => {
    loadUserData();
  }, [id]);

  const loadUserData = async () => {
    try {
      axios
        .get(`/apiV1/event`)
        .then((res) => {
          let selectedItem = res.data?.filter(function (el) {
            // console.log(el.itemId,"data//",index)
            return el.id == id;
          });
          // console.log(selectedObj,"dnifidfn");
          setEventData(selectedItem);
          // setEventData(res.data);
          localStorage.setItem("user_id", res.data?.user_id);
          console.log("data", res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status == 401) {
            if (localStorage.getItem("token")) {
              localStorage.removeItem("token");
              localStorage.removeItem("user_id");
              window.location.pathname = "/";
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(eventdata, "sdfdsfs");

  const handleChange = (e) => {
    setregisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const onChangeSubEvent = (e) => {
    const { value, checked } = e.target;
    // console.log(value, " sadasd ", checked);
    if (checked) {
      // setUser({ ...user, gender: gender?.value });
      setregisterData({ ...registerData, sub_event_name: value });
    }
  };

  const handleClick = (e) => {
    if (
      eventdata[0]?.solo_team === "duet" ||
      eventdata[0]?.solo_team === "team"
    ) {
      setregister(false);
    } else {
      onSubmit(e);
    }
  };
  // const getData = (category) => {
  //   if (category == "") {
  //     category = 0;
  //   }
  //   if (events[category]) {
  //     setData(events[category]);
  //   } else {
  //     axios
  //       .get(
  //         `/apiV1/event?id=&category=${
  //           category === 0 ? "" : category
  //         }&status=true&is_zonal=`
  //       )
  //       .then((response) => {
  //         setData(response.data);
  //         dispatch({
  //           type: "SET_EVENTS",
  //           payload: {
  //             ...events,
  //             [category]: response.data,
  //           },
  //         });
  //       });
  //   }
  // };

  // const getCategory = () => {
  //   axios.get(`/apiV1/category?status=true`).then((response) => {
  //     setCategory(response.data);
  //     // console.log("data",response.data);
  //   });
  // };
  // useEffect(() => {
  //   getData(categoryId);
  //   getCategory();
  //   setregister(true);
  // }, []);

  // const changeCategory = (category) => {
  //   setCategoryId(category);
  //   getData(category);
  // };

  // const checkSearch = (pName) => {
  //   const regExp = new RegExp(escapeRegex(search), "i");
  //   return regExp.test(pName);
  // };
  // console.log(eventdata);

  return (
    <>
      <div>
        <img src={bgmobile} alt="" className="bgmobile" />
        <Navbar2 setregister={setregister} register="event" />
        <img src={bg} alt="" className="bg-events" />
        <div className="events_back">
          <div className="events-left">
            {register ? (
              <>
                <span className="events-left-event01">
                  Events {">"} {eventdata[0]?.category?.name} {">"}{" "}
                  {eventdata[0]?.name}
                </span>

                <div className="events-left-event1">
                  <h1>{eventdata[0]?.name}</h1>
                  {eventdata[0]?.solo_team != null && (
                    <span>({eventdata[0]?.solo_team})</span>
                  )}
                </div>
                <p className="events-left-event2">
                  {eventdata[0]?.description}
                </p>
                {eventdata[0]?.note != null && (
                  <div className="events-left-event3">
                    <span>Note:</span>
                    <p>{eventdata[0]?.note}</p>
                  </div>
                )}
                {eventdata[0]?.is_price == true && (
                  <div className="events-left-event4">
                    <span>
                      Prize <br /> Worth:
                    </span>

                    <h1>{eventdata[0]?.price}</h1>
                  </div>
                )}
                {eventdata[0]?.solo_team === "solo" &&
                  eventdata[0]?.sub_event &&
                  (eventdata[0]?.sub_event).split(",").map((el, index) => {
                    return (
                      <>
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={el}
                            value={el}
                            onChange={onChangeSubEvent}
                            checked={el === registerData.sub_event_name}
                            // required
                          />
                          <label htmlFor={el} style={{ color: "white" }}>
                            {el}
                          </label>
                        </div>
                      </>
                    );
                  })}

                <div className="events-left-event5">
                  <button
                    className="events-left-event5-btn1"
                    id="newchangesinbutton"
                    onClick={(e) => handleClick(e)}
                  >
                    {loading ? (
                      <>
                        <Loader />
                        <>REGISTER</>
                      </>
                    ) : (
                      <>REGISTER</>
                    )}
                  </button>
                  {eventdata[0]?.rulebook != null && (
                    <a
                      className="events-left-event5-btn2"
                      href={`${eventdata[0]?.rulebook}`}
                      target="_blank"
                    >
                      RULEBOOK
                    </a>
                  )}
                </div>
              </>
            ) : (
              <>
                <h1 className="events-left-event6">Registration                 <img
                  src={cross_img}
                  alt=""
                  onclick={() => {
                    navigate("/pevents");
                  }}
                  id="cross_img_event"
                /></h1>

                <form
                  className="events-left-event7"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="events-left-event9">
                    {eventdata[0]?.sub_event &&
                      (eventdata[0]?.sub_event).split(",").map((el, index) => {
                        return (
                          <>
                            <div key={index}>
                              <input
                                type="checkbox"
                                id={el}
                                value={el}
                                onChange={onChangeSubEvent}
                                checked={el === registerData.sub_event_name}
                                // required
                              />
                              <label htmlFor={el} style={{ color: "white" }}>
                                {el}
                              </label>
                            </div>
                          </>
                        );
                      })}
                  </div>
                  <input
                    type="text"
                    placeholder="Team Leader’s Name"
                    name="team_leader_name"
                    value={registerData.team_leader_name}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Team Name"
                    name="team_name"
                    value={registerData.team_name}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <button className="events-left-event8" type="submit">
                    {loading ? (
                      <>
                        <Loader />
                        <>REGISTER</>
                      </>
                    ) : (
                      <>REGISTER</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
          <div className="events-right">
            <img
              src={eventdata[0]?.image === null ? photo : eventdata[0]?.image}
              className="event-photo"
              alt=""
            />
            <img
              src={eventdata[0]?.image === null ? photo : eventdata[0]?.image}
              className="event-photo1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  let events = state.user.total_events;

  return {
    events,
  };
};

export default connect(mapStateToProps, null)(EventMainPage);
