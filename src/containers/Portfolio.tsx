import ProjectList from "@/components/project-list/ProjectList";

const Portfolio = () => {
  return (
    <section className="mx-auto flex min-h-[90vh] w-[92%] flex-col items-center gap-8 pt-20 md:w-full">
      <h1 className="mb-2 text-center text-3xl font-semibold">
        some projects i've done.
      </h1>
      <ProjectList />
    </section>
  );
};

export default Portfolio;
