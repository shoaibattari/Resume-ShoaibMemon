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
    id: 7,
    Image: "/ssbookshop.webp",
    Alt: "WebDesign7",
    text1: "Web App",
    text2: "SS BOOK SHOP",
    Site: "https://ss-bkshop-shoaibmemon-gmailcom.vercel.app/",
    Github: "https://github.com/shoaibattari/Shop",
  },{
    id: 7,
    Image: "/contentfull.webp",
    Alt: "WebDesign7",
    text1: "Data App",
    text2: "contentfull Data App in Nextjs",
    Site: "https://contentfull-app-three.vercel.app/projects",
    Github: "https://github.com/shoaibattari/contentfull-app",
  },
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
    Image: "/api.webp",
    Alt: "WebDesign1",
    text1: "APP DESIGN",
    text2: "Books API Data Fetch And Show With Categories In NEXT.JS",
    Site: "https://api-learn-shoaibmemon-gmailcom.vercel.app/",
    Github: "https://github.com/shoaibattari/Api-Learn-Next",
  },
  {
    id: 3,
    Image: "/panaverse-chakra.webp",
    Alt: "WebDesign2",
    text1: "WEB DEVELOPMENT",
    text2: "Panaverse WebPage Next.Js Chakra Ui",
    Site: "https://panaverse-shoaibmemon-gmailcom.vercel.app/",
    Github: "https://github.com/shoaibattari/Panaverse",
  },
  {
    id: 4,
    Image: "/Next.js-TodoApp.webp",
    Alt: "WebDesign3",
    text1: "APP DESIGN",
    text2: "Next.js TodoApp Chakra Ui",
    Site: "https://todo-app-shoaibmemon-gmailcom.vercel.app/",
    Github: "https://github.com/shoaibattari/TODO-APP-NEXTJS",
  },
  {
    id: 5,
    Image: "/Pricing-Ui-Chakra.webp",
    Alt: "WebDesign4",
    text1: "WEB DESIGN",
    text2: "Pricing Ui Chakra Ui",
    Site: "https://next-js-pricing-ui.vercel.app/",
    Github: "https://github.com/shoaibattari/next-js-pricing-ui",
  },
  {
    id: 6,
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
    <div className=" grid-cols-1  md:grid md:grid-cols-1 lg:grid-cols-2   ">
      {projects.map((ele) => (
        <div className="border-2 rounded-md pb-5 m-5 mt-10 " key={ele.id}>
          <div>
            <Image
              src={ele.Image}
              width={700}
              height={300}
              alt={ele.Alt}
              className="rounded-md  hover:scale-105 delay-105 duration-500 ease-linear "
            />
          </div>

          <div className="p-5 ">
            <h3 className=" text-2xl text-gray-400 font-serif ">{ele.text1}</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-orange-500 h-14 mt-2">
              {ele.text2}
            </h2>
          </div>
          <div className=" md:grid md:grid-cols-2 ">
            <div className="mt-3 ">
              <Button text={"Visit Site"} link={ele.Site} />
            </div>
            <div className="mt-3 w-60">
              <Button text={"View Github"} link={ele.Github} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsCards;
