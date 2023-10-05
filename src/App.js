// import "./App.css";
import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchUser } from "./components/User/UserActions";
import { connect } from "react-redux";
import Home from "./components/Home/Home";
import Login from "./components/Registration/login/Login";
// import PersonalDetails from "./components/Registration/step2/PersonalDetails";
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
import Forget from "./components/forget_pwd/forget";
import ResetPassword from "./components/Registration/ResetPass/ResetPass";
import CollegeDetails from "./components/Registration/step1/collegeDetails";
import RegPage from "./components/Registration/RegPage/RegPage";
import Profilenavbar from "./components/Navbar/Profilenavbar";
import Profile from "./components/Profile/Profile/Profile";
import Eventsnavbar from "./components/EventsNavbar/Eventsnavbar";
import EventMainPage from "./components/EventsPage/EventMainPage";
import EventBox from "./components/Profile/EventBox/EventBox";
import Paymentbox from "./components/Profile/PaymentBox/Paymentbox";
import NewPaymentbox from "./components/Profile/PaymentBox/NewPaymentBox";
import EventCard from "./components/Profile/EventCard/EventCard";
import WebNavbarNew from "./components/Navbar/WebNavbarNew";
import Mobfooter from "./components/Footer/Mobfooter"
import Eventsmobpage from "./components/EventsMobPage/Eventsmobpage";
import PaymentSuccess from "./components/Profile/PaymentBox/PaymentSuccess";
import Idcard from "./components/Profile/ID_card/Idcard";
import IdcardBox from "./components/Profile/ID_card/idcardBox";
import EventsMain from "./components/Profile/EventsPage/EventMainPage"
import ProfileNameEditModel from "./components/Profile/MainProfileBox/ProfileNameEditModel";
import AdmitCard from "./components/Profile/PaymentBox/AdmitCard";
import PdfDownload from "./PdfRenderer/PdfDownload";
// import Pdf from "./PdfRenderer/Renderer"
import Qr from "./PdfRenderer/Qrcode"
// import Home1 from "./components/Home/Home";
import Home1 from "./components/MUN/Home/Home";
import Home2 from "./components/MUNmobile/HomeMun/HomeMUN";
import Home2Reg from "./components/MUNmobile/Registration/Registration";

import FAQ from "./components/MUN/FAQ/FAQ";
import Footer1 from "./components/MUN/Footer/Footer";
import Commitee from "./components/MUN/Commitee/Commitee";
// import Footer1 from "./components/MUN/Judges/Judges";
import ReactGA4 from 'react-ga4';
import Judges from "./components/MUN/Judges/Judges";
import Page1 from "./components/Merch_page/Page1/Page1";
import Page2 from "./components/Merch_page/Page2/Page2";
import PopUP from "./components/Merch_page/PopUp/PopUp";
// require('dotenv').config()
import Page3 from "./components/Merch_page/Page3/Page3";
import MUNMoreInfoPage1 from "./components/MUN/MoreInfo/Moreinfopage1/Moreinfopage1";
import MUNMoreInfoPage2 from "./components/MUN/MoreInfo/Moreinfopage2/Moreinfopage2";
import MUNMoreInfoPage3 from "./components/MUN/MoreInfo/Moreinfopage3/Moreinfopage3";
import Carousel1 from "./components/Profile/Carousel/Carousel1";
import Attraction_new from "./components/Home/Attraction_new";
import Sponsers from "./components/Sponsers/Sponsers"
import Id_Card from "./components/Profile/PaymentBox/Id_Card";
import axios from "axios"
import Renderer from "./PdfRenderer/Renderer"

import Ourteam from "./components/Teams/ourteams";

import NewSponsers from "./components/NewSponsers/NewSponsers";


