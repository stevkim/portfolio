import { useState } from "react"

interface Props {
  skill: string;
  size: number;
}

const SkillIcon = ({ skill, size }:Props) => {
  const [hover, setHover] = useState(false);

  return (
      <i
        className={`devicon-${skill} ${hover ? 'colored scale-125' : ''}`}
        style={{ fontSize: `${size}rem` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
      </i>
  )
}
export default SkillIcon