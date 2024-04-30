import NavLink from './NavLink';
import { NavLinks } from '@/assets/siteData';
import ResumeBtn from '../ResumeBtn';

const NavLinkList = () => {
	return (
		<div className="hidden md:flex flex-row gap-6 ml-auto">
			{NavLinks.map((nav) => {
				return (
					<NavLink
						key={nav.link}
						input={nav}
					/>
				);
			})}
			<ResumeBtn />
		</div>
	);
};

export default NavLinkList;
