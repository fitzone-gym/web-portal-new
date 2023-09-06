import React, {useState, useEffect} from "react";
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
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
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
      `http://localhost:5400/auth/memberProfile/${sessionStorage.getItem("user_role")}/${sessionStorage.getItem("id")}`
    );
    setprofileDetail(response.data.data); 
    const profileDetailss = response.data.data;
    console.log("profileDetails",profileDetailss);
  } catch (error) {
    console.log("Error:", error);
  }
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
                                  value={profileDetail.first_name}
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
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  id="outlined-controlled"
                                  label="Last Name"
                                  name="lastname"
                                  value={profileDetail.last_name}
                                  InputProps={{
                                    style: {
                                      fontSize: "13px",
                                      fontFamily: "Poppins, sans-serif",
                                      color: "gray",
                                      fontWeight: 500,
                                      height:"40px",
                                      width:"250px"
                                    },
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                              <TextField
                                id="outlined-controlled"
                                label="Email"
                                name="email"
                                value={profileDetail.email}
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
                              />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                              <TextField
                                id="outlined-controlled"
                                label="Contact"
                                name="contact"
                                value={profileDetail.phone_no}
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
                              />
                            </Grid>
                            <br />
                            <Grid item xs={12} style={{ fontSize: "13" }}>
                              <TextField
                                id="outlined-controlled"
                                label="Message"
                                name="message"
                                value={profileDetail.message}
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
                        onClick={handleClose}
                      >
                        Save
                      </button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              <div className="p-4 text-center">
                {/* <img src={profile} className="userProfileImage" /> */}
                <img
                  className="userProfileImage"
                  src={`../assets/Users/${sessionStorage.getItem(
                    "profile_picture"
                  )}`}
                  // src="../assets/Users/Janith.jpg"
                  alt=""
                />
              </div>
              <div className=" fw-600 userProfileDtails">
                <p className="userNameProfile">
                  {profileDetail.first_name}&nbsp;
                  {profileDetail.last_name}
                </p>
                <p className="userEmailProfile">{profileDetail.email}</p>
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
            <span>{profileDetail.message}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
