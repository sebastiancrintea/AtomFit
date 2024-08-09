import { GoHome, GoHomeFill } from "react-icons/go";
import { MdExplore, MdOutlineExplore } from "react-icons/md";

export const links = [
  {
    path: "/home",
    title: "Home",
    iconFill: GoHomeFill,
    icon: GoHome,
  },
  {
    path: "/explore",
    title: "Explore",
    iconFill: MdExplore,
    icon: MdOutlineExplore,
  },
] as const;
