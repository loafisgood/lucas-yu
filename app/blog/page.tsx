import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import { PostMetadata } from "../components/PostMetadata";


const Blog = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  const postsSorted = postPreviews.sort((a, b) => {
    const aDate = new Date((a.props as PostMetadata).date);
    const bDate = new Date((b.props as PostMetadata).date);
    return bDate.getTime() - aDate.getTime();
  }
  );


  return (
    <div >
      <div className="mt-20">
        <div className="justify-center">
          <h1 className="text-5xl font-bold">Blog</h1>
          <hr className="mt-4"></hr>
          <h2 className="text-lg text-slate-500 mt-2"> Whatever I feel like writing down will be here</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-10">
        {postsSorted.map((post) => post)}
      </div>
    </div>
  );
};

export default Blog;
