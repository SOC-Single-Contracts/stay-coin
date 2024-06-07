"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "../../public/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const navButtons = [
  {
    title: "About",
    to: "about"
  },
  {
    title: "Tokenomics",
    to: "tokenomics"
  },
  {
    title: "Roadmap",
    to: "roadmap"
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
    <div className="flex bg-black text-white items-center justify-between px-4 lg:px-10 py-4 ">
      <div className="flex items-center">
        <Link href ="/">
        <Image
          className={`w-[80px] lg:w-[100px] ${menuOpen ? "hidden" : "block"}`}
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
          <div>
            <button onClick={closeMenu}>
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
          <Link href =  "/presale"
            className="bg-primary py-2 px-4 rounded-full text-lg font-medium lg:text-xl cursor-pointer"
            onClick={closeMenu}
          >
            Buy Now
          /</Link>
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
        <Link href = '/presale'
          className="bg-primary pb-1 px-4 rounded-full text-lg font-medium lg:text-xl cursor-pointer"
          onClick={closeMenu}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
