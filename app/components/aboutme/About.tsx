import React from "react";
import shoaib from "../hero/hero.jpg";
import Button from "../Button";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="md:flex relative">
        <div className="md:w-4/6 opacity-90 flex flex-wrap md:justify-center md:px-[10px] px-[20px]">
          <Image
            src={shoaib}
            width={500}
            height={300}
            alt={"shoiab memon"}
            className="rounded-full "
          />
        </div>
        <div className="md:w-4/6 md:px-[96px] px-[20px] ">
          <p className="text-4xl lg:text-6xl xl:text-5xl text-gray-900 md:mt-5 lg:mt-2 font-bold">
            Welcome to Tonu, Best Software Services
          </p>
          <p className="text-3xl text-gray-400 mt-5 font-semibold font-serif">
            I have 8+ years of experiences in Software Development for give you
            better services
          </p>
          <p className="text-2xl mt-5">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite
          </p>
          <p className=" text-3xl lg:text-6xl text-gray-500 pt-10 font-semibold font-serif ">
            <span className="text-emerald-800">SHOAIB </span> MEMON
          </p>
          <div className="mt-3">
            <Button
              text={"Contact Me"}
              link={"https://github.com/shoaibattari"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
