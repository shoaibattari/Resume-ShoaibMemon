import React from "react";
import ProjectsCards from "./ProjectsCards";

function Projects() {
  return (
    <div className="md:px-[56px] px-[20px] ">
      <div>
        <div>
          <h1 className=" md:ml-[40%] text-4xl md:text-5xl text-orange-500 border-l-4 border-orange-500 p-5 font-extrabold mt-5 ">
            Projects
          </h1>
          <h2 className="md:ml-[30%] text-3xl lg:text-6xl xl:text-6xl text-gray-900 font-bold line">
            My Latest Project
          </h2>
        </div>
      </div>
      <ProjectsCards />
    </div>
  );
}

export default Projects;
