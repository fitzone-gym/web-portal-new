import React, {  useState, useEffect } from "react";


import Header from "../../components/header";
import Sidenav from "../../components/Doctor/sidenav";
import "../../styles/Doctor/memberList.css";




/*popup form */

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";


import axios from "axios";



function D_MemberList() {

  const [open, setOpen] = React.useState(false);
  const [selectedMember, setSelectedMember] = useState(null);


  // const handleClickOpen = (first_name, last_name, dob, weight,height, suger_level,diabetes_level,cholestirol_level, blood_pleasure,injuries) => {
  //   setOpen(true);
  // };

  const handleClickOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  const [memberDetail, setMemberDetails] = useState([]);

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
                <button
                  id="dropdownActionButton"
                  data-dropdown-toggle="dropdownAction"
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Action button</span>
                  Action
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
                  memberDetail.map((member) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={member.id}
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
                          alt="Jese image"
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

                      {
                        // Sample date string in ISO 8601 format
                        // const dateString =member.joined_date;
                        // // Create a Date object from the ISO 8601 date string
                        // const date = new Date(dateString);
                        // // Get the year, month, and day components from the Date object
                        // const year = date.getFullYear();
                        // const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
                        // const day = String(date.getDate()).padStart(2, '0');
                        // // Format the date as "YYYY-MM-DD" or in any desired format
                        // Sample date string in ISO 8601 format
                      }
                      <td className="px-6 py-4">
                        {member.joined_date_formatted}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {new Date() - member.joined_date_formatted > 1 ? (
                            <div className="statusBatchOff">Not</div>
                          ) : (
                            <div className="statusBatch">Update</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline decoration:none"
                          style={{ textDecoration: "none" }}
                          // onClick={() =>
                          //   handleClickOpen(
                          //     member.first_name,
                          //     member.last_name,
                          //     member.dob,
                          //     member.weight,
                          //     member.height,
                          //     member.suger_level,
                          //     member.diabetes_level,
                          //     member.cholestirol_level,
                          //     member.blood_pleasure,
                          //     member.injuries
                          //   )
                          // }
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
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <p className="pt-2 healthpopUpUserName">
              {selectedMember?.first_name} {selectedMember?.last_name}
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
                // InputLabelProps={{
                //   style: styles.label, // Apply the style to the label
                // }}
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
