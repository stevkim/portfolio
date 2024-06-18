interface Props {
  skill: string;
  size: number;
}

const SkillIcon = ({ skill, size }: Props) => {
  return (
    <i
      className={`devicon-${skill} colored`}
      style={{ fontSize: `${size}rem` }}
    ></i>
  );
};
export default SkillIcon;
