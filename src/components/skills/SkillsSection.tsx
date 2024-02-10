import SkillListWrapper from "./SkillListWrapper"
import { Skills } from "../../assets/siteData"

const SkillsSection = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center mt-2">
      {
        Skills.map((list, index) => <SkillListWrapper key={list.section} skillList={list} index={index} />)
      }
    </div>
  )
}


export default SkillsSection