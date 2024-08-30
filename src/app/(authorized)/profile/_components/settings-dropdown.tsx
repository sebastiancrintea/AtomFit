import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCog } from "react-icons/fa";
import { ThemeSubDropdown } from "./theme-subdropdown";
import { LogOutDialog } from "./log-out-dialog";
import { EditProfile } from "./edit-profile";

export function SettingsDropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <FaCog size={28} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <EditProfile />
          <ThemeSubDropdown />
          <DropdownMenuSeparator />
          <LogOutDialog />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
