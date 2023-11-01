import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';




/*popup form */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";



export const Payment = () => {

  

  {
    const [data, setData] = useState([]); // Initialize data with an empty array
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
    const [searchResults, setSearchResults] = useState([]); // State to store search results
  
    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const response = await axios.get("http://localhost:5400/receptionist/Payment");
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

    function DateFormatComponent(props) {
      const formattedDate = moment(props.isoDate).format('MMMM D, YYYY ');
      
      return <div>{formattedDate}</div>;
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
               Payment Month
             </th>
             <th scope="col" className="px-6 py-3">
               Payment Date
             </th>

             <th scope="col" className="px-6 py-3">
               Salary Amount 
             </th>
            
            
           </tr>
              </thead>
              <tbody>
              {searchResults.length > 0
                ? searchResults.map((Payment, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {Payment.payment_month}
                      </th>
                      <td className="px-6 py-4"> <DateFormatComponent isoDate={Payment.payment_made_date}/> </td>
                      
                      <td className="px-6 py-4">{Payment.amount}</td>{" "}
                    
                      
                    </tr>
                  ))
                : data.map((Payment, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                           {Payment.payment_month}
                        </th>
                        <td className="px-6 py-4">{Payment.payment_made_date}  </td>
                        <td className="px-6 py-4">{Payment.amount}</td>{" "}
                      
                       
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

export default Payment;