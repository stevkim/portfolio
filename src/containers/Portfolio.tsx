import Timeline from "../components/portfolio/Timeline";

const Portfolio = () => {
  return (
    <section className="w-full  min-h-[85vh] flex flex-col gap-8 pt-20">
      <h1 className="text-3xl text-center font-semibold">some projects i've done.</h1>
      <div className="w-full md:w-[50%]">
        <Timeline />
      </div>
    </section>
  )
}

export default Portfolio;