import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profileimage from "../../assets/gymtrainer.jpg"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';





/*popup form */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";



export const R_Trainerlists = () => {

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
          const response = await axios.get("http://localhost:5400/trainerdet/getTrainerDetails");
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
            <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
              <div>
        
          
              </div>
              
        
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
             
                <th scope="col" className="px-6 py-3">
                    Trainer Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact No  
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Experience
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Availability
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
                      <td className="px-6 py-4">{member.phone_no} </td>
                      
                      <td className="px-6 py-4"></td>{" "}
                      <td className="px-6 py-4">{member.package}</td>
                      <td className="px-6 py-4">
                      {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline decoration:none"
                      style={{textDecoration:"none"}}
                      onClick={handleClickOpen}
                    >
                          View
                       </a> */}
                      </td>
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
                        <td className="px-6 py-4">{member.phone_no} </td>
                        <td className="px-6 py-4">{member.working_experience} Years</td>{" "}
                        <td className="px-6 py-4">
                               {member.status === 1 ? (
                            <div> <CheckIcon/></div>
                          ) : 
                          (
                            <div><ClearIcon/>  </div>
                          )}
                         </td>

                        <td className="px-6 py-4">
                   
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
     
      {/* dialog popup */}
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
        <div className="p-2 text-center">
                {/* <img src={profile} className="userProfileImage" /> */}
                <img
                  className="userProfileImage items-center"
                  src={profileimage}
                  // src="../assets/Users/Janith.jpg"
                  alt=""
                />
              </div>
          <DialogContentText>
            <p className="pt-2  text-center healthpopUpUserName">Neil singh</p>
    
          </DialogContentText>
          <div className="pt-8">

          

            <div className="flex gap-4 pb-3 formInputs">
            

 </div>
 <div className="flex gap-4 pb-3 ">
            <p className="healthpopUpUserAge">Contact No:  </p>
            <p className="healthpopUpUserAge">0763572139</p>

            </div>
<div className="flex gap-4 pt-3">

            <p className="healthpopUpUserAge">Email Address:  </p>
            <p className="healthpopUpUserAge">muralijasi@gmail.com</p>
 </div>

 <div className="flex gap-4 pt-3">

<p className="healthpopUpUserAge">Gender:  </p>
<p className="healthpopUpUserAge"> Male</p>
</div>

           

            <div className="flex gap-4 pt-3">
            <p className="healthpopUpUserAge"> Availability:  </p>
            <p className="healthpopUpUserAge"> Available </p>

            </div>
<div className="flex gap-4 pt-3">
            <p className="healthpopUpUserAge">Qualification:  </p>
            <p className="healthpopUpUserAge"> BSc </p>
            </div>

            <div className="flex gap-4 pt-3">
            <p className="healthpopUpUserAge"> Work Experience :  </p>
            <p className="healthpopUpUserAge"> 4 Years </p>
            </div>

            <div className="flex gap-4 pt-3">
            <p className="healthpopUpUserAge">Emergency Contact :  </p>
            <p className="healthpopUpUserAge">0773618798</p>
            </div>

      
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="dialogCloseBtn">
            CLOSE
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}}

export default R_Trainerlists;