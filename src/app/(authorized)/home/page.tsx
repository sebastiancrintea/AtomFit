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
      <section className="h-full max-h-[95vh] gap-2 lg:grid lg:grid-cols-2">
        <section className="flex flex-col gap-2">
          <section className="flex-1 rounded-xl border-2 bg-popover p-4">
            <h2 className="mb-2 font-mono uppercase">Popular workouts</h2>
            <WorkoutsCarousel workouts={firstWorkouts.data} />
          </section>
          <section className="flex-1 rounded-xl border-2 bg-popover p-4">
            <h2 className="mb-2 font-mono uppercase">Popular Exercises</h2>
            <ExercisesCarousel exercises={firstExercises} />
          </section>
        </section>
        <section className="mt-1 h-full max-h-[95vh] rounded-xl lg:mt-0">
          <Link href={"/create"}>
            <CreateCard item={create[0]} />
          </Link>
        </section>
      </section>

      {/* <Link href={"/create"} className="lg:hidden">
          <CreateCard item={create[0]} />
        </Link> */}
    </>
  );
}
