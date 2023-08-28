import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./alldropdown.css";
const AllDropdown = ({ category, activeCategory, changeCategory }) => {
  // const [category,setCategory] =useState(null)

  // const getCategory = () => {
  //   axios.get(`/apiV1/category?status=true`).then((response) => {
  //     setCategory(response.data);
  //     // console.log("data",response.data);
  //   });
  // };

  // useEffect(() => {
  //      getCategory();
  // }, []);

  return (
    <>
      <div
        className={activeCategory == "" ? "all_events bold" : "all_events"}
        onClick={() => changeCategory("")}
      >
        All
      </div>
      <div>
        {category &&
          category.map((data) => {
            return (
              <div
                className={
                  data?.id === activeCategory ? "events bold" : "events"
                }
                onClick={() => changeCategory(data.id)}
              >
                {data.name}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AllDropdown;
