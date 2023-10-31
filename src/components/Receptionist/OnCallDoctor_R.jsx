import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const OnCallDoctor_R = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  {
    const [data, setData] = useState([]); // Initialize data with an empty array
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
    const [searchResults, setSearchResults] = useState([]); // State to store search results
  
    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const response = await axios.get("http://localhost:5400/receptionist/doctors/");
          // console.log("tt"+ response.data.data); // Check the API response data
          // console.log(typeof response.data.data); // Check the type of response.data
          setData(response.data.data); // Assuming the response contains an array of trainer objects
        } catch (error) {
          console.log("Error:", error);
        }
      };
  
      fetchMembers();
    }, []);
  
    const handleSearch = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(
          `http://localhost:5400/members/searchMembers?searchTerm=${searchTerm}`
        );
        setSearchResults(response.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };


    const memberprofilepopup = async (event) => {
      
    }

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
           
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Doctor Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    E-Mail Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody>
              {searchResults.length > 0
                ? searchResults.map((member, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {member.first_name + " " + member.last_name}{" "}
                        </th>
                        <td className="px-6 py-4">{member.email} </td>
                        <td className="px-6 py-4">{member.phone_no}</td>{" "}
                        <td className="px-6 py-4">{member.gender}</td>
        
                    </tr>
                  ))
                : data.map((member, index) => {
                    return (
                        <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {member.first_name + " " + member.last_name}{" "}
                          </th>
                          <td className="px-6 py-4">{member.email} </td>
                          <td className="px-6 py-4">{member.phone_no}</td>{" "}
                          <td className="px-6 py-4">{member.gender}</td>
          
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
     
      
    </>
  );
}}

export default OnCallDoctor_R;