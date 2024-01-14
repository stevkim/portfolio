import { useAppSelector } from "../../lib/hooks";

const SubmitBtn = () => {
  const userInput = useAppSelector((state) => state.contact);

  return (
    <button className="btn btn-primary ml-auto">submit.</button>
  )
}

export default SubmitBtn;