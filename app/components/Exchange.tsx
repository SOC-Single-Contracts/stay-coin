import React from "react";
import Image from "next/image";
import company from "../../public/company.png";
import company1 from "../../public/company1.png";

const Exchange = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8">
      <div className="mb-8">
        <p className="font-inter  text-base font-semibold leading-[24px] tracking-wider text-center uppercase text-red-500 mb-4">
          exchanges
        </p>

        <p
          className="font-gilroy text-2xl lg:text-4xl text-center mb-4 sm:mb-10"
          style={{
            fontWeight: 700,
            lineHeight: "40px",
          }}
        >
          We Are Listed On The <br className="lg:hidden" /> Following Exchanges
        </p>
      </div>

      <div className="hidden sm:flex justify-center items-center my-10">
        <Image src={company} alt="" />
      </div>

      <div className="flex justify-center items-center my-10">
        <Image src={company1} alt="" className="lg:hidden" />
      </div>
    </div>
  );
};

export default Exchange;
