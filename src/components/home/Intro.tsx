import Code from "./Code";
import { motion } from 'framer-motion';
import Socials from "../Socials";

const Intro = () => {
  return (
    <div className="w-full md:w-[60%] flex flex-col h-[80vh] pb-20 ">
      <div className="m-auto w-fit">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, my name is
          <span className="text-6xl block highlight">Steven Kim</span>
        </motion.div>
        <Code />
        <div className="mt-2">
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Intro;