import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { friendsTabs } from "@/constants/friends-tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FriendsTabs() {
  const pathname = usePathname();
  return (
    <>
      <TooltipProvider>
        <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-background">
          {friendsTabs.map((tab, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  variant={pathname === tab.path ? "default" : "ghost"}
                  asChild
                  className="rounded-none"
                >
                  <Link
                    href={tab.path}
                    replace
                    className="space-x-1"
                    scroll={pathname === tab.path ? false : true}
                  >
                    <tab.icon size={24} />
                    <span className="hidden font-mono font-bold uppercase md:block lg:text-xl">
                      {tab.title}
                    </span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="font-mono text-sm font-bold uppercase md:hidden">
                {tab.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </>
  );
}
