import ProjectCard from "./ProjectCard";
import { Projects } from "@/assets/siteData";
import { useState } from "react";

const ProjectList = () => {
  const [active, setActive] = useState<string | null>(null);

  const handleActive = (project: string) => {
    if (active === project) {
      setActive(null);
    } else {
      setActive(project);
    }
  };

  return (
    <section className="flex w-[90%] max-w-[1250px] flex-row flex-wrap justify-center gap-6">
      {Projects.map((project, index) => {
        return (
          <ProjectCard
            key={project.name}
            project={project}
            activeState={{ active, handleActive }}
            index={index}
          />
        );
      })}
    </section>
  );
};
export default ProjectList;
