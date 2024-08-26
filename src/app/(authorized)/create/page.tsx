import { Metadata } from "next";
import { CreateWorkoutSheet } from "@/components/shared/workout/create-workout-sheet";
import { CreateCard } from "./_components/create-card";

import { create } from "@/constants/create";

export const metadata: Metadata = {
  title: "Create",
};

export default function CreatePage() {
  return (
    <>
      <section className="grid size-full gap-2 lg:grid-cols-3">
        {create.map((item, index) => (
          <CreateWorkoutSheet key={index}>
            <CreateCard item={item} />
          </CreateWorkoutSheet>
        ))}

        <div className="size-full rounded-xl bg-secondary"></div>
        <div className="size-full rounded-xl bg-secondary"></div>
      </section>
    </>
  );
}
