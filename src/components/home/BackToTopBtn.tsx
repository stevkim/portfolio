import { motion } from 'framer-motion'

const BackToTopBtn = () => (
  <motion.div
    className="fixed top-[92vh] right-[5%] cursor-pointer md:flex flex-col items-center justify-center text-sm hidden"
    onClick={() => window.scrollTo(0,0)}
    initial={{ y: 100 }}
    animate={{ y: 0 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="30" height="30">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
    </svg>
    BACK TO TOP
  </motion.div>
)

export default BackToTopBtn