import React , {useEffect, useState} from "react";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Doctor/leaverequest.css";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Button from "@mui/material/Button";

/*popup form */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "axios";

function LeaveReq() {
  const [leaveRequests, setleaveRequests] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [reason, setReason] = React.useState("");
  const [fromDate, setFromDate] = React.useState("");
  const [toDate, setToDate] = React.useState("");
  const[dateRangeError, setdateRangeError] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) =>{
    console.log("call me");
    setOpen(false);
    e.preventDefault();
    const newLeaveReques = {
      fromDate,
      toDate,
      reason, 
    }
    console.log(newLeaveReques);
    axios.post("http://localhost:5400/doctorleaverequests/createLeaveRequest", 
      {fromDate, toDate, reason},
    )
    .then((response) => {
      console.log("Data submitted successfully to backend", response.data);
      const createdRequest = response.data;
      setleaveRequests((leaveRequests) => [...leaveRequests, createdRequest]);
    })
    .catch((error)=>{
      console.log("Error submitting data", error);
    })
  }

  function formatDateTime(dateTimeString) {
    const formattedString = new Date(dateTimeString).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedString.replaceAll("/", ".");
  }

  function formatDate(dateTimeString) {
    const formattedString = new Date(dateTimeString).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedString.replaceAll("/", ".");
  }

  //date validation

  const validateDateRange = (range, reason) => {
    const maxDateRange = {
      "Training/Professional Development": 7,
      "Emergency Leave": 5,
      "Other": 5,
    };
    const selectedReasonDateRange = maxDateRange[reason];
    setFromDate(range[0]);
    setToDate(range[1]);
    const dateDifference = (range[1] - range[0]) / (1000 * 3600 * 24);
    console.log(dateDifference, selectedReasonDateRange);
    if (dateDifference > selectedReasonDateRange) {
      setdateRangeError("Invalid Range");
    }
    console.log(dateRangeError);
  };

  const handleDateRangeChange = (range) => {
     validateDateRange(range, reason);
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
                          <span>From : {formatDate(request.from_date)}</span>
                          <span>To : {formatDate(request.to_date)}</span>
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
                          Requested on :{" "}
                          {formatDateTime(request.requested_date)}
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
            <FormControl sx={{ m: 1, ml: 0, minWidth: 500 }} size="small">
              <InputLabel id="demo-select-small-label">Reason</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                // value={reason}
                label="reason"
                onChange={(e) => setReason(e.target.value)}
                // onChange={handleChange}
              >
                <MenuItem value={"Training/Professional Development"}>
                  Training/Professional Development
                </MenuItem>
                <MenuItem value={"Emergency Leave"}>Emergency Leave</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>

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
                        fontFamily: "'Poppins', sans-serif",
                      },
                    }}
                  >
                    <DateRangePicker
                      calendars={1}
                      // onChange={(range) => {
                      //   setFromDate(range[0]);
                      //   setToDate(range[1]);
                      //   handleDateRangeChange;
                      // }}
                      onChange={handleDateRangeChange}
                      style={{
                        fontSize: "12px",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    />
                    {dateRangeError != "" && (
                      <p className="dataRangeError">{dateRangeError}</p>
                    )}
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="pt-6"></div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={handleSubmit} className="dialogCloseBtn">
            CREATE
          </button>
          <button onClick={handleClose} className="dialogCloseBtn">
            CLOSE
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LeaveReq;
