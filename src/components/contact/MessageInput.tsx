import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { setInput } from "../../lib/contactSlice";

const MessageInput = () => {
  const message = useAppSelector((state) => state.contact.message);
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const handleFocus = () => {
    if (message !== "") {
      return setActive(true);
    }
    setActive(false);
  };

  useEffect(() => {
    handleFocus();
  }, []);

  return (
    <div className="relative h-full w-full">
      <label
        htmlFor="message"
        className={`absolute left-[2%] top-[10%] text-primary transition-all ${active ? "translate-x-[-15%] translate-y-[-150%]" : ""}`}
      >
        message
      </label>
      <textarea
        required
        id="message"
        name="message"
        className="w-full border-2 p-2 outline-transparent"
        value={message}
        onFocus={() => setActive(true)}
        onBlur={handleFocus}
        onChange={(e) =>
          dispatch(setInput({ type: "message", input: e.target.value }))
        }
        minLength={10}
      />
      <sub className="absolute right-0 w-fit text-accent">
        {message.length >= 10
          ? "Minimum reached"
          : `Minimum message length: [${10 - message.length}]`}
      </sub>
    </div>
  );
};

export default MessageInput;
