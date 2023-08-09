import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import EmailVerify from "./components/Registration/College_Details/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/College_Details/RegComp/RegCompleted";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/email" element={<EmailVerify/>} />
          <Route path="/regComp" element={<RegisComp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
