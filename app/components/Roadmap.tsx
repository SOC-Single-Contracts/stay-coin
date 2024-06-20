import React from "react";
import Timeline from "./Timeline";
const Roadmap = () => {
  return (
    <div id="roadmap">
      <div
        className="py-10 lg:py-28 bg-no-repeat "
        style={{
          backgroundImage: "url(bg.png)",
          backgroundSize: "600px",
          backgroundPositionX: "400px",
        }}
      >
        <div className="">
          <p className="font-inter text-base font-semibold leading-[24px] tracking-wider text-center uppercase text-red-500 mb-4">
            roadmap
          </p>
          <p
            className="font-gilroy text-3xl lg:text-5xl text-center my-5"
            style={{ fontSize: "48px", fontWeight: 700, lineHeight: "56px" }}
          >
            Staycoin <br className="lg:hidden" /> Roadmap
          </p>

          <p className="text-center leading-8">
            Swab aye red ahoy chandler. Jack <br className="lg:hidden" />
            scourge driver boat fer of yarr red <br className="lg:hidden" />
            tales.
          </p>
        </div>
        <div className="mb-10">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
