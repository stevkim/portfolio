import { Link } from "@tanstack/react-router";
import randomProjects from "../../lib/randomProjects";
import { useMemo, useState } from "react";
import { motion } from 'framer-motion';
import ProjectCard from "../project-list/ProjectCard";

const HeroProjects = () => {
  const projectList = useMemo(() => randomProjects(), []);
  const [active, setActive] = useState<string | null>(null);

  const handleActive = (project: string) => {
    if (active === project) {
      setActive(null);
    } else {
      setActive(project);
    }
  }

  return (
    <motion.section
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-8 items-center justify-center p-2"
    >
      <h3 className="text-3xl font-semibold">projects.</h3>
      {
        projectList.map((project, index) => {
          return <ProjectCard key={project.name} project={project} activeState={{ active, handleActive }} index={index} />
        })
      }
      <Link className="btn btn-primary" to="/portfolio">see more projects</Link>
    </motion.section>
  )
}

export default HeroProjects;