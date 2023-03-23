import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import shoaib from "../hero/hero.png";
import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

function Skills() {
  return (
    <>
      <div className="lg:flex w-full top-0 left-0 ">
        <div className=" relative lg:w-[50%] px-5 md:px-[96px]  ">
          <div className="mt-5 rounded-3xl bg-orange-500 w-[50%] p-5 ">
            <p className="text-4xl md:text-5xl font-extrabold">TECHNOLOGIES</p>
          </div>
          <div className="text-3xl text-gray-500 mt-5 font-semibold font-serif">
            <p>
              HTML - CSS - JAVASCRIPT - TYPESCRIPT - NEXT.JS - REACT - EXPRESS
              CHAKRAUI - TAILWIND.CSS - BOOTSTRAP - NODEJS - CANVA - MSEXCEL -
              SHOPIFY
            </p>
          </div>
        </div>
        <div className="lg:w-[70%] md:pl-[96px] lg:pl-[1px] lg:pr-[90px] px-[30px]">
          <div>
            <h1 className="text-4xl md:text-5xl text-orange-500 border-l-4 border-orange-500 p-5 font-extrabold mt-5 ">
              Skills
            </h1>
          </div>

          <p className="text-3xl text-gray-400 mt-5 font-semibold font-serif">
            <FaQuoteLeft className="text-orange-300  text-2xl" />I am an expert
            web developer with 2years of experience. I can develop all kinds of
            websites using NodeJS and NextJS. I have worked on many projects.
            Few of sample projects are listed in project section.
          </p>
          <FaQuoteRight className="text-orange-300 text-2xl " />
        </div>
      </div>
    </>
  );
}

export default Skills;
