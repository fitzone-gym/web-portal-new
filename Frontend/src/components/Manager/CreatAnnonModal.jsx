// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreatAnnonModal = ({ onClose }) => {
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
    <div
      class="text-white"
      style={{
        position: "fixed",
        top: 135,
        left: 450,
        right: 0,
        bottom: 0,
      }}
    >
      <form
        onSubmit={handleSubmit}
        class="bg-[#555555] rounded-3xl border-white/[1.5]"
        style={{
          height: 590,
          width: "65%",
        }}
      >
        <div className="mr-[-90%] mt-4">
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-800"
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
          <h1 class="font-bold text-3xl text-left py-7 px-14 mt-10 mb-4">
            Create New Announcement
          </h1>
        </div>

        <div class="mb-6">
          <label
            class="text-white block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            style={{
              marginLeft: "-78%",
            }}
          >
            Heading
          </label>
          <input
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            style={{
              width: "84%",
              marginLeft: "7.5%",
            }}
            placeholder="Add Heading"
            name="heading"
            onChange={e =>
              setValues({ ...values, heading: e.target.value })
            }
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="text-white block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            style={{
              marginLeft: "-81%",
            }}
          >
            Body
          </label>
          <textarea
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
          class="text-white block mb-2 text-medium font-medium text-gray-900 dark:text-white"
          style={{
            marginLeft: "-77%",
          }}
        >
          Recipients
        </label>

        <div class="flex  ">
          <div class="flex ml-28">
            <input
              type="checkbox"
              class="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              required
            />
          </div>
          <label class="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Members
          </label>

          <div class="flex ml-16 ">
            <input
              type="checkbox"
              class="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              required
            />
          </div>
          <label class="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Trainers
          </label>

          <div class="flex  ml-16">
            <input
              type="checkbox"
              class="w-4 h-4 border border-white rounded bg-gray-400 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800"
              required
            />
          </div>
          <label class="text-white ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Doctor
          </label>
        </div>

        <button
          type="submit"
          class="mt-9 text-white bg-green-500 w-60 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-base px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Publish
        </button>
      </form>
    </div>
  );
};
