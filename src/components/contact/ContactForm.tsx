import Input from "./Input";
import TextArea from "./TextArea";
import SubmitBtn from "./SubmitBtn";

const ContactForm = () => (
  <>
    <h1 className="text-3xl font-semibold">contact</h1>
    <h2 className="text-lg mt-2">if you're interesting in getting in contact, let's connect!</h2>
    <Input type='name' />
    <Input type='email' />
    <TextArea type='message' />
    <SubmitBtn />
  </>
)

export default ContactForm;