import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

import Header from "../../components/Receptionist/header";
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

let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
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



function Contactus_Form_Submitions() {
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
      .get("http://localhost:5400/contactUsSubmition")
      .then((response) => {
        setRequestDetails(response.data.data);
        console.log(requestDetails);
      })
      .catch((error) => console.error("error fetching requests"));
  }, []);

  /*send mail */
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const handleSendingEmailStatus = (requestId) => {
    setIsSendingEmail((prevState) => ({
      ...prevState,
      [requestId]: !prevState[requestId], // Toggle the state for the clicked request
    }));
  };

  /* form submition */
  const form = useRef();

  const sendEmail = (data, requestId) => {
    emailjs
      .sendForm(
        "service_sr7pfvh",
        "template_0xugg69",
        form.current,
        "5JSmzYAJ1ZRnFDW9-"
      )
      .then(
        (result) => {
          handleSendingEmailStatus(requestId);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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

  /*delete reply */
  

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
          <div className="sectionHeader">
            <h2>Get in Touch</h2>
          </div>

          {requestDetails.length > 0 ? (
            requestDetails.map((request) => (
              <Card
                sx={{ maxWidth: "100%" }}
                className="individualSubmition"
                key={request.submition_id}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: "#54f098" }}
                      aria-label="recipe"
                      style={{ backgroundColor: "#ffba16" }}
                    >
                      {request.name[0]}
                    </Avatar>
                  }
                  title={<span className="userName">{request.name}</span>}
                  subheader={
                    <span className="submitDate">
                      {formatDate(request.date)}
                    </span>
                  }
                />
                <CardContent>
                  <Typography variant="body2" className="sumbitProblem">
                    {request.message}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {request.reply_or_not_state === 0 ? (
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

                  <ExpandMore
                    className="openReplySection"
                    expand={expandedRequests[request.submition_id]}
                    onClick={() => handleExpandClick(request.submition_id)} // Pass the request ID to the function
                    aria-expanded={expandedRequests[request.submition_id]}
                  >
                    <ExpandMoreIcon aria-label="show more" />
                  </ExpandMore>
                  <span className="openReplySection">Reply</span>
                </CardActions>
                <Collapse
                  in={expandedRequests[request.submition_id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <h4 className="replySectionHeader">Reply Mail</h4>
                    <Box sx={{ flexGrow: 1 }}>
                      <ThemeProvider theme={theme}>
                        <form
                          ref={form}
                          onSubmit={(e) =>
                            handleSubmit(
                              e,
                              request.submition_id,
                              isSendingEmail[request.submition_id]
                            )
                          }
                        >
                          <div className="fromToMessageSection">
                            <Grid container spacing={1}>
                              <Grid item xs={6}>
                                <TextField
                                  id="outlined-controlled"
                                  label="From"
                                  name="frommail"
                                  value="fitzonegymmgnt@gmail.com"
                                  size="small"
                                  className="formInputs"
                                  style={{ fontSize: "13px" }}
                                  color="secondary"
                                  focused
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  id="outlined-controlled"
                                  label="To"
                                  name="tomail"
                                  value={request.email}
                                  size="small"
                                  className="formInputs"
                                  style={{ fontSize: "13px" }}
                                  color="secondary"
                                  focused
                                  readonly
                                />
                              </Grid>
                            </Grid>

                            <br />
                            <Grid container>
                              <Grid item xs={12}>
                                {request.reply_or_not_state === 0 ? (
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
                                    value={request.reply_message}
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
                              label="name"
                              name="name"
                              value={request.name}
                              size="small"
                              className="formInputs"
                              style={{ fontSize: "13px", display: "none" }}
                              color="primary"
                              focused
                              hidden
                              readonly
                            />

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
                              value={request.submition_id}
                              size="small"
                              className="formInputs"
                              style={{ fontSize: "13px", display: "none" }}
                              color="primary"
                              focused
                              hidden
                            />

                            <br />

                            <div className="btnSection">
                              {request.reply_or_not_state === 0 ? (
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

                          <div className="replyMessageSection"></div>
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

export default Contactus_Form_Submitions;
