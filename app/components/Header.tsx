"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "../../public/logo.png";
import { IoCloseSharp } from "react-icons/io5";

const navButtons = [
  {
    title: "About",
  },
  {
    title: "Tokenomics",
  },
  {
    title: "Roadmap",
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
        <Image
          className={`w-[80px] lg:w-[100px] ${menuOpen ? "hidden" : "block"}`}
          src={logo}
          alt="logo"
        />
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
            <button
              key={index}
              className="text-lg font-medium"
              onClick={closeMenu}
            >
              {item.title}
            </button>
          ))}
          <button
            className="bg-primary py-2 px-4 rounded-full text-lg font-medium lg:text-xl"
            onClick={closeMenu}
          >
            Buy Now
          </button>
        </div>
      )}

      <div className=" hidden lg:flex lg:flex-row mt-4 lg:mt-0 lg:ml-auto gap-5">
        {navButtons.map((item, index) => (
          <button
            key={index}
            className="text-lg font-medium"
            onClick={closeMenu}
          >
            {item.title}
          </button>
        ))}
        <button
          className="bg-primary py-2 px-4 rounded-full text-lg font-medium lg:text-xl"
          onClick={closeMenu}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
