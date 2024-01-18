import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { setInput } from '../../lib/contactSlice';

const MessageInput = () => {
  const message = useAppSelector(state => state.contact.message);
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const handleFocus = () => {
    if (message !== '') {
      return setActive(true);
    }
    setActive(false);
  }

  useEffect(() => {
    handleFocus();
  }, [])

  return (
    <div className="w-full h-full relative">
      <label htmlFor='message' className={`text-primary absolute top-[10%] left-[2%] transition-all ${ active ? 'translate-y-[-150%] translate-x-[-15%]' : ''}`}>message</label>
      <textarea
        required
        id='message'
        name='message'
        className="border-2 w-full p-2 outline-transparent"
        value={message}
        onFocus={() => setActive(true)}
        onBlur={handleFocus}
        onChange={(e) => dispatch(setInput({ type: 'message', input: e.target.value }))}
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

export default MessageInput;