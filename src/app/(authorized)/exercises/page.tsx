import { getExercises } from "@/actions/exercise";
import { ExerciseCard } from "./_components/exercise-card";
import { Exercise } from "@/types/exercise";

type Props = {
  searchParams?: { q?: string };
};

export default async function ExercisesPage({ searchParams }: Props) {
  const data: Exercise[] = await getExercises(searchParams?.q);
  return (
    <>
      <ul className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data && data.length >= 1 ? (
          data.map((exercise, index) => (
            <li key={index} className="w-full max-w-md">
              <ExerciseCard exercise={exercise} />
            </li>
          ))
        ) : (
          <h3>No Exercises found</h3>
        )}
      </ul>
    </>
  );
}
