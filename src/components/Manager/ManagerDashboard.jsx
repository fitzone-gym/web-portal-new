import React, { useEffect, useState } from "react";
import axios from "axios";
import { images } from "../../constants";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const ManagerDashboard = () => {
  const [data, setData] = useState();
  const [labels, setLabels] = useState([]);
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
        const labelData = res.data.data.staffPaymentStats?.map((i) => {
          const date = new Date();
          date.setMonth(i.month - 1);
          return {
            label:
              date.toLocaleString("en-US", {
                month: "long",
              }) +
              "-" +
              i.year,
            year: i.year,
            month: i.month,
          };
        });
        setLabels(labelData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

 

  const getLabelArray = (array) => {
    return array.map((i) => i.label);
  };

  const lineData = {
    labels: getLabelArray(labels),
    datasets: [
      {
        label: "Staff Payment Stats",
        data: labels.map((i) => {
          return (
            data.staffPaymentStats.filter(
              (a) => a.month === i.month && a.year === i.year
            )[0]?.amount || 0
          );
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Member Salary Payments",
        data: labels.map((i) => {
          return (
            data.memberPaymentStats.filter(
              (a) => a.month === i.month && a.year === i.year
            )[0]?.amount || 0
          );
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div
      className=""
      style={{
        marginRight: "20px",
        marginLeft: "20%",
        marginTop: "130px",
        textAlign: "center",
      }}
    >
      <div className="grid grid-cols-3 gap-3 ml-12 mt-12 ">
        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md"
          style={{
            height: 120,
            width: 300,
          }}
        >
          <div className="" style={{ display: "flex" }}>
            <h1 className="text-xl mt-4 ml-8 mt-2 ">Total Members</h1>
            {/* <p className="text-4xl ml-8 mt-4 ">{data?.allMemberCount}</p> */}
            <p
              className="text-4xl ml-8 mt-4"
              style={{ transform: "translateY(16px)", color: "#141E46" }}
            >
              {data?.allMemberCount}
            </p>
          </div>
          <p
            className="text-sm ml-8 mt-4"
            style={{ color: "#062C30", fontWeight: 500 }}
          >
            Gym Members
          </p>
        </div>

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 120,
            width: 300,
          }}
        >
          <div className="" style={{ display: "flex" }}>
            <h1 className="text-xl mt-4 ml-8 mt-2 ">Total Doctor</h1>
            {/* <p className="text-5xl ml-8 mt-4 ">{data?.doctorCount}</p> */}
            <p
              className="text-4xl ml-8 mt-4"
              style={{ transform: "translate(20px,16px)", color: "#B3A492" }}
            >
              {data?.doctorCount}
            </p>
          </div>
          <p
            className="text-sm ml-8 mt-4"
            style={{ color: "#062C30", fontWeight: 500 }}
          >
            Gym Doctors
          </p>
        </div>

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 120,
            width: 300,
          }}
        >
          <div className="" style={{ display: "flex" }}>
            <h1 className="text-xl mt-4 ml-8 mt-2 ">Total Trainers</h1>
            {/* <p className="text-5xl ml-8 mt-4 ">{data?.trainerCount}</p> */}
            <p
              className="text-4xl ml-8 mt-4"
              style={{ transform: "translateY(16px)", color: "#4D4C7D" }}
            >
              {data?.trainerCount}
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

      <div className="grid grid-cols-3 gap-2 ml-12 mt-16 mt-8">
        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 120,
            width: 300,
          }}
        >
          <div className="" style={{ display: "flex" }}>
            <h1 className="text-xl mt-4 ml-8 mt-2 ">Total Receptionist</h1>
            {/* <p className="text-5xl ml-8 mt-4 ">{data?.receptionistCount}</p> */}
            <p
              className="text-4xl ml-8 mt-4"
              style={{ transform: "translate(-20px,16px)", color: "#F99417" }}
            >
              {data?.receptionistCount}
            </p>
          </div>
          <p
            className="text-sm ml-8 mt-4"
            style={{ color: "#062C30", fontWeight: 500 }}
          >
            Gym Receptionist
          </p>
        </div>

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 120,
            width: 300,
          }}
        >
          <div className="" style={{ display: "flex" }}>
            <h1 className="text-xl mt-4 ml-8 mt-2 ">New Memberships</h1>
            {/* <p className="text-5xl ml-8 mt-4 ">{data?.newMemberCount}</p> */}
            <p
              className="text-4xl ml-8 mt-4"
              style={{ transform: "translate(-18px,16px)", color: "#C70039" }}
            >
              {data?.newMemberCount}
            </p>
          </div>
          <p
            className="text-sm ml-8 mt-4"
            style={{ color: "#062C30", fontWeight: 500 }}
          >
            Monthly membership acquired{" "}
          </p>
        </div>

        <div
          className="bg-white  border drop-shadow-md font-bold rounded-lg text-left rounded-md "
          style={{
            height: 120,
            width: 300,
          }}
        >
          <div className="" style={{ display: "flex" }}>
            <h1 className="text-xl mt-4 ml-8 mt-2 ">Total Staff Members</h1>
            {/* <p className="text-5xl ml-8 mt-4 ">{data?.staffCount}</p> */}
            <p
              className="text-4xl ml-8 mt-4"
              style={{ transform: "translate(-35px,16px)", color: "#FF6969" }}
            >
              {data?.staffCount}
            </p>
          </div>
          <p
            className="text-sm ml-8 mt-4 "
            style={{ color: "#062C30", fontWeight: 500 }}
          >
            Gym Staff Members
          </p>
        </div>
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
          <Line options={lineOptions} data={lineData} />
        </div>

        {/* 2 box */}
        <div className="font-bold rounded-sm text-left max-lg:hidden w-[100%]">
          <div className="text-2xl  ml-28 py-3">
            <h1 style={{ color: "#5a5c5c", fontWeight: 500 }}>
              Gym Member Compisition
            </h1>

            <div
              className="w-full h-90
             ml-2"
            >
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
