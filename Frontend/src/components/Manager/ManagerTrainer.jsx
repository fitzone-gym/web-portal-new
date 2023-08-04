import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddTrainerModal from "./AddTrainerModal";

export const ManagerTrainer = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:8081/trainers")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/manager/staffmembers/trainers/${trainer.id}`);
      // Perform any additional actions (e.g., refreshing the list) after successful deletion
    } catch (error) {
      console.error("Error deleting trainer:", error);
      // Handle errors if necessary
    }
  };

  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // history.push("/Staffmembers/Trainer");
  };

  return (
    <div
      className=""
      style={{
        position: "relative",
        top: -25,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <h1 className="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Gym Trainers
        </h1>
      </div>

      <div className="w-[110%]">
        <div className="grid grid-flow-col auto-cols-2 bg-blue-900 ml-20 pt-6 pb-6 rounded-t-lg ">
          <div className="text-white text-2xl ml-5">Trainers Details</div>
          <div
            className=""
            style={{
              marginLeft: 600,
            }}
          >
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-[120%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Name,Level..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 mr-[-20%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{
                    marginTop: -41,
                  }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center ml-24 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                height: 45,
              }}
            >
              <svg
                className="w-4 h-4 text-white dark:text-white mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                />
              </svg>
              Export
            </button>
          </div>

          <div className="">
            <Link to="/Staffmembers/Trainer/Addtrainer">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  height: 45,
                }}
                onClick={handleAddNewClick} // Call the function to show the modal
              >
                <div className="mr-1">
                  <FaPlus />
                </div>
                Add New
              </button>
            </Link>

            {/* Render the modal conditionally */}
            {showModal && <AddTrainerModal onClose={handleCloseModal} />}
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Trainer name
                </th>
                <th scope="col" className="px-6 py-3">
                  Joined Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone No
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((trainers, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {trainers.first_name + " " + trainers.last_name}
                    </th>
                    <td className="px-6 py-4">{trainers.joined_date}</td>
                    <td className="px-6 py-4">{trainers.email}</td>
                    <td className="px-6 py-4">{trainers.phone_no}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/Staffmembers/Trainer/${trainers.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                      >
                        View
                      </Link>

                      <Link
                        onClick={handleDelete}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//  <tr className="border-b bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
//  <th
//     scope="row"
//     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//   >
//     Lasith Senadheera
//   </th>
//   <td className="px-6 py-4">30 September 2023</td>
//   <td className="px-6 py-4">lasith@gmail.com</td>
//   <td className="px-6 py-4">0714667864</td>
//   <td className="px-6 py-4">
//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
//     >
//       View
//     </a>

//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//     >
//       Delete
//     </a>
//   </td>
// </tr>
// <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
//   <th
//     scope="row"
//     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//   >
//     Kalani Ranasinghe
//   </th>
//   <td className="px-6 py-4">7th October 2022</td>
//   <td className="px-6 py-4">kalanirana@gmail.com</td>
//   <td className="px-6 py-4">0701237695</td>
//   <td className="px-6 py-4">
//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
//     >
//       View
//     </a>
//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//     >
//       Delete
//     </a>
//   </td>
// </tr>
// <tr className="border-b bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
//   <th
//     scope="row"
//     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//   >
//     Damitha Senadheera
//   </th>
//   <td className="px-6 py-4">6th January 2020</td>
//   <td className="px-6 py-4">damitha@gmail.com</td>
//   <td className="px-6 py-4">0761234567</td>
//   <td className="px-6 py-4">
//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
//     >
//       View
//     </a>

//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//     >
//       Delete
//     </a>
//   </td>
// </tr>
// <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
//   <th
//     scope="row"
//     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//   >
//     Walter Ranasinghe
//   </th>
//   <td className="px-6 py-4">12th September 2021</td>
//   <td className="px-6 py-4">walter@gmail.com</td>
//   <td className="px-6 py-4">0771234567</td>
//   <td className="px-6 py-4">
//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
//     >
//       View
//     </a>

//     <a
//       href="#"
//       className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//     >
//       Delete
//     </a>
//   </td>
// </tr>
