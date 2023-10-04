import React, { useState, useEffect } from "react";
import "./eventmainpage.css";
import EventSideMenu from "./EventSideMenu";
import "./eventcarddisplay.css";
import EventCard from "./EventCard";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import EventMainPageMob from "./EventMainPageMob";
import { Store } from "../../../Config/Store";
import { connect } from "react-redux";
import { escapeRegex } from "./helper";
import { ImCross } from "react-icons/im";
import Navbar2 from "../../EventsNavbar/Eventsnavbar";
import eventsback2 from "../../../assests/eventback2.webp";

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
          console.log(response.data)
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

  // console.log(categoryId);

  return (
    <>
      <div className="EMP-container" id="event-page">
        <div className="eventsNav">
          <Navbar2 color="transparent" />
        </div>
        <div className="eventsBack">
          <img src={eventsback2} alt="events_back" />
        </div>
        <div className="EMP-hero">
          <EventSideMenu
            activeCategory={categoryId}
            data={category}
            changeCategory={changeCategory}
          />
          <div className="EMP-hero-cd">
            <div className="ECD-container">
              <div className="ECD-searchbar-main">
                <input
                  className="ECD-searchbar-text-mian widd"
                  type="text"
                  placeholder="Search by Name"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                ></input>
                <span className="ECD-searchbar-text-mian pointer">
                  {search.length > 0 ? (
                    <ImCross
                      onClick={() => {
                        setSearch("");
                      }}
                    />
                  ) : (
                    <AiOutlineSearch size={"20px"} />
                  )}
                </span>
              </div>
              <div className="ECD-card-Display">
                <EventCard
                  data={
                    search === ""
                      ? data
                      : data?.filter((item) => checkSearch(item.name))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Event-MObile-View">
        <EventMainPageMob
          data={data}
          category={category}
          activeCategory={categoryId}
          changeCategory={changeCategory}
        />
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
