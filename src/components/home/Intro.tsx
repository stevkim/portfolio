import Code from "./Code";

const Intro = () => {
  return (
    <div className="w-full md:w-[60%] flex flex-col h-[80vh] pb-20">
      <div className="m-auto w-fit">
        Hi, my name is
        <span className="text-6xl block">Steven Kim</span>
        <Code />
      </div>
    </div>
  )
}

export default Intro;