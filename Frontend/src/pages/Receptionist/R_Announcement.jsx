
import Header from '../../components/Receptionist/header';
import Sidenav from '../../components/Receptionist/sidenav';
import '../../styles/Receptionist/announcement.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";



export const R_Announcement = () => {
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
    <div>
        <div>
    
    <Header />
    <div className='body-members'>
    
    <Sidenav />

    <div className='announcement'>

    
<div className="bg-black-800 px-4 py-3 text-red-200">
  <p className="text-center text-sm font-medium">
  Get Fit This Season with Our Exclusive Gym Offer!

<a href="#" className="inline-block underline">Check out this new packages!</a>

<hr/>
  </p>
</div>

  
{data.map((announcement, index) => {
                return (

<div
  class="flex flex-col rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-8xl md:flex-row">
  
  <div class="flex flex-col justify-start p-1 text-left	">
    <h5
      class="mb-2 text-xl font-medium text-neutral-50 dark:text-neutral-50">
{announcement.title}  </h5>
    <p class="mb-4 text-base text-neutral-50 dark:text-neutral-200">
    {announcement.description}
    </p>
    <p class="text-xs text-gray-300 dark:text-neutral-300">
    {announcement.create_date}
    </p>



  </div>
  
</div>

);
})}





</div>




    </div>
         </div>

         </div>
  )
}

export default R_Announcement