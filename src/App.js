import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/registration/login/Login";

import PersonalDetails from "./components/registration/step2/personalDetails";
import EmailVerify from "./components/registration/EmailVerify/EmailVerify";
import RegisComp from "./components/registration/RegComp/RegCompleted";

// import CollegeDetails from "./components/registration/CollegeDetailes/Collegedetailes";
// import RegPage from "./components/registration/RegistrationPage/RegPage";
// import PersonalDetails from "./components/registration/step1/personalDetails";

// import PersonalDetails from "./components/registration/step1/personalDetails";


// import EmailVerify from "./components/Registration/College_Details/EmailVerify/EmailVerify";
// import RegisComp from "./components/Registration/College_Details/RegComp/RegCompleted";

import Forget from "./components/registration/forget_pwd/forget";

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/personaldetails" element={<PersonalDetails />} />
          <Route path="/emailverified" element={<EmailVerify/>} />
          <Route path="/regcompleted" element={<RegisComp/>} />
          <Route exact={true} path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/email" element={<EmailVerify/>} />
          <Route path="/regComp" element={<RegisComp/>} />
          <Route exact={true} path="/forget" element={<Forget/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
