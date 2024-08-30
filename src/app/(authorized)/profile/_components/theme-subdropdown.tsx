"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { MdDevices } from "react-icons/md";

export function ThemeSubDropdown() {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="flex items-center gap-2 text-lg font-semibold">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span>Toggle theme</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem
              className="space-x-1 text-base"
              onClick={() => setTheme("system")}
              onSelect={(e) => e.preventDefault()}
            >
              <MdDevices size={24} />
              <span>System</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="space-x-1 text-base"
              onClick={() => setTheme("light")}
              onSelect={(e) => e.preventDefault()}
            >
              <Sun size={24} />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="space-x-1 text-base"
              onClick={() => setTheme("dark")}
              onSelect={(e) => e.preventDefault()}
            >
              <Moon size={24} />
              <span>Dark</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </>
  );
}
