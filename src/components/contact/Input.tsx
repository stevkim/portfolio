import { useState } from 'react';
import { useAppDispatch } from '../../lib/hooks';
import { setInput } from '../../lib/contactSlice';

interface Props {
  type: string;
}

const Input = ({ type }: Props) => {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-full relative">
      <label htmlFor={type} className={`text-primary absolute top-[20%] left-[2%] transition-all ${ active ? 'translate-y-[-140%] translate-x-[-20%]' : ''}`}>{type}</label>
      <input
        id={type}
        name={type}
        required
        type={type === 'email' ? 'email' : 'text'}
        className="border-2 w-full p-2 outline-transparent"
        onFocus={() => setActive(true)}
        onChange={(e) => dispatch(setInput({ type, input: e.target.value }))}
        />
    </div>
  )
}

export default Input;