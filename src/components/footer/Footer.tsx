import Badge from "./Badge";
import GithubBtn from "../GithubBtn";
import Socials from "./Socials";
import SiteLinks from "./SiteLinks";

const Footer = () => {
  return (
    <footer className="flex w-full bg-base-300 mt-10 p-4 md:px-[20%]" >
      <div className="md:w-[50%] w-full flex flex-col gap-2">
        <Badge />
        <GithubBtn link='https://github.com/stevkim' />
      </div>
      <div className="md:w-[50%] w-full flex flex-col">
        <Socials />
        <SiteLinks />
      </div>
    </footer>
  )
}

export default Footer;