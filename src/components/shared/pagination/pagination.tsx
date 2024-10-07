"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDebouncedCallback } from "use-debounce";

export function PaginationComponent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "5";

  // const handleSearch = useDebouncedCallback((q: string) => {
  //   const params = new URLSearchParams(searchParams);
  //   q ? params.set("offset", q) : params.delete("offset");
  //   router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  // }, 100);
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/workout/saved?page=${Number(page) - 1}&per_page=${perPage}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={"?offset=1"}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
