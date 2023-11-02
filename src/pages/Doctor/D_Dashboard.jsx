import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/Sidenav";
import "../../styles/Doctor/dashboard.css";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

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
        console.log(response.data.data);
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
          <div className="flex" style={{ gap: 100 }}>
            <div>
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ textAlign: "left", fontSize: "17px" }}
              >
                Checked Person
              </h2>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-2"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checkbox-table-search-2"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="col"
                      className="px-10 py-3"
                      style={{ marginLeft: "15px" }}
                    >
                      Month
                    </th>
                    <th scope="col" className="px-10 py-3">
                      No of Appointments
                    </th>
                    <th scope="col" className="px-10 py-3">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={appointment.month}
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-2"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-table-search-2"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="pl-3">
                            <div className="text-small font-semibold" style={{fontSize:"13px", fontColor:"gray"}}>
                              {appointment.month}
                            </div>
                          </div>
                        </th>
                        <th>
                          <div
                            className="font-normal text-gray-500"
                            style={{ marginLeft: 70 }}
                          >
                            {appointment.num_appointments}
                          </div>
                        </th>
                        {/* <td className="px-6 py-4">{appointment.created_at}</td> */}
                        <td className="px-10 py-4">
                          <div className="flex items-center">
                            {appointment.value > 0 ? (
                              <div
                                className=""
                                style={{
                                  display: "flex",
                                  color: "#D80032",
                                  fontWeight: "bold",
                                }}
                              >
                                <BsArrowDownShort
                                  style={{ fontSize: 20, color: "" }}
                                />
                                {appointment.value}
                              </div>
                            ) : appointment.value < 0 ? (
                              <div
                                className=""
                                style={{
                                  display: "flex",
                                  color: "#176B87",
                                  fontWeight: "bold",
                                }}
                              >
                                <BsArrowUpShort style={{ fontSize: 20 }} />
                                {appointment.value * -1}
                              </div>
                            ) : (
                              <div
                                className=""
                                style={{
                                  display: "flex",
                                  color: "#FFB000",
                                  fontWeight: "bold",
                                }}
                              >
                                {/* Default case */}

                                {appointment.value}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>No data</p>
                  )}
                </tbody>
              </table>
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
