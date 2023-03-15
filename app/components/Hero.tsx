import React from "react";
import Button from "./Button";
import Image from "next/image";
import shoaib from "public/IMAGE01.jpg";

function Hero() {
  return (
    <>
      <div>
        <p className=" absolute mx-96 opacity-50 text-9xl scale-150 mt-5  text-gray-200">
          DEVELOPER
        </p>
      </div>
      <div className="flex p-36 bg-red relative ">
        <div className="w-60%">
          <p className="text-7xl text-gray-900 mt-20 font-extrabold">
            App & Software Developer
          </p>
          <p className="text-5xl text-gray-500 pt-10 font-semibold ">
            SHOAIB MEMON !!!!!!
          </p>
          <div className="mt-3 text-center">
            <Button text={"Contact Me"} link={"/"} />
          </div>
        </div>

        <div className="w-40% opacity-90 m-24">
          <Image
            src={shoaib}
            width={500}
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
