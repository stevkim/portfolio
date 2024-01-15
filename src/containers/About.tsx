

const About = () => {
  return (
    <section className=" w-full min-h-[85vh] flex flex-col p-4 md:px-[20%] text-xl pt-20">
      <h1 className="text-3xl font-semibold text-center">a bit about me.</h1>
      <div className="md:w-[50%] w-full flex flex-col gap-4 p-8">
        <p>
          <span className="block">Hello!</span>
          I'm Steven Kim, a Software Engineer based in Seattle.
          I have a passion for learning all things tech, but have the most
          experience in Front-end development.
        </p>
        <div className="text-center font-semibold">...</div>
        <p>
          Before finding my passion for programming, I spent
          10 years teaching martial arts, Taekwondo to be exact!
          I had the privilege of working with many people from
          different walks of life, as well as coaching a team to
          win Gold at Nationals!
        </p>
        <p>
          When I'm not looking at my screen, I enjoy rock climbing
          or relaxing with my wife and dog.
        </p>
        <div className="text-center font-semibold">...</div>
        <div className="text-base">
          <h3 className="text-center">{"< tech I'm currently working with />"}</h3>
          <ul className="mt-2 w-[90%] mx-auto grid grid-cols-2 gap-4">
            <li>‣ TypeScript</li>
            <li>‣ React</li>
            <li>‣ Redux</li>
            <li>‣ Supabase</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;