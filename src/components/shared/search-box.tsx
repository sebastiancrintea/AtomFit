"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  placeholder?: string;
};

export function SearchBox({ placeholder }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((q: string) => {
    const params = new URLSearchParams(searchParams);
    q ? params.set("search", q) : params.delete("search");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 100);

  return (
    <div className="relative w-full">
      <Input
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        className="pl-9 pr-11 text-lg"
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button
        variant={"ghost"}
        size={"icon"}
        type="button"
        className="pointer-events-none absolute bottom-0 left-0"
      >
        <FaSearch size={16} />
      </Button>
    </div>
  );
}
