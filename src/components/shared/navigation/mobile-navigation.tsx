"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { links } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNavigation() {
  const pathname = usePathname();
  return (
    <>
      <TooltipProvider>
        <nav className="flex items-center justify-between rounded-full bg-secondary/25 p-1 backdrop-blur supports-[backdrop-filter]:bg-secondary/25">
          {links.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant={"ghost"}
                  className="size-auto rounded-full"
                >
                  <Link
                    href={link.path}
                    className={cn({
                      "font-semibold": pathname === link.path,
                    })}
                  >
                    {pathname === link.path ? (
                      <link.iconFill size={32} />
                    ) : (
                      <link.icon size={32} />
                    )}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="text-sm font-semibold lg:hidden">
                {link.title}
              </TooltipContent>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"ghost"}
                asChild
                className="h-auto w-auto rounded-full"
              >
                <Link href={"/profile"} className="flex items-center gap-2">
                  <Avatar
                    className={cn("size-[32px] transition-all", {
                      "border-2 border-white": pathname === "/profile",
                    })}
                  >
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="text-sm font-semibold xl:hidden">
              Profile
            </TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </>
  );
}
