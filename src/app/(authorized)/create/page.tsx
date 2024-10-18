import { Metadata } from "next";
import { CreateWorkoutSheet } from "@/components/shared/workout/create-workout-sheet";
import { CreateCard } from "./_components/create-card";

import { create } from "@/constants/create";
import { CreateWorkoutDrawer } from "@/components/shared/workout/create-workout-drawer";
import { CreateExerciseSheet } from "@/components/shared/exercise/create-exercise-sheet";
import { CreateExerciseDrawer } from "@/components/shared/exercise/create-exercise-drawer";
import { getExercises } from "@/actions/exercise";
import { Exercise } from "@/types/exercise";

export const metadata: Metadata = {
  title: "Create",
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
export default async function CreatePage({ searchParams }: Props) {
  const data: Exercise[] = await getExercises({ searchParams });

  return (
    <>
      <section className="grid size-full gap-2 lg:grid-cols-2">
        <div className="size-full">
          <CreateWorkoutSheet exercises={data}>
            <CreateCard item={create[0]} />
          </CreateWorkoutSheet>
        </div>
        {/* <div className="size-full lg:hidden">
          <CreateWorkoutDrawer>
            <CreateCard item={create[0]} />
          </CreateWorkoutDrawer>
        </div> */}
        <div className="size-full">
          <CreateExerciseSheet>
            <CreateCard item={create[1]} />
          </CreateExerciseSheet>
        </div>
        {/* <div className="size-full lg:hidden">
          <CreateExerciseDrawer>
            <CreateCard item={create[1]} />
          </CreateExerciseDrawer>
        </div> */}

        {/* <div className="hidden size-full lg:block">
          <CreateExerciseSheet>
            <CreateCard item={create[1]} />
          </CreateExerciseSheet>
        </div>
        <div className="size-full lg:hidden">
          <CreateExerciseDrawer>
            <CreateCard item={create[1]} />
          </CreateExerciseDrawer>
        </div> */}
      </section>
    </>
  );
}
