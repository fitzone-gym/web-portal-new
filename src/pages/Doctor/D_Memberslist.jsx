import React, {  useState, useEffect } from "react";


import Header from "../../components/header";
import Sidenav from "../../components/Doctor/Sidenav";
import "../../styles/Doctor/memberList.css";




/*popup form */

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import axios from "axios";

function D_MemberList() {
  const [open, setOpen] = React.useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const[query, setQuery] = useState("");
  const[filterValue, setfilterValue] = useState(2);
  const [memberDetail, setMemberDetails] = useState([]);
  const keys = ["first_name", "last_name", "email"];
  console.log(query);

  const handleChange = (event) => {
    setfilterValue(event.target.value);
  };
  console.log(filterValue);

  const handleClickOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  function formatDate(dateTimeString) {
    const formattedString = new Date(dateTimeString).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedString.replaceAll("/", ".");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5400/membersfordoctor/")
      .then((response) => {
        setMemberDetails(response.data.data);
        console.log(memberDetail);
      })
      .catch((error) => console.error("error fetching trainer details"));
  }, []);
 

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
          {/* <div className="sectionHeader">
            <h2>Members</h2>
          </div> */}
          <div
            className="relative  shadow-md sm:rounded-lg"
            style={{ margin: "0px 30px 30px 30px" }}
          >
            <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
              <div>
                <FormControl>
                  <Select
                    // label="Action"
                    placeholder="Action"
                    value={filterValue}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      height: "37px",
                      fontWeight: 500,
                      color: "rgb(107,114,128)",
                      paddingTop: "0.375rem",
                      paddingBottom: "0.375rem",
                      fontSize: 13,
                      borderRadius: 10,
                    }}
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <MenuItem
                      value={2}
                      className="menuItemStyle"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                      }}
                    >
                      All
                    </MenuItem>
                    <MenuItem
                      value={1}
                      className="menuItemStyle"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                      }}
                    >
                      Updated
                    </MenuItem>
                    <MenuItem
                      value={0}
                      className="menuItemStyle"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                      }}
                    >
                      Not-updated
                    </MenuItem>
                  </Select>
                </FormControl>
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
                  onChange={(e) => setQuery(e.target.value)}
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
                    Joined date
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
                {memberDetail.length > 0 ? (
                  memberDetail
                    .filter((member) => {
                      if (filterValue === 1) {
                        // Show members where new Date() - member.joined_date_formatted > 1
                        const currentDate = new Date();
                        const joinedDate = new Date(
                          member.joined_date_formatted
                        );
                        return currentDate - joinedDate > 1;
                      } else if (filterValue === 0) {
                        // Show members where new Date() - member.joined_date_formatted <= 1
                        const currentDate = new Date();
                        const joinedDate = new Date(
                          member.joined_date_formatted
                        );
                        return currentDate - joinedDate <= 1;
                      } else {
                        // Show all members for filterValue === 2
                        return true;
                      }
                    })
                    .filter((member) =>
                      keys.some((key) =>
                        member[key].toLowerCase().includes(query.toLowerCase())
                      )
                    )
                    .map((member) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={member.user_id}
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-table-search-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src={`../src/assets/Users/${member.profile_picture}`}
                            alt="prof. image"
                          />
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              {member.first_name}&nbsp;{member.last_name}
                            </div>
                            <div className="font-normal text-gray-500">
                              {member.email}
                            </div>
                          </div>
                        </th>
                        {}
                        <td className="px-6 py-4">
                          {formatDate(member.joined_date_formatted)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {new Date() - member.joined_date_formatted > 1 ? (
                              <div className="statusBatchOff">Not</div>
                            ) : (
                              <div className="statusBatch">Updated</div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline decoration:none"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleClickOpen(member)}
                          >
                            Report
                          </a>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <p className="pt-2 healthpopUpUserName">
              {selectedMember?.first_name} 
              
            </p>
            <p className="healthpopUpUserAge">{selectedMember?.age} year</p>
          </DialogContentText>
          <div className="pt-10">
            <div className="flex gap-4 pb-3 formInputs">
              <TextField
                id="outlined-read-only-input"
                label="Weight(kg)"
                defaultValue={selectedMember?.weight}
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
                label="Height(cm)"
                defaultValue={selectedMember?.height}
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
                label="BMI"
                defaultValue={selectedMember?.BMI}
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

            <div className="flex gap-4 pt-3">
              <TextField
                id="outlined-read-only-input"
                label="Sugar(mg/dL)"
                defaultValue={selectedMember?.diabetes_level}
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
                defaultValue={selectedMember?.blood_presure}
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
                defaultValue={selectedMember?.cholesterol_level}
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
                defaultValue={selectedMember?.injuries}
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

export default D_MemberList;
