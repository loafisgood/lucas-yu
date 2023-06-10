"use client"

import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-slate-300 hover:border-slate-700 transition duration-300 p-5  rounded-lg shadow-smbg-white">
        <Link href={`/posts/${props.slug}`}>
            <p className="text-sm text-slate-500">{props.date}</p>
            <div className="text-2xl font-semibold transition duration-500 ease-in-out text-slate-950">
                {props.title}
            </div>
            <p className="text-slate-500">{props.subtitle}</p>
        </Link>
    </div>
  );
};

export default PostPreview;