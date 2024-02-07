import SkillListWrapper from "./SkillListWrapper"
import { Skills } from "../../assets/siteData"

const SkillsSection = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-2 justify-center">
        {
          Skills.map((list, index) => <SkillListWrapper key={list.section} skillList={list} index={index} />)
        }
      </div>
    </div>
  )
}


export default SkillsSection