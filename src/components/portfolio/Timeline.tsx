import { Projects } from "../../assets/siteData";
import ProjectCard from "./ProjectCard";
import CheckMark from "./CheckMark";

const Timeline = () => {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact w-full" >
      {
        Projects.map((project, index) => {
          return (
            <li className="">
              {index === 0 ? <></> : <hr />}
              <CheckMark />
              <ProjectCard key={project.name} project={project} />
              {index === Projects.length - 1 ? <></> : <hr /> }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Timeline;