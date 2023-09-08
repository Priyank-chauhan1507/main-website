import React,{useState, useEffect} from 'react';
import "./Registration.scss";
// import Navbar from '../../EventsNavbar/MobEventnavbar';
import Navbar from '../../EventsNavbar/Eventsnavbar';
import BGimg from '../../../assests/MUNmobilebg.png';
import Select from "react-select";
import BgMunReg from "../../../assests/bgmunreg.webp";
import { Button } from 'antd';


const Portfolio = [ 
    "UNITED NATIONS GENERAL ASSEMBLY (UNGA)",
    "ALL INDIA POLITICAL PARTY MEET (AIPPM)",
    "INDIAN WAR CABINET (HISTORIC COMMITTEE)"
  ].map((Portfolio) => ({
    value: Portfolio,
    label: Portfolio,
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
  const AIPPM=[
    "Amit Shah",
    "Jyotiraditya Scindia",
    "Nitin Gadkari",
    "Ravi Shankar Prasad",
    "Dr Harsh Vardhan",
    "Vasundhara Raje",
    "RAMESH BIDHURI",
    "MAHENDRA NATH PANDEY",
    "KRISHAN PAL",
    "VIRENDRA KUMAR",
    "DHARMENDRA PRADHAN",
    "DR. RAMESH POKHRIYAL",
    "YOGI ADITYA NATH",
    "MEENAKSHI LEKHI",
    "Kiren Rijiju",
    "Syed Shahnawaz Hussain",
    "Piyush Goyal",
    "Mukhtar Abbas Naqvi",
    "Ashwini Vaishnav",
    "Shivraj Singh Chauhan",
    "Sudhanshu Trivedi",
    "Anandiben M Patel",
    "Anju Bala",
    "Subramanyam Jaishankar",
    "Manoharlal Khattar",
    "Anurag Singh Thakur",
    "Manoj Tiwari",
    "Kirron Kher",
    "Mansukh Mandaviya",
    "Rajnath Singh",
    "Narayana Swamy Abbaiah",
    "Rajendra Agrawal",
    "S.S. Ahluwalia",
    "Guharam Ajgalley",
    "Mangal Suresh Angadi",
    "Bache Gowda B.N.",
    "Prof. S.P. Singh Baghel",
    "Sanjay Kumar Bandi",
    "John Barla",
    "Sudarshan Bhagat",
    "Bhagirath Choudhary",
    "Sachin Pilot",
    "Salman Khurshid",
    "Dr Manmohan Singh",
    "Mallikarjun Kharge",
    "Sonia Gandhi",
    "Rahul Gandhi",
    "Ambika Soni",
    "GAURAV GOGOI",
    "Dr Shashi Tharoor",
    "Meira Kumar",
    " P. Bhattacharya",
    "G.C. Chandrashekhar",
    "P. Chidambaram",
    "Neeraj Dangi",
    "Manish Tewari",
    "Kamal Nath",
    "Manish Tewari",
    "KTS Tulsi",
    "Shaktisinh Gohil",
    "Arvind Kejriwal",
    "Satyendar Jain",
    "Sanjay Singh",
    "Gopal Rai",
    "RAGHAV CHADHA",
    "Sanjay Singh",
    "Atishi",
    "Bhagwant Mann",
    "Tejashvi Yadav",
    "Misa Bharti",
    "Rabri Devi",
    "Manoj Jha",
    "Akhilesh Yadav",
    "AZAM KHAN",
    "UMAR ALI KHAN",
    "Ram Gopal Yadav",
    "Nitish Kumar",
    "Sharad Pawar",
    "Ajit Pawar",
    "Praful Patel",
    "Kumari Mayawati",
    "Satish Mishra",
    "Sangeeta Azad",
    "Girish Chandra",
    "Sanjay Raut",
    "Uddhav Thackeray",
    "Vinayak Raut",
    "MAMTA BANERJEE",
    "Derek O'Brien",
    "Asaddudin Owaisi",
    "Imtiaz Jaleel",
    "Pashupati Kumar Paras",
    "Lok Janshakti Party",
    "Sitaram Yechury",
    "Brinda Karat",
    "Pinaki Mishra",
    "Bhartruhari Mahtab",
    "Yogendra Yadav",
    "N K Premachandran",
    "Captain Amarinder Singh",
    "Chirag Paswan",
    "Raj Thackeray",
    "Agatha Sangma",
    "K R Reddy",
    "Dayanidhi Maran",
    "Kanimozhi Karunanidhi",
    "Anupriya Patel",
    "Harsimrat Kaur Badal",
    "JaganMohan Reddy",
    "Naba Kumar Sarania",
    "Ranjan Gogoi",
    "Sumalatha Ambareesh",
    "naveen Patnaik",
    "K. Chandrashekar Rao",
    "Jagan Mohan Reddy",
    "Pinarayi Vijayan",
    "M. K. Stalin",
    "H. D. Kumaraswamy",
    "N. Chandrababu Naidu",
    "Pawan Kalyan",
    "K. J. George",
    "Akhilesh Yadav",
    "Sharad Pawar",
    "Arvind Kejriwal",
    "K. J. Alphons",
    "Farooq Abdullah",
    "Raghav Chadha",
    "H. D. Deve Gowda",
    "N. Rangasamy",
    "Mehbooba Mufti",
    "H. Vasanthakumar",
    "M. M. Hassan",
    "Jai Ram Thakur",
    "Nitish Kumar",
    "Jagadish Shettar",
    "P. T. R. Palanivel Rajan",
    "P. K. Kunhalikutty",
    "K. K. Shailaja",
    "T. R. Baalu",
    "K. Muraleedharan",
    "N. K. Premachandran",
    ].map((AIPPM) => ({
    value: AIPPM,
    label: AIPPM,
  }));
  const Historic=[
    "Indira Gandhi",
    "Sanjay Gandhi",
    "S. Swaran Singh",
    "Jagjivan Ram",
    "Kodardas Kalidas Shah",
    "Raj Bahadur",
    "Chidambaram Subramaniam",
    "Yashwantrao Chavan",
    "Hemavati Nandan Bahuguna",
    "Nandini Satpathy",
    "DP Chatopadhyay",
    "Mohan Dhariya",
    "KC Pant",
    "Ram Niwas Mirdha",
    "KR Ganesh",
    "General Manoj Mukund Naravane",
    "General Bipin Rawat (Late)",
    "General Vipin Rawat (Late)",
    "Lieutenant General Ranbir Singh",
    "General Dalbir Singh Suhag (Retired)",
    "Lieutenant General KJS Dhillon",
    "Lieutenant General Abhay Krishna",
    "Lieutenant General Anil Chauhan",
    "Lieutenant General Nav K Khanduri",
    "Lieutenant General Pradeep Chandran Nair",
    "Admiral Sunil Lanba (Retired)",
    "Admiral Robin Dhowan (Retired)",
    "Admiral R. Hari Kumar (Retired)",
    "Admiral D. K. Joshi (Retired)",
    "Admiral Karambir Singh",
    "Admiral Sureesh Mehta (Retired)",
    "Admiral Vishnu Bhagwat (Retired)",
    "Admiral L. Ramdas (Retired)",
    "Admiral S. Lanba (Retired)",
    "Admiral K. R. Nair (Retired)",
    "Air Chief Marshal Rakesh Kumar Singh Bhadauria",
    "Air Chief Marshal Birender Singh Dhanoa (Retired)",
    "Air Marshal RKS Bhadauria (Retired)",
    "Air Marshal Arjan Singh (Late)",
    "Air Marshal N. A. K. Browne (Retired)",
    "Air Marshal B. S. Dhanoa (Retired)",
    "Air Marshal R. K. S. Bhadauria",
    "Air Marshal HS Arora",
    "Air Marshal VR Chaudhari",
    "Air Marshal Rajesh Kumar (Retired)",
    ].map((Historic) => ({
    value: Historic,
    label: Historic,
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
          <div className="bgImg">
            <img src={BGimg} className='MobileBG' alt=''/>
            <img src={BgMunReg} className='BGMunreg' alt=''/>
            </div>
            <Navbar  color="transparent"/>
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
                <div className="portfolio">
            <div className="Portfolio1">
                <div className="Portfoliohead">
                    PORTFOLIO 1
                </div>
                <div className="Portfoliosubhead">
                  <div>
                Select a committee
                <Select styles={{
                  backgroundColor:"rgb(48, 77, 127)"
                }}
                  className="Portfolio_options"
                  placeholder="Select Portfolio 1"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={Portfolio}
                />
                </div>
                <div>
                Preference 1
                <Select
                  className="Portfolio_options1"
                  placeholder="Preference 1"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={UNGA}
                />
                </div>
                <div>
                Preference 2
                <Select
                  className="Portfolio_options"
                  placeholder="Preference 2"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={AIPPM}
                />
                </div>
                <div>
                Preference 3
                <Select
                  className="Portfolio_options"
                  placeholder="Preference 3"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={Historic}
                />
                </div>
              
                </div>
            </div>
            <div className="Portfolio1">
                <div className="Portfoliohead">
                    PORTFOLIO 2
                </div>
                <div className="Portfoliosubhead">
                  <div>
                Select a committee
                <Select
                  className="Portfolio_options"
                  placeholder="Select Portfolio 2"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={UNGA}
                />
                </div>
                <div>
                Preference 1
                <Select
                  className="Portfolio_options1"
                  placeholder="Preference 1"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={Portfolio}
                />
                </div>
                <div>
                Preference 2
                <Select
                  className="Portfolio_options"
                  placeholder="Preference 2"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={AIPPM}
                />
                </div>
                <div>
                Preference 3
                <Select
                  className="Portfolio_options"
                  placeholder="Preference 3"
                  value={user.selectedOption}
                  onChange={handleChange1}
                  required
                  // styles={customStyles}
                  options={Historic}
                />
                </div>
              
                </div>
            </div>
            </div>
            <div className="sub-button">
              <Button className="subbutton">Submit</Button>
              </div>  

            {/* <div className='btn-div'>
                <button className='submitbtn' type='submit' value='Submit'>SUBMIT</button>
            </div> */}
            </div>
            
        </div>
    )
}
