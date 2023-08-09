import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CollegeDetails from "./components/registration/CollegeDetailes/Collegedetailes";
import RegPage from "./components/registration/RegistrationPage/RegPage";
import Login from "./components/Registration/login/Login";

// import CollegeDetails from "./components/registration/CollegeDetailes/Collegedetailes";
// import RegPage from "./components/registration/RegistrationPage/RegPage";
import PersonalDetails from "./components/registration/step1/personalDetails";

// import PersonalDetails from "./components/registration/step1/personalDetails";


import EmailVerify from "./components/Registration/College_Details/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/College_Details/RegComp/RegCompleted";
function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
          {/* <Route exact={true} path="/registration" element={<RegPage />} />
          <Route exact={true} path="/collegedetailes" element={<CollegeDetails />} /> */}
          <Route exact={true} path="/personaldetails" element={<PersonalDetails />} />
      </Routes>
        <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route exact={true} path="/registration" element={<RegPage />} />
          <Route exact={true} path="/collegedetailes" element={<CollegeDetails />} />
          <Route path="/email" element={<EmailVerify/>} />
          <Route path="/regComp" element={<RegisComp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
