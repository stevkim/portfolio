import GithubBtn from "../GithubBtn"
import FlipBtn from "./FlipBtn"

interface Props {
  handleSetActive: () => void;
  link: string;
}

const ProjectBtns = ({ link, handleSetActive }:Props) => (
  <div className="flex gap-2 absolute right-4 bottom-4">
    <FlipBtn Flip={handleSetActive} />
    <GithubBtn link={link} />
  </div>
)

export default ProjectBtns