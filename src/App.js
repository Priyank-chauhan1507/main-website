import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// <<<<<<< my-new-branch
import Login from "./components/Registration/login/Login";


// =======
import EmailVerify from "./components/Registration/College_Details/EmailVerify/EmailVerify";
import RegisComp from "./components/Registration/College_Details/RegComp/RegCompleted";
// >>>>>>> main
function App() {
  return (
    <>
      <Router>
        <Routes>
// <<<<<<< my-new-branch
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/login" element={<Login/>}/>
// =======
          <Route path="/" element={<Home/>}/>
          <Route path="/email" element={<EmailVerify/>} />
          <Route path="/regComp" element={<RegisComp/>} />
// >>>>>>> main
        </Routes>
      </Router>
    </>
  );
}

export default App;
