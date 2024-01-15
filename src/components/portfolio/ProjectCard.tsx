import type { Project } from "../../assets/siteData";
import ImageCarousel from './ImageCarousel';
import GithubBtn from "../GithubBtn";

interface Props {
  project:Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="timeline-end mb-10 flex flex-col md:flex-row gap-2 w-full md:w-[800px] p-2">
      <div className="w-full md:w-[50%] flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{project.name}</h2>
        <div className="text-xs italic">{project.stack}</div>
        <div className="text-sm mb-8">{project.description}</div>
        <GithubBtn link={project.link} />
      </div>
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <ImageCarousel images={project.images} />
      </div>
    </div>
    )
}

export default ProjectCard;