import fs from "fs";
import matter from "gray-matter";
import getProjectPostMetadata from "../../components/getProjectPostMetaData";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { faMedal} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import
{
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

const getPostContent = (slug: string) => {
  const folder = `projectposts/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getProjectPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};



const PostProjectPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="w-3/4 mx-auto align-center text-lg mb-12" style={{color : "#404040"}}>
      <div className="mt-20">
        <div className="my-4 text-left">
          {post.data.award === true ? <div> <p className="text-xl font-semibold text-slate-600">  {post.data.awardWon} </p>  <hr className="my-4"/> </div>: null}
          {post.data.award === true? <FontAwesomeIcon icon={faMedal}className="text-gold-500 text-4xl m-1"/> : null }
          <h1 className="text-5xl text-black font-bold">{post.data.title}</h1>
          <p className="text-slate-600 mt-1">{post.data.subtitle}</p>
        </div>
        
        
        {post.data.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-block bg-gray-800 -my-10 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2">
            {tag}
          </span>
        ))}


        <div className="text-slate-700 font-bold hover:text-slate-900 duration-300 mt-4 border-b-2" style={{color : "#404040"}}>
          <FontAwesomeIcon icon={faGithub} className="text-2xl"/>
          <a href = {post.data.github} target="_blank" rel="noopener noreferrer"> Github</a>
        </div>
      </div>

      <article className="prose">
        <Markdown className={"markdown"}>
            {post.content}
        </Markdown>
     </article>
      <hr className="my-4"></hr>
      <h1 className="text-2xl font-bold">Other Projects</h1>
      <Link href="/projects">
        <p className="text-slate-700 hover:text-slate-900 duration-300 mb-8">← Back to Projects</p>
      </Link>
    </div>

  );
};



export default PostProjectPage;