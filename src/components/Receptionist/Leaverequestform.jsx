// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Leaverequestform = ({ onClose }) => {
  const [values, setValues] = useState({
    heading: '',
    body: '',
    to: '',
  });


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/announcement", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    // <div
    //   className="text-white z-10"
    //   style={{
    //     position: "fixed",
    //     top: 135,
    //     left: 450,
    //     right: 0,
    //     bottom: 0,
    //   }}
    // >
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 flex items-center justify-center bg-black opacity-80"></div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#292D36] rounded-3xl border-white/[1.5] opacity-200 z-10"
        style={{
          height: 590,
          width: "65%",
        }}
      >
        <div className="mr-[-90%] ">
         <a href="/Receptionist/leaveRequest">
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-800 mt-4"
            style={{
              width: "28px", // Set the desired width
              height: "28px", // Set the desired height
              color: "#ffffff", // Set the desired color (white)
            }}
          >
            <IoCloseSharp />
          </button></a>
        </div>

        <div>
          <h1 className="font-bold text-3xl text-white text-left py-7 px-14 mt-[-2%] mb-4 ml-10">
            Leave Request Form
          </h1>
        </div>

        <label
          className="text-white block mb-2 text-medium font-medium text-gray-900 dark:text-white"
          style={{
            marginLeft: "-78%",
          }}
        >
          Type of Leave
        </label>

        <div className="flex  ">
          <div className="flex ml-28">
            <input
              type="radio"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              required
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Sick Leave 
          </label>

          <div className="flex ml-16 ">
            <input
              type="radio"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              required
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Casual Leave
          </label>

          <div className="flex  ml-16">
            <input
              type="radio"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              required
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Annual Leave
          </label>
        </div>

        
        <div className="mb-6">
          <label
            className="text-white block mb-2 text-lg font-medium dark:text-white mt-10"
            style={{
              marginLeft: "-81%",
            }}
          >
            Reason
          </label>
          <textarea
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            style={{
              width: "84%",
              height: 139,
              marginLeft: "7.5%",
            }}
            placeholder="Add Body..."
            name="body"
            onChange={e =>
              setValues({ ...values, body: e.target.value })
            }
          ></textarea>
        </div>

        <label
          className="text-white block mb-2 text-medium font-medium text-gray-900 dark:text-white"
          style={{
            marginLeft: "-78%",
          }}
        >
          Date Period
        </label>
        <div className="flex  ml-40 items-center">
        <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-10">
            Date From
          </label>
        <input type="date" id="datemax" name="datemax" max="2023-12-31" min="2023-01-01"/>


        <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-50 mr-10">
            Date To
          </label>
        <input type="date" id="datemax" name="datemax" max="2023-12-31" min="2023-01-01"/>

        <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-50 mr-10">
            No of Days
          </label>
        <input type="text" id="datemax" name="datemax"/>
          </div>
       
        
        <button
          type="submit"
          className="mt-9 text-white bg-green-500 w-60 rounded-xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-base px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Request Leave
        </button>
      </form>
    </div>
  );
};  


export default Leaverequestform