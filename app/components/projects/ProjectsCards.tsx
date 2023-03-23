import React from "react";
import Image from "next/image";
import Button from "../Button";

interface Proj {
  id: number;
  Image: string;
  Alt: string;
  text1: string;
  text2: string;
  Site: string;
  Github: string;
}

const projects: Proj[] = [
  {
    id: 1,
    Image: "/panaverse tailwind.webp",
    Alt: "WebDesign1",
    text1: "WEB DESIGN",
    text2: "Panaverse WebPage Next.Js Tailwind Css",
    Site: "https://panaverse-tailwind-shoaibmemon-gmailcom.vercel.app/",
    Github: "https://github.com/shoaibattari/Panaverse-tailwind",
  },
  {
    id: 2,
    Image: "/panaverse-chakra.webp",
    Alt: "WebDesign2",
    text1: "WEB DEVELOPMENT",
    text2: "Panaverse WebPage Next.Js Chakra Ui",
    Site: "https://panaverse-shoaibmemon-gmailcom.vercel.app/",
    Github: "https://github.com/shoaibattari/Panaverse",
  },
  {
    id: 3,
    Image: "/Next.js-TodoApp.webp",
    Alt: "WebDesign3",
    text1: "APP DESIGN",
    text2: "Next.js TodoApp Chakra Ui",
    Site: "https://todo-app-shoaibmemon-gmailcom.vercel.app/",
    Github: "https://github.com/shoaibattari/TODO-APP-NEXTJS",
  },
  {
    id: 4,
    Image: "/Pricing-Ui-Chakra.webp",
    Alt: "WebDesign4",
    text1: "WEB DESIGN",
    text2: "Pricing Ui Chakra Ui",
    Site: "https://next-js-pricing-ui.vercel.app/",
    Github: "https://github.com/shoaibattari/next-js-pricing-ui",
  },
  {
    id: 5,
    Image: "/10-cli-project.webp",
    Alt: "WebDesign5",
    text1: "WEB DESIGN",
    text2: "10 Typescript Cli Projects ",
    Site: "https://www.npmjs.com/~shoaibmemon",
    Github: "https://github.com/shoaibattari/typescript-cli-projects",
  },
  //
];

function ProjectsCards() {
  return (
    <div className="grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-3   ">
      {projects.map((ele) => (
        <div className="border-2 rounded-md pb-5 m-5 mt-10" key={ele.id}>
          <div>
            <Image
              src={ele.Image}
              width={500}
              height={300}
              alt={ele.Alt}
              className="rounded-md  hover:scale-105 delay-100"
            />
          </div>

          <div className="p-5 ">
            <h3 className="text-gray-400 font-serif ">{ele.text1}</h3>
            <h2 className=" text-3xl font-bold text-gray-800 hover:text-orange-500 h-14 mt-2">
              {ele.text2}
            </h2>
          </div>
          <div className=" md:grid md:grid-cols-2 ">
            <div className="mt-3  ">
              <Button text={"Visit Site"} link={ele.Site} />
            </div>
            <div className="mt-3 ">
              <Button text={"View Github"} link={ele.Github} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsCards;
