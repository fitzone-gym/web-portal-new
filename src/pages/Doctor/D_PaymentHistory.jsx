import React, { useRef, useState, useEffect } from "react";

import Header from "../../components/header";
import Sidenav from "../../components/Doctor/Sidenav";
import "../../styles/Doctor/paymenthistory.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import axios from "axios";
// Function to pick a random color from the array
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



function D_Payments() {
  
  const [paymentDetails, setpaymentDetails] = useState([]);
  const [query, setQuery] = useState("");
  const [filterValue, setfilterValue] = useState("");
  const keys = ["month", "amount","id"];
  console.log(query);

  const handleChange = (event) => {
    setfilterValue(event.target.value);
  };
  console.log(filterValue);

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
      .get("http://localhost:5400/doctorpayments/")
      .then((response) => {
        setpaymentDetails(response.data.data);
        console.log(paymentDetails);
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
            // marginLeft: "17%",
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
                {/* <FormControl>
                  <Select
                    // label="Action"
                    placeholder="Last 12 months"
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
                </FormControl> */}
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
                    Payment ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Payment Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amout (LKR)
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentDetails.length > 0 ? (
                  paymentDetails.map((payment) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={payment.id}
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
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            #{payment.id}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        {formatDate(payment.payment_date)}
                      </td>
                      <td className="px-6 py-4">
                        {/* <div className="flex items-center">
                          <div className="statusBatch">{payment.month}</div>
                        </div> */}
                        <div className="flex items-center">
                          <div style={getRandomColor()} className="statusBatch">
                            {payment.month}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-blue-600 dark:text-blue-500 DSalaryAmount">
                          {payment.amount}
                        </p>
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
    </>
  );
}

export default D_Payments;
