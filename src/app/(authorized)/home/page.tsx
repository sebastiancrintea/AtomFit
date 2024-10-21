import { Metadata } from "next";
import { create } from "@/constants/create";
import { CreateCard } from "../create/_components/create-card";
import { auth } from "@/lib/auth";
import { WorkoutsCarousel } from "./_components/workouts-carousel";
import { ExercisesCarousel } from "./_components/exercises-carousel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const session = await auth();
  console.log(session);
  const today = new Date();
  return (
    <>
      <header className="flex items-center justify-between py-2">
        <h1>Today</h1>
        <h3>{`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</h3>
      </header>
      <section className="grid h-[90vh] grid-cols-2 gap-2">
        <section className="rounded-xl border-2 bg-popover">
          <div className="px-4 py-2">
            <h2 className="font-mono uppercase">Popular workouts</h2>
            <WorkoutsCarousel />
          </div>
        </section>
        <section className="row-span-2 overflow-auto rounded-xl border-2 bg-popover">
          <Link href={"/create"}>
            <CreateCard item={create[0]} />
          </Link>
        </section>
        <section className="rounded-xl border-2 bg-popover">
          <div className="px-4 py-2">
            <h2 className="font-mono uppercase">Popular Exercises</h2>
            <ExercisesCarousel />
          </div>
        </section>
      </section>
    </>
  );
}
