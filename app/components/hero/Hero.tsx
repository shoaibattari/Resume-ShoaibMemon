"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import shoaib from "../hero/hero.png";
import { motion } from "framer-motion";

function Hero() {
  const VARIANTS = {
    hidden: { opacity: 0, x: "-30vw" },
    visible: { opacity: 1, x: 0 },
    left: { opacity: 0, x: "30vw" },
  };

  return (
    <>
      <div className="w-full top-0 left-0">
        <p className="relative flex justify-center items-center opacity-50 lg:text-9xl md:text-8xl text-5xl  text-gray-200 animate-bounce ">
          DEVELOPER
        </p>
      </div>
      <div className="md:flex relative">
        <div className="md:w-4/6 md:pl-[96px] px-[20px] ">
          <motion.p
            className="text-5xl lg:text-8xl xl:text-9xl text-gray-900 md:mt-5 lg:mt-2 font-extrabold"
            initial="hidden"
            animate="visible"
            variants={VARIANTS}
            transition={{ duration: 0.8 }}
          >
            App & Software Developer
          </motion.p>
          <motion.p
            className=" text-3xl lg:text-6xl text-gray-500 pt-10 font-semibold font-serif "
            initial="hidden"
            animate="visible"
            variants={VARIANTS}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500">SHOAIB </span> MEMON
          </motion.p>
          <div className="mt-3">
            <Button
              text={"Download CV"}
              link={
                "https://drive.google.com/file/d/1_BCmubmNpaWqjG92Tl8hvqYKX8YPX7Zh/view"
              }
            />
          </div>
        </div>

        <div className="hidden md:block  md:w-4/6 opacity-90  flex-wrap md:justify-center md:pr-[50px] px-[20px]">
          <Image
            src={shoaib}
            width={700}
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
