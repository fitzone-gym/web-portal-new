import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CreatAnnonModal } from "./CreatAnnonModal";
import { UpdateAnnonModal } from "./UpdateAnnounModal";
import "../../styles/Manager/announcement.css";

export const ManagerAnnouncement = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get("http://localhost:5400/announcement");
        console.log("This is what", response.data.data);
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleAddNewClick = () => {
    setShowModal(true);
    console.log("Add");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("close");
  };

  const handleDelete = async (announcementId) => {
    console.log(announcementId);
    try {
      const apiUrl = "http://localhost:5400/announcement/delete/";
      const deleteUrl = `${apiUrl}${announcementId}`;
      await axios.delete(deleteUrl);
      // Perform any additional actions (e.g., refreshing the list) after successful deletion
      // You can call the fetchTrainers function here to refresh the data after deletion
      alert("Announcement deleted successfully");
      // Update the state after successful deletion
      setData((prevData) =>
        prevData.filter(
          (announcement) => announcement.announcement_id !== announcementId
        )
      );
    } catch (error) {
      console.error("Error deleting announcement:", error);
      // Handle errors if necessary
      alert("Error deleting announcement");
    }
  };

  // State to track the announcement being edited
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const handleEditClick = (announcement) => {
    setEditingAnnouncement(announcement);
    // setShowModal(true); // Open the update modal
    console.log("This is announcement to select", announcement.announcement_id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    return formattedDate;
  };
  return (
    <div
      className="w-[80%]"
      style={{ position: "absolute", top: 50, left: 290, right: 0, bottom: 0 }}
    >
        <div className="text-4xl mr-[60%] mt-24">
          <h4>Announcement Details</h4>
        </div>

      <div className="relative pt-6 pb-6 ml-[62%] w-[24%]">
        <div className="fixed ml-[20%] mt-[-1%]">
          {/* <Link to="/Manager/Announcement/CreateAnnoun"> */}
          <button
            type=""
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2 "
            style={{
              height: 45,
              width: 120,
            }}
            onClick={handleAddNewClick} // Call the function to show the modal
          >
            <div className="mr-1">
              <FaPlus />
            </div>
            Add New
          </button>
          {/* </Link> */}
        </div>
      </div>

      <table
        className="font-semibold ml-48  h-[28%] py-6 px-6 border-separate border-spacing-10 mt-4"
        style={{
          width: "81%",
        }}
      >
        <tbody className="announcement-container">
          {data.map((announcement, index) => {
            return (
              <tr
                key={index}
                className="bg-white drop-shadow-lg text-left text-lg announcement"
              >
                <td className="rounded-lg">
                  <div>
                    <p className="mt-2 ml-8 font-bold">{announcement.title}</p>
                    <hr className="ml-7 w-1/2 border-t-1 border-black"></hr>
                  </div>
                  <div className="msg">
                    <p className="ml-[3%] mt-1 mr-3">
                      Dear {announcement.receiver}, {announcement.description}.
                    </p>
                    <p className="ml-[3%] mt-[1%]">Jayani</p>
                    <p className="ml-[3%] ">Gym Manager</p>
                  </div>

                  <div className="actions py-5">
                    {/* <Link to="/Manager/Announcement/UpdateAnnoun"> */}
                    <div className="inline-block ml-8 text-gray-400">
                      {formatDate(announcement.date_from)} -
                      {formatDate(announcement.date_to)}
                    </div>
                    <button
                      className="text-white bg-green-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 text-center inline-flex text-center items-center mr-2"
                      style={{
                        height: 40,
                        width: 120,
                        marginRight: "3%",
                        marginTop: "1%",
                        marginLeft: "40%",
                      }}
                      onClick={() => handleEditClick(announcement)}
                    >
                      <div className="mr-1 ml-3">
                        <FiEdit />
                      </div>
                      Edit
                    </button>
                    {/* </Link> */}
                    {/* Render the update modal conditionally */}

                    <Link
                      onClick={() => handleDelete(announcement.announcement_id)}
                    >
                      <button
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center "
                        style={{
                          height: 40,
                          width: 120,
                          marginTop: "1%",
                        }}
                      >
                        <div className="ml-[-6%]">
                          <MdDelete />
                        </div>
                        Remove
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Render the modal conditionally */}
      {showModal && <CreatAnnonModal onClose={handleCloseModal} />}
      {editingAnnouncement && (
        <UpdateAnnonModal
          onClose={() => {
            setEditingAnnouncement(null); // Close the modal
            handleCloseModal();
          }}
          announcement={editingAnnouncement} // Pass the announcement data
        />
      )}
    </div>
  );
};
