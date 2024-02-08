import { motion } from "framer-motion";

const Scroll = () => (
  <motion.div
    className="w-[200px] absolute right-[5%] top-[90vh] pointer-events-none md:block hidden"
    initial={{ y: 200, rotate: 90 }}
    animate={{ y: 0, rotate: 90 }}
  >
      <div className="mb-2">SCROLL</div>
      <div className="bg-primary h-[2px] w-full"></div>
    </motion.div>
)

export default Scroll;