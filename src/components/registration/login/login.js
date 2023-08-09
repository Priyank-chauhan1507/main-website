import React, {useState} from 'react'
import "./login.css";
import "./mobile_login.css";



function Login() {

  return (
      <div id="bg">
        <div id="box">
          <div id="center">

          <div id="login">
            Log In
          </div>
          <form action="" id="form">

            <input type="email"  name="myEmail" placeholder="Email Id *"  id="email1"/>


            <input type="password"  name="myEmail"   placeholder="Password *" id="password1"/>

          </form>
          <div id="forget">
            Forgot Password?
            {/* YHA PR LINK LAGANI HAI   */}
          </div>

          <button id="log">Log In</button>
          <div id="niche">

          <div id="bottom">
            Don't have an account?
          </div>
          <div id="register"> Register Now!</div>
          {/* YHA PR LINK LAGANI HAI   */}
          </div>

          </div>
        </div>
      </div>
  )
}

export default Login




