import React, { useRef, useState, useEffect } from "react";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Doctor/appointments.css";

/*popup form */

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import axios from "axios";

import jsPDF from "jspdf";

import html2canvas from "html2canvas";

// const handleDownloadPDF = () => {
//   console.log("download call")
//   const doc = new jsPDF("landscape", "px", "a4", "false");
//   // doc.text(120,219,"Download");
//   const content = document.getElementById("popup-content");

//   doc.fromHTML(content, 15, 15); // Convert content to PDF
//   doc.save("popup.pdf"); // Download the PDF
// };

const handleDownloadPDF = () => {
  const content = document.getElementById("popup-content");

  html2canvas(content).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width * 1.2) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("popup.pdf");
  });
};

function D_Appointments() {
  const [open, setOpen] = React.useState(false);

  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5400/memberdoctorappointment/")
      .then((response) => {
        setAppointments(response.data.data);
        console.log(appointments);
      })
      .catch((error) => console.error("error fetching trainer details"));
  }, []);

  /* update profile */
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [BMI, setBMI] = useState("");
  const [diabetes_level, setdiabeteslevel] = useState("");
  const [blood_presure, setbloodpresure] = useState("");
  const [cholesterol_level, setcholesterollevel] = useState("");
  const [injuries, setinjuries] = useState("");
  const [id, setId] = useState("");

  const handleClickOpen = (appointment) => {
    setSelectedAppointment(appointment);
    setweight(appointment.first_name || "");
    setheight(appointment.last_name || "");
    setBMI(appointment.phone_no || "");
    setdiabeteslevel(appointment.email || "");
    setbloodpresure(appointment.message || "");
    setcholesterollevel(appointment.email || "");
    setinjuries(appointment.message || "");
    setId(appointment.member_id || "");
    setOpen(true);
  };

  const handleSubmit = (e) => {
    console.log("callme");
    setOpen(false);
    e.preventDefault();
    const updatedAppointment = {
      ...selectedAppointment,
      weight,
      height,
      BMI,
      diabetes_level,
      blood_presure,
      cholesterol_level,
      injuries,
      id,
    };
    axios
      .patch(
        "http://localhost:5400/memberdoctorappointment/updateHealthDetails/",
        {
          updatedAppointment,
        }
      )
      .then((response) => {
        console.log("Data submitted successfully to backend", response.data);
        // Update reply_or_not_state after successful submission
      })
      .catch((error) => {
        console.log("Error submitting data", error);
      });
  };

  // const handleClickOpenNew = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="contactUsMessages">
        <Header />
        <Sidenav />

        <div
          className=""
          style={{
            marginRight: "20px",
            marginLeft: "17%",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          <div
            className="relative  shadow-md sm:rounded-lg"
            style={{ margin: "0px 30px 30px 30px" }}
          >
            <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
              <div>
                <button
                  id="dropdownActionButton"
                  data-dropdown-toggle="dropdownAction"
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Action button</span>
                  Next 2 weeks
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownAction"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Reward
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Promote
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Activate account
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete User
                    </a>
                  </div>
                </div>
              </div>
              <label for="table-search" className="sr-only">
                Search
              </label>
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
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Appointment Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appointment) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={appointment.id}
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
                        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src={`../src/assets/Users/${appointment.profile_picture}`}
                          alt="Jese image"
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {appointment.first_name} {appointment.last_name}
                          </div>
                          <div className="font-normal text-gray-500">
                            {appointment.email}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{appointment.created_at}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {appointment.reason === "Consultant purpose" ? (
                            <div className="statusBatch">Old</div>
                          ) : (
                            <div className="statusBatchOff">New</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {appointment.reason === "Consultant purpose" ? (
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleClickOpen(appointment)}
                          >
                            View
                          </a>
                        ) : (
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            // onClick={handleClickOpenNew}
                            onClick={() => handleClickOpen(appointment)}
                          >
                            View
                          </a>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>No data</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* dialog popup */}
      <Dialog open={open} onClose={handleClose} id="popup-content">
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <p className="pt-2 formTopic">Health Check</p>
          </DialogContentText>
          <div className="pt-10">
            <div className=" pb-3">
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={selectedAppointment?.first_name}
                size="small"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "13px",
                    width: "550px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                // onChange={(e) => selectedAppointment(e.target.value)}
              />
            </div>

            <div className="pt-3 pb-3">
              <TextField
                id="outlined-read-only-input"
                label="Age"
                defaultValue={selectedAppointment?.age}
                size="small"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "13px",
                    width: "550px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                // onChange={(e) => selectedAppointment(e.target.value)}
              />
            </div>

            <div className="pt-3 pb-3">
              <TextField
                id="outlined-read-only-input"
                label="Reason"
                defaultValue={selectedAppointment?.reason}
                size="small"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "13px",
                    width: "550px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                // onChange={(e) => selectedAppointment(e.target.value)}
              />
            </div>

            <div className="flex gap-4 pb-3 pt-3 formInputs">
              <TextField
                id="outlined-input"
                label="Weight(kg)"
                defaultValue={selectedAppointment?.weight}
                size="small"
                // InputLabelProps={{
                //   style: styles.label, // Apply the style to the label
                // }}
                InputProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                onChange={(e) => setweight(e.target.value)}
              />

              <TextField
                id="outlined-input"
                label="Height(cm)"
                defaultValue={selectedAppointment?.height}
                size="small"
                InputProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                onChange={(e) => setheight(e.target.value)}
              />

              <TextField
                id="outlined-read-only-input"
                label="BMI"
                defaultValue={selectedAppointment?.BMI}
                size="small"
                InputProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                onChange={(e) => setBMI(e.target.value)}
              />
            </div>

            <div className="flex gap-4 pt-3">
              <TextField
                id="outlined-input"
                label="Sugar(mg/dL)"
                defaultValue={selectedAppointment?.diabetes_level}
                size="small"
                InputProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                onChange={(e) => setdiabeteslevel(e.target.value)}
              />

              <TextField
                id="outlined-input"
                label="Blood Peasure(mmHg)"
                defaultValue={selectedAppointment?.blood_presure}
                size="small"
                InputProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                onChange={(e) => setbloodpresure(e.target.value)}
              />

              <TextField
                id="outlined-input"
                label="Colestrol Level(mg/dL)"
                defaultValue={selectedAppointment?.cholesterol_level}
                size="small"
                InputProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                onChange={(e) => setcholesterollevel(e.target.value)}
              />
            </div>

            <div className="pt-6">
              <TextField
                id="outlined-input"
                label="Inguries"
                defaultValue={selectedAppointment?.injuries}
                size="small"
                InputProps={{
                  style: {
                    fontSize: "13px",
                    width: "550px",
                    height: "50px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
                onChange={(e) => setinjuries(e.target.value)}
              />

              <TextField
                id="outlined-input"
                label="ID"
                defaultValue={selectedAppointment?.id}
                size="small"
                InputProps={{
                  style: {
                    fontSize: "13px",
                    width: "550px",
                    height: "50px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                    display: "none",
                  },
                }}
                hidden
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            // onClick={handleClose}
            className="downloadBtn"
            onClick={handleDownloadPDF}
          >
            Downloard
          </button>

          <button onClick={handleSubmit} className="dialogCloseBtn">
            UPDATE
          </button>
          <button onClick={handleClose} className="dialogCloseBtn">
            CLOSE
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default D_Appointments;
