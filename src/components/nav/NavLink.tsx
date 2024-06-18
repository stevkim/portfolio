import { Link } from "@tanstack/react-router";
import { useState } from "react";
import "./nav.css";
import type { TNavLink } from "@/assets/siteDataTypes";

interface Props {
  input: TNavLink;
}

const NavLink = ({ input }: Props) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link
      to={input.link}
      className="relative z-10 w-fit"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      activeProps={{
        style: {
          color: "oklch(var(--p))",
        },
      }}
    >
      <div className="relative z-10 px-3 pb-[4px]">{input.name}</div>
      <div className="absolute bottom-[5%] h-[15%] w-full overflow-hidden">
        <div
          className={`${hover ? "nav-hover" : ""} nav-link h-full w-full`}
        ></div>
      </div>
    </Link>
  );
};

export default NavLink;
