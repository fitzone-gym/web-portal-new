import React from "react";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Doctor/leaverequest.css";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Button from "@mui/material/Button";

function LeaveReq() {
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
                <Button variant="contained" color="error">
                  Contained
                </Button>
              </div>
              <div className="leaveList">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 individualLeaveRequest"></div>
              </div>
            </div>
            <div
              className="calenderView"
              style={{
                backgroundColor: "#fbfbea",
                borderRadius: "5px",
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
    </>
  );
}

export default LeaveReq;
