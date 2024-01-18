import { CurrentStackList } from "../../assets/siteData";

const CurrentStack = () => {
  return (
    <div className="text-base">
      <h3 className="text-center">tech I'm currently working with</h3>
      <ul className="mt-2 w-[90%] mx-auto grid grid-cols-2 gap-4 ">
        {
          CurrentStackList.map((skill) => {
            return <li key={skill} className="whitespace-nowrap"><span className="mr-1 text-2xl inline-block">‣ </span>{skill}</li>
          })
        }
      </ul>
    </div>
  )
}

export default CurrentStack;