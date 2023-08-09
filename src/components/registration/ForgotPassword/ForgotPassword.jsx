import React from 'react';
import "./styles.css";

function ForgotPassword() {
  return (
    <div className='forgot'>
     <h2><strong>Forgot Password</strong></h2>
     <p>Don't worry! It happens. Please enter the Email through which you had registered.</p>
     <form >
     <label>
     <input className='email' placeholder="Email Id*" type='text'/>
     </label>
     <button type='submit' className='send'>Send Email</button>
     </form>
     
     <div className='message'>
      <p>A mail has been sent to the submitted email address. Check your inbox to reset your password.</p>
     </div>
    </div>
  )
}

export default ForgotPassword;