"use client";
import React from 'react';
import Image from 'next/image';
import logo from '../images/staycoin-logo.png';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

const navButtons = [
  { title: "Home", to: "/" },
  { title: "About", to: "#about" },
  { title: "Roadmap", to: "#roadmap" },
  { title: "FAQ", to: "#faq" },
  { title: "Whitepaper", to: "#", target: "_blank" },
];

const Footer = () => {
  return (
    <footer className="mt-auto py-8 bg-indigo-900 border-t border-indigo-700 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link href="/" className="block">
          <Image src={logo} alt="logo" width={150} height={50} />
        </Link>
        <ul className="list-none flex flex-wrap space-x-4">
          {navButtons.map((button, index) => (
            <li key={index} className="mb-0">
              <Link href={button.to} className="text-white hover:text-green-400 focus:text-green-400">
                {button.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <Link href="#" className="text-white" target="_blank" aria-label="Twitter">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white" target="_blank" aria-label="Discord">
            <FaDiscord className="w-5 h-5" />
          </Link>
        </div>
        <div className="text-white text-xs opacity-50 absolute bottom-2 right-2">
          © 2024 StayCoin - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
