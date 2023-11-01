import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/Sidenav";
import "../../styles/Doctor/dashboard.css";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import axios from "axios";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Number of Patients Checked",
      data: [10, 15, 8, 12, 20, 18, 25, 22, 17, 14, 16, 19], // Example data, replace with actual data
      backgroundColor: "#4F46E5", // Bar color
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Number of Patients",
        color: "#333", // Y-axis label color
      },
    },
    x: {
      title: {
        display: true,
        text: "Months",
        color: "#333", // X-axis label color
      },
    },
  },
};

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [noOfTodayAppointments, setnoOfTodayAppointmets] = useState(0);
  const [noOfAppointmentsForNextweek, setnoOfAppointmentsForNextweek] =
    useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5400/doctordashboard/todayAppointments")
      .then((response) => {
        setnoOfTodayAppointmets(response.data.data.AppointmentsToday);
      })
      .catch((error) => console.error("error fetching trainer details"));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5400/doctordashboard/nextWeekAppointments")
      .then((response) => {
        setnoOfAppointmentsForNextweek(response.data.data.Appointments);
      })
      .catch((error) => console.error("error fetching trainer details"));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5400/doctordashboard/")
      .then((response) => {
        setAppointments(response.data.data);
        console.log(appointments);
      })
      .catch((error) => console.error("error fetching trainer details"));
  }, []);

  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />

        <div
          style={{
            marginRight: "20px",
            marginLeft: "20%",
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <div className="flex" style={{ gap: 425 }}>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Checked Person</h2>
              {/* <Bar data={data} options={options} /> */}
            </div>

            <div>
              <div
                className="calenderView"
                style={{
                  backgroundColor: "#fbfbea",
                  borderRadius: "5px",
                  height: "300px",
                  width: "350px",
                  boxShadow:
                    "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </div>
              <br />

              <div className="flex" style={{ gap: 40 }}>
                <div className="max-w-70 rounded overflow-hidden shadow-lg mb-20">
                  <div className="px-6 py-9">
                    <div className="text-gray-700 font-bold text-sm mb-2 ">
                      Today's
                    </div>
                    <div className="text-gray-700 font-bold text-sm mb-2 ">
                      Appointments
                    </div>
                    <p className="todayAppointments">{noOfTodayAppointments}</p>
                  </div>
                </div>

                <div className="max-w-70 rounded overflow-hidden shadow-lg mb-20">
                  <div className="px-6 py-8">
                    <div className="text-gray-700 font-bold text-sm mb-2 ">
                      Next week
                    </div>
                    <div className=" text-gray-700 font-bold text-sm mb-2 ">
                      Appointments
                    </div>
                    <p className="text-black nextWeekAppointment">
                      {noOfAppointmentsForNextweek}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
