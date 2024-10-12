import { getExercises } from "@/actions/exercise";
import { ExerciseCard } from "./_components/exercise-card";
import { Exercise } from "@/types/exercise";

export default async function ExercisesPage() {
  const data = await getExercises();
  return (
    <>
      <h1>Exercises Page</h1>

      <ul className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.length >= 1 ? (
          data.map((exercise: Exercise, index: number) => (
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
