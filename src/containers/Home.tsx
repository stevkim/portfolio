import Intro from "../components/home/Intro";
import AboutInfo from "../components/home/AboutInfo";
import Scroll from "../components/home/Scroll";
import useScroll from "../hooks/useScroll";
import TechStack from "../components/TechStack";
import ContactForm from "../components/contact/ContactForm";
import HeroProjects from "../components/home/HeroProjects";
import { motion } from 'framer-motion';

const Home = () => {
  const scroll = useScroll();

  return (
    <main className="relative w-full min-h-[90vh]">
      <Intro />
      <AboutInfo />
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="my-20"
      >
        <TechStack />
      </motion.div>
      <HeroProjects />
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8 items-center w-full mx-auto my-20"
      >
        <ContactForm />
      </motion.div>
      {scroll && <Scroll />}
    </main>
  )
}

export default Home;