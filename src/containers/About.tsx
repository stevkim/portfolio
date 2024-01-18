import TechStack from '../components/TechStack';
import AboutMe from '../components/about/AboutMe';
import CurrentStack from '../components/about/CurrentStack';
import SelfPortrait from '../components/about/SelfPortrait';
import { motion} from 'framer-motion';

const About = () => {
  return (
    <section className=" w-full min-h-[90vh] flex flex-col p-4 md:px-[20%] text-xl pt-20">
      <h1 className="text-3xl font-semibold text-center">a bit about me.</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full flex flex-col gap-4 p-8 my-auto">
          <AboutMe />
          <CurrentStack />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:w-[50%] w-full p-20 flex items-start justify-center"
        >
          <SelfPortrait />
        </motion.div>
      </div>
      <TechStack />
    </section>
  )
}

export default About;