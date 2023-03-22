import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

function Skills() {
  return (
    <>
      <div className="md:w-4/6 md:pl-[96px] px-[20px]">
        <div>
          <h1 className=" md:ml-[60%] text-4xl md:text-5xl text-orange-500 border-l-4 border-orange-500 p-5 font-extrabold mt-5 ">
            My Skills
          </h1>
        </div>
        <div className="md:flex">
          <div className="w-[60%]">
            <p className=" text-2xl lg:text-3xl xl:text-5xl text-gray-900 md:mt-5 lg:mt-2 font-bold">
              My Skills and Experience
            </p>
            <p className="text-3xl text-gray-400 mt-5 font-semibold font-serif">
              <FaQuoteLeft className="text-orange-300  text-2xl" />I am an
              expert web developer with 2years of experience. I can develop all
              kinds of websites using ReactJS and NextJS. I have worked on many
              projects. Few of sample projects are listed in project section.
            </p>
            <FaQuoteRight className="text-orange-300 text-2xl " />
          </div>

          {/* right section */}
          <div className="w-[40%]  ">
            <div className="mt-5 flex">
              <p className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl font-bold">
               HTML
              </p>
              <div>
              <AiFillHtml5 className="text-8xl text-gray-500" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
