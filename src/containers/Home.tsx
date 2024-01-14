import Intro from "../components/home/Intro";
import AboutInfo from "../components/home/AboutInfo";
import Scroll from "../components/home/Scroll";
import useScroll from "../hooks/useScroll";
import TechStack from "../components/home/TechStack";
import ContactForm from "../components/contact/ContactForm";

const Home = () => {
  const scroll = useScroll();

  return (
    <section className="relative w-full min-h-[100vh]">
      <Intro />
      <AboutInfo />
      <TechStack />
      <div
        className="flex flex-col gap-8 items-center max-w-[600px] w-[90%] mx-auto my-20"
      >
        <ContactForm />
      </div>
      {scroll && <Scroll />}
    </section>
  )
}

export default Home;