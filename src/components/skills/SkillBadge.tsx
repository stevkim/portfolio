interface Props {
  skill: string;
}

const SkillBadge = ({ skill }: Props) => (
  <div className="w-fit cursor-default rounded-sm bg-accent p-2 text-sm text-white">
    {skill}
  </div>
);
export default SkillBadge;
