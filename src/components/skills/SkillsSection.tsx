import SkillListWrapper from "./SkillListWrapper";
import { Skills } from "@/assets/siteData";

const SkillsSection = () => {
  return (
    <div className="mt-2 flex flex-row flex-wrap justify-center gap-4">
      {Skills.map((list, index) => (
        <SkillListWrapper key={list.section} skillList={list} index={index} />
      ))}
    </div>
  );
};

export default SkillsSection;
