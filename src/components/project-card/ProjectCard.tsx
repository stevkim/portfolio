import type { Project } from "../../assets/siteDataTypes"
import UsedStack from "./UsedStack"
import { motion } from 'framer-motion'
import CardBack from "./CardBack"
import ProjectBtns from "./ProjectBtns"

type TActive = {
  active: string | null,
  handleActive: (project:string) => void;
}

interface Props {
  project: Project;
  activeState: TActive,
  index: number;
}

const ProjectCard = ({ project, activeState, index }:Props) => {
  const { active, handleActive } = activeState;

  const handleSetActive = () => {
    handleActive(project.name)
  }

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className={`card-wrapper relative h-[400px] lg:h-[500px] w-[600px] shadow-lg bg-base-100 p-8 transition-all ${active === project.name ? 'card-toggle' : ''} overflow-hidden rounded-sm`}
      >
        <div className={`card-front z-[2] absolute bg-base-100 w-full h-full top-0 left-0 ${active === project.name ? 'translate-x-[100%]' : 'translate-x-[0]'} p-4`}>
          <img  src={project.image} alt={project.name} width='300px' height='300px' className="w-[95%] h-[50%] lg:h-[55%] mx-auto" />
          <div className="h-[40%]">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">{project.name}</h2>
              <UsedStack projectName={project.name} skills={project.stack} />
            </div>
            <div className="text-base mb-auto">{project.description}</div>
            <ProjectBtns link={project.link} handleSetActive={handleSetActive} />
          </div>
        </div>
        {active === project.name ? <CardBack gif={project.gif}  handleSetActive={handleSetActive}/> : null}
      </div>
    </motion.div>
  )
}
export default ProjectCard