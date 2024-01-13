import { useAppSelector } from "../../lib/hooks";

const SubmitBtn = () => {
  const userInput = useAppSelector((state) => state.contact);

  return (
    <button className="btn btn-primary ml-auto">Submit</button>
  )
}

export default SubmitBtn;