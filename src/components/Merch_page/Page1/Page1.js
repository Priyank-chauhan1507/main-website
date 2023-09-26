import React, { useState } from "react";
import "./Page1.css";
import ellipse from "../../../assests/Ellipse 129.png";
import product from "../../../assests/Group 37501.png";
import Navbar from "../../EventsNavbar/Eventsnavbar";
import Footer from "../../Navbar/WebNavbarNew";
// import tshirt1front from "../../../assests/t1front.webp"
// import tshirt1back from "../../../assests/t1back.webp"
// import tshirt2front from "../../../assests/t2front.webp"
// import tshirt2back from "../../../assests/t2back.webp"
import tshirt3front from "../../../assests/tshirt3front.webp";
import tshirt3back from "../../../assests/tshirt3back.webp";
import tshirt3front2 from "../../../assests/tshirt3front2.webp";
import tshirt3back2 from "../../../assests/tshirt3back2.webp";
import { Link } from "react-router-dom";
import Page2 from "../Page2/Page2";

function Page1() {
  
  const data = [
    {
      id: 1,
      price: 350,
      Name:"THOMSO UNISEX TSHIRT",
      img: [
        {
          id: 1,
          imgfront: tshirt3front,
          imgback: tshirt3back,
        },
        {
          id: 2,
          imgfront: tshirt3front2,
          imgback: tshirt3back2,
        },
      ],
    },
    {
      id: 2,
      price: 350,
      Name: "THOMSO UNISEX TSHIRT",
      img: [
        {
          id: 1,
          imgfront: tshirt3front,
          imgback: tshirt3back,
        },
        {
          id: 2,
          imgfront: tshirt3front2,
          imgback: tshirt3back2,
        },
      ],
    },
    // {
    //     id:1,
    //     name:"orng",
    //     img:{
    //          img1:tshirt1front,
    //          img2:tshirt1back,
    //     },
    // },
    // {
    //     id:2,
    //     name:"lee-t",
    //     img:{
    //          img1:tshirt2front,
    //          img2:tshirt2back,
    //     },
    //     price:350,
    // },
  ];

  return (
    <>
        <div className="merchPage1">
          <Navbar />
          <div className="merch_Page1">
            <div className="home_merchpage">
              <div className="home_text">
                <div className="home_heading">
                  <h1>Thomso Merch</h1>
                  <h1>IIT Roorkee</h1>
                </div>
                <div className="home_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation.
                </div>
              </div>
              <div className="ellipse">
                <img className="ell-img" src={ellipse} alt="..." />
              </div>
            </div>
            <div className="products_hr">
              <hr />
              <div className="text1">
                <p>8 Products</p>
              </div>
              <hr />
            </div>
            <div className="product">
              {data.map(({ id, img, price }) => {
                return (
                  <>
                    <Link to={`/merch_page2/${id}`}>
                      <div className="product1" key={id}>
                        <div>
                          <img
                            className="product-merch"
                            src={img[0].imgfront}
                            alt="..."
                          />
                        </div>
                        <div className="text">
                          <p className="product_name">THOMSO UNISEX TSHIRT</p>
                          <div className="price">
                            <p className="price1">{price} </p>
                            <p className="price2">Rs.100</p>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </Link>
                  </>
                );
              })}

              <hr />
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
}

export default Page1;
