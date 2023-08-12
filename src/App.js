import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Registration/login/Login";
// import PersonalDetails from "./components/Registration/step2/PersonalDetails";
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
// import Forget from "./components/Registration/forget_pwd/Forget";
import ResetPassword from "./components/Registration/resetPassword/resetPassword";
import CollegeDetails from "./components/Registration/step1/collegeDetails";
import RegPage from "./components/Registration/RegPage/RegPage";
import Profilenavbar from "./components/Navbar/Profilenavbar";
import Profile from "./components/Profile/Profile/Profile";
import Eventsnavbar from "./components/EventsNavbar/Eventsnavbar";
import EventMainPage from "./components/EventsPage/EventMainPage";
import EventBox from "./components/Profile/EventBox/EventBox";
import Paymentbox from "./components/Profile/PaymentBox/Paymentbox";

function App() {
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
          {/* <Route exact={true} path="/forgotpassword" element={<Forget/>} /> */}
          <Route exact={true} path="/otpverify" element={<RegPage />} />
          <Route
            exact={true}
            path="/resetPassword"
            element={<ResetPassword />}
          />
          <Route exact={true} path="/navbar" element={<Profilenavbar />} />
          <Route exact={true} path="/profile" element={<Profile />} />
          <Route exact={true} path="/eventsnavbar" element={<Eventsnavbar />} />
          <Route exact={true} path="/events" element={<EventMainPage />} />

          <Route exact={true} path="/pevents" element={<EventBox />} />
          <Route exact={true} path="/payment" element={<Paymentbox />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
