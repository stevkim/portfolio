import { useState } from "react"

interface Props {
  skill: string
}

const SkillIcon = ({ skill }:Props) => {
  const [hover, setHover] = useState(false);

  return (
    <i
      className={`devicon-${skill} ${hover ? 'colored scale-110' : ''} text-3xl`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
    </i>
  )
}
export default SkillIcon