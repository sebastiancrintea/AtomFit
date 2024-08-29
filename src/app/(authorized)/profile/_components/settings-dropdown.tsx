import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCog, FaEdit } from "react-icons/fa";
import { ThemeSubDropdown } from "./theme-subdropdown";
import { LogOutDialog } from "./log-out-dialog";

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
          <DropdownMenuItem className="flex items-center gap-2">
            <FaEdit size={24} />
            <span className="text-lg font-bold">Edit Profile</span>
          </DropdownMenuItem>
          <ThemeSubDropdown />
          <DropdownMenuSeparator />
          <LogOutDialog />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