// console.log(process.env.REACT_APP_TRACKING_ID);
// ReactGA4.initialize("G-FG974BLVDN");
const App = (props) => {


  const [user,setUser] = useState({});
  const [items,setItems] = useState();


useEffect(() => {
  if(localStorage.getItem("token")){
    loadUserData();
  };
  }, [user]);

//  useEffect(() => {

//       const items = JSON.parse(localStorage.getItem("dataKey"));
//     if (items) {
//       setItems(items);
//         };
//   }, []);

  useEffect(() => {
    // ReactGA4.send({ hitType: "pageview", page: `${window.location.pathname + window.location.search}` });
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    if (token) {
      props?.userDetails && props?.fetchUsers({ id: userId });
    }
  }, []);

    const loadUserData = async () => {
    try {
      axios.get(`/apiV1/current_user_participant`).then((res) => {
        setUser(res.data);
        // console.log("data", res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Router>
        <Routes>
        
          <Route exact={true} path="/" element={<Home />} />
          {/* <Route exact={true} path="/personaldetails" element={<PersonalDetails />} /> */}
          <Route exact={true} path="/register" element={<CollegeDetails />} />
          <Route exact={true} path="/emailverified" element={<EmailVerify />} />
          <Route exact={true} path="/regcompleted" element={<RegisComp />} />
          <Route exact={true} path="/login" element={<Login />} />
          <Route exact={true} path="/forgotpassword" element={<Forget/>} />
          <Route exact={true} path="/otpverify" element={<RegPage />} />
          
          <Route
            exact={true}
            path="/auth/reset-password/:email/:token"
            element={<ResetPassword />}
          />
          <Route exact={true} path="/navbar" element={<Profilenavbar />} />
          <Route exact={true} path="/profile" element={<Profile />} />
          <Route exact={true} path="/eventsnavbar" element={<Eventsnavbar />} />
          <Route exact={true} path="/events/:id" element={<EventMainPage />} />

          <Route exact={true} path="/pevents" element={<EventBox />} />
          <Route exact={true} path="/payment" element={<Paymentbox />} />
          <Route exact={true} path="/payment_ccet" element={<NewPaymentbox/>} />
          <Route exact={true} path="/card" element={<EventCard/>} />
          <Route exact={true} path="/webnav" element={<WebNavbarNew/>} />
          <Route exact={true} path="/mobfooter" element={<Mobfooter/>} />
          <Route exact={true} path="/eventslist" element={<Eventsmobpage />} />
          <Route exact={true} path="/paymentsucess" element={<PaymentSuccess />} />
          {/* <Route exact={true} path="/id_cards" element={<Idcard />} /> */}
          <Route exact={true} path="/id_card" element={<Id_Card/>} />
          <Route exact={true} path="/pdf" element={<PdfDownload data={user} items ={items} />} />
          <Route exact={true} path="/renderer" element={<Renderer data ={user}  items = {items}/>} />
          {/* <Route exact={true} path="/pdfs" element={<Pdf/>} /> */}
          <Route exact={true} path="/qr" element={<Qr/>} />

          {/* <Route exact={true} path="/id_card_box" element={<IdcardBox />} /> */}
          {/* <Route exact={true} path="/admitcard" element={<AdmitCard />} /> */}
          <Route exact={true} path="/paymentsucess" element={<PaymentSuccess />} />
          <Route exact={true} path="/events" element={<EventsMain />} />
          <Route exact={true} path="/ProfileNameEdit" element={<ProfileNameEditModel />} />
          <Route exact={true} path="/MUN" element={<Home1/>} />
          <Route exact={true} path="/MUNmobile" element={<Home2/>} />
          <Route exact={true} path="/MUNregister" element={<Home2Reg/>} />
          <Route exact={true} path="/MUN_FAQ" element={<FAQ/>} />
          <Route exact={true} path="/munfooter" element={<Footer1/>} />
          <Route exact={true} path="/muncommitee" element={<Commitee/>} />
          <Route exact={true} path="/judges" element={<Judges/>} />
          <Route exact={true} path="/merch_home" element={<Page1/>} />
          <Route exact={true} path="/merch_selection/:id" element={<Page2/>} />
          <Route exact={true} path="/merch_cart" element={<Page3/>} />
          <Route exact={true} path="/muninfo_page1" element={<MUNMoreInfoPage1/>} />
          <Route exact={true} path="/muninfo_page2" element={<MUNMoreInfoPage2/>} />
          <Route exact={true} path="/muninfo_page3" element={<MUNMoreInfoPage3/>} />
          <Route exact={true} path="/sponsers" element={<Sponsers/>} />
          <Route exact={true} path="/PopUp" element={<PopUP/>} />
          <Route exact={true} path="/Carousel" element={<Carousel1/>} />
          <Route exact={true} path="/attraction_new" element={<Attraction_new/>} />

          <Route exact={true} path="/our_team" element={<Ourteam/>} />

          <Route exact={true} path="/spons" element={<NewSponsers />} />

        </Routes>
      </Router>
    </>
  );
}

// export default App;
const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  let loading = state.user.loading;

  return {
    userDetails,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (params) => dispatch(fetchUser(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
