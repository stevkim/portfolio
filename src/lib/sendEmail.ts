import emailjs from '@emailjs/browser';
import { UserInput } from './contactSlice';

const key = import.meta.env.VITE_API_KEY;
const service = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;

const sendEmail = (data:UserInput) => {
    emailjs.init(key);
    return emailjs.send(service, template, data)
}

export default sendEmail;