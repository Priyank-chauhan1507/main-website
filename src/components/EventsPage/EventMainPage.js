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
const EventMainPage = ({ events }) => {
  const { dispatch } = Store;
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [eventdata, setEventData] = useState();
  const [categoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");

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
  }, []);

  const changeCategory = (category) => {
    setCategoryId(category);
    getData(category);
  };

  const checkSearch = (pName) => {
    const regExp = new RegExp(escapeRegex(search), "i");
    return regExp.test(pName);
  };
  console.log(categoryId);
  const [display, setdisplay] = useState(true);
  return (
    <>
      <img src={bgmobile} alt="" className="bgmobile" />
      <Navbar2 />
      <img src={bg} alt="" className="bg-events" />
      <div className="events_back">
        <div className="events-left">
          <span className="events-left-event">
            Events {">"} Choreo {">"} Footloose
          </span>
          <div className="events-left-event1">
            <h1>Footloose</h1>
            <span>Solo/team</span>
          </div>
          <p className="events-left-event2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est
            nullam pretium euismod nulla maecenas egestas. Orci viverra felis,
            suscipit non mollis odio duis. Eget ornare eget elit ut in enim
            sapien ac. Facilisis aliquet duis ornare vitae venenatis eget in
            elit a.
          </p>
          <div className="events-left-event3">
            <span>Note:</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est
              nullam pretium euismod nulla maecenas egestas.
            </p>
          </div>
          <div className="events-left-event4">
            <span>Prize <br/> Worth:</span>
            <h1>25K</h1>
          </div>
          <div className="events-left-event5">
            <button className="events-left-event5-btn1">REGISTER</button>
            <button className="events-left-event5-btn2">RULEBOOK</button>
          </div>
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
