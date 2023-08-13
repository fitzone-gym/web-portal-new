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
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";


/*for popup */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";



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

          // Schedule sending an email after 10 minutes
          setTimeout(() => {
            sendEmail(data, requestId);
          }, 0.5 * 60 * 1000); // 10 minutes in milliseconds
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


    /*delete popup */
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


  return (
    <>
      <Dialog
        className="deletePopup"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Delete reply for question."}
        </DialogTitle>
        <DialogContent className="dialogContentSection">
          <DialogContentText
            className="dialogContentText"
            style={{ color: "gray", fontFamily: "'Poppins', sans-serif" }}
          >
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions className="buttonSection">
          <Button
            autoFocus
            onClick={handleClose}
            className="okBtn"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#E54646",
              fontWeight: 600,
            }}
          >
            Delete
          </Button>
          <Button
            onClick={handleClose}
            className="cancelBtn"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#1565c0",
              fontWeight: 600,
            }}
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

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
                disableSpacing /*adding */
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#54f098" }} aria-label="recipe">
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
                      <form
                        ref={form}
                        onSubmit={(e) => handleSubmit(e, request.submition_id)}
                        
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
                                color="primary"
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
                                color="primary"
                                focused
                              />
                            </Grid>
                          </Grid>

                          <br />
                          <Grid container>
                            <Grid item xs={12}>
                              <TextField
                                id="outlined-controlled"
                                label="Reply"
                                name="ans_message"
                                className="formInputs"
                                style={{ fontSize: "13px" }}
                                color="primary"
                                focused
                              />
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
                          />

                          <TextField
                            id="outlined-controlled"
                            label="question"
                            name="question"
                            value={request.message}
                            size="small"
                            className="formInputs"
                            style={{ fontSize: "13px", display: "none" }}
                            color="primary"
                            focused
                            hiddent
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

                            {/* <div className="editDeleteBtn">
                              <IconButton aria-label="edit" className="editbtn">
                                <EditNoteIcon />
                              </IconButton>

                              <IconButton
                                aria-label="delete"
                                className="deletebtn"
                                onClick={handleClickOpen}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </div> */}
                          </div>
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
    </>
  );
}

export default Contactus_Form_Submitions;
