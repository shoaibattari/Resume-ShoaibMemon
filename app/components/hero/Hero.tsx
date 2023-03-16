import React from "react";
import Button from "../Button";
import Image from "next/image";
// import shoaib from "../hero/hero.jpg";
import shoaib from "../hero/hero.png";

function Hero() {
  return (
    <>
      <div className="w-full top-0 left-0">
        <p className="absolute mx-96 opacity-50 text-9xl scale-150 mt-5  text-gray-200">
          DEVELOPER
        </p>
      </div>
      <div className="flex relative">
        <div className="w-4/6 px-36  mt-44">
          <p className="text-8xl text-gray-900 mt-20 font-extrabold">
            App & Software Developer
          </p>
          <p className="text-5xl text-gray-500 pt-10 font-semibold font-serif ">
            <span className="text-emerald-800">SHOAIB </span> MEMON
          </p>
          <div className="mt-3 text-center ">
            <Button text={"Contact Me"} link={"/"} />
          </div>
        </div>

        <div className="w-4/6 opacity-90 ">
          <Image
            src={shoaib}
            width={700}
            height={300}
            alt={"shoiab memon"}
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
