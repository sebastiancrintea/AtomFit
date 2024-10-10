import { GoHome, GoHomeFill, GoClockFill, GoClock } from "react-icons/go";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { TbSquareRoundedPlusFilled, TbSquareRoundedPlus } from "react-icons/tb";
import { IoFlame, IoFlameOutline } from "react-icons/io5";

export const links = [
  {
    path: "/home",
    title: "Home",
    iconFill: GoHomeFill,
    icon: GoHome,
  },
  {
    path: "/workout/saved",
    title: "Workout",
    iconFill: GoClockFill,
    icon: GoClock,
  },
  {
    path: "/create",
    title: "Create",
    iconFill: TbSquareRoundedPlusFilled,
    icon: TbSquareRoundedPlus,
  },
  {
    path: "/exercises",
    title: "Exercises",
    iconFill: IoFlame,
    icon: IoFlameOutline,
  },
  {
    path: "/explore",
    title: "Explore",
    iconFill: MdExplore,
    icon: MdOutlineExplore,
  },
] as const;
