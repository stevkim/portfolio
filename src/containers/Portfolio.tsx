import ProjectList from "../components/project-card/ProjectList";

const Portfolio = () => {
  return (
    <section className="w-[92%] mx-auto md:w-full min-h-[90vh] flex flex-col items-center gap-8 pt-20">
      <h1 className="text-3xl text-center font-semibold mb-2">some projects i've done.</h1>
      <ProjectList />
    </section>
  )
}

export default Portfolio;