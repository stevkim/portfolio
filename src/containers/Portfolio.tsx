import Timeline from "../components/portfolio/Timeline";

const Portfolio = () => {
  return (
    <section className="w-[92%] mx-auto md:w-full min-h-[85vh] flex flex-col gap-8 pt-20">
      <h1 className="text-3xl text-center font-semibold">some projects i've done.</h1>
      <div className="w-full xl:w-[40%] max-w-[1000px] mx-auto">
        <Timeline />
      </div>
    </section>
  )
}

export default Portfolio;