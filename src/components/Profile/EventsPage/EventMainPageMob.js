import React, { useState, useEffect } from "react";
import "./eventmainpagemob.css";
import "./eventcarddisplay.css";
// import EventMobileNav from "./EventMobileNav";
import EventCard from "./EventCard";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import AllDropdown from "./AllDropdown";
import { escapeRegex } from "./helper";
import Navbar2 from "../../EventsNavbar/MobEventnavbar";

const EventMainPageMob = ({
  data,
  category,
  activeCategory,
  changeCategory,
}) => {
  const [search, setSearch] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    setDisplay(!display);
  }, [activeCategory]);

  const onSearch = () => {
    // const all = document.getElementById("all");
    // all.classList.add("none");
    // const ed = document.getElementById("ed");
    // ed.classList.add("none");
    setSearch(!search);
  };
  const notSearch = () => {
    // const all = document.getElementById("all");
    // all.classList.remove("none");
    // const ed = document.getElementById("ed");
    // ed.classList.remove("none");
    setSearch(!search);
    setSearchText("");
  };

  const checkSearch = (pName) => {
    const regExp = new RegExp(escapeRegex(searchText), "i");
    return regExp.test(pName);
  };

  return (
    <div className="event-mob-page-container">
      <Navbar2 />
      <div className="ECD-container">
        {!search ? (
          <div className="ECD-searchbar-div">
            <h1 className="eventmain-headline">EVENTS</h1>
            <div>
              <span
               style={{ marginLeft: "50px" }}
                className={!search ? "ECD-searchbar-text" : "none"}
                onClick={() => onSearch()}
              >
                <AiOutlineSearch size={"24px"} />
              </span>
            </div>
            <div className="all-dropdown-flex">
              <div
                className="ECD-searchbar"
                id="all"
                onClick={() => setDisplay(!display)}
              >
                <span className="ECD-searchbar-text">
                  {activeCategory === ""
                    ? "All"
                    : category.map((item) =>
                        item.id === activeCategory ? item.name : ""
                      )}
                </span>
                <span
                  className="ECD-searchbar-text"
                 
                >
                  <IoIosArrowDown />
                </span>
              </div>
              <div className={!display ? "all-dropdown" : "none"}>
                <AllDropdown
                  category={category}
                  changeCategory={changeCategory}
                  activeCategory={activeCategory}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="ECD-searchbar-div">
            <input
              type="text"
              placeholder="Search by name"
              className={search ? "searchbar-act" : "none"}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <span
              onClick={() => notSearch()}
              className={search ? "cross" : "none"}
            >
              X
            </span>
          </div>
        )}

        <div className="ECD-card-Display" id="ed">
          <EventCard
            data={
              searchText === ""
                ? data
                : data?.filter((item) => checkSearch(item.name))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EventMainPageMob;
