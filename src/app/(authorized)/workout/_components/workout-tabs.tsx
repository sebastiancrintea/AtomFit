"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { workoutTabs } from "@/constants/workout-tabs";

export function WorkoutTabs() {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-background">
        {workoutTabs.map((tab, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                variant={pathname === tab.path ? "default" : "ghost"}
                asChild
                className="rounded-none"
              >
                <Link
                  href={tab.path}
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
  );
}
