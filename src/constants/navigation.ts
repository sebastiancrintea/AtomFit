import { GoHome, GoHomeFill } from "react-icons/go";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { TbSquareRoundedPlusFilled, TbSquareRoundedPlus } from "react-icons/tb";

export const links = [
  {
    path: "/home",
    title: "Home",
    iconFill: GoHomeFill,
    icon: GoHome,
  },
  {
    path: "/workout",
    title: "Workout",
    iconFill: GoHomeFill,
    icon: GoHome,
  },
  {
    path: "/create",
    title: "Create",
    iconFill: TbSquareRoundedPlusFilled,
    icon: TbSquareRoundedPlus,
  },
  {
    path: "/explore",
    title: "Explore",
    iconFill: MdExplore,
    icon: MdOutlineExplore,
  },
] as const;
