import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';




/*popup form */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { BsCheck2Square } from "react-icons/bs";



export const Attendence_R = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  {
    const [data, setData] = useState([]); // Initialize data with an empty array
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
    const [searchResults, setSearchResults] = useState([]); // State to store search results
  
    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const response = await axios.get("http://localhost:5400/receptionist/memberattendence");
          // console.log("tt"+ response.data.data); // Check the API response data
          // console.log(typeof response.data.data); // Check the type of response.data
          setData(response.data.data); // Assuming the response contains an array of trainer objects
        } catch (error) {
          console.log("Error:", error);
        }
      };
  
      fetchMembers();
    }, []);
  
    const handleSearch = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(
          `http://localhost:5400/receptionist/searchattendence?searchTerm=${searchTerm}`
        );
        setSearchResults(response.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };


    const memberprofilepopup = async (event) => {
      
    }

  return (
    <>
      <div
        className="mt-40"
        style={{
          // marginLeft: "17%",
          marginRight: "20px",
          marginLeft: "17%",
          marginTop: "200px",
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* <div className="sectionHeader">
            <h2>Members</h2>
          </div> */}

        <div
          className="relative  shadow-md sm:rounded-lg"
          style={{ margin: "0px 30px 30px 30px" }}
        >
          <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
            {/* <a href="/Receptionist/allattendence">
            <button
                  type="submit"
                  className="ml-[0%] ml-0 text-white absolute left-0 bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{
                    marginTop: -41,
                  }}
                >
                  See All
                </button></a> */}
            <div></div>
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
                  placeholder="Search for users"
                />
                <button
                  type="submit"
                  className="text-black
                 absolute right-2.5 w-18 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2"
                  style={{
                    marginTop: -35,
                  }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Member Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Check-in Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Check-out Time
                </th>

                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {searchResults.length > 0
                ? searchResults.map((member, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {member.first_name + " " + member.last_name}{" "}
                      </th>
                      <td className="px-6 py-4">{member.Date} </td>
                      <td className="px-6 py-4">{member.Checkin}</td>{" "}
                      <td className="px-6 py-4">{member.Checkout}</td>
                      <td className="px-6 py-4">
                        {member.Checkout === null ? (
                          <div
                            style={{
                              fontSize: 18,
                              color: "#C70039",
                              fontWeight: "bold",
                            }}
                          >
                            <BsCheck2Square />
                          </div>
                        ) : (
                          <div
                            style={{
                              fontSize: 15,
                              color: "#419197",
                              fontWeight: "bold",
                            }}
                          >
                            X
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                : data.map((member, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {member.first_name + " " + member.last_name}{" "}
                        </th>
                        <td className="px-6 py-4">{member.Date} </td>
                        <td className="px-6 py-4">{member.Checkin}</td>{" "}
                        <td className="px-6 py-4">{member.Checkout}</td>
                        <td className="px-6 py-4">
                          {member.Checkout === null ? (
                            <div
                              style={{
                                fontSize: 18,
                                color: "#C70039",
                                fontWeight: "bold",
                              }}
                            >
                              <BsCheck2Square />
                            </div>
                          ) : (
                            <div
                              style={{
                                fontSize: 15,
                                color: "#419197",
                                fontWeight: "bold",
                              }}
                            >
                              X
                            </div>
                          )}
                          {/* {member.Checkout === null ? (
                            <div>
                              {" "}
                              <ClearIcon />{" "}
                            </div>
                          ) : (
                            <div>
                              {" "}
                              <CheckIcon />{" "}
                            </div>
                          )} */}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>

      {/* dialog popup */}
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <p className="pt-2 healthpopUpUserName">Neil singh</p>
            <p className="healthpopUpUserAge">25 year</p>
          </DialogContentText>
          <div className="pt-10">
            <div className="flex gap-4 pb-3 formInputs">
              <p className="healthpopUpUserAge">25 year</p>
            </div>
            <div className="flex gap-4 pb-3 formInputs">
              <p className="healthpopUpUserAge">25 year : </p>
              <p className="healthpopUpUserAge">25 year</p>
            </div>

            <div className="flex gap-4 pt-3">
              <TextField
                id="outlined-read-only-input"
                label="Sugar(mg/dL)"
                defaultValue="70-100"
                size="small"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
              />

              <TextField
                id="outlined-read-only-input"
                label="Blood Peasure(mmHg)"
                defaultValue="120-129"
                size="small"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
              />

              <TextField
                id="outlined-read-only-input"
                label="Colestrol Level(mg/dL)"
                defaultValue="200-239"
                size="small"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    color: "gray",
                    fontWeight: 500,
                  },
                }}
              />
            </div>

            <div className="pt-6">
              <TextField
                id="outlined-read-only-input"
                label="Inguries"
                defaultValue="Mild abrasions and contusions on the forehead and right cheek.No signs of skull fracture or concussion observed.Recommended wound cleaning and application of antibiotic ointment."
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
}}

export default Attendence_R;