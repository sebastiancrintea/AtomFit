import { getSavedWorkouts } from "@/actions/workout";
import { WorkoutCard } from "../../_components/workout-card";
import { Workout } from "@/types/workout";

type Props = {
  searchParams?: { q?: string };
};

export default async function WorkoutSavedPage({ searchParams }: Props) {
  const data: Workout[] = await getSavedWorkouts(searchParams?.q);
  console.log(data);
  // if (data.error) return data.error;
  return (
    <>
      <ul className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.map((workout, index) => (
          <li key={index} className="w-full max-w-md">
            <WorkoutCard workout={workout} />
          </li>
        ))}
      </ul>
    </>
  );
}
