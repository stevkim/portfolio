import { Projects } from "../../assets/siteData";
import TimelineProjectCard from "./TimelineProjectCard";
import CheckMark from "./CheckMark";

const Timeline = () => {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon timeline-compact w-full" >
      {
        Projects.map((project, index) => {
          return (
            <li key={project.name} className="">
              {index === 0 ? <></> : <hr />}
              <CheckMark />
              <TimelineProjectCard key={project.name} project={project} />
              {index === Projects.length - 1 ? <></> : <hr /> }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Timeline;