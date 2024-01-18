import type { Project } from "../../assets/siteData";
import GithubBtn from "../GithubBtn";

interface Props {
  project: Project;
}

const HeroProjectCard = ({ project }:Props) => {

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-[800px] p-2">
      <figure className="lg:w-[50%]">
        <img width='300px' height='300px' src={project.image} alt="Album"/>
      </figure>
      <div className="card-body lg:w-[50%]">
        <h2 className="card-title text-2xl">{project.name}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <GithubBtn link={project.link} />
        </div>
      </div>
    </div>
  )
}

export default HeroProjectCard;