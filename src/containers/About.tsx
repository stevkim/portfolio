

const About = () => {
  return (
    <section className=" w-full min-h-[85vh] flex p-4 md:px-[20%] text-xl">
      <div className="md:w-[40%] w-full flex flex-col gap-4 p-8">
        <p>
          <span className="block">Hello!</span>
          I'm Steven Kim, a Software Engineer based in Seattle.
          I have a passion for learning all things tech, but have the most
          experience in Front-end development.
        </p>
        <div className="text-center">...</div>
        <p>
          Before finding my passion for programming, I spent
          10 years teaching martial arts, Taekwondo to be exact!
          Here I had the privilege of working with many people from
          different walks of like, as well as coaching a team to
          win Gold at Nationals!
        </p>
        <p>
          When I'm not looking at my screen, I enjoy rock climbing
          or relaxing with my wife and dog.
        </p>
      </div>
    </section>
  )
}

export default About;