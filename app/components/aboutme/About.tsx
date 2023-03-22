import React from "react";
import shoaib from "../hero/hero.png";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="lg:flex w-full top-0 left-0 ">
        <div className=" relative lg:w-[50%] px-5 md:px-[96px] opacity-90 lg:flex flex-wrap lg:justify-center ">
          <Image
            src={shoaib}
            width={400}
            height={300}
            alt={"shoiab memon"}
            className="rounded-lg opacity-70"
          />
          <div className=" absolute z-10  bg-black bottom-0 right-0 rounded-lg p-1 sm:p-3 lg:p-5 text-center lg:mr-20 md:mr-56 opacity-75">
            <p className="text-7xl text-white font-bold">2+</p>
            <p className="text-1xl text-white">Years Exprience</p>
          </div>
        </div>

        <div className="lg:w-[70%] md:pl-[96px] lg:pl-[1px] lg:pr-[90px] px-[30px]">
          <div>
            <h1 className="text-4xl md:text-5xl text-orange-500 border-l-4 border-orange-500 p-5 font-extrabold mt-5 ">
              About Me
            </h1>
          </div>
          <p className="text-3xl lg:text-4xl xl:text-6xl text-gray-900 md:mt-5 lg:mt-2 font-bold">
            Hey There! I'm <br />
            <span className=" text-5xl lg:text-7xl text-orange-400 font-serif">
              SHOAIB MEMON
            </span>
          </p>
          <p className="text-3xl text-gray-400 mt-5 font-semibold font-serif">
            <FaQuoteLeft className="text-orange-300  text-2xl" />
            I am an 30 years old web developer and currently studying in Web3 &
            Metaverse Program In PIAIC panaverse. <br /> I am front-end web
            developer with 2+ year of experience.
          </p>
          <FaQuoteRight className="text-orange-300 text-2xl " />
          <div className="flex justify-between">
            <div className="mt-5">
              <p className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl font-bold">
                10+
              </p>
              <p className="text-1xl text-gray-500">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
