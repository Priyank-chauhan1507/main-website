import React, { useEffect } from "react";
import "./Profile.css";
import LeftSideProfile from "../LeftSideProfile/Leftsideprofile";
import PaymentBox from "../../Profile/PaymentBox/Paymentbox";
import NewNewProfileMobile from "../MobProfile/NewNewProfileMobile";
// import EventMobileNav from "../EventsPage/EventMobileNav";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../Navbar/Profilenavbar";
import Back from "../../../assests/profile1.webp";
import Back1 from "../../../assests/landingpage.webp";
import MobliePaymentBox from "../PaymentBox/MobliePaymentBox"
const team_event = [8, 12, 18, 40, 16];
const team_event_details = [
  {
    event: 8,
    event__name: "FOOTLOOSE",
  },
  {
    event: 12,
    event__name: "SARGAM",
  },
  {
    event: 18,
    event__name: "NUKKAD NATAK",
  },
  {
    event: 40,
    event__name: "VOGUE",
  },
  {
    event: 16,
    event__name: "ABHIVYAKTI",
  },
  {
    event: 13,
    event__name: "BATTLE OF BANDS",
  },
];
const Payment = ({ userDetails }) => {
  const [events, setEvents] = useState();
  // const navigate = useHistory();
  const id = userDetails?.id;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate.push("/login");
    }
    getEvents();
  }, []);

  const getEvents = async () => {
    let obj = {};
    for (let i = 0; i < team_event_details.length; i++) {
      obj[team_event_details[i].event] = team_event_details[i];
    }
    setEvents(obj);
    // const res = axios
    //   .get(`/apiV1/registerusereventdetailed?participant_id=${id}`)
    //   .then((res) => {
    //     let obj = {};
    //     for (let i = 0; i < res.data.length; i++) {
    //       if (team_event.includes(res.data[i].event)) {
    //         obj[res.data[i].event] = res.data[i];
    //       }
    //     }
    //     console.log(obj);
    //     console.log(res.data);
    //     setEvents(obj);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <>
      <PaymentBox
        events={events}
        participant_id={id}
        paymentstatus={userDetails?.payment}
        is_female={
          userDetails?.gender?.toLowerCase() === "female" ? true : false
        }
        is_payment={master_config?.is_payment}
      />
      {/* <div className="nnpmobile-component">
        <MobliePaymentBox
          events={events}
          participant_id={id}
          paymentstatus={userDetails?.payment}
          is_female={
            userDetails?.gender?.toLowerCase() === "female" ? true : false
          }
          is_payment={master_config?.is_payment}
        />
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  let master_config = state.user.master_config;
  return {
    userDetails,
    master_config,
  };
};

export default connect(mapStateToProps, null)(Payment);
