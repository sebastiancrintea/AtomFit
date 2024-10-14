import { getExercises } from "@/actions/exercise";
import { ExerciseCard } from "./_components/exercise-card";
import { Exercise } from "@/types/exercise";
import { Suspense } from "react";
import { SearchBox } from "@/components/shared/search-box";
import { ExerciseFilter } from "./_components/exercise-filter";

type Props = {
  searchParams?: { search?: string; tags?: string[] };
};

export default async function ExercisesPage({ searchParams }: Props) {
  const data: Exercise[] = await getExercises(
    searchParams?.search,
    searchParams?.tags,
  );
  return (
    <>
      <header className="sticky top-2 z-50 mb-2 flex items-center gap-2 rounded-xl bg-popover p-2">
        <div className="flex-1">
          <Suspense>
            <SearchBox placeholder="Search by exercise name" />
          </Suspense>
        </div>
        <ExerciseFilter />
      </header>
      <ul className="grid justify-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data && data.length >= 1 ? (
          data.map((exercise, index) => (
            <li key={index}>
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
