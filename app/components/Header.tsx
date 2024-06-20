"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "../images/staycoin-logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import LanguageSelector from "./LanguageSelector";


const navButtons = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "About",
    to: "about"
  },
  {
    title: "Roadmap",
    to: "roadmap"
  },
  {
    title: "FAQ",
    to: "faq"
  },
  {
    title: "Whitepaper",
    to: "whitepaper"
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-4 lg:px-10 py-4 " style={{'backgroundColor':"#6b58cd" ,'color':"#ffffff"}}>
      <div className="flex items-center">
        <Link href ="/">
        <Image
          className={`w-[80px] lg:w-[200px] lg:h-[70px] ${menuOpen ? "hidden" : "block"}`}
          src={logo}
          alt="logo"
        />
        </Link>
      </div>
      <div className={`lg:hidden ${menuOpen ? "hidden" : "block"}`}>
        <button onClick={toggleMenu}>
          <FiMenu size={24} />
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col h-screen w-screen lg:flex-row mt-4 lg:mt-0 lg:ml-auto gap-5">
          <div className="flex justify-end w-full">
            <button onClick={closeMenu} className="mr-4 mt-4">
              <IoCloseSharp size={20} />
            </button>
          </div>
          {navButtons.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-medium cursor-pointer"
              onClick={closeMenu}
            >
              {item.title}
            </ScrollLink>
          ))}
        <div className="flex lg:justify-start w-full lg:w-auto">
            <Link href="/presale"
  
                className="bg-custom-green py-2 px-4 rounded-full text-lg font-medium lg:text-xl cursor-pointer inline-block"
                onClick={closeMenu}
              >
                Buy Now
            </Link>
          </div>
        </div>
      )}

      <div className=" hidden lg:flex lg:flex-row mt-4 lg:mt-0 lg:ml-auto gap-5">
        {navButtons.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-lg font-medium cursor-pointer"
            onClick={closeMenu}
          >
            {item.title}
          </ScrollLink>
        ))}
        {/* <Link href = '/presale'
          className=" pb-1 px-4 rounded-full text-lg font-medium lg:text-xl cursor-pointer"
          style={{'backgroundColor':'#FFD700','color':'#ffffff'}}
          onClick={closeMenu}
        >
          Buy Now
        </Link> */}
      </div>
      {/* <LanguageSelector /> */}
    </div>
  );
}
