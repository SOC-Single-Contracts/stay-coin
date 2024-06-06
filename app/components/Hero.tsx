"use client";
import Image from "next/image";
import React, { useState } from "react";
import herBorder from "../../public/heroBorder.png";
import copy from "../../public/copy-01.png";
import timelineImageCard from "../../public/timelineImage.jpeg";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import pepeRulerCard from "../../public/PEPE RULER.jpg";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = "0xf50618dj1k68n168j12ng1723gjajuwbncx"; // Text to copy
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Unable to copy:", error);
    }
  };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url(bg.png)", backgroundSize: "800px" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 px-4  lg:px-20">
        <div className="lg:w-1/4 order-2 lg:order-1">
          <Image src={timelineImageCard} alt="timelineImageCard" className="hidden lg:block" />
        </div>
        <div className="lg:w-1/4 order-3 lg:order-3">
          <Image src={pepeRulerCard} alt="pepeRulerCard" className="hidden lg:block" />
        </div>
        <div className="py-20 lg:w-1/2 lg:py-3 order-1 lg:order-2">
          <div className="text-center">
            <div className="flex justify-center">
              <div
                className="flex p-1 gap-1 cursor-pointer text-center"
                style={{ background: "rgba(255, 255, 255, 0.08)" }}
                onClick={handleCopy}
              >
                <Image src={copy} alt="Copy icon" />
                <p>0xf50618dj1k68n168j12ng1723gjajuwbncx</p>
                {(copied) &&  <p style={{color: "green"}}>Text Copied!</p>}
              </div>
            </div>
            <h1 className="font-gilroy font-bold tracking-wide text-4xl lg:text-7xl my-4">
              Fastest Selling <br />
              Meme Token
            </h1>
            <p className="font-inter tracking-wide leading-loose text-base lg:text-lg my-6 lg:my-8">
              Measured tender yard mutiny cup <br className="lg:hidden" />
              gangplank.
              <br className="hidden" /> Tender jolly arrgh deck
              <br className="lg:hidden" /> poop hands arr.
            </p>
            <Link href= "/presale"
     
            className="w-[150px] h-[58px] px-10 py-3 mb-6 mt-3 lg:mt-8 rounded-[100px] bg-red-500 text-white hover:opacity-100 cursor-pointer"
            
          >
            Buy Now
          </Link>
            {/* <button className="w-[150px] h-[58px] px-10 py-3 mb-6 mt-3 lg:mt-8 rounded-[100px] bg-red-500 text-white hover:opacity-100">
              Buy Now
            </button> */}
          </div>
        </div>
      </div>

      <Image src={herBorder} alt="" className="w-[100%]"/>
    </div>
  );
}