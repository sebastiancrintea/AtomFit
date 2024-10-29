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

type Props = {
  total?: number;
};

export function PaginationComponent({ total }: Props) {
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
    if (total && Math.ceil(total / +limit) < +page + 1) return;
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
          {total &&
            [...new Array(Math.ceil(total / +limit))].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink href={`?page=${index + 1}`}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          <PaginationItem>
            <PaginationNext
              className={`cursor-pointer select-none ${total && Math.ceil(total / +limit) < +page + 1 && "text-muted-foreground"}`}
              onClick={next}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
