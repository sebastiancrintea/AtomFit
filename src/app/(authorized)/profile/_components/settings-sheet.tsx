import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TbSettings } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import ThemeDropdown from "./theme-dropdown";

export function SettingsSheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <TbSettings size={32} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-4">
            <SheetTitle className="md:text-2xl">Settings</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1">
            <Button
              variant={"ghost"}
              className="justify-start gap-1 text-xl font-semibold"
            >
              <IoPersonSharp size={28} />
              Edit Profile
            </Button>
            <ThemeDropdown />

            <Button
              variant={"ghost"}
              className="justify-start gap-1 text-xl font-semibold"
            >
              <CiLogout size={28} />
              Log Out
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
