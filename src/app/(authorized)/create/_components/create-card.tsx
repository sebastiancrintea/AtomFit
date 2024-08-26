import { Button } from "@/components/ui/button";
import { type create } from "@/constants/create";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  item: create;
};

export function CreateCard({ item }: Props) {
  return (
    <section className="group relative size-full cursor-pointer rounded-xl border-2 bg-secondary transition-all">
      <Image
        src={item.src}
        alt={item.alt}
        sizes="33vw"
        fill
        priority
        className="pointer-events-none select-none rounded-xl object-cover transition-all group-hover:brightness-75"
      />
      <section className="relative flex h-full flex-col justify-between px-4 py-2">
        <div className="space-y-1">
          <h2 className="text-6xl font-extrabold">{item.title}</h2>
          <p className="text-muted-foreground">{item.description}</p>
        </div>
        <Button variant={"outline"} size={"icon"} className="ml-auto">
          <FaArrowRight />
        </Button>
      </section>
    </section>
  );
}
