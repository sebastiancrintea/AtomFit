import { GoHome, GoHomeFill, GoClockFill, GoClock } from "react-icons/go";
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
    path: "/workout",
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
] as const;
