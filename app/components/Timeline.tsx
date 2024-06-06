import React from "react";
import Image from "next/image";
import timeImage from "../../public/pepe_island-removebg-preview.png";
import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <div className={`${styles.container} mx-auto w-full h-full`}>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2 absolute z-0 border-primary h-full border-4 left-1/2 transform -translate-x-1/2"></div>

        {/* Each timeline block */}
        {["2", "1"].map((number, index) => (
          <div key={index} className={`mb-8 flex flex-col md:flex-row${index % 2 === 0 ? '-reverse' : ''} items-center w-full ${styles['left-timeline']}`}>
            <div className="order-1 w-full md:w-5/12"></div>
            <div
              className="mx-auto p-2 rounded-lg z-20 flex items-center w-16 h-16 md:absolute md:left-0 md:relative md:order-1"
              style={{ backgroundColor: "rgba(225, 49, 34, 0.24)" }}
            >
              <div
                className="p-2 rounded-lg flex items-center w-12 h-12"
                style={{ backgroundColor: "rgba(225, 49, 34, 0.24)" }}
              >
                <div className="flex items-center w-8 h-8 bg-primary rounded-lg z-20">
                  <h1 className="mx-auto font-semibold text-white">{number}</h1>
                </div>
              </div>
            </div>
            <div className={`order-1 z-10 relative flex items-center bg-black rounded-lg shadow-xl w-full md:w-5/12 py-4 mx-4 md:mx-0 ${styles.z10}`}>
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="flex-1">
                  <h3 className="mb-3 font-bold text-xl text-white">Lorem Ipsum</h3>
                  <p className="para text-sm leading-snug tracking-wide text-white text-opacity-100">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
                <Image className="flex-shrink-0 w-[190px] h-[200px]" src={timeImage} alt="Example" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
