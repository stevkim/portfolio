import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const AboutInfo = () => {
  return (
    <motion.section
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="my-20 text-center flex flex-col items-center gap-4"
    >
      <h3 className="text-3xl font-semibold">a little about me</h3>
      <p className=" w-[90%] max-w-[600px] text-lg">
        I'm a Software Engineer who recently graduated
        from a 3-month coding bootcamp called Hack Reactor,
        where I was voted as class president. I was also offered
        a part-time position to come back as a mentor for the
        next group, which is where I currently am.
      </p>
      <p className=" w-[90%] max-w-[600px] text-lg">
        I have Full-Stack experience, with a strong focus on the Front-end. Mainly in the React/Typescript ecosystem.
      </p>
      <Link className="btn btn-primary" to="/about">more about me.</Link>
    </motion.section>
  )
}

export default AboutInfo;