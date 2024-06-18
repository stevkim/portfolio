import type { TProject } from "@/assets/siteDataTypes";
import UsedStack from "../project-list/UsedStack";
import CardBack from "../project-list/CardBack";
import ProjectBtns from "../project-list/ProjectBtns";

type TActive = {
  active: string | null;
  handleActive: (project: string) => void;
};

interface Props {
  project: TProject;
  activeState: TActive;
}

const ProjectCard = ({ project, activeState }: Props) => {
  const { active, handleActive } = activeState;

  const handleSetActive = () => {
    handleActive(project.name);
  };

  return (
    <div className="flex w-[20rem] justify-center md:w-[35rem]">
      <div
        className={`card-wrapper bg-base-400 relative h-[32rem] w-full max-w-[600px] p-8 shadow-lg transition-all ${
          active === project.name ? "card-toggle" : ""
        } overflow-hidden rounded-sm`}
      >
        <div
          className={`card-front absolute left-0 top-0 z-[2] h-full w-full bg-base-200 ${
            active === project.name ? "translate-x-[100%]" : "translate-x-[0]"
          } p-4`}
        >
          <img
            src={project.image}
            alt={project.name}
            width="300px"
            height="300px"
            className="mx-auto mb-1 h-[35%] w-[95%] object-contain lg:h-[55%]"
          />
          <div className="h-[40%]">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
                {project.name}
              </h2>
              <UsedStack projectName={project.name} skills={project.stack} />
            </div>
            <div className="mb-auto md:text-base">{project.description}</div>
            <ProjectBtns
              link={project.link}
              deployed={project.deployed}
              handleSetActive={handleSetActive}
            />
          </div>
        </div>
        {active === project.name ? (
          <CardBack gif={project.gif} handleSetActive={handleSetActive} />
        ) : null}
      </div>
    </div>
  );
};
export default ProjectCard;
