import { useState } from 'react';

interface Props {
  type: string;
}

const TextArea = ({ type }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-full relative">
      <div className={`text-primary absolute top-[22%] left-[2%] transition-all ${ active ? 'translate-y-[-170%] translate-x-[-15%]' : ''}`}>{type}</div>
      <textarea required className="border-2 w-full p-2 outline-transparent" onFocus={() => setActive(true)}/>
    </div>
  )
}

export default TextArea;