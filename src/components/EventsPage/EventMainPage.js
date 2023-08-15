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
import cross from "../../assests/cross.png";



const EventMainPage = ({ events }) => {
  const id = useParams()?.id;
  const navigate = useNavigate();
  // console.log(id, "id");
  const { dispatch } = Store;
  // const [data, setData] = useState();
  // const [category, setCategory] = useState();
  // const [categoryId, setCategoryId] = useState("");
  // const [search, setSearch] = useState("");
  const [eventdata, setEventData] = useState({});
  const [register, setregister] = useState(true);
  const [registerData, setregisterData] = useState({
    team_leader_name:"",
    team_name: "",
    sub_event_name:"",
});

  console.log(registerData.sub_event_name, "sfsfd");
  const onSubmit = (e) => {
    e.preventDefault();
    if(!localStorage.getItem('token')){
      navigate("/login");
    }else{
      const eventuser = {
        event: eventdata[id]?.id,
        participant: localStorage.getItem('id'),
        team_leader_name: registerData.team_leader_name,
        team_name: registerData.team_name,
        sub_event_name: registerData.sub_event_name
      };
      axios
        .post("/apiV1/registerevent", eventuser)
        .then((res) => {
          if (res.status == 201) {
            console.log(res.data, "api data");
            message.success(`🎉You are registerd successfully for ${eventdata[id]?.name}`)
            setregister(true)
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
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

  };

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

  const handleChange = (e) =>{
    setregisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  const onChangeSubEvent = (e) =>{
    const { value, checked } = e.target;
    console.log(value, " sadasd ", checked);
    if(checked){
      // setUser({ ...user, gender: gender?.value });
      setregisterData({...registerData, sub_event_name: value});
    }
  }

  const handleClick = (e) =>{
    if(eventdata[id]?.solo_team === "duet" || eventdata[id]?.solo_team === "team"){
      setregister(false);
    }else{
      onSubmit(e);
    }
  }



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
  // console.log(eventdata[id]);

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
                  Events {">"} {eventdata[id]?.category?.name} {">"}{" "}
                  {eventdata[id]?.name}
                </span>

                <div className="events-left-event1">
                  <h1>{eventdata[id]?.name}</h1>
                  {eventdata[id]?.solo_team != null && (
                    <span>({eventdata[id]?.solo_team})</span>
                  )}
                </div>
                <p className="events-left-event2">
                  {eventdata[id]?.description}
                </p>
                <div className="events-left-event3">
                  <span>Note:</span>
                  <p>{eventdata[id]?.note}</p>
                </div>
                {eventdata[id]?.is_price == true && (
                  <div className="events-left-event4">
                    <span>
                      Prize <br /> Worth:
                    </span>

                <h1>{eventdata[id]?.price}</h1>
              </div>)}

              {(eventdata[id]?.solo_team) === "Solo" && eventdata[id]?.sub_event && (eventdata[id]?.sub_event).split(",").map((el, index) => {
                    return (
                      <>
                        <div key={index}>
                          <input
                          type="checkbox"
                          id={el}
                          value = {el}
                          onChange={onChangeSubEvent}
                          checked={el === registerData.sub_event_name}
                          // required
                          />
                          <label htmlFor={el} style={{color:"white"}}>{el}</label>
                        </div>
                      </>
                    );
                  })}

              <div className="events-left-event5">
                <button
                  className="events-left-event5-btn1"
                  onClick = {(e) => handleClick(e)}
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
          ) : (
            <>
              <h1 className="events-left-event6">Registration</h1>
              <form className="events-left-event7" onSubmit={(e) => onSubmit(e)}>
                <div className="events-left-event9">
                  {eventdata[id]?.sub_event && (eventdata[id]?.sub_event).split(",").map((el, index) => {
                    return (
                      <>
                        <div key={index}>
                          <input
                          type="checkbox"
                          id={el}
                          value = {el}
                          onChange={onChangeSubEvent}
                          checked={el === registerData.sub_event_name}
                          // required
                          />
                          <label htmlFor={el} style={{color:"white"}}>{el}</label>
                        </div>
                      </>
                    );
                  })}
                </div>
                <input
                type="text"
                placeholder="Team Leader’s Name"
                name = 'team_leader_name'
                value = {registerData.team_leader_name}
                onChange={(e) => handleChange(e)}
                required
                />
                <input
                type="text"
                placeholder="Team Name"
                name = 'team_name'
                value = {registerData.team_name}
                onChange={(e) => handleChange(e)}
                required
                />
              <button className="events-left-event8" type='submit'>Register</button>
              </form>
            </>
            )}
        </div>
        <div className="events-right">
          <img src={photo} className="event-photo" alt="" />
          <img src={photo1} className="event-photo1" alt="" />
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
