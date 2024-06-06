"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Exchange from "./components/Exchange";
import Collection from "./components/Collection";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Presale from './components/Presale'
export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Exchange />
      <Collection />
      <Roadmap />
      <Tokenomics />
      <Presale />
    </div>
  );
}
