import React from 'react';
import priofileimg from "../../assets/managerprofile.jpg";
import brightImage from "../../assets/bright.jpg";
import brightsecImage from "../../assets/bright2.jpg"
import winImage from "../../assets/win.jpg"


export const ManagerMessages = () => {
  return (
    <div className="w-[80%] mx-auto mt-4">
      <h1 className="font-bold text-5xl text-left mt-24 ml-52 mb-10">
        Messages
      </h1>

      <table className=" mx-auto ml-72 mt-[-1%]">
        <thead>
          <tr>
            <th colSpan={3} className="text-xl text-left">
              Trainers
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex flex-col items-center mt-1">
                <img
                  src={priofileimg}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="mt-2">Jayani</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={brightImage}
                  alt=""
                  className="w-20 h-20 rounded-full ml-4"
                />
                <h1 className="mt-2 ml-4">Bright</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={priofileimg}
                  alt=""
                  className="w-20 h-20 rounded-full ml-12"
                />
                <h1 className="mt-2 ml-12" >Ivanthika</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={winImage}
                  alt=""
                  className="w-20 h-20 rounded-full ml-12"
                />
                <h1 className="mt-2 ml-12">Win</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={priofileimg}
                  alt=""
                  className="w-20 h-20 rounded-full ml-12"
                />
                <h1 className="mt-2 ml-12">Jayani</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={brightsecImage}
                  alt=""
                  className="w-20 h-20 rounded-full ml-12"
                />
                <h1 className="mt-2 ml-12">Lasith</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={winImage}
                  alt=""
                  className="w-20 h-20 rounded-full ml-12"
                />
                <h1 className="mt-2 ml-12">Bright</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={priofileimg}
                  alt=""
                  className="w-20 h-20 rounded-full ml-12"
                />
                <h1 className="mt-2 ml-12">Bright</h1>
              </div>
            </td>
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={winImage}
                  alt=""
                  className="w-20 h-20 rounded-full ml-12"
                />
                <h1 className="mt-2  ml-12">Win</h1>
              </div>
            </td>

          
          </tr>
        </tbody>

        <thead>
          <tr className='mt-8'>
            <th className="text-xl text-left">
              Receptionists
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex flex-col items-center mt-1">
                <img
                  src={brightsecImage}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="mt-2">Sarawat</h1>
              </div>
            </td>
          
            <td>
              <div className="flex flex-col items-center">
                <img
                  src={winImage}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="mt-2">Win</h1>
              </div>
            </td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th className="text-xl text-left">
              Doctors
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex flex-col items-center mt-1">
                <img
                  src={brightImage}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="mt-2">Tine</h1>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className='mt-2 w-[90%] ml-52'></hr>

      <p className='mt-2 text-left  ml-72 text-xl'>Recent Chats</p>
      <table className='ml-80 mt-8 w-[72%]'>
        <tr className='bg-gray-100'
             style={{ position: "relative", top: -25, left: 0, right: 0, bottom: 0 }}>
        <img
                  src={brightImage}
                  alt=""
                  className="w-10 h-10 rounded-full ml-4 mt-2"
                />
                <p className='mt-[-3%] ml-[-73%] text-base '>Jayani Ranasinghe</p>
                <p className='mt-[0.01%] ml-[-73%] text-red-600 text-sm'>Hey, What's up bro?</p>
                <p className='mt-[-3%] ml-[83%] text-sm '>8.45pm</p>
                <hr className='mt-4'></hr>
        </tr>
        <tr className='bg-gray-100'
             style={{ position: "relative", top: -25, left: 0, right: 0, bottom: 0 }}>
        <img
                  src={brightImage}
                  alt=""
                  className="w-10 h-10 rounded-full ml-4 mt-2"
                />
                <p className='mt-[-3%] ml-[-73%] text-base '>Jayani Ranasinghe</p>
                <p className='mt-[0.01%] ml-[-73%] text-red-600 text-sm'>Hey, What's up bro?</p>
                <p className='mt-[-3%] ml-[83%] text-sm '>8.45pm</p>
                <hr className='mt-4'></hr>
        </tr>
        <tr className='bg-gray-100'
             style={{ position: "relative", top: -25, left: 0, right: 0, bottom: 0 }}>
        <img
                  src={brightImage}
                  alt=""
                  className="w-10 h-10 rounded-full ml-4 mt-2"
                />
                <p className='mt-[-3%] ml-[-73%] text-base '>Jayani Ranasinghe</p>
                <p className='mt-[0.01%] ml-[-73%] text-red-600 text-sm'>Hey, What's up bro?</p>
                <p className='mt-[-3%] ml-[83%] text-sm '>8.45pm</p>
                <hr className='mt-4'></hr>
        </tr>
        <tr className='bg-gray-100'
             style={{ position: "relative", top: -25, left: 0, right: 0, bottom: 0 }}>
        <img
                  src={brightImage}
                  alt=""
                  className="w-10 h-10 rounded-full ml-4 mt-2"
                />
                <p className='mt-[-3%] ml-[-73%] text-base '>Jayani Ranasinghe</p>
                <p className='mt-[0.01%] ml-[-73%] text-red-600 text-sm'>Hey, What's up bro?</p>
                <p className='mt-[-3%] ml-[83%] text-sm '>8.45pm</p>
                <hr className='mt-4'></hr>
        </tr>
      </table>

    </div>
  );
};
