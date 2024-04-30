import Intro from '@/components/home/Intro';
import AboutInfo from '@/components/home/AboutInfo';
import Scroll from '@/components/home/Scroll';
import useScroll from '@/hooks/useScroll';
import ContactForm from '@/components/contact/ContactForm';
import HeroProjects from '@/components/home/HeroProjects';
import TechStackList from '@/components/home/TechStackList';
import BackToTopBtn from '@/components/home/BackToTopBtn';
import Welcome from '@/components/home/Welcome';

const Home = () => {
	const scroll = useScroll();

	return (
		<main className="relative w-full min-h-[90vh] flex flex-col gap-20">
			<Welcome />
			<Intro />
			<AboutInfo />
			<TechStackList />
			<HeroProjects />
			<ContactForm />
			{scroll ? <Scroll /> : <BackToTopBtn />}
		</main>
	);
};

export default Home;
