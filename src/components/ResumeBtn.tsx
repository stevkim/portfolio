import resume from '../assets/SK - Resume.pdf';

const ResumeBtn = () => <a className='bg-primary hover:bg-accent text-base-200 hover:text-primary mr-auto md:mr-6 p-2 flex items-center rounded-sm text-xs w-fit cursor-pointer font-semibold text-[.85rem]' href={resume} target='_blank'>resume</a>

export default ResumeBtn;