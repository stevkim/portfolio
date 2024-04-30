import type { TProject } from '@/assets/siteDataTypes';
import { Projects } from '@/assets/siteData';

const randomProjects = (): TProject[] => {
	const temp = Projects.slice();
	let index = temp.length;

	while (index > 0) {
		const randomIndex = Math.floor(Math.random() * index);
		index--;

		[temp[index], temp[randomIndex]] = [temp[randomIndex], temp[index]];
	}
	return temp.slice(3);
};

export default randomProjects;
