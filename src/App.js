import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import Login from "./components/Registration/login/Login";

import ResetPassword from "./components/Registration/resetPassword/resetPassword";

import EmailVerify from "./components/Registration/College_Details/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/College_Details/RegComp/RegCompleted";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/login" element={<Login/>}/>

          <Route path="/" element={<Home/>}/>
          <Route path="/email" element={<EmailVerify/>} />
          <Route path="/regComp" element={<RegisComp/>} />

          <Route  path="/resetPassword" element={<ResetPassword/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
