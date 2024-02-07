import { useState } from "react"
import { Projects } from "../assets/siteData";
import GithubBtn from "../components/GithubBtn";

const Test = () => {
  const [flip, setFlip] = useState(false);
  const { name, stack, description, link, image, gif } = Projects[1];

  return (
    <div className="w-[92%] mx-auto md:w-full min-h-[90vh] flex justify-center items-center">
      <div className={`card-wrapper relative h-[400px] lg:h-[500px] w-[600px] shadow-lg bg-base-100 p-8 transition-all ${flip ? 'card-toggle' : ''} overflow-hidden rounded-sm`}
      >
        <div className={`card-front z-[2] absolute bg-base-100 w-full h-full top-0 left-0 ${flip ? 'translate-x-[100%]' : 'translate-x-[0]'} p-4`}>
          <img  src={image} alt={name} width='300px' height='300px' className="w-[95%] h-[50%] lg:h-[55%] mx-auto" />
          <div className="h-[40%]">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">{name}</h2>
              <div className="flex gap-2 items-center justify-center">
              {
                  stack.map(skill => {
                    return <i key={`${name}-${skill}`} className={`devicon-${skill} colored text-2xl`}></i>
                  })
                }
              </div>
            </div>
            <div className="text-base mb-auto">{description}</div>
            <div className="flex gap-2 absolute right-4 bottom-4">
              <GithubBtn link={link} />
            </div>
          </div>
        </div>
        <div className='card-back z-[-2] absolute bg-base-100 w-full h-full top-0 left-0 flex justify-center items-center' onClick={() => setFlip(!flip)}>
          <img src={gif} className="h-full w-auto object-cover"/>
        </div>
      </div>
    </div>
  )
}
export default Test