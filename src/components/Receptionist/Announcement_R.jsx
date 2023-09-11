
import Header from './header';
import Sidenav from './sidenav';
import '../../styles/Receptionist/announcement.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";



export const Announcement_R = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5400/receptionist/Announcements");
        // console.log("tt"+ response.data.data); // Check the API response data
        // console.log(typeof response.data.data); // Check the type of response.data
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchMembers();
  }, []);
      
  return (
 
   

    <div className='w-[85%] ml-80 mt-40 px-10'>


  
{/* {data.map((announcement, index) => { */}
                {/* return ( */}

                {data.map((announcement, index) => {
                return (        
<div
  class="flex flex-col rounded-lg bg-slate-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-8xl md:flex-row" key={index}>
  
  <div class="flex flex-col justify-start p-1 text-left	text:gray-700" >
    <h5
      class="mb-2 text-xl font-medium text-gray-700 dark:text-gray-700">
{announcement.title} </h5>
    <p class="mb-4 text-base text-gray-700 dark:text-gray-700">
    {announcement.description}
    </p>
    <p class="text-xs text-gray-500 dark:text-gray-400">
    {announcement.create_date}
    </p>



  </div>

</div>

);
})}




</div>


)}

   
  

export default Announcement_R