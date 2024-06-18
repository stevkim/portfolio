import Badge from "./Badge";
import GithubBtn from "../GithubBtn";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="mt-10 flex w-full bg-base-300 p-4 md:px-[20%]">
      <div className="flex w-full flex-col gap-2 md:w-[50%]">
        <Badge />
        <GithubBtn link="https://github.com/stevkim/portfolio" />
      </div>
      <div className="flex w-full flex-col gap-2 md:w-[50%]">
        <span className="pointer-events-none ml-auto h-fit w-fit bg-accent p-2 text-sm text-white">
          my social links
        </span>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
