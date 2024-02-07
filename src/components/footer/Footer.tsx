import Badge from "./Badge";
import GithubBtn from "../GithubBtn";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="flex w-full bg-base-300 mt-10 p-4 md:px-[20%]" >
      <div className="md:w-[50%] w-full flex flex-col gap-2">
        <Badge />
        <GithubBtn link='https://github.com/stevkim/portfolio' />
      </div>
      <div className="md:w-[50%] w-full flex flex-col gap-2">
        <h4 className="ml-auto w-fit h-fit bg-accent p-2 text-white text-sm pointer-events-none">my social links</h4>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer;