import { getExercises } from "@/actions/exercise";
import { ExerciseCard } from "./_components/exercise-card";
import { Exercise } from "@/types/exercise";
import { Suspense } from "react";
import { SearchBox } from "@/components/shared/search-box";
import { ExerciseFilter } from "./_components/exercise-filter";

type Props = {
  searchParams?: { search?: string; tags?: string[]; page?: string };
};

const per_page = 20;

export default async function ExercisesPage({ searchParams }: Props) {
  const currentPage = searchParams?.page ? +searchParams.page : 1;
  const offset = per_page * (currentPage - 1);

  const data: Exercise[] = await getExercises({ searchParams, offset });
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
      <section className="columns-[250px] space-y-2">
        {data && data.length >= 1 ? (
          data.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        ) : (
          <h3>No Exercises found</h3>
        )}
      </section>
    </>
  );
}
