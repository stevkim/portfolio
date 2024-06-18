import AboutMe from "@/components/about/AboutMe";
import SelfPortrait from "@/components/about/SelfPortrait";
import { motion } from "framer-motion";
import SkillsSection from "@/components/skills/SkillsSection";

const About = () => {
  return (
    <section className="flex min-h-[90vh] w-full flex-col p-4 pt-20 text-xl md:px-[20%]">
      <h1 className="text-center text-3xl font-semibold">a bit about me.</h1>
      <div className="flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="my-auto flex w-full flex-col gap-4 p-8 lg:w-[50%]"
        >
          <AboutMe />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex w-full items-start justify-center p-10 lg:w-[50%] xl:p-20"
        >
          <SelfPortrait />
        </motion.div>
      </div>
      <SkillsSection />
    </section>
  );
};

export default About;
