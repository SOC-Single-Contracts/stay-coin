import React from "react";

const About = () => {
  return (
    <div id="about">
      <div
        style={{
          backgroundImage: "url(bg.png)",
          backgroundSize: "800px",
          backgroundPositionX: "-400px",
        }}
        className="px-4 bg-no-repeat my-7 lg:px-20 flex flex-col lg:flex-row gap-5 py-10 lg:py-52 justify-around lg:my-0"
      >
        <div className="w-full lg:w-1/2">
          <p
            className="font-inter text-base font-semibold leading-[10px] tracking-wider uppercase"
            style={{ fontSize: "16px", letterSpacing: "0.24em", color: "red" }}
          >
            About
          </p>

          <p className="font-gilroy text-4xl my-5 font-bold leading-[50px] lg:leading-[64px]">
            About This Project
          </p>

          <p className="text-base mb-2 lg:text-lg">
            Swab aye red ahoy chandler. Jack scourge driver boat
            <br /> fer of yarr red tales. Just gangway hang chase jib arrgh
            <br /> gold lanyard parrel. Scurvy lateen warp chandler gar
            <br /> boat boatswain men. Lanyard yawl overhaul nipperkin
            <br /> lass.
          </p>
        </div>

        <div
          style={{ background: "rgba(225, 49, 34, 0.08)" }}
          className="border mb-3 w-full lg:w-1/2 border-primary flex flex-col gap-5 rounded-3xl p-5 lg:mb-0"
        >
          <div className="flex flex-row justify-between mx-5 mt-3 lg:mt-0">
            <div className="flex flex-col items-center justify-center">
              <p className="font-gilroy text-3xl lg:text-4xl font-bold text-primary leading-[40px] lg:leading-[64px] text-left">
                152+
              </p>

              <p className="font-inter text-lg leading-[40px] text-left">
                Burned 24th
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-gilroy text-3xl lg:text-4xl font-bold text-primary leading-[40px] lg:leading-[64px] text-left">
                152+
              </p>

              <p className="font-inter text-lg leading-[40px] text-left">
                Burned 24th
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between mx-5">
            <div className="flex flex-col items-center justify-center">
              <p className="font-gilroy text-3xl lg:text-4xl font-bold text-primary leading-[40px] lg:leading-[64px] text-left">
                $1.2M
              </p>

              <p className="font-inter text-lg leading-[30px] text-left">
                Burned 24th
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-gilroy text-3xl lg:text-4xl font-bold text-primary leading-[40px] lg:leading-[64px] text-left">
                500+
              </p>

              <p className="font-inter text-lg leading-[30px] text-left">
                Burned 24th
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
