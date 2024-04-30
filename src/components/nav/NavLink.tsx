import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import './nav.css';
import type { TNavLink } from '@/assets/siteDataTypes';

interface Props {
	input: TNavLink;
}

const NavLink = ({ input }: Props) => {
	const [hover, setHover] = useState<boolean>(false);

	return (
		<Link
			to={input.link}
			className="w-fit relative z-10"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			activeProps={{
				style: {
					color: 'oklch(var(--p))',
				},
			}}
		>
			<div className="relative z-10 px-3 pb-[4px]">{input.name}</div>
			<div className="absolute w-full h-[15%] bottom-[5%] overflow-hidden">
				<div
					className={`${hover ? 'nav-hover' : ''} nav-link w-full h-full`}
				></div>
			</div>
		</Link>
	);
};

export default NavLink;
