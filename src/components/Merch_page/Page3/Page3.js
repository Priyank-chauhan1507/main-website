import React, { useEffect, useState } from "react";
// import productImg from "../../../assests/productimg.svg";
import Navbar from "../../Merch_page/Navbar_merch/Navbar_merch";
// import Navbar from "../../EventsNavbar/Eventsnavbar";
// import Footer from "../../Navbar/WebNavbarNew";
import Footer from "../Merch_Footer/Merch_Footer";
import emptycart from "../../../assests/cartempty.webp";
import { useNavigate} from "react-router-dom";
import "../PopUp/PopUp.css";
import "./Page3.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from "antd";

const Page3 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // const [Cart, setCart] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    data: "",
  });

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("AddedToCart")));
  }, []);

  useEffect(() => {
    let a = 0;
    for (let i = 0; i < data.length; i++) {
      a += data[i].quantity*data[i].price;
    }
    setSubTotal(a);
  }, [data]);

  // console.log(data);

  const RemoveItem = (id) => {
    console.log(id);
    const storedData = JSON.parse(localStorage.getItem("AddedToCart"));
    const updatedData = storedData.filter((item) => item.id !== id);
    localStorage.setItem("AddedToCart", JSON.stringify(updatedData));
    setData(updatedData);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userresponse = {
        name: user.name,
        email: user.email,
        contact: user.contact,
        address: user.address,
        state: user.state,
        pin: user.pin,
        city: user.city,
        data: data

      };
      // console.log(userresponse);
      const response = await axios.post(`/apiV1/merch_payment_request`, userresponse);
      // const u = response.data;
      if(user.contact.length==10 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)){
      if (response.data.status == "true") {
        setTimeout(() => {
          window.open(response.data.payment_url, '_blank');
      })
      }else{
        message.error(`${response.data.error}`);
      }
    }else if(user.contact.length>10 || user.contact.length<10){
        message.error("Please Enter correct phone number");
      }else{
        message.error("Please Enter correct email address");
      }
      setLoading(false);
      // navigate("/otpverify");
    } catch (err) {
      setLoading(false);
      const { data } = err?.response;
      console.log("register Error:", data);
      // var errorData = "";
      message.error(err)
      setLoading(false);
    }
  };

  return (
    <>
      <div className="merchPage3">
        <Navbar />
        <div className="main_body">
          <div className="heading_cart">
            <h1 style={{fontWeight:"400"}}>YOUR CART</h1>
          </div>

          {data?.length == 0 ? (
            <>
              {/* <div className="emptycart">Cart is Empty</div> */}
              <div className="empty-cart">
                <img src={emptycart} className="empty_img" alt="empty-image"/>
              </div>
              <div className="footer_button1">
                <button
                  className="prod_button2 check-outbtn" style={{backgroundColor:"#f26120",color:"white",borderRadius:"5px",borderStyle:"none",padding:"7px 4px 7px 4px"}}
                  onClick={() => navigate("/merch_home")}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </>
          ) : (
            <div className="cart_cont">

              <div className="title_cart">
                <div className="product_title">
                  <h3>product</h3>
                </div>
                <div className="other_title">
                  <h3>price</h3>
                  <h3>quantity</h3>
                  <h3>total</h3>
                </div>
              </div>
              {data &&
                data.map(({ id, name, color, price, size, quantity,image }, i) => {
                  return (
                    <div className="cart_status" key={i}>
                      <div className="product_status">
                        <img
                          src={image}
                          className="prod1_img"
                          alt="prod_img"
                        />
                        {/* <div className="prod_img">{image}</div> */}
                        <div className="prod_discription">
                          <div className="prod_name product_name_merch_3">
                            <h3>{name}</h3>
                          </div>
                          <div className="prod_size">
                            <h3>size : {size}</h3>
                            <h3>color : {color}</h3>
                            <h3 className="mob_quant">quantity : {quantity}</h3>
                          </div>
                          <div className="prod_button">
                            <button
                              className="prod_button1"
                              onClick={() => {
                                RemoveItem(id);
                              }}
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product_discription">
                        <div className="price_value">
                          <h3>{price}</h3>
                        </div>
                        <div className="quantity_value">
                          <h3>{quantity}</h3>
                        </div>
                        <div className="total_price">
                          <h3>{quantity * price}</h3>
                        </div>
                      </div>
                      <div className="product_discriptionmobile">
                         <div className="total_price">
                          <h3>Rs.{quantity * price}</h3>
                        </div>
                      </div>
                      <div className="mob_data_merch_3">

                      </div>
                    </div>
                  );
                })}
              <div className="cart_footer">
                <div className="final_fare">
                  <div className="subtotal">
                    <h3 className="subTotal">subtotal</h3>
                    <h3 className="value">RS.{subTotal}</h3>
                  </div>
                  <div className="tax_disclaimer">
                    <h4>Shipping & taxes calculated at checkout</h4>
                  </div>
                </div>
                <div className="footer_button">
                  <button
                    className="prod_button2"
                    onClick={() => navigate("/merch_home")}
                  >
                    CONTINUE SHOPPING
                  </button>
                  {/* <button className="prod_button2">UPDATE</button> */}
                  <button
                    className="prod_button3"
                    onClick={() => setShowPopup(!showPopup)}
                  >
                    CHECK OUT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>

      <div
        className="mainPopUp"
        style={showPopup ? { display: "flex" } : { display: "none" }}
      >
        <div
          className="semiyPopUp"
          style={{ background: "white", borderRadius: "6px", padding: "25px" }}
        >
          <div className="headingPopUp">ADD ADDRESS</div>
          <div>
            <div className="rulerPopup"></div>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
              type="text"
              placeholder="Name"
              className="PopUpMerch"
              name="name"
              value={user.name}
              required
              onChange={(e) => onInputChange(e)}
              />
              <input
                type="email"
                placeholder="Email Id"
                className="PopUpMerch"
                name="email"
                value={user.email}
                required
                onChange={(e) => onInputChange(e)}
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="PopUpMerch"
                name="contact"
                value={user.contact}
                pattern="/^[6-9]{1}+[0-9]{9}$/"
                required
                onChange={(e) => onInputChange(e)}
              />
              <input
              type="text"
              placeholder="State"
              className="PopUpMerch"
              name="state"
              value={user.state}
              required
              onChange={(e) => onInputChange(e)}
              />
              <input
              type="text"
              placeholder="City"
              className="PopUpMerch"
              name="city"
              value={user.city}
              required
              onChange={(e) => onInputChange(e)}
              />
              <input
                type="number"
                placeholder="Pin Code"
                className="PopUpMerch"
                name="pin"
                value={user.pin}
                required
                onChange={(e) => onInputChange(e)}
              />
              <input
              type="text"
              placeholder="Address"
              className="PopUpMerch"
              name="address"
              value={user.address}
              required
              onChange={(e) => onInputChange(e)}
              />
            <div className="btnPopUp">
              <div className="cancelPopUp" onClick={() => setShowPopup(!showPopup)}>Cancel</div>
              <button className="PayNowPopUp" type="submit">
                {loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Pay Now"
              )}
                </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
