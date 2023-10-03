import React from "react";
import "./eventsidemenu.css";
import diamond from "./images/diamond.svg";
import events from "./images/Events.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
const EventSideMenu = ({
  changeCategory,
  data,
  activeCategory,
  userDetails,
}) => {
  // console.log(data);
  // const [user, setuser] = useState({});
  // useEffect(() => {
  //   const userdata = async () => {
  //     const res = await axios.get(`/apiV1/current_user_participant`);
  //     setuser(res.data);
  //     console.log(res.data);
  //     return res.data;
  //   };
  //   userdata();
  // }, []);

  const [active, setActive] = useState(null);
  // console.log(activeCategory);
  console.log(userDetails.payment);
  return (
    <div className="ESM-Conatiner">
      <div className="ESM-Conatiner-header">
        <h1 className="ESM-Conatiner-heading-text">Events</h1>
      </div>
      <div className="ESM-Conatiner-list">
        <span
          className={
            activeCategory == ""
              ? "ESM-Conatiner-list-item-highlighted"
              : "ESM-Conatiner-list-item"
          }
          onClick={() => changeCategory("")}
        >
          All
        </span>
        {data &&
          data
            .map((data) => {
              return (
                <span
                  className={
                    data?.id === activeCategory
                      ? "ESM-Conatiner-list-item-highlighted"
                      : "ESM-Conatiner-list-item"
                  }
                  onClick={() => changeCategory(data.id)}
                >
                  {data.name}
                </span>
              );
            })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  return {
    userDetails,
  };
};
export default connect(mapStateToProps, null)(EventSideMenu);
