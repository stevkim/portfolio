import Intro from '@/components/home/Intro';
import AboutInfo from '@/components/home/AboutInfo';
import Scroll from '@/components/home/Scroll';
import ContactForm from '@/components/contact/ContactForm';
import HeroProjects from '@/components/home/HeroProjects';
import TechStackList from '@/components/home/TechStackList';
import BackToTopBtn from '@/components/home/BackToTopBtn';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Home = () => {
	const [scrollTop, setScrollTop] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 300) {
			setScrollTop(true);
		} else {
			setScrollTop(false);
		}
	});

	return (
		<main className="relative w-full min-h-[90vh] flex flex-col gap-20">
			<div className="flex min-h-[80vh] flex-col lg:flex-row gap-8 items-center justify-center">
				<Intro />
				<AboutInfo />
			</div>
			<TechStackList />
			<HeroProjects />
			<ContactForm />
			{scrollTop ? <BackToTopBtn /> : <Scroll />}
		</main>
	);
};

export default Home;
