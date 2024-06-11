import FlipBtn from "./FlipBtn";
import DeployedBtn from "./DeployedBtn";
import GithubLink from "./GithubLink";

interface Props {
  handleSetActive: () => void;
  link: string;
  deployed?: string;
}

const ProjectBtns = ({ link, handleSetActive, deployed }: Props) => (
  <div className="absolute bottom-5 right-5 flex gap-2">
    {deployed ? <DeployedBtn link={deployed} /> : null}
    <GithubLink link={link} />
    <FlipBtn Flip={handleSetActive} />
  </div>
);

export default ProjectBtns;
