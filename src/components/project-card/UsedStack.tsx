interface Props {
  projectName: string;
  skills: string[];
}

const UsedStack = ({ projectName, skills }:Props) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      {
        skills.map(skill => {
          return <i key={`${projectName}-${skill}`} className={`devicon-${skill} colored text-3xl`}></i>
        })
      }
    </div>
  )
}
export default UsedStack;