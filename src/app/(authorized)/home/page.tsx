import { Metadata } from "next";
import { create } from "@/constants/create";
import { CreateCard } from "../create/_components/create-card";
import { WorkoutsCarousel } from "./_components/workouts-carousel";
import { ExercisesCarousel } from "./_components/exercises-carousel";
import Link from "next/link";
import { get10Exercises } from "@/actions/exercise";
import { get10Workouts } from "@/actions/workout";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const session = await auth();
  const [firstWorkouts, firstExercises] = await Promise.all([
    get10Workouts(),
    get10Exercises(),
  ]);

  return (
    <>
      <section className="grid h-[95vh] gap-2 lg:grid-cols-2">
        <section className="rounded-xl border-2 bg-popover px-4 py-2">
          <h2 className="mb-2 font-mono uppercase">Popular workouts</h2>
          <WorkoutsCarousel workouts={firstWorkouts} />
        </section>
        <section className="row-span-2 hidden overflow-auto rounded-xl border-2 bg-popover lg:block">
          <Link href={"/create"}>
            <CreateCard item={create[0]} />
          </Link>
        </section>
        <section className="rounded-xl border-2 bg-popover">
          <div className="px-4 py-2">
            <h2 className="mb-2 font-mono uppercase">Popular Exercises</h2>
            <ExercisesCarousel exercises={firstExercises} />
          </div>
        </section>
        <Link href={"/create"} className="lg:hidden">
          <CreateCard item={create[0]} />
        </Link>
      </section>
    </>
  );
}
