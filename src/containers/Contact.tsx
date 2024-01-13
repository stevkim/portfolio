import Input from '../components/contact/Input';
import TextArea from '../components/contact/TextArea';
import SubmitBtn from '../components/contact/SubmitBtn';

const Contact = () => {

  return (
    <section className="flex flex-col gap-8 items-center max-w-[600px] mx-auto mt-10">
      <h1 className="text-3xl">contact</h1>
      <h2 className="text-lg mt-2">If you're interesting in getting in contact, let's connect!</h2>
      <Input type='Name' />
      <Input type='Email' />
      <TextArea type='Message' />
      <SubmitBtn />
    </section>
  )
}

export default Contact;