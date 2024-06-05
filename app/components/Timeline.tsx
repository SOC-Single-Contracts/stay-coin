import React from "react";

import timeImage from "../../public/pepe_island-removebg-preview.png";
import Image from "next/image";
const Timeline = () => {
  return (
    <div className="container  mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute z-0 border-primary h-full border-4 left-[49.78%]"></div>

        {/* Left timeline */}
        <div className="mb-8 md:flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="md:order-1 b w-full md:w-5/12"></div>
          <div
            className="p-2  rounded-lg z-20 hidden md:flex  items-center absolute left-0 md:relative  md:order-1 w-16 h-16"
            style={{ backgroundColor: "rgba(225, 49, 34, 0.24)" }}
          >
            <div
              className="p-2 rounded-lg z-20 flex  items-center md:order-1 w-12 h-12"
              style={{ backgroundColor: "rgba(225, 49, 34, 0.24)" }}
            >
              <div className="z-20 rounded-lg flex  items-center order-1 w-8 h-8  bg-primary ">
                <h1 className="mx-auto font-semibold  text-white">2</h1>
              </div>
            </div>
          </div>
          <div className="md:order-1 z-10 relative items-center bg-black rounded-lg shadow-xl  md:ml-0 md:w-5/12  py-4 flex">
            <div>
              <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide  text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
            <Image className="md:flex " src={timeImage} alt="" />
          </div>
        </div>

        {/* Right timeline */}
        <div className="mb-8 md:flex z-10 relative  my-32  justify-between items-center w-full right-timeline ">
          <div className="order-1 w-full  md:w-5/12"></div>
          <div
            className="p-2 rounded-lg z-20 hidden md:flex   absolute left-0 md:relative items-center md:order-1 w-16 h-16"
            style={{ backgroundColor: "rgba(225, 49, 34, 0.24)" }}
          >
            <div
              className="p-2 rounded-lg z-20 flex  items-center md:order-1 w-12 h-12"
              style={{ backgroundColor: "rgba(225, 49, 34, 0.24)" }}
            >
              <div className="z-20 rounded-lg flex  items-center order-1 w-8 h-8  bg-primary ">
                <h1 className="mx-auto font-semibold  text-white">1</h1>
              </div>
            </div>
          </div>

          <div className="md:order-1 z-10 relative items-center bg-black rounded-lg shadow-xl  md:ml-0 md:w-5/12  py-4 flex">
             <div>
              <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide  text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
            <Image className="md:flex" src={timeImage} alt="" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Timeline;
