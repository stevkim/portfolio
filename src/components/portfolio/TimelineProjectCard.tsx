import type { Project } from "../../assets/siteData";
import GithubBtn from "../GithubBtn";
import { motion } from 'framer-motion';

interface Props {
  project:Project;
}

const TimelineProjectCard = ({ project }: Props) => {

  return (
    <motion.div
      initial={{ x: -200 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      className="timeline-end mb-10 flex flex-col md:flex-row gap-2 w-full p-4 shadow-lg border-2 rounded-lg"
    >
      <div className="w-full lg:w-[50%] flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">{project.name}</h2>
        <div className="text-sm italic">{project.stack}</div>
        <div className="text-base mb-auto">{project.description}</div>
        <GithubBtn link={project.link} />
      </div>
      <div className="w-full lg:w-[50%] flex items-center justify-center">
        <img  src={project.image} alt={project.name} width='300px' height='300px' className="w-[90%] md:w-auto h-auto md:h-[250px] mx-auto" />
      </div>
    </motion.div>
    )
}

export default TimelineProjectCard;