import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { setInput } from '../../lib/contactSlice';

interface Props {
  type: string;
}

const TextArea = ({ type }: Props) => {
  const message = useAppSelector(state => state.contact.message);
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-full relative">
      <label htmlFor={type} className={`text-primary absolute top-[10%] left-[2%] transition-all ${ active ? 'translate-y-[-150%] translate-x-[-15%]' : ''}`}>{type}</label>
      <textarea
        required
        id={type}
        name={type}
        className="border-2 w-full p-2 outline-transparent"
        onFocus={() => setActive(true)}
        onChange={(e) => dispatch(setInput({ type, input: e.target.value }))}
        minLength={10}
        />
      <sub className='w-fit absolute text-accent right-0'>
        {
          message.length >= 10
          ? 'Minimum reached'
          : `Minimum message length: [${10 - message.length}]`
        }
      </sub>
    </div>
  )
}

export default TextArea;