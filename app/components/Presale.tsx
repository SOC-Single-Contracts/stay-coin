import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Presale: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());
  const [progress, setProgress] = useState<number>(60); // Initial progress set to 60%
  const [solanaAmount, setSolanaAmount] = useState<number>(0);
  const [staycoinAmount, setStaycoinAmount] = useState<number>(0);

  function calculateTimeLeft(): TimeLeft | {} {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setProgress(prev => Math.min(100, prev + parseInt(solanaAmount.toString()) + parseInt(staycoinAmount.toString())));
  }, [solanaAmount, staycoinAmount]);

  const timerComponents = [];
  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center bg-primary text-white font-bold rounded-lg p-2 sm:p-4 m-1 shadow-lg"
      >
        <span className="text-xl sm:text-2xl lg:text-4xl">{timeLeft[interval]}</span>
        <span className="text-xs sm:text-sm lg:text-xl capitalize">{interval}</span>
      </div>
    );
  });

  return (
    <div id="presale" className="flex items-center justify-center min-h-screen">
      <div
        style={{ background: 'rgba(225, 49, 34, 0.08)' }}
        className="border border-primary flex flex-col gap-3 sm:gap-5 rounded-3xl p-3 sm:p-5 mb-3 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center">
          <h1
            className="font-gilroy text-2xl sm:text-3xl lg:text-5xl text-center my-3 sm:my-5"
            style={{ fontWeight: 700, lineHeight: '1.2' }}
          >
            Presale<br className="lg:hidden" />
          </h1>
          <div className="flex justify-center mt-2 sm:mt-4">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
          <p className="text-center text-sm sm:text-lg font-medium mt-1 sm:mt-2">
            Until the next price increase
          </p>
          <p className="text-center text-sm sm:text-lg font-medium mt-1 sm:mt-2 text-primary bg-white p-1 sm:p-2 rounded-lg shadow-md">
            1 USD = 279.05 Rs
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 my-3 sm:my-4 relative shadow-inner">
            <div className="bg-primary h-3 sm:h-4 rounded-full shadow-md" style={{ width: `${progress}%` }}></div>
            <span className="absolute right-0 mr-2 text-xs sm:text-sm font-bold text-white">{progress}%</span>
          </div>
          <div className="w-full">
            <div className="flex flex-col w-full mb-3 sm:mb-4">
              <label htmlFor="solanaInput" className="font-inter text-sm sm:text-lg leading-[20px] sm:leading-[30px] text-left">
                Amount of Solana:
              </label>
              <input
                id="solanaInput"
                type="number"
                className="border border-primary rounded-lg p-2 mt-1 w-full bg-white shadow-md"
                value={solanaAmount}
                onChange={e => setSolanaAmount(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col w-full mb-3 sm:mb-4">
              <label htmlFor="nftInput" className="font-inter text-sm sm:text-lg leading-[20px] sm:leading-[30px] text-left">
                Amount of Staycoin:
              </label>
              <input
                id="nftInput"
                type="number"
                className="border border-primary rounded-lg p-2 mt-1 w-full bg-white shadow-md"
                value={staycoinAmount}
                onChange={e => setStaycoinAmount(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="flex justify-center mt-3 sm:mt-4 w-full">
            <button className="bg-primary py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-lg lg:text-xl cursor-pointer shadow-md hover:bg-primary-dark transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;

