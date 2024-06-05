import React from "react";
import Image from "next/image";
import bg1 from "../../public/viking_pepe-removebg-preview.png";

const Tokenomics = () => {
  return (
    <div className="mx-5 md:mx-20">
      <div className="py-10">
        <div className="mb-5 text-center">
          <p className="font-inter text-base font-semibold leading-[24px] tracking-wider text-center uppercase text-red-500 mb-4">
            tokenomics
          </p>

          <p
            className="font-gilroy text-3xl lg:text-5xl text-center my-5"
            style={{ fontSize: "48px", fontWeight: 700, lineHeight: "56px" }}
          >
            Some <br className="lg:hidden" /> Staycoin
            <br className="lg:hidden" />
            Tokenomics
          </p>
          <p>
            Swab aye red ahoy chandler.
            <br className="lg:hidden" /> Jack scourge driver boat fer of
            <br className="lg:hidden" /> yarr red tales.
          </p>
        </div>
        <div className="p-5">
          <div className="flex flex-col mx-4 lg:flex-row pb-5 gap-5">
            <div
              className="flex-1 border border-primary rounded-3xl p-5 lg:p-6 md:p-1"
              style={{ background: "rgba(225, 49, 34, 0.08)" }}
            >
              <p className="font-inter text-xl lg:text-2xl font-bold leading-[56px] text-left">
                Max Supply
              </p>

              <p className="font-gilroy text-3xl lg:text-4xl font-bold leading-[56px] text-red-500 mb-5">
                1,000,000,000 $TAY
              </p>

              <p className="font-inter text-xl lg:text-2xl font-bold leading-[56px] text-left">
                Total Supply
              </p>

              <p className="font-gilroy text-3xl lg:text-4xl font-bold leading-[56px] text-red-500">
                1,000,000,000 $TAY
              </p>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-5">
              <div
                className="flex-1 border border-primary rounded-3xl p-5"
                style={{ background: "rgba(225, 49, 34, 0.08)" }}
              >
                <p className="font-inter text-xl lg:text-2xl font-bold leading-[40px] text-left">
                  Total Supply
                </p>

                <p className="font-gilroy text-3xl lg:text-4xl font-bold leading-[56px] text-red-500">
                  10%
                </p>
              </div>
              <div
                className="flex-1 border border-primary rounded-3xl p-5"
                style={{ background: "rgba(225, 49, 34, 0.08)" }}
              >
                <p className="font-inter text-xl lg:text-2xl font-bold leading-[40px] text-left">
                  Total Supply
                </p>

                <p className="font-gilroy text-3xl lg:text-4xl font-bold leading-[56px] text-red-500">
                  10%
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 border border-primary rounded-3xl  flex flex-col mx-4 lg:flex-row"
            style={{ background: "rgba(225, 49, 34, 0.08)" }}
          >
            <div className="p-5 lg:w-[80%]">
              <p className="font-gilroy text-2xl lg:text-4xl font-bold leading-[40px] text-left">
                Q1-2026 Phase:
              </p>

              <p className="my-5">
                Hold a raffle for 2 tickets to the Champions League final
                football match of the year 2026. Hold a raffle for 2 tickets to
                the Champions League final football match of the year 2026. Hold
                a raffle for 2 tickets to the Champions League final football
                match of the year 2026. Hold a raffle for 2 tickets to the
                Champions League final football match of the year 2026.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <Image src={bg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
