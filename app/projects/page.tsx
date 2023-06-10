import getProjectPostMetadata from "../components/getProjectPostMetaData";
import ProjectPostPreview from "../components/ProjectPostPreview";



const Projects = () => {
  const postMetadata = getProjectPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <ProjectPostPreview key={post.slug} {...post} />
  ));


  return (
    <div className="mb-20">
      <div className="mt-20">
        <div className="justify-center">
          <h1 className="text-5xl font-bold">Projects</h1>
          <hr className="mt-4"></hr>
          <h2 className="text-lg text-slate-500 mt-2">Here are a few projects I have been working on</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        {postPreviews.map((post) => post)}
      </div>
    </div>
  );
};

export default Projects;
