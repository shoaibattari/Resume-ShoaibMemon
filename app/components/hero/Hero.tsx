import React from "react";
import Button from "../Button";
import Image from "next/image";
import shoaib from "../hero/hero.jpg";

function Hero() {
  return (
    <>
      <div className="w-full top-0 left-0  ">
        <p className="relative flex justify-center items-center opacity-50 lg:text-9xl md:text-8xl text-5xl  text-gray-200">
          DEVELOPER
        </p>
      </div>
      <div className="md:flex relative">
        <div className="md:w-4/6 md:px-[96px] px-[20px] ">
          <p className="text-6xl lg:text-8xl xl:text-9xl text-gray-900 md:mt-5 lg:mt-2 font-extrabold">
            App & Software Developer
          </p>
          <p className=" text-3xl lg:text-6xl text-gray-500 pt-10 font-semibold font-serif ">
            <span className="text-emerald-800">SHOAIB </span> MEMON
          </p>
          <div className="mt-3">
            <Button text={"Contact Me"} link={"https://github.com/shoaibattari"} />
          </div>
        </div>

        <div className="md:w-4/6 opacity-90 flex flex-wrap md:justify-center md:px-[10px] px-[20px]">
          <Image
            src={shoaib}
            width={500}
            height={300}
            alt={"shoiab memon"}
            className="rounded-full "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
