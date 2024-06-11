interface Props {
	link: string;
}

const DeployedBtn = ({ link }: Props) => {
	return (
		<a
			href={link}
			rel="noreferrer"
			target="_blank"
			className="flex items-center p-2 text-xs text-primary hover:text-accent w-fit font-semibold cursor-pointer"
		>
			live site
			<sup>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					width="10"
					height="10"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</sup>
		</a>
	);
};
export default DeployedBtn;
