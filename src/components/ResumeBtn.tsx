import resume from '../assets/SK - Resume.pdf';

const ResumeBtn = () => {
  return <a className='bg-primary hover:bg-accent mr-auto md:mr-6 p-2 flex items-center rounded-sm text-xs text-primary-content w-fit cursor-pointer font-semibold' href={resume} target='_blank'>resume.</a>
}

export default ResumeBtn;