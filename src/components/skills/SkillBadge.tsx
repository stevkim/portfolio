interface Props {
	skill: string;
}

const SkillBadge = ({ skill }: Props) => (
	<div className="w-fit p-2 rounded-sm text-white bg-accent text-sm cursor-default">
		{skill}
	</div>
);
export default SkillBadge;
