import fs from "fs";
import matter from "gray-matter";
import getProjectPostMetadata from "../../components/getProjectPostMetaData";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { faMedal} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
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
    <div className="xl:w-3/4 mx-auto align-center text-lg mb-12" style={{color : "#404040"}}>
      <div className="mt-20">
        <div className="my-4 text-left">
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
      
      <Image src={post.data.img} className="mx-auto shadow-md my-4" width={800} height={400} alt="post image" />

      <hr className="my-4"></hr>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getProjectPostMetadata().map((post) => (
          <Link href={`/projectposts/${post.slug}`} key={post.slug}>
            <div key={post.slug} className="bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-700 duration-300 h-64">
              <h1 className="text-xl font-semibold text-slate-300">{post.title}</h1>
              <p className="text-slate-400 line-clamp-3">{post.subtitle}</p>
              <div className="flex flex-wrap mt-2">
                {post.tags && post.tags.map((tag: string) => (
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mb-2" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>

  );
};



export default PostProjectPage;