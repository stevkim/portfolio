import type { TProject } from '@/assets/siteDataTypes';
import UsedStack from '../project-list/UsedStack';
import CardBack from '../project-list/CardBack';
import ProjectBtns from '../project-list/ProjectBtns';

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
		<div className="w-[20rem] md:w-[35rem] flex justify-center">
			<div
				className={`card-wrapper relative h-[32rem] w-full max-w-[600px] shadow-lg bg-base-400 p-8 transition-all ${
					active === project.name ? 'card-toggle' : ''
				} overflow-hidden rounded-sm`}
			>
				<div
					className={`card-front z-[2] absolute bg-base-200 w-full h-full top-0 left-0 ${
						active === project.name ? 'translate-x-[100%]' : 'translate-x-[0]'
					} p-4`}
				>
					<img
						src={project.image}
						alt={project.name}
						width="300px"
						height="300px"
						className="w-[95%] h-[35%] lg:h-[55%] mx-auto object-contain mb-1"
					/>
					<div className="h-[40%]">
						<div className="flex items-center justify-between mb-2">
							<h2 className="text-2xl lg:text-3xl font-semibold text-primary">
								{project.name}
							</h2>
							<UsedStack
								projectName={project.name}
								skills={project.stack}
							/>
						</div>
						<div className="md:text-base mb-auto">{project.description}</div>
						<ProjectBtns
							link={project.link}
							deployed={project.deployed}
							handleSetActive={handleSetActive}
						/>
					</div>
				</div>
				{active === project.name ? (
					<CardBack
						gif={project.gif}
						handleSetActive={handleSetActive}
					/>
				) : null}
			</div>
		</div>
	);
};
export default ProjectCard;
