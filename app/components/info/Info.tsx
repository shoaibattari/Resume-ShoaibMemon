import React from "react";
import Link from "next/link";
import { BsFacebook, BsWhatsapp, BsLinkedin , BsTwitter , BsYoutube } from "react-icons/bs";


function Info() {
  return (
    <div className="md:px-[96px] px-[20px] bg-black border  ">
      <div>
        <h1 className=" md:ml-[35%] text-4xl md:text-5xl text-orange-500 border-l-4 border-orange-500 p-5 font-extrabold mt-5 ">
          CONTACT INFO
        </h1>
      </div>
      <div>
        <div>
          <dl>
            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-5">
              <dt className="text-lg md:text-2xl font-bold text-white">Name:</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-white sm:mt-0 sm:col-span-2">
                Shoaib Memon
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-gray-900">Father Name:</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                Abdul Sattar
              </dd>
            </div>

            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-white">Date Of Birth:</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-white sm:mt-0 sm:col-span-2">
                12-May-1992
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-gray-900">Nationality:</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                Pakistani
              </dd>
            </div>

            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-white">Whatsaap :</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-white sm:mt-0 sm:col-span-2">
                0323-2579204
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-gray-900">Address:</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                Hussainabad F.B Area Near HEF Canteen Karachi Pakistan
              </dd>
            </div>

            <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-white">Email:</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-white sm:mt-0 sm:col-span-2">
                shoaibmemonit@gmail.com
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
              <dt className="text-lg md:text-2xl font-bold text-gray-900">Address:</dt>
              <dd className="mt-1 text-lg md:text-3xl font-bold text-gray-900 sm:mt-0 sm:col-span-2  hover:text-orange-500">
                <Link href={"https://github.com/shoaibattari"} target="_blank">
                  github.com/shoaibattari
                </Link>
              </dd>
            </div>

          </dl>
        </div>
      </div>

      <h1 className="flex justify-around text-4xl md:text-5xl text-white  p-5  mt-5">
       <div className="hover:text-orange-500"> <Link href={"https://www.facebook.com/shoaib.attari.399"} target="_blank"> <BsFacebook /></Link></div>
       <div className="hover:text-orange-500"> <Link href={"https://wa.me/03232579204"} target="_blank">  <BsWhatsapp /></Link></div>
       <div className="hover:text-orange-500"> <Link href={"https://www.linkedin.com/in/shoaib-memon26"} target="_blank">  <BsLinkedin /></Link></div>
       <div className="hover:text-orange-500"> <Link href={"https://twitter.com/shoaibmemon26"} target="_blank">  <BsTwitter /></Link></div>
       <div className="hover:text-orange-500"> <Link href={"https://www.youtube.com/@shoaibmemon26"} target="_blank">  <BsYoutube /></Link></div>
       
       
       
       
      </h1>
    </div>
  );
}

export default Info;
