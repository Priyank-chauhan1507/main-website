import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './RegPage.css'
import Regback from '../../../assests/regback.webp'
import navLogoLeft from '../../../assests/navlogoleft.svg'

const RegPage = () => {
  const[active,setActive] = useState('PersonalDetailsPage');
  
  const navigate = useNavigate();
  
    const [otp, setotp] = useState(Array(4).fill(""));
    const [IsCorrectOtp, setIsCorrectOtp] = useState(true);
  
    const HandleChange = (element, index) => {
      setotp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
      if (element.value === "") {
        return element.focus();
      } else if (element.nextSibling) {
        element.nextSibling.focus();
      }
    };
    const Verify = function() {
      const NewOtp = otp.join("");
      setIsCorrectOtp(false);
      // if (NewOtp === otpsent) {
      //   return
      // }
    };

  return (
    <>
    <div className="regNav">
      <div className="regB"><img src={navLogoLeft} className="navLogo"/></div>
      <div className="navb"><button className="registerNow">LOG IN</button></div>
    </div>
    <div className='regpage'>

        <div className='regpage-register'>
          <img src={Regback} className='regBack' />
          
          <div className='regpage-pages'>
            {active === 'PersonalDetailsPage' && 
            <>
            
         <div className="college">
         <div className="regis">
              <h2>Registration</h2>
            </div>
      <div className="college-steps">
        <div className="college-step1">
          <div className="college-step1-number">
            <div className="college-step1-number-content">1</div>
          </div>
          <div className="college-step1-description">
            <div className="college-step1-description-content-para1">
              Step 1/2
            </div>
            <div className="college-step1-description-content-para2">
              College Details
            </div>
          </div>
        </div>
        <div className="college-step2">
          <div className="college-step2-number">
            <div className="college-step2-number-content">2</div>
          </div>
          <div className="college-step2-description">
            <div className="college-step2-description-content-para1">
              Step 2/2
            </div>
            <div className="college-step2-description-content-para2">
              Personal Details
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="college-inputs">
        <div className="college-input2">
            <div id="reg-college-1">
              <select defaultValue={""} className="input-field select-field" id="reg-college-2">
                <option value=""  disabled hidden>
                  College Name *
                </option>
                <option className="select-option" value="Gender 1">
                  IIT K
                </option>
                <option className="select-option" value="Gender 2">
                  IIT D
                </option>
                <option className="select-option" value="Gender 3">
                  IIT M
                </option>
              </select>
            </div>
          </div>
          <div className="college-input1">
            <div>
              <select defaultValue={""} className="input-field select-field" id="rgs-state-uks">
                <option value="" disabled hidden>
                  State *
                </option>
                <option className="select-option" value="Gender 1">
                  Uttar Pradesh
                </option>
                <option className="select-option" value="Gender 2">
                  Delhi
                </option>
                <option className="select-option" value="Gender 3">
                  Gujrat
                </option>
              </select>
            </div>
            <div>
              <select defaultValue={""} className="input-field select-field" id="rgs-district-uks">
                <option value="" disabled hidden>
                  District *
                </option>
                <option className="select-option" value="Gender 1">
                  Lucknow 
                </option>
                <option className="select-option" value="Gender 2">
                  Gorakhpur
                </option>
                <option className="select-option" value="Gender 3">
                  Kanpur
                </option>
              </select>
            </div>
          </div>
          <div className="college-input3">
            <div>
              <input
                className="input-field"
                type=""
                placeholder="Branch *"
              />
            </div>
            <div>
              <input
                className="input-field"
                type=""
                placeholder="Year of Study *"
              />
            </div>
          </div>
        </div>

        <div className="college-buttons">
          <button type="button" className="college-button-submit">
            Next
          </button>
          <button type="button" className="college-button-clear">
            Clear
          </button>
        </div>
      </form>
    </div>

            </>
            }
            {active === 'VerifyEmail' && 
            <>
                <div className="otpContainer">
      <div className="verifyEmailText">Verify your Email</div>
      <div className="otpSent">
        A mail has been sent to the submitted email address. Check your inbox to
        verify your email address.
      </div>
      <div className="inputBoxes">
        {otp.map((data, index) => {
          return (
            <input
              type="number"
              onChange={(e) => HandleChange(e.target, index)}
              key={index}
              maxLength="1"
              value={data}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      {IsCorrectOtp === false && <div>Incorrect OTP</div>}
      {/* <Button variant="outlined" size="small" onClick={Verify}>
        verify
      </Button> */}
      <button onClick={() => setActive('EmailVerifiedMsg')}>verify</button>
      <div className="resendOtp">
        <div>Haven’t received OTP yet?</div>
        {/* <Button>Resend otp</Button> */}
        <button>resend otp</button>
      </div>
    </div>
            </>
            }
            {active === 'EmailVerifiedMsg' && 
            <>
              <div className="Box">
      <div className="Box2">
      <h2><strong>Email Verified Successfully!</strong></h2>
     <p>Voila! You have successfully verified your account.</p>
     
     <button onClick={() => setActive('CollegeDetailsPage')} className='submit'>Continue Registration</button>
     </div>
    </div>
            </>}
            {active === 'CollegeDetailsPage' && 
            <>
              <div className="college">
      <div className="college-steps">
        <div className="college-step1">
          <div className="college-step1-number">
            <div className="college-step1-number-content">1</div>
          </div>
          <div className="college-step1-description">
            <div className="college-step1-description-content-para1">
              Step 1/2
            </div>
            <div className="college-step1-description-content-para2">
              Personal Details
            </div>
          </div>
        </div>
        <div className="college-step2">
          <div className="college-step2-number">
            <div className="college-step2-number-content">2</div>
          </div>
          <div className="college-step2-description">
            <div className="college-step2-description-content-para1">
              Step 2/2
            </div>
            <div className="college-step2-description-content-para2">
              College Details
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="college-inputs">
          <div className="college-input1">
            <div>
              <select defaultValue={""} className="input-field select-field" id="rgs-state-uks">
                <option value="" disabled hidden>
                  State *
                </option>
                <option className="select-option" value="Gender 1">
                  Uttar Pradesh
                </option>
                <option className="select-option" value="Gender 2">
                  Delhi
                </option>
                <option className="select-option" value="Gender 3">
                  Gujrat
                </option>
              </select>
            </div>
            <div>
              <select defaultValue={""} className="input-field select-field" id="rgs-district-uks">
                <option value="" disabled hidden>
                  District *
                </option>
                <option className="select-option" value="Gender 1">
                  Lucknow 
                </option>
                <option className="select-option" value="Gender 2">
                  Gorakhpur
                </option>
                <option className="select-option" value="Gender 3">
                  Kanpur
                </option>
              </select>
            </div>
          </div>
          <div className="college-input2">
            <div id="reg-college-1">
              <select defaultValue={""} className="input-field select-field" id="reg-college-2">
                <option value=""  disabled hidden>
                  College Name *
                </option>
                <option className="select-option" value="Gender 1">
                  IIT K
                </option>
                <option className="select-option" value="Gender 2">
                  IIT D
                </option>
                <option className="select-option" value="Gender 3">
                  IIT M
                </option>
              </select>
            </div>
          </div>
          <div className="college-input3">
            <div>
              <input
                className="input-field"
                type=""
                placeholder="Branch *"
              />
            </div>
            <div>
              <input
                className="input-field"
                type=""
                placeholder="Year *"
              />
            </div>
          </div>
        </div>

        <div className="college-buttons">
          <button onClick={() => setActive('RegistrationCompletedMsg')} type="submit" className="college-button-submit">
            Submit
          </button>
          <button type="button" className="college-button-clear">
            Clear
          </button>
        </div>
      </form>
    </div>
            </>
            }
            {active === 'RegistrationCompletedMsg' && 
            <>
              <div className="Box">
      <div className="Box2">
      <h2><strong>Registration Completed!</strong></h2>
     <p>Voila!  Your Registration for Campus Ambassador Program is successfully completed.</p>
     
     <button className='submit'>Go to Leaderboard</button>
     </div>
    </div>
            </>}
            {active === 'LogIn' && 
            <>
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
          <div onClick={() => setActive('ForgotPassword')} id="forget">
            Forgot Password?
          </div>

          <button id="log">Log In</button>
          <div id="niche">

          <div id="bottom">
            Don't have an account?
          </div>
          <div onClick={() => setActive('PersonalDetailsPage')} id="register"> Register Now!</div>
          </div>

          </div>
        </div>
      </div>
            </>
            }
            {active === 'ForgotPassword' && 
            <>
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
            </>
            }
            
        </div>
        </div>
    </div>
    </>
  )
}

export default RegPage