"use client";
import logo from "../../public/logo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Navbar {
  id: number;
  name: string;
  link: string;
}
export const NAV: Navbar[] = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "about" },
  { id: 3, name: "Services", link: "services" },
  { id: 4, name: "Porfolio", link: "projectContent" },
  { id: 5, name: "Contact", link: "contact" },
];

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full top-0 left-0 ">
      <div className="lg:flex items-center justify-between bg-gray-200 py-2 ">
        <div className="duration-500  hover:-translate-x-3.5 md:px-[60px] px-[20px]">
          <Link href="/">
            <Image src={logo} width={80} height={40} alt="Logo" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
        </div>

        <ul
          className={` z-10 font-mono lg:flex lg:items-center lg:pb-0 pb-12  bg-gray-200 absolute lg:static left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {NAV.map((link) => (
            <li
              key={link.id}
              className="lg:mr-20 md:text-1xl text-2xl lg:my-0 my-7"
            >
              <Link
                href={link.link}
                className=" z-10 text-emerald-800 font-bold hover:text-orange-500 hover:underline hover:underline-offset-2 duration-300 hover:text-3xl  flex items-center justify-center"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
