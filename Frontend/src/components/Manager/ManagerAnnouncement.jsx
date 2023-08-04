import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CreatAnnonModal } from "./CreatAnnonModal";

export const ManagerAnnouncement = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8081/announcement")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const handleAddNewClick = () => {
    setShowModal(true);
    console.log("Add");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("close");
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="w-[80%]"
      style={{ position: "relative", top: -25, left: 0, right: 0, bottom: 0 }}
    >
      <div className="grid grid-cols-2">
        <h1 className="font-bold text-red-600 text-5xl text-left ml-32 mt-10 mb-10">
          Special Announcements
        </h1>

        <Link to="/Announcement/CreateAnnoun">
          <button
            type=""
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[8%]"
            style={{
              marginRight: "-91%",
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
        {showModal && <CreatAnnonModal onClose={handleCloseModal} />}
      </div>

      <table
        className="bg-gray-400 font-semibold text-2xl rounded-xl ml-44 mt-2 h-[28%] py-6 px-6"
        style={{ width: "81%" }}
      >
        <tbody className="">
          {data.map((announcement) => {
            return (
          <tr key={announcement._id} className="text-left text-lg ">
                <td>
                  <p className="ml-[3%] mt-6 mr-3">
                    Dear {announcement.to}, {announcement.body}.
                  </p>
                  <p className="ml-[3%] mt-[2%]">Jayani</p>
                  <p className="ml-[3%]">Gym Manager</p>
                </td>
          </tr>
            );
          })}

          <tr className="">
            <td>
              <button
                className="text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-[58%] mr-4 mb-7"
                style={{ height: 30, width: "12%" }}
              >
                <div className="mr-2 ml-2.5">
                  <FiEdit />
                </div>
                Edit
              </button>

              <Link onClick={() => handleDelete(announcement.id)}>
                <button
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{ height: 30, width: "12%" }}
                >
                  <div className="mr-2 ml-[-6%]">
                    <MdDelete />
                  </div>
                  Remove
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
