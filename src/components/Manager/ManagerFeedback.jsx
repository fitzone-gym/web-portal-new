import React from "react";
import { images } from "../../constants";

export const ManagerFeedback = () => {
  return (
    <div
      className="w-[80%]"
      style={{
        position: "fixed",
        top: 130,
        left: 290,
        right: 0,
        bottom: 0,
      }}
    >
      <div>
        <div
          className="border drop-shadow-md font-bold text-2xl rounded-xl ml-44 mt-16"
          style={{
            height: "30%",
            width: "83%",
          }}
        >
          <p
            className="text-left text-lg py-4 px-6 ml-7"
            style={{
              marginTop: "-2%",
            }}
          >
            Lasith Senadheera
          </p>
          <p
            className="text-left text-lg py-4 px-6"
            style={{
              marginTop: "-2.5%",
              marginLeft: "2.2%",
            }}
          >
            Member Id - 20000930
          </p>
          <p
            className="text-left text-lg py-6 px-6 mt-[-3%] mb-[-2%]"
            style={{
              marginLeft: "2%",
              width: "95%",
            }}
          >
            I wanted to share a quick feedback on your gym management system.
            Overall, I find the system easy to use and navigate. The class
            registration feature is a breeze, and the staff is always helpful.
            However, I noticed a few glitches with attendance tracking that
            could be improved. Otherwise, great job!
          </p>

          <div>
            <p className="text-base ml-[-86%] mt-2 text-blue-900">Rate for us</p>
            <img
              className="w-[12%] h-18 mt-[-3%] ml-8 mb-[-5%]"
              src={images.starsImage}
              alt=""
            />
              <a className="text-base underline ml-[78%] mt-[-12%] text-blue-900">Reply</a>
          </div>
        
        </div>

        <div
          className="bg-gray-400 font-bold text-2xl rounded-xl ml-44 mt-12"
          style={{
            height: "30%",
            width: "83%",
          }}
        >
          <p
            className="text-left text-lg py-4 px-6 ml-7"
            style={{
              marginTop: "-2%",
            }}
          >
            Lasith Senadheera
          </p>
          <p
            className="text-left text-lg py-4 px-6"
            style={{
              marginTop: "-2.5%",
              marginLeft: "2.2%",
            }}
          >
            Member Id - 20000930
          </p>
          <p
            className="text-left text-lg py-6 px-6 mt-[-3%] mb-[-2%]"
            style={{
              marginLeft: "2%",
              width: "95%",
            }}
          >
            I wanted to share a quick feedback on your gym management system.
            Overall, I find the system easy to use and navigate. The class
            registration feature is a breeze, and the staff is always helpful.
            However, I noticed a few glitches with attendance tracking that
            could be improved. Otherwise, great job!
          </p>

          <div>
            <p className="text-base ml-[-86%] mt-2 text-blue-900">Rate for us</p>
            <img
              className="w-[12%] h-18 mt-[-3%] ml-8 mb-[-5%]"
              src={images.starsImage}
              alt=""
            />
              <a className="text-base underline ml-[78%] mt-[-12%] text-blue-900">Reply</a>
          </div>
        
        </div>

        <div
          className="bg-gray-400 font-bold text-2xl rounded-xl ml-44 mt-12"
          style={{
            height: "30%",
            width: "83%",
          }}
        >
          <p
            className="text-left text-lg py-4 px-6 ml-7"
            style={{
              marginTop: "-2%",
            }}
          >
            Lasith Senadheera
          </p>
          <p
            className="text-left text-lg py-4 px-6"
            style={{
              marginTop: "-2.5%",
              marginLeft: "2.2%",
            }}
          >
            Member Id - 20000930
          </p>
          <p
            className="text-left text-lg py-6 px-6 mt-[-3%] mb-[-2%]"
            style={{
              marginLeft: "2%",
              width: "95%",
            }}
          >
            I wanted to share a quick feedback on your gym management system.
            Overall, I find the system easy to use and navigate. The class
            registration feature is a breeze, and the staff is always helpful.
            However, I noticed a few glitches with attendance tracking that
            could be improved. Otherwise, great job!
          </p>

          <div>
            <p className="text-base ml-[-86%] mt-2 text-blue-900">Rate for us</p>
            <img
              className="w-[12%] h-18 mt-[-3%] ml-8 mb-[-5%]"
              src={images.starsImage}
              alt=""
            />
              <a className="text-base underline ml-[78%] mt-[-12%] text-blue-900">Reply</a>
          </div>
        
        </div>
      </div>
    </div>
  );
};
