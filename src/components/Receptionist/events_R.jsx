import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CreatAnnonModal } from "./CreatAnnonModal";
import { UpdateAnnonModal } from "./UpdateAnnounModal";


export const Events_R = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [searchResults, setSearchResults] = useState([]); // State to store search results


  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get("http://localhost:5400/events/");
        console.log("This is what",response.data.data)
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
    setData((prevData) => prevData.filter((announcement) => announcement.announcement_id !== announcementId));
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
    setShowModal(true); // Open the update modal
    console.log("This is announcement to select",announcement.announcement_id);
  };

  return (

    <div
          className="mt-40"
          style={{
            // marginLeft: "17%",
            marginRight: "20px",
            marginLeft: "17%",
            marginTop: "0px",
            textAlign: "center",
            width: "100%",
          }}
        >
  
      <div className="pt-6 pb-6 ml-[62%] w-[24%]">
          <div className="ml-[115%] mt-[20%]">
        {/* <Link to="/Manager/Announcement/CreateAnnoun"> */}
          <button
            type=""
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2 "
            style={{
              height: 45,
              width: 120
            }}
            onClick={handleAddNewClick} // Call the function to show the modal
          >
            <div className="mr-1">
              <FaPlus />
            </div>
            Add New
          </button>
        {/* </Link> */}
        {/* Render the modal conditionally */}
        {showModal && <CreatAnnonModal onClose={handleCloseModal} />}
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                
                  <th scope="col" className="px-6 py-3">
                    Event Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Event Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Event Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Event Dscription
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Event Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
              {searchResults.length > 0
                ? searchResults.map((event, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                    
                        <td className="px-6 py-4">{event.name} </td>
                        <td className="px-6 py-4">{event.date}</td>{" "}
                        <td className="px-6 py-4">{event.time}</td>
                        <td className="px-6 py-4">
                        {event.description}
                        </td>
                    </tr>
                  ))
                : data.map((event, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                         
                         <td className="px-6 py-4">{event.name} </td>
                        <td className="px-6 py-4">{event.date}</td>{" "}
                        <td className="px-6 py-4">{event.time}</td>
                        <td className="px-6 py-4">
                        {event.description}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
    </div>
  );
};

export default Events_R