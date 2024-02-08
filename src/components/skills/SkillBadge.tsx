interface Props {
  skill: string
}

const SkillBadge = ({ skill }:Props) => (
  <div className="w-fit p-2 rounded-sm text-white bg-accent text-sm hover:bg-primary hover:text-neutral-content">{skill}</div>
)
export default SkillBadge