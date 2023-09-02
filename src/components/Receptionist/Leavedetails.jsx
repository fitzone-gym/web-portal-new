import React, { useRef, useState, useEffect } from "react";





/*popup form */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";



function Leavedetails() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

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
                  placeholder="Search for Leave"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
             
                  <th scope="col" className="px-6 py-3">
                    Leave ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    No of Days
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date To
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                   
                
                    <div className="pl-3">
                      <div className="text-base font-semibold">156</div>
                     
                    </div>
                  </th>
                  <td className="px-6 py-4">02</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="statusBatchOff">17.08.2023</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="statusBatchOff">18.08.2023</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                   
                      Sick LEave
                   
                  </td>
                </tr>
         
  
              
             
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
              <TextField
                id="outlined-read-only-input"
                label="Weight(kg)"
                defaultValue="55"
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
                defaultValue="180"
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
                defaultValue="20.5"
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
}

export default Leavedetails;