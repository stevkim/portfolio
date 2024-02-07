import SkillIcon from "../SkillIcon";

interface Props {
  projectName: string;
  skills: string[];
}

const UsedStack = ({ projectName, skills }:Props) => (
  <div className="flex gap-2 items-center justify-center">
    {
      skills.map(skill => {
        return <SkillIcon key={`${projectName}-${skill}`} skill={skill} size={3}/>
      })
    }
  </div>
)

export default UsedStack;