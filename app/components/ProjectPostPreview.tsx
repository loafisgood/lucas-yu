"use client";

import Link from "next/link";
import { ProjectMetadata } from "./ProjectMetadata";

const ProjectPostPreview = (props: ProjectMetadata) => {
  return (
    <div className="border border-slate-300 hover:border-slate-700 transition duration-300 rounded-lg shadow-smbg-white overflow-hidden">
      <Link href={`/projectposts/${props.slug}`}>
        <div className="relative">
          <img
            src={props.img}
            className="w-full h-40 md:h-56 object-cover"
          />
        </div>
        <div className="p-5">
          <div className="text-2xl font-semibold transition duration-500 ease-in-out text-slate-950">
            {props.title}
          </div>
          <p className="text-slate-500">{props.subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectPostPreview;