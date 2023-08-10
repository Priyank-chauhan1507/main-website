import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Registration/login/Login";
import PersonalDetails from "./components/Registration/step2/personalDetails";
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
import Forget from "./components/Registration/forget_pwd/forget";
import ResetPassword from "./components/Registration/resetPassword/resetPassword";
import CollegeDetails from "./components/Registration/step1/collegeDetails";
import RegPage from "./components/Registration/RegPage/RegPage";
import Profilenavbar from "./components/Navbar/Profilenavbar";

function App() {
  return (
    <>
      <Router>

      <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/personaldetails" element={<PersonalDetails />} />
          <Route exact={true} path="/collegedetails" element={<CollegeDetails/>}/>
          <Route path="/emailverified" element={<EmailVerify/>} />
          <Route path="/regcompleted" element={<RegisComp/>} />
          <Route exact={true} path="/login" element={<Login/>}/>
          <Route exact={true} path="/forgotpassword" element={<Forget/>} />
          <Route path="/otpverify" element={<RegPage/>} />


          <Route  path="/resetPassword" element={<ResetPassword/>}/>

          <Route path="/navbar" element={<Profilenavbar/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
