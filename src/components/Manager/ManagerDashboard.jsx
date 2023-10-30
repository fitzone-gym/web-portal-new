import React, { useEffect, useState } from "react";
import axios from "axios";
// import { MdOutlineGirl } from "react-icons/md";
// import { MdOutlineBoy } from "react-icons/md";
import { images } from "../../constants";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ManagerDashboard = () => {
  const [data, setData] = useState();
  const chartData = {
    labels: ["Members", "Trainers", "Doctors", "Receptionists"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          data?.allMemberCount || 0,
          data?.trainerCount || 0,
          data?.doctorCount || 0,
          data?.receptionistCount,
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5400/managerDashboard`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div
      className=""
      style={{
        position: "fixed",
        top: 60,
        left: 270,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="grid grid-cols-4 gap-2 ml-12 mt-12 ">
        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md"
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">Total Members</h1>
          <p className="text-5xl ml-8 mt-4 ">{data?.allMemberCount}</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Members</p>
        </div>

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">New Memberships</h1>
          <p className="text-5xl ml-8 mt-4 ">{data?.newMemberCount}</p>
          <p className="text-medium ml-8 mt-4 text-red-500">
            Monthly membership acquired{" "}
          </p>
        </div>

        {/* <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">Membership Cancellations</h1>
          <p className="text-5xl ml-8 mt-4 ">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">
            Members cancelled their membership
          </p>
        </div> */}

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">Total Staff Members</h1>
          <p className="text-5xl ml-8 mt-4 ">{data?.staffCount}</p>
          <p className="text-medium ml-8 mt-4 text-red-500">
            Gym Staff Members
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 ml-12 mt-16 mt-8">
        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">Total Doctor</h1>
          <p className="text-5xl ml-8 mt-4 ">{data?.doctorCount}</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Doctors</p>
        </div>

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">Total Trainers</h1>
          <p className="text-5xl ml-8 mt-4 ">{data?.trainerCount}</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Trainers</p>
        </div>

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">Total Receptionist</h1>
          <p className="text-5xl ml-8 mt-4 ">{data?.receptionistCount}</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Gym Receptionist</p>
        </div>

        {/* <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 160,
            width: 360,
          }}
        >
          <h1 className="text-xl mt-2 ml-8 mt-2 ">Total Revenue</h1>
          <p className="text-5xl ml-8 mt-4 ">865</p>
          <p className="text-medium ml-8 mt-4 text-red-500">Monthly</p>
        </div> */}
      </div>

      {/* 3 row */}
      <div className="grid grid-cols-2 ml-28 mt-8">
        {/* 1 box */}
        <div
          className="font-bold rounded-sm text-left max-lg:hidden w-[85%]"
          style={{
            height: 460,
          }}
        >
          <div className="text-2xl  py-3">
            <h1>Total Revenue(weekly)</h1>
            <img
              className=" h-96 mt-10 ml-8"
              src={images.revenueImage}
              alt=""
            />
          </div>
        </div>

        {/* 2 box */}
        <div className="font-bold rounded-sm text-left max-lg:hidden w-[100%]">
          <div className="text-2xl  ml-28 py-3">
            <h1>Gym Member Compisition</h1>
            <div className="w-[50%] h-88 ml-12">
              {" "}
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
