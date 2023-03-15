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
  { id: 2, name: "About", link: "#" },
  { id: 3, name: "Services", link: "#" },
  { id: 4, name: "Porfolio",link: "#"},
  { id: 5, name: "Blog",link: "#"},
  { id: 6, name: "Contact",link: "#"},


];

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full top-0 left-0 ">
      <div className="md:flex items-between justify-evenly bg-cyan-200 py-2 md:px-10 px-7">
        <div className="duration-500  hover:-translate-x-3.5">
          <Link href="/">
            <Image src={logo} width={80} height={40} alt="Logo" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
        </div>

        <ul
          className={` z-10 md:flex md:items-center md:pb-0 pb-12  bg-cyan-200 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {NAV.map((link) => (
            <li key={link.id}  className="md:mr-20  text-3xl md:my-0 my-7">
              <Link
                href={link.link}
                className=" z-10 text-emerald-800 font-bold hover:text-gray-800 duration-500 hover:text-4xl hover:translate-x-5 "
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