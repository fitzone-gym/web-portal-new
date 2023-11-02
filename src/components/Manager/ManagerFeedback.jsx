import React from "react";
import { images } from "../../constants";
import  { useEffect, useState } from "react";
import axios from "axios";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

export const ManagerFeedback = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5400/feedbacks/");
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
    <div
      className="w-[80%]"
      style={{
        marginRight: "20px",
        marginLeft: "17%",
        marginTop: "130px",
        textAlign: "center",
      }}
    >  
    
    <div>
      
    </div>

    {data.map((feedback, index) => {
      return (  
      <div>
        
        <div
          className="border drop-shadow-md font-bold text-2xl rounded-xl ml-44 mt-16"
        >
          
          <p
            className="text-left text-lg py-4 px-6 ml-7"
            style={{
              marginTop: "0%",
            }}
          >
           {feedback.first_name} {feedback.last_name}
          </p>
          <p
            className="text-left text-lg py-4 px-6"
            style={{
              marginTop: "-2.5%",
              marginLeft: "2.2%",
            }}
          >
            {feedback.user_id} 
          </p>
          <p
            className="text-left text-lg py-6 px-6 mt-[-3%] mb-[-2%]"
            style={{
              marginLeft: "2%",
              width: "95%",
            }}
          >
           {feedback.feedback_description} 
          </p>

          <div>

          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
          <Rating name="read-only" value={feedback.rating } readOnly size="large" />
</Box>
            
              <a className="text-base underline ml-[78%] mt-[-12%] mb-[2%] text-blue-900">Reply</a>
          </div>
        </div>

       
      </div>

);
})}
    </div>
  );
};
