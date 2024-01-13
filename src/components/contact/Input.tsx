import { useState } from 'react';

interface Props {
  type: string;
}

const Input = ({ type }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-full relative">
      <div className={`text-primary absolute top-[22%] left-[2%] transition-all ${ active ? 'translate-y-[-140%] translate-x-[-20%]' : ''}`}>{type}</div>
      <input required type='text' className="border-2 w-full p-2 outline-transparent" onFocus={() => setActive(true)}/>
    </div>
  )
}

export default Input;