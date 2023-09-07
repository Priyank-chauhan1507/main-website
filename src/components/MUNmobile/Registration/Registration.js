import React,{useState, useEffect} from 'react';
import "./Registration.scss";
import Navbar from '../../EventsNavbar/MobEventnavbar';
import BGimg from '../../../assests/MUNmobilebg.png';
import Select from "react-select";


const p1 = [ 
    "UNITED NATIONS GENERAL ASSEMBLY (UNGA)",
    "ALL INDIA POLITICAL PARTY MEET (AIPPM)",
    "INDIAN WAR CABINET (HISTORIC COMMITTEE)"
  ].map((p1) => ({
    value: p1,
    label: p1,
  }));
const UNGA=[
    "Afghanistan",
    "Albania",
    "Algeria",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia ",
    "Austria ",
    "Bahamas",
    "Bangladesh ",
    "Belarus",
    "Belgium ",
    "Bhutan ",
    "Bolivia",
    "Brazil ",
    "Bulgaria",
    "Burundi",
    "Cambodia ",
    "Canada ",
    "Central African Republic",
    "Chile",
    "China",
    "Colombia ",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba ",
    "Czech Republic ",
    "Denmark ",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Eritrea",
    "Estonia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Kazakhstan",
    "Kenya",
    "Kyrgystan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malaysia",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritius",
    "Mexico",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "PAkistan",
    "Papua New Guinea",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States Of America",
    "Uruguay",
    "Vanuata",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    ].map((UNGA) => ({
    value: UNGA,
    label: UNGA,
  }));  
  export default function MUNmobileregistration() {
      const [user, setUser] = useState({
        UNGA: "",
        
      });
      const clearInput = () => {
        setUser({
          UNGA: "",
         
        });
      };
      const handleChange1 = (state) => {
        setUser({ ...user, UNGA: UNGA?.value });
      };
      return (
        <div>
            <img src={BGimg} className='MobileBG' alt=''/>
            <Navbar />
            <div className="RegistrationMain">
              <div className="RegSmall">
            <div className="IRMUNmob">
                <div className="IRMUNtext">

                <div className="Portfoliotext1">
                    IRMUN/
                </div>
                <div className="Portfoliotext2">
                    PORTFOLIO
                </div>
                </div>
                <div className="DelegateApp">
                    <div className="DelegateApp1">
                        DELEGATE APPLICATION FORM <br />
                    </div>
                    <div className="DelegateApp2">
                        PORTFOLIO SELECTION
                    </div>
                </div>
            </div>
                </div>  
            <div className="Portfolio1">
                <div className="Portfoliohead">
                    PORTFOLIO 1
                </div>
                <div className="Portfoliosubhead">
                Select a committee
                <Select
                  className="UNGA_options"
                  placeholder="Select"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={UNGA}
                />
              
                </div>
            </div>

            {/* <div className='btn-div'>
                <button className='submitbtn' type='submit' value='Submit'>SUBMIT</button>
            </div> */}
            </div>
            
        </div>
    )
}
