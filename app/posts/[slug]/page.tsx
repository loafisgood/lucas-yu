import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "../../components/getPostMetadata";
import Link from "next/link";
import Markdown from "markdown-to-jsx";


const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};



const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="w-3/4 mx-auto align-center text-lg mb-12" style={{color : "#404040"}}>
      <div>
        <div className="my-12 text-left">
          <h1 className={`text-4xl font-bold`}>{post.data.title}</h1>
          <p className="text-slate-400 mt-1">{post.data.subtitle}</p>
          <p className="text-slate-400 mt-1">{post.data.date}</p>
          {post.data.tags.map((tag: string) => (<span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mt-2"> {tag}</span>))}
          <hr className="my-2"></hr>
          
          <img src={post.data.img} className="mx-auto shadow-xl my-4" style={{width: "100%"}}/>
          <p className="text-black  text-base text-bold mt-1">{post.data.caption}</p>
          <hr className="my-2"></hr>
        </div>
      </div>

      <article className="prose">
        <Markdown className={"markdown"}>
            {post.content}
        </Markdown>
      </article>
      <div>
        <hr className="my-4"></hr>
        <h1 className="text-2xl font-bold">Other Posts</h1>
        <Link href="/blog">
          <p className="text-slate-700 hover:text-slate-900 duration-300 mb-8">← Back to posts</p>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getPostMetadata().map((post) => (
            <Link href={`/posts/${post.slug}`}>
              <div className="bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-700 duration-300">
                <h1 className="text-xl font-semibold text-slate-300">{post.title}</h1>
                <p className="text-slate-400">{post.subtitle}</p>
                <p className="text-slate-400">{post.date}</p>
                {post.tags.map((tag: string) => (<span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mt-2"> {tag}</span>))}
              </div>
            </Link>
          ))}
        </div>

      </div>

    </div>

  );
};



export default PostPage;