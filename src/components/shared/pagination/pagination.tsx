"use client";
import { useSearchParams } from "next/navigation";
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

export function PaginationComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "20";

  const prev = () => {
    if (+page - 1 <= 0) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", `${+page - 1}`);
    params.set("limit", limit);
    router.push(`?${params.toString()}`);
  };
  const next = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", `${+page + 1}`);
    params.set("limit", limit);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`cursor-pointer select-none ${+page - 1 <= 0 && "text-muted-foreground"}`}
              onClick={prev}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={"?offset=1"}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer select-none"
              onClick={next}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
