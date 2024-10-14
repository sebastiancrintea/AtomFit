"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MuscleGroups } from "@/schemas/create-exercise-schema";
import { Button } from "@/components/ui/button";
import { FaCheck, FaFilter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { IoIosCloseCircle } from "react-icons/io";

export function ExerciseFilter() {
  const [tags, setTags] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    tags.length >= 1
      ? params.set("tags", tags.toLocaleString())
      : params.delete("tags");

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [tags, pathname, router, searchParams]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"secondary"}>
            <FaFilter />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command className="border-2">
            <CommandInput placeholder="Search a muscle group" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Muscle Group">
                <ScrollArea className="h-[200px]">
                  {MuscleGroups.map((key, index) => (
                    <CommandItem
                      key={index}
                      className="flex items-center justify-between font-mono text-base uppercase"
                      onSelect={() => {
                        if (tags.includes(key)) {
                          setTags((current) =>
                            current.filter((item) => item !== key),
                          );
                        } else {
                          setTags((current) => [...current, key]);
                        }
                      }}
                    >
                      {key}
                      <FaCheck
                        className={`opacity-0 transition-all ${tags.includes(key) && "opacity-100"}`}
                      />
                    </CommandItem>
                  ))}
                </ScrollArea>
              </CommandGroup>
            </CommandList>
            <div className="flex flex-wrap items-center gap-1 p-2">
              {tags.length > 0 &&
                tags.map((value, index) => (
                  <Badge
                    key={index}
                    variant={"secondary"}
                    className="cursor-default select-none gap-1 font-mono text-base uppercase"
                  >
                    <span>{value}</span>
                    <IoIosCloseCircle
                      size={24}
                      className="cursor-pointer transition-all hover:brightness-75"
                      onClick={() => {
                        setTags((current) =>
                          current.filter((item) => item !== value),
                        );
                      }}
                    />
                  </Badge>
                ))}
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
