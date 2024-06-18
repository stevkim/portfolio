import resume from "@/assets/SK - Resume.pdf";

const ResumeBtn = () => (
  <a
    className="mr-auto flex w-fit cursor-pointer items-center rounded-sm bg-primary p-2 text-[.85rem] text-xs font-semibold text-base-200 hover:bg-accent hover:text-primary md:mr-6"
    href={resume}
    target="_blank"
  >
    resume
  </a>
);

export default ResumeBtn;
