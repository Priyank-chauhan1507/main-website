import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Registration/login/Login";
import PersonalDetails from "./components/Registration/step2/PersonalDetails";
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
import Forget from "./components/Registration/forget_pwd/Forget";
import ResetPassword from "./components/Registration/resetPassword/ResetPassword";
import CollegeDetails from "./components/Registration/step1/CollegeDetails";
import RegPage from "./components/Registration/RegPage/RegPage";
import Profilenavbar from "./components/Navbar/Profilenavbar";
import Profile from "./components/Profile/Profile/Profile";

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/personaldetails" element={<PersonalDetails />} />
          <Route exact={true} path="/collegedetails" element={<CollegeDetails/>}/>
          <Route exact={true} path="/emailverified" element={<EmailVerify/>} />
          <Route exact={true} path="/regcompleted" element={<RegisComp/>} />
          <Route exact={true} path="/login" element={<Login/>}/>
          <Route exact={true} path="/forgotpassword" element={<Forget/>} />
          <Route exact={true} path="/otpverify" element={<RegPage/>} />
          <Route exact={true} path="/resetPassword" element={<ResetPassword/>}/>
          <Route exact={true} path="/navbar" element={<Profilenavbar/>} />
          <Route exact={true} path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
