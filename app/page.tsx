"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Exchange from "./components/Exchange";
import Collection from "./components/Collection";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Warning from "./components/Warning";
import FAQSection from "./components/FAQSection";


export default function Home() {
  return (
    <div className="font-luckiest box-shadow" style={{'color':"#A0FAAC"}}>
      <div style={{'backgroundColor':"#63c2fa"}}>

      <Hero />
      <About />
      <Exchange />
      <Collection />
      <Roadmap />
      <Tokenomics />
      <FAQSection />
      <Warning />
      </div>
    </div>
  );
}
