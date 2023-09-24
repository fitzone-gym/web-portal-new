import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Doctor/profile.css";
import profile from "../../assets/profile2.jpg";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import axios from "axios";


/*edit popup */
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";

  
let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#898e8f",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

function Profile() {


const [open, setOpen] = useState(false);


const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  
const [profileDetail, setprofileDetail] = useState([]);

const fetchProfileDetails = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5400/auth/memberProfile/${sessionStorage.getItem("role_id")}/${sessionStorage.getItem("id")}`
    );
    setprofileDetail(response.data.data); 
    const profileDetailss = response.data.data;
    console.log("profileDetails",profileDetailss);
  } catch (error) {
    console.log("Error:", error);
  }
};

// console.log(profileDetail.last_name)
const [firstname, setfirstName] = useState('');
const [lastname, setlastName] = useState('');
const [contactno, settpNumber] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
useEffect(() => {
  if (profileDetail) {
    setfirstName(profileDetail.first_name || "");
    setlastName(profileDetail.last_name || "");
    settpNumber(profileDetail.phone_no || "");
    setEmail(profileDetail.email || "");
    setMessage(profileDetail.message || "");
  }
}, [profileDetail]);



// const form = useRef();

const handleSubmit = (e) => {
  console.log("callme");
  setOpen(false);
  e.preventDefault();
  axios
    .patch(
      `http://localhost:5400/auth/updateProfile/${sessionStorage.getItem("id")}`,
      {firstname, lastname, email, contactno, message }
    )

    .then((response) => {
      console.log("Data submitted successfully to backend", response.data);
      // Update reply_or_not_state after successful submission
    })
    .catch((error) => {
      console.log("Error submitting data", error);
    });
};

useEffect(() => {
  fetchProfileDetails();
}, []);


  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />

        <div className="userProfile">
          <div>
            <div className=" profileDetails">
              <div className="" style={{ textAlign: "right" }}>
                <button
                  className="bg-gray-900 hover:bg-gray-700 pl-8 pr-8 text-white font-bold py-2 px-4 rounded"
                  onClick={handleClickOpen}
                >
                  Edit
                </button>

                <div className="editDialogBox">
                  <Dialog open={open} onClose={handleClose}>
                    <div className="editDialogBoxContent">
                      <h3 className="pb-8 font-bold text-black">
                        Edit Profile
                      </h3>
                      <ThemeProvider theme={theme}>
                        <form>
                          <div className="fromToMessageSection">
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <TextField
                                  id="outlined-controlled"
                                  label="First Name"
                                  name="firstname"
                                  value={firstname}
                                  size="small"
                                  InputProps={{
                                    style: {
                                      fontSize: "13px",
                                      fontFamily: "Poppins, sans-serif",
                                      color: "gray",
                                      fontWeight: 500,
                                      width: "250px",
                                      height: "40px",
                                    },
                                  }}
                                  onChange={(e) => setfirstName(e.target.value)}
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  id="outlined focus:border-none"
                                  label="Last Name"
                                  name="lastname"
                                  value={lastname} // Use the state variable 'lastname' here
                                  InputProps={{
                                    style: {
                                      fontSize: "13px",
                                      fontFamily: "Poppins, sans-serif",
                                      color: "gray",
                                      fontWeight: 500,
                                      height: "40px",
                                      width: "250px",
                                    },
                                  }}
                                  onChange={(e) => setlastName(e.target.value)} // Update 'lastname' state
                                />
                              </Grid>
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                              <TextField
                                id="outlined-controlled"
                                label="Email"
                                name="email"
                                value={email}
                                InputProps={{
                                  style: {
                                    fontSize: "13px",
                                    fontFamily: "Poppins, sans-serif",
                                    color: "gray",
                                    fontWeight: 500,
                                    width: "525px",
                                    height: "40px",
                                  },
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                              <TextField
                                id="outlined-controlled"
                                label="Contact"
                                name="contact"
                                value={contactno}
                                size="small"
                                InputProps={{
                                  style: {
                                    fontSize: "13px",
                                    fontFamily: "Poppins, sans-serif",
                                    color: "gray",
                                    fontWeight: 500,
                                    width: "525px",
                                    height: "40px",
                                  },
                                }}
                                onChange={(e) => settpNumber(e.target.value)}
                              />
                            </Grid>
                            <br />
                            <Grid item xs={12} style={{ fontSize: "13" }}>
                              <TextField
                                id="outlined-controlled"
                                label="Message"
                                name="message"
                                value={message}
                                size="small"
                                InputProps={{
                                  style: {
                                    fontSize: "13px",
                                    fontFamily: "Poppins, sans-serif",
                                    color: "gray",
                                    fontWeight: 500,
                                    width: "525px",
                                    height: "50px",
                                  },
                                }}
                                onChange={(e) => setMessage(e.target.value)}
                              />
                            </Grid>
                          </div>
                          <div className="replyMessageSection"></div>
                        </form>
                      </ThemeProvider>
                    </div>
                    <DialogActions>
                      <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 mr-5 mb-5 rounded shadow"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              <div className="p-4 text-center">
                <img
                  className="userProfileImage"
                  src={`../src/assets/Users/${sessionStorage.getItem(
                    "profile_image"
                  )}`}
                  // src="../src/assets/Users/Janith.jpg"
                  alt=""
                />
              </div>
              <div className=" fw-600 userProfileDtails">
                <p className="userNameProfile">
                  {firstname}&nbsp;
                  {lastname}
                </p>
                <p className="userEmailProfile">{email}</p>
                <p className="qualfication"> {profileDetail.qualification}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-center pt-6 contactIcon">
            <Link to={profile.facebook}>
              <FacebookIcon className="facebookIcon" />
            </Link>
            <Link to={profile.twitter}>
              <TwitterIcon className="twitterIcon" />
            </Link>
            <Link to={profile.instergram}>
              <LinkedInIcon className="LinkedInIcon" />
            </Link>
          </div>

          <div className="pl-6 text-justify  pt-12 message">
            <span>{message}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
