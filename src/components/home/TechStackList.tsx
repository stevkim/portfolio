import SkillIcon from "../SkillIcon";
import { motion } from "framer-motion";
import { IconList } from "../../assets/siteData";

const TechStackList = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-6 bg-base-200 py-10">
      {IconList.map((icon, index) => {
        return (
          <motion.div
            key={icon}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "linear", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillIcon skill={icon} size={3} />
          </motion.div>
        );
      })}
    </div>
  );
};
export default TechStackList;
