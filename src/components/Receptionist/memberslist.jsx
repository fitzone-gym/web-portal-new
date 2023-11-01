import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profileimage from "../../assets/managerprofile.jpg"
/*popup form */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BsFillCheckCircleFill } from "react-icons/bs";

import "../../styles/Receptionist/memberlist.css";



function getRandomColor() {
  const monthColors = [
    { color: "#ffcb00", borderColor: "yellow", backgroundColor: "#ffffe9" },
    { color: "#003049", borderColor: "#003049", backgroundColor: "#ecedfc" },
    { color: "green", borderColor: "green", backgroundColor: "#dff5e5" },
    { color: "salmon", borderColor: "salmon", backgroundColor: "#faedf2" },
    { color: "black", borderColor: "black", backgroundColor: "#faedf2" },
  ];

  const randomIndex = Math.floor(Math.random() * monthColors.length);
  return monthColors[randomIndex];
}



export const memberlist = () => {

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
          const response = await axios.get("http://localhost:5400/memberDetails/getMembersDetails");
          // console.log("tt"+ response.data.data); // Check the API response data
          // console.log(typeof response.data.data); // Check the type of response.data
          setData(response.data.data); // Assuming the response contains an array of trainer objects
          console.log(response.data.data);
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
          `http://localhost:5400/members/searchMembers?searchTerm=${searchTerm}`
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
            <div></div>
            <label
              for="table-search"
              className="text-black
                 absolute right-2.5 w-18 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2"
            >
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
                  Member ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Member Name
                </th>
                <th scope="col" className="px-6 py-3">
                  E-Mail Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Package Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-4 py-3">
                  Last payment date
                </th>
                <th scope="col" className="px-4 py-3">
                  Payment OK/NOT
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
                      <td className="px-6 py-4">{member.user_id}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {member.first_name + " " + member.last_name}{" "}
                      </th>
                      <td className="px-6 py-4">{member.email} </td>
                      <td className="px-6 py-4">{member.phone_no}</td>{" "}
                      <td className="px-6 py-4">{member.package}</td>
                      <td className="px-6 py-4">{member.emergency_contact}</td>
                      <td className="px-4 py-3">
                        <div
                          style={getRandomColor()}
                          className="statusBatchPayment"
                        >
                          {member.payment_made_date_time}
                        </div>
                      </td>
                      <td>
                        {member.status == 0 ? (
                          <div
                            className=""
                            style={{ fontSize: 14, color: "#C70039" }}
                          >
                            X
                          </div>
                        ) : (
                          <div
                            className=""
                            style={{ fontSize: 14, color: "#419197" }}
                          >
                            <BsFillCheckCircleFill />
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
                        <td className="px-6 py-4">{member.user_id} </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {member.first_name + " " + member.last_name}{" "}
                        </th>
                        <td className="px-6 py-4">{member.email} </td>
                        <td className="px-6 py-4">{member.phone_no}</td>{" "}
                        <td className="px-6 py-4">{member.package}</td>
                        <td className="px-6 py-4">{member.address}</td>
                        <td className="px-4 py-3">
                          <div
                            style={getRandomColor()}
                            className="statusBatchPayment"
                          >
                            {member.payment_made_date_time}
                          </div>
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
          <div className="p-2 text-center">
            {/* <img src={profile} className="userProfileImage" /> */}
            <img
              className="userProfileImage items-center"
              src={profileimage}
              // src="../assets/Users/Janith.jpg"
              alt=""
            />
          </div>
          <DialogContentText>
            <p className="pt-2  text-center healthpopUpUserName">Neil singh</p>
          </DialogContentText>
          <div className="pt-8">
            <div className="flex gap-4 pb-3 formInputs"></div>
            <div className="flex gap-4 pb-3 ">
              <p className="healthpopUpUserAge">Contact No: </p>
              <p className="healthpopUpUserAge">0763572139</p>
            </div>
            <div className="flex gap-4 pt-3">
              <p className="healthpopUpUserAge">Email Address: </p>
              <p className="healthpopUpUserAge">muralijasi@gmail.com</p>
            </div>

            <div className="flex gap-4 pt-3">
              <p className="healthpopUpUserAge">Gender: </p>
              <p className="healthpopUpUserAge"> Male</p>
            </div>

            <div className="flex gap-4 pt-3">
              <p className="healthpopUpUserAge">Package: </p>
              <p className="healthpopUpUserAge">Monthly Packahge</p>
            </div>
            <div className="flex gap-4 pt-3">
              <p className="healthpopUpUserAge">Trainer Name: </p>
              <p className="healthpopUpUserAge">Lasith</p>
            </div>

            <div className="flex gap-4 pt-3">
              <p className="healthpopUpUserAge">Address : </p>
              <p className="healthpopUpUserAge">Sampath Mawatha,Ratnapura</p>
            </div>

            <div className="flex gap-4 pt-3">
              <p className="healthpopUpUserAge">Emergency Contact : </p>
              <p className="healthpopUpUserAge">0773618798</p>
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

export default memberlist;