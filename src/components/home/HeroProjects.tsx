import HeroProjectCard from "./HeroProjectCard";
import { Link } from "@tanstack/react-router";
import randomProjects from "../../lib/randomProjects";
import { useMemo } from "react";
import { motion } from 'framer-motion';

const HeroProjects = () => {
  const projectList = useMemo(() => randomProjects(), []);

  return (
    <motion.section
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-8 items-center justify-center p-2 md:p-20"
    >
      <h3 className="text-3xl font-semibold">projects</h3>
      {
        projectList.map((project) => {
          return <HeroProjectCard key={project.name} project={project} />
        })
      }
      <Link className="btn btn-primary" to="/portfolio">see more projects.</Link>
    </motion.section>
  )
}

export default HeroProjects;