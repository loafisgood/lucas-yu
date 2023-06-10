import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "./ProjectMetadata";

const getProjectPostMetadata = (): ProjectMetadata[] => {
  const folder = "projectposts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const projects = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`projectposts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      tags: matterResult.data.tags,
      github: matterResult.data.github,
      img: matterResult.data.img,
      award: matterResult.data.award,
      awardWon: matterResult.data.awardWon,
      slug: fileName.replace(".md", ""),
    };
  });

  return projects;
};

export default getProjectPostMetadata;