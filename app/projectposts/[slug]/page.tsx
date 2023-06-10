import fs from "fs";
import matter from "gray-matter";
import getProjectPostMetadata from "../../components/getPostMetadata";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

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
        
        {post.data.tags.map((tag: string) => (<span className="inline-block bg-gray-800 -my-10 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 "> {tag}</span>))}
        <hr className="my-4"></hr>
      </div>

      <article className="prose">
        <Markdown className={"markdown"}>
            {post.content}
        </Markdown>
    </article>
    </div>

  );
};



export default PostProjectPage;