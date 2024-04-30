import AboutMe from '@/components/about/AboutMe';
import SelfPortrait from '@/components/about/SelfPortrait';
import { motion } from 'framer-motion';
import SkillsSection from '@/components/skills/SkillsSection';

const About = () => {
	return (
		<section className="w-full min-h-[90vh] flex flex-col p-4 md:px-[20%] text-xl pt-20">
			<h1 className="text-3xl font-semibold text-center">a bit about me.</h1>
			<div className="flex flex-col lg:flex-row">
				<motion.div
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="lg:w-[50%] w-full flex flex-col gap-4 p-8 my-auto"
				>
					<AboutMe />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 200 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="lg:w-[50%] w-full p-10 xl:p-20 flex items-start justify-center"
				>
					<SelfPortrait />
				</motion.div>
			</div>
			<SkillsSection />
		</section>
	);
};

export default About;
