import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import HorizontalCarousel from "../HorizontalCarousel";
import HeroProjectCard from "./HeroProjectCard";
import randomProjects from "@/lib/randomProjects";

const HeroProjects = () => {
  const projects = useMemo(() => randomProjects(), []);
  const [active, setActive] = useState<string | null>(null);

  const handleActive = (project: string) => {
    if (active === project) {
      setActive(null);
    } else {
      setActive(project);
    }
  };

  return (
    <motion.section
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="flex w-full flex-col items-center justify-center gap-8 p-2"
    >
      <HorizontalCarousel
        title={
          <h3 className="absolute top-20 w-full text-center text-3xl font-semibold">
            projects.
          </h3>
        }
      >
        {projects.map((project) => {
          return (
            <HeroProjectCard
              key={project.name}
              project={project}
              activeState={{ active, handleActive }}
            />
          );
        })}
        <Link className="btn btn-primary m-auto ml-8" to="/portfolio">
          see more projects
        </Link>
      </HorizontalCarousel>
    </motion.section>
  );
};

export default HeroProjects;
