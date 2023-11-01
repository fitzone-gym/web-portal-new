import { CheckIcon } from '@heroicons/react/20/solid'
import '../../styles/Receptionist/dashboard.css'
import background_image from '../../assets/dashboard_bg.png';
import React, { useRef, useState, useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";


function Dashboard() {
    const [counts, setCounts] = useState({
        TotalMemberCount: 0,
        NewMemberCount: 0,
        TotalTrainerCount: 0,
        newTrainersCount: 0,
        todayAttendenceCount: 0,
        currentAttendenceCount: 0

    });

    const [memberName, setMemberName] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");


    const handlesubmit = (e) => {
      console.log ("Call here");

      //send data to the backend

      if (checkOut == null) {
    axios
    .post("http://localhost:5400/receptionist/attendence/add", {
      memberid,
      checkin_time,
      })

      .then((response) => {
        console.log("Data submit successfully to backend", response.data);
        
        alert("Data submitted successfully!"); 

        setmemberId("");
        setCheckIn("");
        
        console.log("Before navigation");
        fetchReceptionist()
       })

       .catch((error) => {
        console.log("Error submitting data", error);
        alert("Error submitting data");
      });  }
      
      else 
      {
        axios
        .post("http://localhost:5400/receptionist/attendence/add", {
          memberid,
          checkout,
          })
    
          .then((response) => {
            console.log("Data submit successfully to backend", response.data);
            
            alert("Data submitted successfully!"); 
    
            setmemberId("");
            setCheckIn("");
            
            console.log("Before navigation");
            fetchReceptionist()
           })
    
           .catch((error) => {
            console.log("Error submitting data", error);
            alert("Error submitting data");
          }); 
      }



    };

    useEffect(() => {
        async function fetchData() {
                const response = await fetch('http://localhost:5400/dashboard/getCount'); 
                const data = await response.json();
                if (data.success && data.data) { // Assuming your generateResponse format is {success: true/false, data: {...}}
                    setCounts(data.data);
                }
                
                const response2 = await fetch('http://localhost:5400/receptionist/alldayattendence'); 
                const data2 = await response2.json();
    
                if (data2.success) {
                    setMemberName(data2.data.memberName);
                    setCheckIn(data2.data.checkIn);
                    setCheckOut(data2.data.checkOut);
                }
          
      
        }

        fetchData();
    }, []);
  return (
    <div className="dashboard">
      <div className="statistics">
        <div className="max-w-full mx-4 py-6  bg-grey-600 sm:mx-auto sm:px-6 lg:px-8 mt-36">
          <div
            className="sm:flex sm:space-x-4"
            href="/Receptionist/Memberslist"
          >
            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">Total Members</h1>
                  <p
                    className="text-4xl ml-8 mt-4"
                    style={{ transform: "translateY(16px)", color: "#141E46" }}
                  >
                    {counts.TotalMemberCount}
                  </p>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  Gym Members
                </p>
              </div>
            </div>

            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">New Members</h1>
                  <p
                    className="text-4xl ml-8 mt-4"
                    style={{
                      transform: "translate(20px,16px)",
                      color: "#B3A492",
                    }}
                  >
                    {counts.NewMemberCount}
                  </p>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  New Gym Members
                </p>
              </div>
            </div>
            <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">Total Trainers</h1>
                  <p
                    className="text-4xl ml-8 mt-4"
                    style={{ transform: "translateY(16px)", color: "#4D4C7D" }}
                  >
                    {counts.TotalTrainerCount}
                  </p>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  Gym Trainers
                </p>
              </div>
            </div>
            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">New Trainers</h1>
                  <div className="" style={{ display: "flex" }}>
                    <p
                      className="text-4xl ml-8 mt-4"
                      style={{
                        transform: "translate(-20px,16px)",
                        color: "#F99417",
                      }}
                    >
                      {counts.newTrainersCount}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  Newly joined(current month)
                </p>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:space-x-4">
            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">Attendence Today</h1>
                  <p
                    className="text-4xl ml-8 mt-4"
                    style={{
                      transform: "translate(0px,16px)",
                      color: "#C70039",
                    }}
                  >
                    {counts.todayAttendenceCount}
                  </p>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  Gym Members
                </p>
              </div>
            </div>

            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">Current Presence</h1>
                  <p
                    className="text-4xl ml-8 mt-4"
                    style={{
                      transform: "translate(0px,16px)",
                      color: "#FF6969",
                    }}
                  >
                    {counts.currentAttendenceCount}
                  </p>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  At current time
                </p>
              </div>
            </div>
            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">On Call Doctors</h1>
                  <p
                    className="text-4xl ml-8 mt-4"
                    style={{ transform: "translateY(16px)", color: "#141E46" }}
                  >
                    {counts.TotalonCallDocCount}
                  </p>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  For emergency
                </p>
              </div>
            </div>
            <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
              <div
                className="border border-white/[.5] font-bold rounded-sm text-left rounded-md"
                style={{
                  height: 120,
                  width: 200,
                }}
              >
                <div className="" style={{ display: "flex" }}>
                  <h1 className="text-xl mt-2 ml-8 mt-2">
                    Doctor Availability
                  </h1>
                  <a href="/Receptionist/events">
                    {" "}
                    <p
                      className="text-4xl ml-8 mt-4"
                      style={{
                        transform: "translateY(16px)",
                        color: "#419197",
                      }}
                    >
                      {counts.availability >= 1 ? (
                        <div className="">X</div>
                      ) : (
                        <div className="">
                          <BsFillCheckCircleFill />
                        </div>
                      )}
                    </p>
                  </a>
                </div>
                <p
                  className="text-sm ml-8 mt-4"
                  style={{ color: "#062C30", fontWeight: 500 }}
                >
                  At current time
                </p>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:space-x-4">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-2/3 sm:my-8">
              <div className="bg-white p-4 h-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                    <h3
                      className="text-meadium leading-6 font-medium"
                      style={{ fontWeight: "bold" }}
                    >
                      Announcements
                    </h3>
                    {/* <FaRegCircleUserc /> */}
                    <div
                      className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-8xl md:flex-row"
                      style={{ marginTop: "30px", padding: "15px" }}
                    >
                      <div className="flex flex-col justify-start p-1 text-left	">
                        <h5
                          className="mb-2 text-xl font-medium text-neutral-800"
                          style={{
                            color: "#062C30",
                            fontSize: 15,
                            fontWeight: 600,
                          }}
                        >
                          {counts.announcementtitle}{" "}
                        </h5>
                        <p
                          className="mb-4 text-base text-neutral-600 dark:text-neutral-300"
                          style={{ fontSize: 14 }}
                        >
                          {counts.announcementbody}{" "}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-300">
                          Last updated 3 mins ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 h-120"
              style={{ padding: "15px" }}
            >
              <h3
                className="text-meadium leading-6 font-medium"
                style={{ fontWeight: "bold", paddingLeft: "27px" }}
              >
                Member Attendence
              </h3>
              <div
                className=" sm:mx-auto sm:w-full sm:max-w-sm"
                style={{ padding: "15px" }}
              >
                <form
                  className="space-y-6"
                  onSubmit={handlesubmit}
                  method="POST"
                  style={{ padding: "15px" }}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Member ID
                    </label>
                    <div className="mt-2">
                      <input
                        id="memberid"
                        name="memberid"
                        type="text"
                        onChange={(e) => setmemberId(e.target.value)}
                        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Check-in time
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="checkin_time"
                        name="checkin_time"
                        type="time"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Check-out time
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="checkout_time"
                        name="checkout_time"
                        type="time"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold leading-6  shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 text-white"
                    >
                      Mark Attendence
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Mmebers Revenue */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard