import SkillIcon from "../SkillIcon"
import { motion } from "framer-motion"
import { IconList } from "../../assets/siteData"

const TechStackList = () => {
  return (
    <div
      className="flex flex-wrap gap-x-4 gap-y-6 w-full items-center justify-center py-10 bg-base-200"
    >
    {
      IconList.map((icon, index) => {
        return (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'linear', delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillIcon skill={icon} size={5}/>
          </motion.div>
        )
        })
      }
    </div>
  )
}
export default TechStackList