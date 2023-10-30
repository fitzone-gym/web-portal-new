import React, { useEffect, useState } from "react";
import priofileimg from "../../assets/managerprofile.jpg";
import axios from "axios";

export const TrainerleavesList = () => {
  const [approveData, setApproveData] = useState([]);
  const [declineData, setDeclineData] = useState([]);
  const [approveSearchTerm, setApproveSearchTerm] = useState("");
  const [declineSearchTerm, setDeclineSearchTerm] = useState("");

  useEffect(() => {
    console.log("appro");
    const fetchLeaves = async () => {
      try {
        const approveResponse = await axios.get(
          "http://localhost:5400/leaves/apprleaveRequest"
        );
        const declineResponse = await axios.get(
          "http://localhost:5400/leaves/decleaveRequest"
        );

        setApproveData(approveResponse.data.data);
        setDeclineData(declineResponse.data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchLeaves();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    return formattedDate;
  };

  const handleApproveSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5400/leaves/searchLeaves?searchTerm=${approveSearchTerm}`
      );
      setApproveData(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleDeclineSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5400/leaves/searchLeaves?searchTerm=${declineSearchTerm}`
      );
      setDeclineData(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div
      className="w-[86%]"
      style={{ position: "fixed", top: 140, left: 300, right: 0, bottom: 0 }}
    >
      <div className="w-[93%]">
        {/* Table for 'approve' status */}
        <div className="pt-3 pb-6 ml-[77%] w-[20%]">
          <div
            className="text-2xl mb-[-15%]"
            style={{ marginLeft: -2100, height: 45 }}
          >
            Trainers Approved Requests List
          </div>
          <form onSubmit={handleApproveSearch}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-[-24%]">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={approveSearchTerm}
                onChange={(e) => setApproveSearchTerm(e.target.value)}
                className="block w-[130%] ml-[-25%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search by name, reason..."
                required
              />
              <button
                type="submit"
                className="mr-[-5%] text-white absolute right-2.5 w-18 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Table for 'approve' status */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20 mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-10 py-3">
                  Trainer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3">
                  Request Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration(days)
                </th>
                <th scope="col" className="px-6 py-3">
                  Remaining leaves
                </th>
                {/* <th scope="col" className="px-6 py-3">
                    Status
                  </th> */}
              </tr>
            </thead>
            <tbody>
              {approveData.map((leaves, index) => (
                <tr key={index} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]"
                  >
                    <img
                      className="h-10 w-10 rounded-full ml-4"
                      src={priofileimg}
                      alt=""
                    />
                    <div className="pl-20 mt-[-13%]">
                      <div className="text-base font-semibold">
                        {leaves.first_name + " " + leaves.last_name}
                      </div>
                      <div className="font-normal text-gray-500">
                        {leaves.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{leaves.reason}</td>
                   <td className="px-6 py-4 "> {formatDate(leaves.request_date)}</td>
                      <td className="px-6 py-4 ">{leaves.no_of_leave_dates}</td>
                  <td className="px-6 py-4">
                    {leaves.no_remaining_leave_date}
                  </td>
                  {/* <td className="px-6 py-4">{leaves.status}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-[93%] mt-40">
        <div className="pt-6 pb-6 ml-[77%] w-[20%]">
          <div
            className="text-2xl mb-[-15%]"
            style={{ marginLeft: -2100, height: 45 }}
          >
            Trainers Declined Requests List
          </div>
          <form onSubmit={handleDeclineSearch}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-[-24%]">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={declineSearchTerm}
                onChange={(e) => setDeclineSearchTerm(e.target.value)}
                className="block w-[130%] ml-[-25%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search by name, reason..."
                required
              />
              <button
                type="submit"
                className="mr-[-5%] text-white absolute right-2.5 w-18 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Table for 'decline' status */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20 mt-[%]">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-10 py-3">
                  Trainer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3">
                  Request Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration(days)
                </th>
                <th scope="col" className="px-6 py-3">
                  Remaining leaves
                </th>
              </tr>
            </thead>
            <tbody>
              {declineData.map((leaves, index) => (
                <tr key={index} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ml-[10%]"
                  >
                    <img
                      className="h-10 w-10 rounded-full ml-4"
                      src={priofileimg}
                      alt=""
                    />
                    <div className="pl-20 mt-[-13%]">
                      <div className="text-base font-semibold">
                        {leaves.first_name + " " + leaves.last_name}
                      </div>
                      <div className="font-normal text-gray-500">
                        {leaves.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{leaves.reason}</td>
                  <td className="px-6 py-4 "> {formatDate(leaves.request_date)}</td>
                      <td className="px-6 py-4 ">{leaves.no_of_leave_dates}</td>
                  <td className="px-6 py-4">
                    {leaves.no_remaining_leave_date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
