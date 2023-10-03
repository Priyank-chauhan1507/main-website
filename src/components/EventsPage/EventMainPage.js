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
// import { ImCross } from "react-icons/im";
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
import { Link } from "react-router-dom";
import Select from "react-select";

const slotsOptions = [
  { value: "Day 1", label: "Day 1" },
  { value: "Day 2", label: "Day 2" },
  { value: "Day 3", label: "Day 3" },
];

const EventMainPage = ({ events }) => {
  const id = useParams()?.id;
  const navigate = useNavigate();
  const { dispatch } = Store;
  const [events1, setEvents1] = useState([]);
  const [exist, setExist] = useState(false);
  const [filter, setfilter] = useState([]);
  const [eventdata, setEventData] = useState([]);
  const [check, setcheck] = useState(true);
  const [register, setregister] = useState(true);
  const [active, setActive] = useState(false);
  const [activet, setActivet] = useState(false);
  const [registerData, setregisterData] = useState({
    team_leader_name: "",
    team_name: "",
    sub_event: "",
  });
  const [loading, setLoading] = useState(false);
  const [paidEvent, setPaidEvent] = useState(false);
  const [slot, setSlot] = useState("");

  useEffect(() => {
    getEvents();
  }, []);

  // useEffect(() => {
  //   for (let num = 0; num < events1.length; num++) {
  //     if (
  //       events1[num]?.event == id &&
  //       events1[num]?.event__is_payment == true
  //     ) {
  //       setPaidEvent(true);
  //       break;
  //     }
  //   }
  // }, [events1]);

  const getEvents = async () => {
    axios
      .get(
        `/apiV1/registerusereventdetailed?participant_id=${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        console.log(res.data);
        setEvents1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUserData();
  }, [id]);

  const loadUserData = async () => {
    setLoading(true);
    try {
      axios
        .get(`/apiV1/event`)
        .then((res) => {
          let selectedItem = res.data?.filter(function (el) {
            return el.id == id;
          });

          setEventData(selectedItem);
          setLoading(false);
          // setEventData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setregisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const onChangeSubEvent = (e) => {
    const { value, checked } = e.target;
    // console.log(value, " sadasd ", checked);
    if (checked) {
      // setUser({ ...user, gender: gender?.value });
      setregisterData({ ...registerData, sub_event: value });
      setActive(true);
    }
  };

  const handleClick = (e) => {
    if (
      eventdata[0]?.solo_team === "duet" ||
      eventdata[0]?.solo_team === "team" ||
      eventdata[0]?.solo_team === "Duet" ||
      eventdata[0]?.solo_team === "Team"
    ) {
      setregister(false);
    } else {
      onSubmit(e);
    }
  };

  const handleChange1 = (slots) => {
    setSlot(slots?.value);
    console.log(slot, "slot");
  };

  async function payForEvent() {
    setLoading(true);

    try {
      const response = await axios.post(
        `https://api1.thomso.in/apiV1/paid_events_request`,
        { event_name: eventdata[0].name, slot: slot }
      );
      const u = response.data;
      // console.log("data", response.data);
      if (response.data.status == "true") {
        setTimeout(() => {
          window.open(response.data.payment_url, "_blank");
        });
      } else {
        message.error(`${response.data.error}`);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }
  const onSubmit = (e) => {
    let exit = false;
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
        sub_event: registerData.sub_event,
      };

      //  console.log(events1);
      for (let num = 0; num < events1.length; num++) {
        if (
          events1[num].event == eventuser.event &&
          events1[num].sub_event == eventuser.sub_event
        ) {
          exit = true;
          setExist(true);
          break;
        }
      }
      if (exit) {
        message.info(
          `You are already registered for ${eventdata[0]?.name} ${eventuser.sub_event}`
        );
        setLoading(false);
        if (eventdata[0].is_payment !== true) {
          navigate("/pevents");
        }
      } else {
        axios
          .post("/apiV1/registerevent", eventuser)
          .then((res) => {
            if (res.status == 201) {
              message.success(
                `🎉You are registerd successfully for ${eventdata[0]?.name} ${eventuser.sub_event}`
              );
              if (eventdata[0].is_payment !== true) {
                navigate("/pevents");
              }

              setregister(true);
              getEvents();
            }
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    }
  };
  return (
    <>
      <div style={{ overflowY: "hidden" }}>
        <img src={bgmobile} alt="" className="bgmobile" />
        <Navbar2 setregister={setregister} register="event" />
        <img src={bg} alt="" className="bg-events" />
        <div className={register ? "events_back" : "events_back1"}>
          <div className="events-left">
            {register ? (
              <>
                <span className="events-left-event01">
                  <span
                    onClick={() => {
                      navigate("/events");
                    }}
                    style={{
                      cursor: "pointer",
                      color: "#264fa1",
                      fontSize: "14px",
                    }}
                  >
                    EVENTS
                  </span>{" "}
                  {">"} {eventdata[0]?.category?.name} {">"}{" "}
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
                {eventdata[0]?.note != "" && eventdata[0]?.is_price == true && (
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
                {(eventdata[0]?.solo_team === "solo" ||
                  eventdata[0]?.solo_team === "Solo") &&
                  eventdata[0]?.sub_event &&
                  (eventdata[0]?.sub_event).split(",").map((el, index) => {
                    return (
                      <>
                        <div key={index}>
                          <input
                            type="checkbox"
                            className="checkbox"
                            id={el}
                            value={el}
                            // onClick={()=>{setcheck(false)}}
                            // required = {check}
                            onChange={onChangeSubEvent}
                            checked={el === registerData.sub_event}
                            onClick={() => setActive(true)}

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
                  {(eventdata[0]?.solo_team === "solo" ||
                    eventdata[0]?.solo_team === "Solo") &&
                  eventdata[0]?.sub_event &&
                  active === false ? (
                    <button
                      className="events-left-event5-btn1"
                      id="newchangesinbutton"
                      onClick={() =>
                        message.warning("Please select a sub-event!")
                      }
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
                  ) : (
                    <>
                      {paidEvent ? (
                        <div>
                          {eventdata[0]?.name == "SILENT DJ" && (
                            <>
                              <div style={{ color: "white" }}>
                                Choose Your Slot
                                <Select
                                  styles={{
                                    backgroundColor: "rgb(48, 77, 127)",
                                  }}
                                  name="slots"
                                  className=""
                                  placeholder="Slots"
                                  onChange={handleChange1}
                                  require
                                  options={slotsOptions}
                                  isSearchable={false}
                                />
                              </div>
                            </>
                          )}
                          <button
                            className="events-left-event5-btn1"
                            id="newchangesinbutton"
                            onClick={(e) => payForEvent(e)}
                          >
                            {loading ? (
                              <>
                                <Loader />
                                <>Pay Now</>
                              </>
                            ) : (
                              <>Pay Now</>
                            )}
                          </button>
                        </div>
                      ) : (
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
                      )}
                    </>
                  )}
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
                <h1 className="events-left-event6">
                  Registration{" "}
                  <img
                    src={cross_img}
                    alt=""
                    onClick={() => setregister(!register)}
                    className="event-cross"
                  />{" "}
                </h1>

                <form
                  className="events-left-event7"
                  onSubmit={(e) => {
                    {
                      eventdata[0]?.sub_event && activet && onSubmit(e);
                    }
                    {
                      !eventdata[0]?.sub_event && onSubmit(e);
                    }
                  }}
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
                                // required={check}
                                value={el}
                                onChange={onChangeSubEvent}
                                checked={el === registerData.sub_event}
                                onClick={() => setActivet(true)}
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
                  {eventdata[0]?.solo_team != "Solo" &&
                  eventdata[0]?.solo_team != "solo" &&
                  eventdata[0]?.sub_event &&
                  activet === false ? (
                    <button
                      className="events-left-event8"
                      type="submit"
                      onClick={() => {
                        message.warning("Please select a sub-event!");
                        // window.location.reload(true);
                      }}
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
                  ) : (
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
                  )}
                </form>
              </>
            )}
          </div>
          {register && (
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
          )}
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
