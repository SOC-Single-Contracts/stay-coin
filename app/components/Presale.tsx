import React, { useState, useEffect } from 'react';
import './styles/presale.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Presale = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  const [progress] = useState<number>(60); // Initial progress set to 60% and fixed.
  const [solanaAmount, setSolanaAmount] = useState<number>(0);
  const [staycoinAmount, setStaycoinAmount] = useState<number>(0);
  const conversionRate = 3.4; // Example conversion rate: 1 Solana = 3.4 Staycoins

  function calculateTimeLeft(): TimeLeft | null {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSolanaChange = (value: number) => {
    setSolanaAmount(value);
    setStaycoinAmount(value * conversionRate);
  };

  const handleStaycoinChange = (value: number) => {
    setStaycoinAmount(value);
    setSolanaAmount(value / conversionRate);
  };

  const timerComponents = Object.entries(timeLeft ?? {}).map(([interval, value]) => (
    <div key={interval} className="flex flex-col items-center bg-custom-green font-bold rounded-lg p-2 sm:p-4 m-1 shadow-lg">
      <span className="text-xl sm:text-2xl lg:text-4xl" style={{ color: '#221857' }}>{value}</span>
      <span className="text-xs sm:text-sm lg:text-xl capitalize" style={{ color: '#221857' }}>{interval}</span>
    </div>
  ));

  return (
    <div id="presale" className="flex flex-wrap items-center justify-center min-h-screen relative">
      <img src="/section-squares-back-2.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="w-full text-center mb-6 z-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-staycoin">Presale of Staycoin</h2>
        <p className="text-xl sm:text-2xl text-black mt-2">Join the revolution and get your Staycoins now!</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full z-10">
        <div className="lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0">
          <img src="/pepe-island.jpg" alt="Pepe Island" className="rounded-xl shadow-lg max-w-full" />
        </div>
        <div className="border bg-custom-purple flex flex-col gap-3 sm:gap-5 rounded-3xl p-3 sm:p-5 w-full mx-auto relative z-10 max-w-full lg:max-w-lg xl:max-w-xl md:max-w-full sm:max-w-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-gilroy text-2xl sm:text-3xl lg:text-5xl text-center my-3 sm:my-5" style={{ fontWeight: 700, lineHeight: '1.2' }}>
              Presale<br className="lg:hidden" />
            </h1>
            <div className="flex justify-center mt-2 sm:mt-4">
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
            <p className="text-center text-sm sm:text-lg font-medium mt-1 sm:mt-2">
              Until the next price increase
            </p>
            <p className="bg-custom-green text-center text-sm sm:text-lg font-medium mt-1 sm:mt-2 text-primary bg-white p-1 sm:p-2 rounded-lg shadow-md" style={{ color: '#221857' }}>
              1 USD = 279.05 Rs
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 my-3 sm:my-4 relative shadow-inner">
              <div className="bg-custom-green h-3 sm:h-4 rounded-full shadow-md" style={{ width: `${progress}%` }}></div>
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
                  className="border rounded-lg p-2 mt-1 w-full bg-white shadow-md text-black"
                  value={solanaAmount}
                  onChange={e => handleSolanaChange(parseFloat(e.target.value))}
                />
              </div>
              <div className="flex flex-col w-full mb-3 sm:mb-4">
                <label htmlFor="staycoinInput" className="font-inter text-sm sm:text-lg leading-[20px] sm:leading-[30px] text-left">
                  Amount of Staycoin (converted):
                </label>
                <input
                  id="staycoinInput"
                  type="number"
                  className="border rounded-lg p-2 mt-1 w-full bg-white shadow-md text-black"
                  value={staycoinAmount}
                  onChange={e => handleStaycoinChange(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="flex justify-center mt-3 sm:mt-4 w-full">
              <button className="button font-bold text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-lg lg:text-xl cursor-pointer shadow-md transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;
