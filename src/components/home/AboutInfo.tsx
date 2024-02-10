import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const AboutInfo = () => {
  return (
    <motion.section
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="text-center flex flex-col items-center mx-auto gap-4 w-[90%] max-w-[650px] text-lg"
    >
      <h3 className="text-3xl font-semibold">a little about me.</h3>
      <p>
        I'm a <span className="highlight">Software Engineer</span> specializing
        in the React/Typescript ecosystem. My passion
        revolves around creating high-performance
        applications with an emphasis on speed and clean code practices.
      </p>
      <p>
        Whether I'm building a robust back-end system or crafting a seamless user interface,
        my commitment to excellence drives my work.
      </p>
      <p>
        Let's connect to discuss how I can contribute to your projects's success.
      </p>
      <Link className="btn btn-primary" to="/about">more about me</Link>
    </motion.section>
  )
}

export default AboutInfo;