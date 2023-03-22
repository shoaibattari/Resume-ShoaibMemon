import React from "react";
import Image from "next/image";
import Web from "./images/WEBDESIGN.webp";

function ProjectsCards() {
  return (
    <div className="grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-3  ">
      <div className="border-2 z-10 rounded-md pb-5 m-5 ">
        <div className="">
          <div className="">
            <Image
              src={Web}
              width={500}
              height={300}
              alt={"Web Design"}
              className="rounded-md  hover:scale-125"
            />
          </div>
        </div>
        <div className="p-5 ">
          <h3 className="text-gray-400 font-serif">WEB DESIGN</h3>
          <h2 className=" text-2xl font-bold text-gray-800 hover:text-orange-500 mt-2">
            Business Website Design
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCards;
