import React from 'react'
import '../../styles/Doctor/paymenthistory.css'

function Gymtrainerattendence() {
  return (
 
    

    <div
className=""
style={{
position: " ",
top: 0,
left: 0,
right: 0,
bottom: 0,
}}
>




<div className="w-[95%] ml-80 mt-40">
<div className="grid grid-flow-col auto-cols-2 bg-neutral-900 ml-5 mr-5 pt-6 pb-6 rounded-t-lg ">
  <div className="text-white text-2xl "> Gym Trainer's Attendence</div>
  <div
    className=" "
    style={{
      marginLeft: 600,
    }}
  >
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
         type="search"
         id="default-search"
         className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="Search Name,Level..."
         required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bg-gray-800 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={{
            marginTop: -41,
          }}
        >
          Search
        </button>
      </div>
    </form>
  </div>

  <div className="">
    <button
          type="button"
          className="text-white bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={{
            height: 45,
      }}
    >
     
      See All
    </button>
  </div>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-b-lg ml-5 mr-5">
  <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
    <thead className="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400 ">
      <tr>
        <th scope="col" className="px-6 py-3">
          Member Name 
        </th>
        <th scope="col" className="px-6 py-3">
          Check-In Time
        </th>
        <th scope="col" className="px-6 py-3">
          Check-Out Time
        </th>
        
        <th scope="col" className="px-6 py-3">
          View
        </th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="border-b bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Rangana 
        </th>
        <td className="px-6 py-4">03.30 PM</td>
        <td className="px-6 py-4">06.30 PM</td>
       
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Vijayasooriya
        </th>
        <td className="px-6 py-4">03.00 PM</td>
        <td className="px-6 py-4">-</td>
     
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </a>
        </td>
      </tr>
      <tr className="border-b bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Pragash
        </th>
        <td className="px-6 py-4">05.00 PM</td>
        <td className="px-6 py-4">-</td>
      
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Kithsandu
        </th>
        <td className="px-6 py-4">04.46 PM</td>
        <td className="px-6 py-4">-</td>
     
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>







</div>



  )
}

export default Gymtrainerattendence