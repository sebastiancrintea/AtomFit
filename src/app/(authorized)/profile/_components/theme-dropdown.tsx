"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ThemeDropdown() {
  const { setTheme } = useTheme();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start gap-1 text-xl">
            <SunIcon className="size-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute size-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            Toggle Theme
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px] sm:w-[300px]">
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            onSelect={(e) => e.preventDefault()}
          >
            System
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            onSelect={(e) => e.preventDefault()}
          >
            <SunIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            onSelect={(e) => e.preventDefault()}
          >
            <MoonIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
