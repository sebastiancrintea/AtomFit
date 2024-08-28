import { Metadata } from "next";
import { CreateWorkoutSheet } from "@/components/shared/workout/create-workout-sheet";
import { CreateCard } from "./_components/create-card";

import { create } from "@/constants/create";
import { CreateWorkoutDrawer } from "@/components/shared/workout/create-workout-drawer";
import { CreateExerciseSheet } from "@/components/shared/exercise/create-exercise-sheet";
import { CreateExerciseDrawer } from "@/components/shared/exercise/create-exercise-drawer";

export const metadata: Metadata = {
  title: "Create",
};

export default function CreatePage() {
  return (
    <>
      <section className="grid size-full gap-2 lg:grid-cols-3">
        <div className="hidden size-full lg:block">
          {/*  */}
          <CreateWorkoutSheet>
            <CreateCard item={create[0]} />
          </CreateWorkoutSheet>
        </div>
        <div className="size-full lg:hidden">
          <CreateWorkoutDrawer>
            <CreateCard item={create[0]} />
          </CreateWorkoutDrawer>
        </div>
        {/*  */}
        <div className="hidden size-full lg:block">
          <CreateExerciseSheet>
            <CreateCard item={create[1]} />
          </CreateExerciseSheet>
        </div>
        <div className="size-full lg:hidden">
          <CreateExerciseDrawer>
            <CreateCard item={create[1]} />
          </CreateExerciseDrawer>
        </div>

        <div className="hidden size-full lg:block">
          <CreateExerciseSheet>
            <CreateCard item={create[1]} />
          </CreateExerciseSheet>
        </div>
        <div className="size-full lg:hidden">
          <CreateExerciseDrawer>
            <CreateCard item={create[1]} />
          </CreateExerciseDrawer>
        </div>
      </section>
    </>
  );
}
