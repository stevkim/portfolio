import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { setInput } from "../../lib/contactSlice";

interface Props {
  type: string;
}

const Input = ({ type }: Props) => {
  const { name, email } = useAppSelector((state) => state.contact);
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const handleFocus = () => {
    if (type === "name" && name !== "") {
      return setActive(true);
    }
    if (type === "email" && email !== "") {
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
        htmlFor={type}
        className={`absolute left-[2%] top-[20%] text-primary transition-all ${active ? "translate-x-[-20%] translate-y-[-140%]" : ""}`}
      >
        {type}
      </label>
      <input
        id={type}
        name={type}
        required
        value={type === "email" ? email : name}
        type={type === "email" ? "email" : "text"}
        className="w-full border-2 p-2 outline-transparent"
        onFocus={() => setActive(true)}
        onBlur={handleFocus}
        onChange={(e) => dispatch(setInput({ type, input: e.target.value }))}
      />
    </div>
  );
};

export default Input;
