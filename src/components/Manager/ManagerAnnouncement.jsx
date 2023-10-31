import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CreatAnnonModal } from "./CreatAnnonModal";
import { UpdateAnnonModal } from "./UpdateAnnounModal";

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
    setShowModal(true); // Open the update modal
    console.log("This is announcement to select", announcement.announcement_id);
  };

  return (
    <div
      className=""
      style={{
        marginRight: "20px",
        marginLeft: "15%",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <div className="pt-6 ml-[57%] w-[24%]" >
        <div className="ml-[115%] mt-[0ss%]">
          <button
            type=""
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center mr-2 "
            style={{
              height: 45,
              width: 120,
              backgroundColor: "#ad2828",
            }}
            onClick={handleAddNewClick} // Call the function to show the modal
          >
            <div className="mr-1">
              <FaPlus />
            </div>
            Add New
          </button>
          {showModal && <CreatAnnonModal onClose={handleCloseModal} />}
        </div>
      </div>

      <table className="font-semibold h-[28%] py-3 px-6 border-separate border-spacing-10" style={{width:"1150px"}}>
        <tbody className="">
          {data.map((announcement, index) => {
            return (
              <tr
                key={index}
                className="bg-white drop-shadow-lg text-left text-lg"
              >
                <td className="rounded-lg">
                  <div>
                    <p className="mt-2 ml-7 font-bold">{announcement.title}</p>
          
                  </div>
                  <br />
                  <div
                    className="msg"
                    style={{ fontWeight: 300, fontSize: 14 }}
                  >
                    <p className="ml-[3%] mt-1 mr-3">
                      Dear {announcement.for}, {announcement.description}.
                    </p>
                    {/* <p className="ml-[3%] mt-[1%]">Jayani</p>
                    <p className="ml-[3%] ">Gym Manager</p> */}
                  </div>

                  <div className="actions">
                    {/* <Link to="/Manager/Announcement/UpdateAnnoun"> */}
                    <button
                      className="text-white bg-green-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 text-center inline-flex text-center items-center mr-2"
                      style={{
                        height: 30,
                        width: 100,
                        marginRight: "3%",
                        marginTop: "1%",
                        marginLeft: "70%",
                        fontSize: 15,
                        backgroundColor: "#363062",
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
                    {editingAnnouncement && (
                      <UpdateAnnonModal
                        onClose={() => {
                          setEditingAnnouncement(null); // Close the modal
                          handleCloseModal();
                        }}
                        announcement={editingAnnouncement} // Pass the announcement data
                      />
                    )}

                    <Link
                      onClick={() => handleDelete(announcement.announcement_id)}
                    >
                      <button
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center "
                        style={{
                          height: 30,
                          width: 110,
                          marginTop: "1%",
                          fontSize: 15,
                          backgroundColor: "#E4DCCF",
                          color: "#363062",
                        }}
                      >
                        <div className="ml-[-6%]">
                          <MdDelete />
                        </div>
                        Remove
                      </button>
                    </Link>
                  </div>
                  <br />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
