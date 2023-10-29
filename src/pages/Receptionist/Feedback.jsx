import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

import Header from "../../components/header";
import Sidenav from "../../components/Receptionist/sidenav";
import "../../styles/Receptionist/contactUsSubmitions.css";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Button from "@mui/material/Button";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Rating from '@mui/material/Rating';

// import { makeStyles } from "@mui/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#003049",
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



function Feedback_R() {
  /*expand reply section */
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  // Keep track of expanded state for each request
  const [expandedRequests, setExpandedRequests] = useState({});
  const handleExpandClick = (requestId) => {
    setExpandedRequests((prevState) => ({
      ...prevState,
      [requestId]: !prevState[requestId], // Toggle the state for the clicked request
    }));
  };

  function formatDate(date) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);

    // Split the formatted date into day, month, and year parts
    const [month, day, year] = formattedDate.split(" ");

    // Return the formatted date with uppercase month abbreviation and desired format
    return `${day} ${month} ${year}`;
  }

  /*get data */
  const [requestDetails, setRequestDetails] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5400/feedbacks/")
      .then((response) => {
        setRequestDetails(response.data.data);
        console.log(requestDetails);
      })
      .catch((error) => console.error("error fetching requests"));
  }, []);

  /*send mail */
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
    const [searchResults, setSearchResults] = useState([]); // State to store search results
  const handleSendingEmailStatus = (requestId) => {
    setIsSendingEmail((prevState) => ({
      ...prevState,
      [requestId]: !prevState[requestId], // Toggle the state for the clicked request
    }));
  };

  /* form submition */
  const form = useRef();



  const handleSubmit = (e, requestId) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    data.replySubmitionID = requestId;
    
    console.log("the dataset", data);
    axios
      .post(
        "http://localhost:5400/contactUsSubmition/contactUsFormReplySubmition",
        data
      )

      .then((response) => {
        console.log("Data submitted successfully to backend", response.data);
        // Update reply_or_not_state after successful submission
        updateReplyStatus(requestId);

        sendEmail(data, requestId);

        setExpandedRequests((prevExpanded) => ({
          ...prevExpanded,
          [requestId]: false,
        }));
      })
      .catch((error) => {
        console.log("Error submitting data", error);
      });
  };

  /*update replied or not state  */
  const updateReplyStatus = (requestId) => {
    setRequestDetails((prevDetails) =>
      prevDetails.map((request) =>
        request.submition_id === requestId
          ? { ...request, reply_or_not_state: 1 } // Update the status
          : request
      )
    );
  };

  // const useStyles = makeStyles({
  //   formInputs: {
  //     fontSize: "13px",
  //     "& .MuiInputBase-input": {
  //       color: "red", // Customize the text color here
  //     },
  //   },
  // });

  //  const classes = useStyles();

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5400/feedbacks/searchfeedback?searchTerm=${searchTerm}`
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
    
      <div className="contactUsMessages">

     
 
        {/* <Disclosure
          as="nav"
          className="bg-gray-800 fixed top-0 left-0 w-full z-50"
        >
          <Header/>
        </Disclosure> */}
        <Header />
        <Sidenav />
        <div className="contactUsCardSet">
          {/* <div className="sectionHeader">
            <h2>Get in Touch</h2>
          </div> */}
                               <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 ">
             
             <label for="table-search" className="sr-only">
               Search
             </label>
             <form onSubmit={handleSearch}>
             <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                 <svg
                   className="w-4 h-4 text-gray-500 dark:text-gray-400"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 20 20"
                 >
                   <path
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                   />
                 </svg>
               </div>
               <input
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 id="table-search-users"
                 className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search for feedback"
               />
                <button
                 type="submit"
                 className="mr-[0%] text-white absolute right-2.5 bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                 style={{
                   marginTop: -41,
                 }}
               >
                 Search
               </button>
             </div>
             </form>
           </div>

          {requestDetails.length > 0 ? (
            requestDetails.map((request) => (
              <Card
                sx={{ maxWidth: "100%" }}
                className="individualSubmition"
                key={request.id}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: "#003049" }}
                      aria-label="recipe"
                      style={{ backgroundColor: "#003049" }}
                    >
                      {request.last_name[0]}
                    </Avatar>
                  }
                  title={<span className="userName">{request.first_name + " " + request.last_name}</span>}
                  subheader={
                    <span className="submitDate">
                      {formatDate(request.date)}
                    </span>
                  }
                />
                <CardContent>
                  <Typography variant="body2" className="sumbitProblem">
                    {request.feedback_description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {request.responce_state === 0 ? (
                    <Button
                      variant="outlined"
                      startIcon={<PendingActionsIcon />}
                      className="responseStateBtnPending"
                      color="error"
                    >
                      Pending
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      startIcon={<MarkEmailReadIcon />}
                      className="responseStateBtn"
                    >
                      Replied
                    </Button>
                  )}
                  
                  <Rating name="read-only" value={request.rating} readOnly />



                  <ExpandMore
                    className="openReplySection"
                    expand={expandedRequests[request.id]}
                    onClick={() => handleExpandClick(request.id)} // Pass the request ID to the function
                    aria-expanded={expandedRequests[request.id]}
                  >
                    <ExpandMoreIcon aria-label="show more" />
                  </ExpandMore>
                  <span className="openReplySection">Reply</span>
                </CardActions>
                <Collapse
                  in={expandedRequests[request.id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <h4 className="replySectionHeader">Reply to the feedback</h4>
                    <Box sx={{ flexGrow: 1 }}>
                      <ThemeProvider theme={theme}>

                        <form
                          ref={form}
                          onSubmit={(e) =>
                            handleSubmit(
                              e,
                              request.id,
                              isSendingEmail[request.id]
                            )
                          }
                        >
                          <div className="fromToMessageSection">
                 

                            <br />
                            <Grid container>
                              <Grid item xs={12}>
                                {request.responce_state === 0 ? (
                                  <TextField
                                    id="outlined-controlled"
                                    label="Reply"
                                    name="ans_message"
                                    className="formInputs"
                                    style={{ fontSize: "13px" }}
                                    color="secondary"
                                    focused
                                  />
                                ) : (
                                  <TextField
                                    id="outlined-controlled"
                                    label="Reply"
                                    name="ans_message"
                                    className="formInputs"
                                    value={request.responce}
                                    style={{ fontSize: "13px" }}
                                    color="secondary"
                                    focused
                                    readonly
                                  />
                                )}
                              </Grid>
                            </Grid>

                            
                            <TextField
                              id="outlined-controlled"
                              label="question"
                              name="question"
                              value={request.message}
                              size="small"
                              className="formInputs"
                              style={{ fontSize: "13px", display: "none" }}
                              color="secondary"
                              focused
                              hidden
                            />

                            <TextField
                              id="outlined-controlled"
                              label="requestID"
                              name="replySubmitionID"
                              value={request.id}
                              size="small"
                              className="formInputs"
                              style={{ fontSize: "13px", display: "none" }}
                              color="primary"
                              focused
                              hidden
                            />

                            <br />

                            <div className="btnSection">
                              {request.responce_state === 0 ? (
                                <Button
                                  variant="contained"
                                  type="submit"
                                  value="Send"
                                  endIcon={
                                    <SendIcon
                                      className="sendBtnTextIcon"
                                      style={{ fontSize: "10px" }}
                                    />
                                  }
                                >
                                  <span className="sendBtnText">Send</span>
                                </Button>
                              ) : (
                                <p></p>
                              )}
                            </div>
                          </div>

                       
                        </form>
                      </ThemeProvider>
                    </Box>
                  </CardContent>
                </Collapse>
              </Card>
            ))
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Feedback_R;
