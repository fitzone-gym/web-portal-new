import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { ManagerSidebar } from "../components/Manager/ManagerSidebar";
import { PaymentBody } from "../components/Manager/PaymentBody";
import { Slider } from "../components/Manager/Slider";
import "../styles/test.css";
export const Test = (props) => {
  const types = ["Trainers", "Doctors", "Receptionists", "Members"];
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState([]);
  const [resData, setResData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const name = location.hash.replace("#", "");
    const index = types.findIndex((element) => {
      return element.toLowerCase() === name.toLowerCase();
    });
    setSelected(index);
  }, []);
  useEffect(() => {
    let type = location.hash.replace("#", "");
    if (type === "") {
      type = "trainers";
      logChange("trainers");
      setSelected(0);
    }
    axios
      .get(`http://localhost:5400/payment/${type}`)
      .then((res) => {
        const responsedata = res.data.data;
        const serializedData = responsedata.map((i) => {
          formatDate(i.payment_date);
          return serializeData(i);
        });
        setData(serializedData);
        setResData(serializedData);
      })
      .catch((err) => {
        console.error("error while obtaining payment details", err);
      });
  }, [location]);
  const logChange = (value) => {
    setSelected(value);
    navigate("#" + value.toLowerCase());
  };
  const serializeData = (record) => {
    return {
      id: record.id,
      name: record.first_name + " " + record.last_name,
      paid_date: formatDate(record.payment_date),
      amount: parseInt(record.amount).toLocaleString(),
      status: record.status || "unkown",
    };
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    return formattedDate;
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const filteredData = resData.filter((obj) =>
      Object.keys(obj).some((key) =>
        String(obj[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setData(filteredData);
  };
  return (
    <div className={props.className}>
      <div className="flex h-screen w-full bg-white">
        <Header />

        <div className="flex flex-row">
          <ManagerSidebar selected="payments" />
          <div
            className=""
            style={{
              marginRight: "20px",
              marginLeft: "25%",
              marginTop: "160px",
              textAlign: "center",
            }}
          >
            <div className="text-4xl mr-[56%]">
              <h4>Salary Details</h4>
            </div>
            <div className="flex flex-row mt-12">
              <Slider
                types={types}
                changeValue={logChange}
                selectedValue={selected}
                className="ml-[6%] py-6"
              />
              <div className="pt-6 pb-6 ml-[30%] w-[24%]">
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
                      placeholder="Search Name,Packages "
                    />
                    <button
                      type="submit"
                      className="mr-[-5%] text-black absolute right-2.5 w-18 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 "
                      style={{
                        marginTop: -39,
                      }}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <PaymentBody data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
