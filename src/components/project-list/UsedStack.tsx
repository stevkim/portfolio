import SkillIcon from "../SkillIcon";

interface Props {
  projectName: string;
  skills: string[];
}

const UsedStack = ({ projectName, skills }: Props) => (
  <div className="flex items-center justify-center gap-2">
    {skills.map((skill) => {
      return (
        <SkillIcon key={`${projectName}-${skill}`} skill={skill} size={2} />
      );
    })}
  </div>
);

export default UsedStack;
