import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import Login from "./components/Registration/login/Login";

import ResetPassword from "./components/Registration/resetPassword/resetPassword";

import EmailVerify from "./components/Registration/College_Details/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/College_Details/RegComp/RegCompleted";

import Login from "./components/Registration/login/Login";
import CollegeDetails from "./components/Registration/step1/collegeDetails";
import PersonalDetails from "./components/Registration/step2/personalDetails";
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
import Profilenavbar from "./components/Navbar/Profilenavbar";
function App() {
  return (
    <>
      <Router>
        <Routes>

      <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/personaldetails" element={<PersonalDetails />} />
          <Route exact={true} path="/collegeDetails" element={<CollegeDetails/>}/>
          <Route path="/emailverified" element={<EmailVerify/>} />
          <Route path="/regcompleted" element={<RegisComp/>} />
          <Route exact={true} path="/login" element={<Login/>}/>

          <Route path="/" element={<Home/>}/>
          <Route path="/email" element={<EmailVerify/>} />
          <Route path="/regComp" element={<RegisComp/>} />

          <Route  path="/resetPassword" element={<ResetPassword/>}/>

          <Route path="/navbar" element={<Profilenavbar/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
