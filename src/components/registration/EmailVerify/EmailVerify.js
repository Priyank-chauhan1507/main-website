import React from 'react';
import "./EmailVerify.css";

const EmailVerify = () => {
  return (
    <div className="Box">
      <div className="Box2">
      <h2><strong>Email Verified Successfully!</strong></h2>
     <p>Voila! You have successfully verified your account.</p>
     
     <button className='submit'>Continue Registration</button>
     </div>
    </div>
  );
};

export default EmailVerify;