import { getExercises } from "@/actions/exercise";
import { ExerciseCard } from "./_components/exercise-card";
import { Exercise } from "@/types/exercise";
import { Suspense } from "react";
import { SearchBox } from "@/components/shared/search-box";
import { ExerciseFilter } from "./_components/exercise-filter";
import { PaginationComponent } from "@/components/shared/pagination/pagination";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ExercisesPage({ searchParams }: Props) {
  const data: Exercise[] = await getExercises({ searchParams });
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
      {data && data.length >= 1 ? (
        <>
          <section className="mb-2 columns-[250px] space-y-2">
            {data.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </section>

          <PaginationComponent />
        </>
      ) : (
        <h3>No Exercises found</h3>
      )}
    </>
  );
}
