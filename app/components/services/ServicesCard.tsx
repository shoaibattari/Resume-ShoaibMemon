import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

function ServicesCard() {
  return (
    <div className="grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-4   mt-10 mb-5">
      <div className=" bg-gray-100 hover:bg-black border  py-10 md:py-24 px-5   hover:text-white ">
        <div>
          <div>
            <CgWebsite className="text-orange-500 text-7xl" />
          </div>

          <h1 className="text-3xl font-bold mt-5 h-20">Website Design</h1>
          <h2 className="text-2xl text-gray-400 mt-5">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </h2>
        </div>
      </div>

      <div className=" bg-gray-100 hover:bg-black border py-10 md:py-24 px-5   hover:text-white ">
        <div>
          <div>
            <FaMobileAlt className="text-orange-500 text-7xl" />
          </div>

          <h1 className="text-3xl font-bold mt-5  h-20">Mobile App Design</h1>
          <h2 className="text-2xl text-gray-400 mt-5">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </h2>
        </div>
      </div>

      <div className=" bg-gray-100 hover:bg-black border py-10 md:py-24 px-5    hover:text-white ">
        <div>
          <div>
            <MdOutlineBrandingWatermark className="text-orange-500 text-7xl" />
          </div>

          <h1 className="text-3xl font-bold mt-5  h-20">Brand Identity</h1>
          <h2 className="text-2xl text-gray-400 mt-5">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </h2>
        </div>
      </div>

      <div className=" bg-gray-100 hover:bg-black border py-10 md:py-24 px-5   hover:text-white ">
        <div>
          <div>
            <SiGoogleanalytics className="text-orange-500 text-7xl" />
          </div>

          <h1 className="text-3xl font-bold mt-5  h-20">Market Analysis</h1>
          <h2 className="text-2xl text-gray-400 mt-5">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
