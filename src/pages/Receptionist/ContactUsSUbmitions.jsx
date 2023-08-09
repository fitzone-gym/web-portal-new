/*backend */
"use client";
import React from "react";
import { useEffect, useState } from "react";
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
// import { green } from "@mui/material/colors";

// const primary = green[50];

import Button from "@mui/material/Button";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function Contactus_Form_Submitions() {
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

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  function formatDate(date) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);

    // Split the formatted date into day, month, and year parts
    const [month, day, year] = formattedDate.split(" ");

    // Return the formatted date with uppercase month abbreviation and desired format
    return `${day} ${month} ${year}`;
  }

  const [frommail, setFromMail] = useState("fitzone@gmail.com");
  const [tomail, setToMail] = useState("user@gmail.com");
  const [message, setMessage] = useState("");
  const [replySubmitionID, setReplySubmitionID] = useState("");

  const handleSubmit = (e) => {
    console.log("call here");
    e.preventDefault();

    //send data to the backend
    axios
      .post(
        "http://localhost:5400/contactUsSubmition/contactUsFormReplySubmition",
        {
          replySubmitionID,
          message,
        }
      )
      .then((response) => {
        console.log("Data submit successfully to backend", response.data);
        setReplySubmitionID("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error submitting data", error);
      });
  };


 


 

  const [requestDetails, setRequestDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5400/contactUsSubmition")
      .then((response) => {
        setRequestDetails(response.data.data);
        console.log(requestDetails);
      })
      .catch((error) => console.error("error fetching requests"));
  }, []);

  return (
    <div className="contactUsMessages">
      <Header />
      <Sidenav />
      <div className="contactUsCardSet">
        {requestDetails.length > 0 ? (
          requestDetails.map((request) => (
            <Card
              sx={{ maxWidth: "100%" }}
              className="individualSubmition"
              key={request.submition_id}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#54f098" }} aria-label="recipe">
                    {request.name[0]}
                  </Avatar>
                }
                title={<span className="userName">{request.name}</span>}
                subheader={
                  <span className="submitDate">{formatDate(request.date)}</span>
                }
              />
              <CardContent>
                <Typography variant="body2" className="sumbitProblem">
                  {request.message}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                {/* {setReplySubmitionID(request.submition_id)} */}
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
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                >
                  <ExpandMoreIcon aria-label="show more" />
                </ExpandMore>
                <span className="openReplySection">Reply</span>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <h4 className="replySectionHeader">Reply Mail</h4>
                  <Box sx={{ flexGrow: 1 }}>
                    <form onSubmit={handleSubmit}>
                      <div className="fromToMessageSection">
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <TextField
                              id="outlined-controlled"
                              label="From"
                              name="frommail"
                              value="fitzoneGym@gmail.com" // Set the fixed value
                              size="small"
                              className="formInputs"
                              style={{ fontSize: "13px" }}
                              color="primary"
                              focused
                              disabled // Disable the input
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
                              color="primary"
                              focused
                              disabled
                            />
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container>
                          <Grid item xs={12}>
                            <TextField
                              id="outlined-controlled"
                              label="Reply"
                              name="message"
                              onChange={(e) => {
                                setMessage(e.target.value);
                                setReplySubmitionID(request.submition_id);
                              }}
                              className="formInputs"
                              style={{ fontSize: "13px" }}
                              color="primary"
                              focused
                            />
                          </Grid>
                        </Grid>

                        <br />
                        <Button
                          variant="contained"
                          type="submit"
                          endIcon={
                            <SendIcon
                              className="sendBtnTextIcon"
                              style={{ fontSize: "10px" }}
                            />
                          }
                        >
                          <span className="sendBtnText">Send</span>
                        </Button>
                      </div>

                      <div className="replyMessageSection"></div>
                    </form>
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
  );
}

export default Contactus_Form_Submitions;
