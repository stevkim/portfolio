import Input from "./Input";
import MessageInput from "./MessageInput";
import SubmitBtn from "./SubmitBtn";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import sendEmail from '../../lib/sendEmail';
import toast from 'react-hot-toast'
import { clearInput } from "../../lib/contactSlice";
import { useRef } from "react";
import { motion } from 'framer-motion';

const ContactForm = () => {
  const userInput = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

  const clearForm = () => {
    dispatch(clearInput());
    formRef.current?.reset();
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendEmail(userInput)
      .then(() => {
        toast.success(`Thank you! I'll reach out soon!`);
        clearForm();
      })
      .catch(() => {
        toast.error(`Whoops! Something went wrong!`)
      })
  }

  return (
    <motion.form
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      ref={formRef}
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-10 items-center w-[90%] max-w-[600px] mx-auto"
      >
      <h1 className="text-3xl font-semibold">contact.</h1>
      <h2 className="text-lg mt-2">If you're interested in getting in contact, let's connect!</h2>
      <Input type='name' />
      <Input type='email' />
      <MessageInput />
      <SubmitBtn />
    </motion.form>
  );
}

export default ContactForm;