"use client"

import Link from "next/link";
import { ProjectMetadata } from "./ProjectMetadata";


const ProjectPostPreview = (props: ProjectMetadata) => {
  return (
    <div className=" h-full w-full border rounded-md transition p-4 hover:shadow-lg mx-4 text-gray-700 hover:text-gray-900 cursor-default duration-300 border-b-2 border-transparentborder-gray-900 flex flex-col ">
      <div className="items-center xs:h-5/6 xs:w-5/6 xl:h-5/6 hover:w-full hover:h-full transition-all duration-500">
        <img src={props.img} className="relative w-full h-10/12 rounded-md" draggable="false"/>
      </div>
      <div className="mt-4 items-center text-center flex-grow">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className={`transition-all duration-500 overflow-hidden`}>{props.subtitle}</p>
        <div className=" justify-end text-center mt-4">
          <a href={props.github} className={"mx-2 text-gray-700 hover:text-gray-900 transition duration-300 border-b-2 border-transparent hover:border-gray-900"} target="_blank" rel="noopener noreferrer">Github</a>
          <Link href={`/projectposts/${props.slug}`} className="text-blue-500 hover:text-white transition-colors duration-300 bg-transparent w-16 text-center hover:bg-blue-500 rounded-md  p-1 px-1.5">
            <span className="relative">
            <span className="bg-blue-500 absolute left-0 top-0 bottom-0 w-0"></span>
            <span className="relative z-10"> Learn More</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
 
};

export default ProjectPostPreview;