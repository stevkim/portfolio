import type { TSkillList } from "../../assets/siteDataTypes"
import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

interface Props {
  skillList: TSkillList;
  index: number
}

const SkillListWrapper = ({ skillList, index }:Props) => {
  const { section, skills } = skillList;

  return (
    <motion.div
      className="px-4 w-[90%] md:w-[400px] flex flex-col gap-4"
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h4 className="flex items-center justify-center mb-1 text-primary text-2xl font-semibold">
        {section}
        <span className="ml-4 text-sm text-accent-content">.0{index + 1}</span>
      </h4>
      <div className="flex flex-wrap gap-1">
        {
          skills.map(skill => <SkillBadge key={skill} skill={skill} />)
        }
      </div>
    </motion.div>
  )
}
export default SkillListWrapper