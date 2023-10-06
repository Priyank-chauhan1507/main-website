import React, { useEffect, useState } from "react";
import "./PopUp.css";
import Select from "react-select";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { message } from "antd";

const PopUp = ({ details, setdetails, event }) => {
  const [slot, setSlot] = useState("");
  const handleChange1 = (slots) => {
    setSlot(slots?.value);
    console.log(slot, "slot");
    //
  };
  useEffect(() => {
    setSlot(slot);
    setForm1({ ...form1, slot: slot });
  }, [slot]);
  const [form1, setForm1] = useState({
    event_name: event,
    slot: slot,
    name: "",
    email: "",
    contact: "",
  });
  const slotsOptions = [
    { value: "Day 1", label: "Day 1" },
    { value: "Day 2", label: "Day 2" },
    { value: "Day 3", label: "Day 3" },
  ];
  const [loading, setLoading] = useState(false);
  async function payForEvent() {
    setLoading(true);
    if (form1.name == "SILENT DJ" && slot.length > 2) {
      message.error("Please Select any slot");
      setLoading(false);
    } else {
      try {
        const response = await axios.post(
          `https://api1.thomso.in/apiV1/paid_events_iitr`,
          form1
        );
        const u = response.data;
        console.log("data", response.data);
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
      console.log("success");
    }
  }
  const handleChange = (e) => {
    setForm1({ ...form1, [e.target.name]: e.target.value });
    // if (
    //   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form1.email) != true &&
    //   e.target.name == "email"
    // ) {
    //   message.error("Please enter a valid iitr email address");
    // }
    // if (form1.contact.length != 10 && e.target.name == "contact") {
    //   message.error("Please enter a valid contact number");
    // }
  };

  // useEffect(() => {
  //   if(form1.contact.length!=10 || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form1.email) != true){
  //     message.error("error")
  //   }
  // },[form1]);

  return (
    <>
      {loading && <Loader />}
      <div className="blur"></div>
      <div className="mainPopUp">
        <div className="blur"></div>
        <div
          className="semimainPopUp"
          style={{
            background: "white",
            borderRadius: "6px",
            padding: "25px",
            border: "4px solid black",
          }}
        >
          <div className="headingPopUp">Details</div>
          <div>
            <div className="rulerPopup"></div>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form1.name}
              onChange={(e) => {
                handleChange(e);
              }}
              className="PopUpMerch"
            />
            <input
              type="email"
              name="email"
              value={form1.email}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Email Id"
              className="PopUpMerch"
            />
            <input
              type="number"
              name="contact"
              placeholder="Phone Number"
              value={form1.contact}
              onChange={(e) => {
                handleChange(e);
              }}
              className="PopUpMerch"
            />

            {/* <input type="text" placeholder="State" className="PopUpMerch" /> */}
            {/* <input type="text" placeholder="City" className="PopUpMerch" /> */}
            {/* <input
                type="number"
                placeholder="Pin Code"
                className="PopUpMerch"
              /> */}
            {/* <input type="text" placeholder="Address" className="PopUpMerch" /> */}

            {event === "SILENT DJ" && (
              <div>
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
                    required
                    options={slotsOptions}
                    isSearchable={false}
                  />
                </div>
              </div>
            )}
            <div className="btnPopUp">
              <button
                className="cancelPopUp"
                onClick={() => {
                  setdetails(!details);
                }}
              >
                Cancel
              </button>
              <button
                className="PayNowPopUp"
                onClick={() => {
                  if (
                    /^[A-Z0-9._%+-]+@[A-Za-z]+[iitr.ac.in]/i.test(
                      form1.email
                    ) != true &&
                    form1.contact.length != 10
                  ) {
                    message.error("Please enter a valid iitr email address");
                    message.error("Please enter a valid contact number");
                  } else if (
                    /^[A-Z0-9._%+-]+@[A-Za-z]+\.iitr\.ac\.in/i.test(
                      form1.email
                    ) != true
                  ) {
                    message.error("Please enter a valid iitr email address");
                  } else if (form1.contact.length != 10) {
                    message.error("Please enter a valid contact number");
                  } else if (event === "SILENT DJ") {
                    if (form1.slot.length < 1) {
                      message.error("Please select a slot");
                    } else {
                      payForEvent();
                    }
                  } else {
                    payForEvent();
                  }
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
