import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import section from "../../public/section.png";
import confetti from "../../assets/confetti.png";
import pepe from "../../assets/pepe-frank.png";
import island from "../../assets/pepe-island.jpg";
import scifi from "../../assets/scifi-pepe.jpg";
import viking from "../../assets/viking-pepe.jpg";
import timelineImage from "../../assets/timelineImage.jpeg";
import horse from "../../public/horse.png";
// import collection from "../../public/collection2.png";

const Collection = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-[120px] py-[160px]">

            <div className="relative w-90  ">

                <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 opacity-20 gradient-to-t z">
                    <div className="p-4  ">
                        <Image src={confetti} alt="confetti" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={pepe} alt="pepe" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={island} alt="island" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={scifi} alt="scifi" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={viking} alt="viking" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={timelineImage} alt="timeline" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={timelineImage} alt="timeline" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={viking} alt="timeline" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={scifi} alt="timeline" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={island} alt="timeline" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={pepe} alt="timeline" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 {/*sm:w-[200px] h-[200px]*/}">
                        <Image src={confetti} alt="timeline" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Content overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
                    <div className="px-4 pt-20">
                        <p className="font-inter text-base font-semibold leading-6 tracking-wider text-center uppercase text-red-500 mb-4">
                            Roadmap
                        </p>
                        <p className="font-gilroy text-3xl lg:text-5xl my-5" style={{ fontSize: "48px", fontWeight: 700, lineHeight: "56px" }}>
                            Staycoin NFT ART<br className="lg:hidden" /> Collection
                        </p>
                        <p className="leading-8 mb-8 text-center max-w-[598px]">
                            Swab aye red ahoy chandler. Jack <br className="lg:hidden" />
                            scourge driver boat fer of yarr red <br className="lg:hidden" />
                            tales. Just gang away hang chase jjb arrgh gold
                            lanyard parre. Scurvy lateen warrp chanddlerr gar boat 
                            boatswait men.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 lg:gap-1 justify-center">
                            <button
                                className="bg-red-800 lg:ml-16 py-4 px-14 rounded-full text-lg font-medium lg:text-xl text-white"
                                onClick={() => console.log('View Collection')}
                            >
                                View Collection
                            </button>
                            <button
                                className="bg-black py-4 px-14 rounded-full text-lg font-medium lg:text-xl text-white border-2 border-white "
                                onClick={() => console.log('Learn More')}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 lg:py-20 bg-no-repeat" style={{ backgroundImage: "url(bg.png)", backgroundSize: "800px", backgroundPositionX: "1100px" }}>
                <div className="my-20 lg:my-2">
                    <p className="font-gilroy text-2xl lg:text-4xl text-center mb-4 sm:mb-10" style={{ fontWeight: 700, lineHeight: "40px" }}>
                        We Are Listed On The <br className="lg:hidden" /> Following Exchanges
                    </p>
  

          <p className="font-inter text-base lg:text-lg text-center mb-10" style={{ lineHeight: "25px" }}>
            Swab aye red ahoy chandler. Jack <br className="lg:hidden" /> scourge driver boat fer of yarr red <br className="lg:hidden" /> tales.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-5 my-10">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="w-full lg:w-auto cursor-pointer">
              <div style={{ background: "rgba(225, 49, 34, 0.08)" }} className="w-[80%] mx-auto lg:w-56 flex flex-col gap-1 justify-start items-center border border-primary rounded-3xl p-5">
                <Image src={horse} alt="" />
                <div className="flex items-center">
                  <p >Uniswap</p>
                  <FaArrowRightLong className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Collection;