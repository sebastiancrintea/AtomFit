import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export function WorkoutCard() {
  return (
    <>
      <Link href={"#"}>
        <Card className="cursor-pointer border-2 bg-popover transition-all hover:scale-105">
          <CardHeader className="max-w-40 p-4 md:min-w-48">
            <div className="mx-auto aspect-square w-full max-w-[250px] rounded-xl bg-secondary"></div>

            <h2 className="font-mono uppercase">Title</h2>
            <CardDescription className="font-semibold">
              20 min | 15 exercises
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </>
  );
}
