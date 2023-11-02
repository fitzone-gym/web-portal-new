// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const CreatAnnonModal = ({ onClose }) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    status: "",
    date: "",
    time: "",
  });
  var selectedValues = [];
  const handleSubmit = (e) => {
    console.log(selectedValues);

    e.preventDefault();
    setValues({ ...values, status: selectedValues.join(" ") });
    axios
      .post("http://localhost:5400/events/addevent", values)
      .then((res) => {
        console.info(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleCheckBox = (event) => {
    console.log(event.target.checked);
    console.log(event.target.name);
    let checkbox = event.target;
    if (checkbox.checked) {
      // Add the value to the array if the checkbox is checked
      selectedValues.push(checkbox.name);
    } else {
      // Remove the value from the array if the checkbox is unchecked
      var index = selectedValues.indexOf(checkbox.name);
      if (index !== -1) {
        selectedValues.splice(index, 1);
      }
    }
  };

  return (
  
    <div className="fixed inset-0 flex items-center justify-center z-100">
      <div className="fixed inset-0 flex items-center justify-center bg-black opacity-80"></div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#555555] rounded-3xl border-white/[1.5] opacity-200 z-10"
        style={{
          height: 650,
          width: "65%",
        }}
      >
        <div className="mr-[-90%] ">
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
          </button>
        </div>

        <div>
          <h1 className="font-bold text-3xl text-white text-left py-7 px-14 mt-[-2%] mb-4 ml-10">
            Create New Event / Workshop
          </h1>
        </div>

        <div className="mb-6">
          <label
            className="text-white block mb-2 text-lg font-medium dark:text-white"
            style={{
              marginLeft: "-75%",
            }}
          >
            Event Name 
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            style={{
              width: "84%",
              marginLeft: "7.5%",
            }}
            placeholder="Add Event Name"
            name="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="text-white block mb-2 text-lg font-medium dark:text-white"
            style={{
              marginLeft: "-72%",
            }}
          >
            Event Description
          </label>
          <textarea
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            style={{
              width: "84%",
              height: 100,
              marginLeft: "7.5%",
            }}
            placeholder="Add Event Brief Description"
            name="description"
            onChange={(e) => setValues({ ...values, description: e.target.value })}
          ></textarea>
        </div>

        <label
          className="text-white block mb-2 text-medium font-medium text-gray-900 dark:text-white"
          style={{
            marginLeft: "-77%",
          }}
        >
          Event Status
        </label>

        <div className="flex  ">
          <div className="flex ml-28">
            <input
              name="Happening Soon"
              onChange={handleCheckBox}
              type="radio"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Happening Soon
          </label>

          <div className="flex ml-16 ">
            <input
              name="Completed"
              onChange={handleCheckBox}
              type="radio"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Completed
          </label>

          <div className="flex  ml-16">
            <input
              name="Postponed"
              onChange={handleCheckBox}
              type="radio"
              className="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
            />
          </div>
          <label className="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Postponed
          </label>

       
        </div>
        <div className="flex ml-32 mt-5">
          <label
            className="text-white block mb-2 text-lg font-medium dark:text-white mr-10"
          >
            Event Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            min={new Date()}
            placeholder="Selected date"
            onChange={(e) => setValues({ ...values, date: e.target.value })}
          />
          <label
            className="text-white block mb-2 text-lg font-medium dark:text-white mr-10 ml-10"
            for="to"
          >
            Event Time :
          </label>
          <input
            required
            type="time"
            id="time"
            name="time"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            min={new time()}
            onChange={(e) => setValues({ ...values, time: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="mt-9 text-white bg-green-500 w-60 rounded-xl hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-base px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Publish
        </button>
      </form>
    </div>
  );
};