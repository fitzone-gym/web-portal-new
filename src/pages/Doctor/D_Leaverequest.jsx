import React , {useEffect, useState} from "react";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Doctor/leaverequest.css";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Button from "@mui/material/Button";

/*popup form */

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// import { Datepicker, Input, initTE } from "tw-elements";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import axios from "axios";




function LeaveReq() {

 const [leaveRequests, setleaveRequests] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5400/doctorleaverequests/")
      .then((response) => {
        setleaveRequests(response.data.data);
        console.log(leaveRequests);
      })
      .catch((error) => console.error("error fetching leaverequests details"));
  }, []);
  
  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />

        <div className="container">
          <div
            className="flex justify-between  content"
            style={{
              marginRight: "20px",
              marginLeft: "17%",
              marginTop: "50px",
              textAlign: "center",
            }}
          >
            <div style={{ margin: "0px 30px 30px 30px" }}>
              <div className="addNewLeaveRequest">
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClickOpen}
                >
                  <a>Add New</a>
                </Button>
              </div>
              <div className="leaveList">
                {leaveRequests.length > 0 ? (
                  leaveRequests.map((request) => (
                    <div
                      className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 individualLeaveRequest"
                      key={request.id}
                    >
                      <div className="individualRequestDetails">
                        <div className="topicSection">
                          <h3 className="reason">{request.reason}</h3>

                          {request.acceptance_status === 1 ? (
                            <div className="statusBatchAccept">Accept</div>
                          ) : request.acceptance_status === 2 ? (
                            <div className="statusBatchReject">Reject</div>
                          ) : (
                            <div className="statusBatchPending">Pending</div>
                          )}
                        </div>
                        <br />
                        <div className="otherDetails">
                          <span>From : {request.from_date}</span>
                          <span>To : {request.to_date}</span>
                          <span>
                            {Math.floor(
                              (new Date(request.to_date) -
                                new Date(request.from_date)) /
                                (1000 * 60 * 60 * 24)
                            )}{" "}
                            days
                          </span>
                        </div>
                        <div className="requestDate">
                          Requested on : {request.requested_date}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No data</p>
                )}
              </div>
            </div>
            <div
              className="calenderView"
              style={{
                backgroundColor: "#fbfbea",
                borderRadius: "5px",
                height: "300px",
                boxShadow:
                  "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <p className="pt-2 healthpopUpUserName">Create New Request</p>
          </DialogContentText>
          <div className="pt-10">
            <div className="">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={[
                    "DateRangePicker",
                    "DateRangePicker",
                    "DateRangePicker",
                  ]}
                >
                  <DemoItem
                    label="Select range"
                    component="DateRangePicker"
                    style={{ height: "50px" }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "'Poppins', sans-serif", // Define your desired font family for the label
                        // You can also set other label styles here, such as color, fontSize, etc.
                      },
                    }}
                  >
                    <DateRangePicker
                      calendars={1}
                      style={{
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="pt-6">
              <TextField
                id="outlined-read-only-input"
                label="Reason"
                defaultValue="reason"
                size="small"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "13px",
                    width: "550px",
                    height: "50px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="dialogCloseBtn">
            CLOSE
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LeaveReq;
