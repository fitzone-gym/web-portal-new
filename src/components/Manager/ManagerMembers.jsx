import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import priofileimg from "../../assets/managerprofile.jpg";
// import { ViewMemberModal } from "./ViewMemberModal";

export const ManagerMembers = () => {
  const [data, setData] = useState([]); // Initialize data with an empty array
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [searchMonth, setSearchMonth] = useState(""); // Added state for month
  const [searchYear, setSearchYear] = useState("");   // Added state for year
  // const [showModal, setShowModal] = useState(false);
  // const [selectedMember, setSelectedMember] = useState(null);

  const fetchMembers = async () => {
    try {
      const response = await axios.get("http://localhost:5400/members");
       console.log("tt"+ response.data.data); // Check the API response data
      // console.log(typeof response.data.data); // Check the type of response.data
      setData(response.data.data); // Assuming the response contains an array of trainer objects
      // added to remove the redundant print statements
      setSearchResults(response.data.data);
      console.log("search Results is ",searchResults)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
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


  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5400/members/searchMembers?searchTerm=${searchTerm}&searchMonth=${searchMonth}&searchYear=${searchYear}`
      );
      console.log(response.data.data)
      setSearchResults(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  function filterMonthYear(data){
    console.log("filtermonth",searchMonth,searchYear,searchMonth==="", searchYear==="",!searchMonth==="" && searchYear==="",searchMonth==="" && !searchYear==="");
    if(searchMonth==="" && searchYear===""){
      return true;
    }
    else if(!(searchMonth==="") && searchYear===""){
      let month = parseInt(data.joined_date.split("-")[1])
      if(month === parseInt(searchMonth)){
        return true;
      }
      return false;
    }
    else if(searchMonth==="" && !(searchYear==="")){
      console.log("elseif2");
      let year = parseInt(data.joined_date.split("-")[0])
      if(year === parseInt(searchYear)){
        return true;
      }
      return false;
    }
    else{
      console.log("else");
      let year = parseInt(data.joined_date.split("-")[0])
      let month = parseInt(data.joined_date.split("-")[1])
      console.log(searchYear,searchMonth,year,month,year === parseInt(searchMonth),month === parseInt(searchMonth))
      if(year === parseInt(searchYear) && month === parseInt(searchMonth)){
        return true;
      }
      return false;
    }
  }
  // const handleViewClick = (member) => {
  //   setSelectedMember(member);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   // history.push("/Staffmembers/Trainer");
  // };

  return (
    <div
      className=""
      style={{
        marginRight: "20px",
        marginLeft: "17%",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <div className="w-[100%]" style={{ margin: "0px 30px 0px 30px" }}>
        <div className="text-4xl">{/* <h4>Members Details</h4> */}</div>
        <div className="pt-6 pb-6 ml-[74%] w-[24%]">
          <form onSubmit={handleSearch}>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-[130%] ml-[-25%] p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search by name, package"
                style={{fontSize:12}}
                required
              />
              <button
                type="submit"
                className="mr-[-5%] text-black absolute right-2.5 w-18 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="mt-4 ml-24 ">
                <div className="w-1/4 mr-2">
                  <input
                    type="number"
                    value={searchMonth}
                    onChange={(e) => setSearchMonth(e.target.value)}
                    placeholder="Enter Month (1-12)"
                    min="1"
                    max="12"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-1/4 ml-96 mt-[-3.1%]">
                  <input
                    type="number"
                    value={searchYear}
                    onChange={(e) => setSearchYear(e.target.value)}
                    placeholder="Enter Year"
                    min="1900"
                    max="9999"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-20 mt-16">
          <table className="w-full text-sm text-left text-gray-500  ">
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
                <th scope="col" className="px-20 py-3">
                  Member name
                </th>
                <th scope="col" className="px-6 py-3">
                  Joined Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone No
                </th>
                <th scope="col" className="px-6 py-3">
                  Package Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {searchResults.filter((i)=> filterMonthYear(i)).map((member, index) => (
                    <tr key={index} className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                      >
                        <img
                          className="h-10 w-10 rounded-full ml-14"
                          src={priofileimg}
                          alt=""
                        />
                        <div className="pl-12  mt-[-12%] ml-16">
                          <div className="text-base font-semibold">
                            {member.first_name + " " + member.last_name}{" "}
                          </div>
                          <div className="font-normal text-gray-500">
                            {member.email}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{formatDate(member.joined_date)} </td>
                      <td className="px-6 py-4">{member.phone_no}</td>{" "}
                      <td className="px-6 py-4">{member.package}</td>
                      <td className="px-6 py-4">{member.address}</td>
                      {/* <td>
                          <Link
                            to="#"
                            className="font-medium text-blue-600 dark:text-blue-500  ml-6"
                          >
                            Report
                          </Link>
                        </td> */}
                    </tr>
                  )
                )}
          </tbody>
          {/* {selectedMember && (
              <ViewMemberModal
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
              />
            )} */}
        </table>
      </div>
      {/* </div> */}
    </div>
    </div>
  )}
