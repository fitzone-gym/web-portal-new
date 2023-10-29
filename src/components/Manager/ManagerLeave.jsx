import { useEffect, useState } from "react";
import priofileimg from "../../assets/managerprofile.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export const ManagerLeave = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  useEffect(() => {
    const fetchLeave = async () => {
      try {
        console.log("leave");
        const response = await axios.get("http://localhost:5400/leaves");
         console.log("tt"+ response.data.data); // Check the API response data
        // console.log(typeof response.data.data); // Check the type of response.data
        setData(response.data.data); // Assuming the response contains an array of trainer objects
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchLeave();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5400/leaves/searchLeaves?searchTerm=${searchTerm}`
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleApprove = async (leaves_request_Id) => {
    try{
      const apiUrl = "http://localhost:5400/leaves/";
      const Url = `${apiUrl}${leaves_request_Id}`;
      await axios.delete(Url);
        setData((prevData) =>
        prevData.filter((leaves) => leaves.leaves_request_id !== leaves_request_Id)
      );
      } catch (error) {
        console.error("Error:", error);
        alert("Approved Succesfully Done");
      }
  };

  return (
    <div
      className="w-[86%]"
      style={{
        marginRight: "20px",
        marginLeft: "17%",
        marginTop: "130px",
        textAlign: "center",
      }}
    >
      <div className="">
        <div className="pt-6 pb-6 ml-[77%] w-[20%]">
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
                placeholder="Search by name,reason"
                required
              />
              <button
                type="submit"
                className="mr-[-5%] text-white absolute right-2.5 w-18 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-3 py-2 "
                style={{
                  marginTop: -39,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-8 mt-8">
          <table
            className="w-full text-sm text-left text-gray-500  "
            // style={{
            //   height: 160,
            //   width: "87%",
            //   marginLeft: "8%",
            //   marginTop: "3%",
            //   marginRight: "-22%",
            // }}
          >
            <thead className="text-xs text-[#374151] uppercase bg-gray-50 ">
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
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Remaining leaves
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {searchResults.length > 0
                ? searchResults.map((leaves, index) => (
                    <tr key={index} className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 text-gray-900  whitespace-nowrap dark:text-white ml-[10%]"
                      >
                        <img
                          className="h-10 w-10 rounded-full ml-4"
                          src={priofileimg}
                          alt=""
                        />
                        <div className="pl-20 mt-[-13%]">
                          <div className="text-base font-semibold">
                            {leaves.first_name + " " + leaves.last_name}{" "}
                          </div>
                          <div className="font-normal text-gray-500">
                            {leaves.email}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4 "> {leaves.reason}</td>
                      <td className="px-6 py-4 "> {leaves.request_date}</td>
                      <td className="px-6 py-4 "> {leaves.leave_date}</td>
                      <td className="px-6 py-4 ">
                        {" "}
                        {leaves.no_remaining_leave_date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="">
                          <Link
                            onClick={() =>
                              handleApprove(leaves.leaves_request_id)
                            }
                          >
                            <button
                              type="button"
                              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
                        rounded-md px-2 py-2.5 inline-flex items-center "
                              style={{
                                height: 30,
                                width: "50%",
                                marginRight: "6%",
                                marginTop: "0%",
                                backgroundColor: "#363062",
                              }}
                            >
                              <div
                                className=""
                                style={{
                                  marginLeft: "9%",
                                  fontSize: "90%",
                                  backgroundColor: "#363062",
                                }}
                              >
                                Approve
                              </div>
                            </button>
                          </Link>

                          <Link
                            onClick={() =>
                              handleDecline(leaves.leaves_request_id)
                            }
                          >
                            <button
                              type="button"
                              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                              style={{
                                height: 30,
                                width: "50%",
                                marginRight: "-62%",
                                marginTop: "-3%",
                              }}
                            >
                              <div
                                style={{
                                  marginLeft: "15%",
                                  fontSize: "90%",
                                }}
                              >
                                Decline
                              </div>
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                : data.map((leaves, index) => {
                    return (
                      <tr key={index} className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 text-gray-900  whitespace-nowrap dark:text-white ml-[10%]"
                        >
                          <img
                            className="h-10 w-10 rounded-full ml-4"
                            src={priofileimg}
                            alt=""
                          />
                          <div className="pl-20 mt-[-13%]">
                            <div className="text-base font-semibold">
                              {leaves.first_name + " " + leaves.last_name}{" "}
                            </div>
                            <div className="font-normal text-gray-500">
                              {leaves.email}
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4 "> {leaves.reason}</td>
                        <td className="px-6 py-4 "> {leaves.request_date}</td>
                        <td className="px-6 py-4 "> {leaves.leave_date}</td>
                        <td className="px-6 py-4 ">
                          {" "}
                          {leaves.no_remaining_leave_date}
                        </td>
                        <td className="px-4 py-4">
                          <div className="">
                            <button
                              type="button"
                              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
                    rounded-md px-2 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                              style={{
                                height: 30,

                                marginTop: "0%",
                                backgroundColor: "#363062",
                              }}
                            >
                              <div
                                className=""
                                style={{
                                  // marginLeft: "9%",
                                  fontSize: 12,
                                }}
                              >
                                Approve
                              </div>
                            </button>
                            <br />
                            <br />

                            <button
                              type="button"
                              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-medium px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                              style={{
                                height: 30,
                                marginTop: "-3%",
                                paddingRight: 20,
                              }}
                            >
                              <div
                                style={{
                                  marginLeft: "15%",
                                  fontSize: "12px",
                                }}
                              >
                                Decline
                              </div>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      <div style={{ paddingLeft:1000, marginTop:50}}>
        {/* <button
          style={{
            backgroundColor: "#edebeb",
            width: "100px",
            marginTop: "20px",
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius:10,
            borderWidth:"1px",
            borderColor:"gray",
          }}
        > */}
          <div className="">
            <Link
              to="/Manager/Leave/TrainerList"
              className="font-medium text-blue-600 "
              style={{ fontSize: 12, color: "black", fontWeight: "bold" , marginTop:"50px"}}
            >
              View More 
            </Link>
          </div>
        {/* </button> */}
      </div>
      </div>
    </div>
  );
};
