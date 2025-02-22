"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import atomFitLogoImg from "@/../public/assets/img/Atom-64x64.png";
import { links } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export function LaptopNavigaton() {
  const session = useSession();
  const pathname = usePathname();
  return (
    <>
      <section className="flex h-full max-w-64 flex-col justify-between rounded-xl bg-secondary/25 p-4">
        <TooltipProvider>
          <div>
            <div className="mb-12 flex justify-center transition-all xl:ml-4 xl:justify-start">
              <Link
                href={"/home"}
                className="transition-all hover:brightness-150"
              >
                <Image alt="AtomFit Logo" src={atomFitLogoImg} priority />
              </Link>
            </div>

            <nav className="flex flex-col">
              {links.map((link, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant={"ghost"}
                      className="h-auto text-left text-2xl transition-all xl:justify-start"
                    >
                      <Link
                        href={link.path}
                        className={cn("flex items-center gap-1", {
                          "font-semibold": link.path.includes(pathname),
                        })}
                      >
                        {link.path.includes(pathname) ? (
                          <link.iconFill size={32} />
                        ) : (
                          <link.icon size={32} />
                        )}
                        <span className="hidden xl:block">{link.title}</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="text-sm font-semibold lg:hidden"
                  >
                    {link.title}
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"ghost"}
                className="h-auto w-full overflow-hidden xl:justify-start"
                asChild
              >
                <Link href={"/profile"} className="flex items-center gap-2">
                  <Avatar
                    className={cn("transition-all", {
                      "border-2 border-white": "/profile".includes(pathname),
                    })}
                  >
                    <AvatarFallback>
                      {session.status === "authenticated"
                        ? `${session.data.user.username[0].toUpperCase()}`
                        : "CS"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden xl:block">
                    <h2
                      className={cn("text-base font-normal transition-all", {
                        "font-semibold": "/profile".includes(pathname),
                      })}
                    >
                      {session.status === "authenticated"
                        ? `${session.data.user.email}`
                        : "Crintea Sebastian"}
                    </h2>
                    <span className="text-sm text-muted-foreground opacity-75">
                      {session.status === "authenticated"
                        ? `@${session.data?.user.username}`
                        : "@sshebastian"}
                    </span>
                  </div>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent
              className="text-sm font-semibold xl:hidden"
              side="right"
            >
              Profile
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>
    </>
  );
}
