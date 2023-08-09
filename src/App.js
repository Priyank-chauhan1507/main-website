import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Registration/login/Login";
import EmailVerify from "./components/Registration/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/RegComp/RegCompleted";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/login" element={<Login/>}/>
          <Route exact={true} path="/emailverified" element={<EmailVerify/>} />
          <Route exact={true} path="/regcompleted" element={<RegisComp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
