import type { Project } from "../assets/siteData";
import { Projects } from "../assets/siteData";

const randomProjects = ():Project[] => {
  const temp = Projects.slice();
  let index = temp.length;

  while (index > 0) {
    let randomIndex = Math.floor(Math.random() * index);
    index--;

    [temp[index], temp[randomIndex]] = [temp[randomIndex], temp[index]]
  }
  return temp.slice(3);
}

export default randomProjects;