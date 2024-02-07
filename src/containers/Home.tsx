import Intro from "../components/home/Intro";
import AboutInfo from "../components/home/AboutInfo";
import Scroll from "../components/home/Scroll";
import useScroll from "../hooks/useScroll";
import ContactForm from "../components/contact/ContactForm";
import HeroProjects from "../components/home/HeroProjects";
import TechStackList from "../components/home/TechStackList";
import { motion } from 'framer-motion';

const Home = () => {
  const scroll = useScroll();

  return (
    <main className="relative w-full min-h-[90vh] flex flex-col gap-20">
      <Intro />
      <AboutInfo />
      <TechStackList />
      <HeroProjects />
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8 items-center w-full mx-auto"
      >
        <ContactForm />
      </motion.div>
      {scroll ? <Scroll /> : null}
    </main>
  )
}

export default Home;