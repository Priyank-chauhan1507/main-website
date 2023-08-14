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
import { useParams } from "react-router-dom";

const EventMainPage = ({ events }) => {
  const id = useParams()?.id;
  // console.log(id, "id");
  const { dispatch } = Store;
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [eventdata, setEventData] = useState({});
  const [categoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      axios
        .get(`/apiV1/event`)
        .then((res) => {
          setEventData(res.data);
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

  const getData = (category) => {
    if (category == "") {
      category = 0;
    }
    if (events[category]) {
      setData(events[category]);
    } else {
      axios
        .get(
          `/apiV1/event?id=&category=${
            category === 0 ? "" : category
          }&status=true&is_zonal=`
        )
        .then((response) => {
          setData(response.data);
          dispatch({
            type: "SET_EVENTS",
            payload: {
              ...events,
              [category]: response.data,
            },
          });
        });
    }
  };

  const getCategory = () => {
    axios.get(`/apiV1/category?status=true`).then((response) => {
      setCategory(response.data);
      // console.log("data",response.data);
    });
  };
  useEffect(() => {
    getData(categoryId);
    getCategory();
    setregister(true);
  }, []);

  const changeCategory = (category) => {
    setCategoryId(category);
    getData(category);
  };

  const checkSearch = (pName) => {
    const regExp = new RegExp(escapeRegex(search), "i");
    return regExp.test(pName);
  };
  console.log(eventdata[id]);
  const [register, setregister] = useState(true);
  return (
    <>
      <img src={bgmobile} alt="" className="bgmobile" />
      <Navbar2 setregister={setregister} register="event" />
      <img src={bg} alt="" className="bg-events" />
      <div className="events_back">
        <div className="events-left">
          {register ? (
            <>
              <span className="events-left-event">
                Events {">"} {eventdata[id]?.category?.name} {">"}{" "}
                {eventdata[id]?.name}
              </span>
              <div className="events-left-event1">
                <h1>{eventdata[id]?.name}</h1>
                {eventdata[id]?.solo_team != null && (<span>({eventdata[id]?.solo_team})</span>)}
              </div>
              <p className="events-left-event2">{eventdata[id]?.description}</p>
              <div className="events-left-event3">
                <span>Note:</span>
                <p>{eventdata[id]?.note}</p>
              </div>
              {eventdata[id]?.is_price == true &&
              (<div className="events-left-event4">
                <span>
                  Prize <br /> Worth:
                </span>
                <h1>{eventdata[id]?.price}</h1>
              </div>)}
              <div className="events-left-event5">
                <button
                  className="events-left-event5-btn1"
                  onClick={() => {
                    (eventdata[id]?.solo_team === "duet" ||
                      eventdata[id]?.solo_team === "team") &&
                      setregister(false);
                  }}
                >
                  REGISTER
                </button>
                <a
                  className="events-left-event5-btn2"
                  href={`${eventdata[id]?.rulebook}`}
                  target="_blank"
                >
                  RULEBOOK
                </a>
              </div>
            </>
          ) : id === "1" || id === "33" ? (
            <>
              <h1 className="events-left-event6">Registration</h1>
              <form className="events-left-event7">
                <div className="events-left-event9">
                  {(eventdata[id]?.sub_event).split(",").map((el) => {
                    return (
                      <>
                        <div>
                          <span>{el}</span>
                          <input type="checkbox" name={el} id={el} />
                        </div>
                      </>
                    );
                  })}
                </div>
                <input type="text" placeholder="Team Leader’s Name" />
                <input type="text" placeholder="Team Name" />
              </form>
              <button className="events-left-event8">Register</button>
            </>
          ) : (
            <>
              <h1 className="events-left-event6">Registration</h1>
              <form className="events-left-event7">
                <input type="text" placeholder="Team Leader’s Name" />
                <input type="text" placeholder="Team Name" />
              </form>
              <button className="events-left-event8">Register</button>
            </>
          )}
        </div>
        <div className="events-right">
          <img src={photo} className="event-photo" alt="" />
          <img src={photo1} className="event-photo1" alt="" />
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
