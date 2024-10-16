import { getWorkouts } from "@/actions/workout";
import { SearchBox } from "@/components/shared/search-box";
import { Suspense } from "react";
import { WorkoutCard } from "./_components/workout-card";
import { Workout } from "@/types/workout";

type Props = {
  searchParams?: { search?: string; tags?: string[]; page?: string };
};

const per_page = 20;

export default async function WorkoutsPage({ searchParams }: Props) {
  const currentPage = searchParams?.page ? +searchParams.page : 1;
  const offset = per_page * (currentPage - 1);

  const data: Workout[] = await getWorkouts({ searchParams, offset });
  return (
    <>
      <header className="sticky top-2 z-50 mb-2 flex items-center gap-2 rounded-xl bg-popover p-2">
        <div className="flex-1">
          <Suspense>
            <SearchBox placeholder="Search by exercise name" />
          </Suspense>
        </div>
      </header>
      <section className="columns-[250px] space-y-2">
        {data && data.length >= 1 ? (
          data.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))
        ) : (
          <h3>No Exercises found</h3>
        )}
      </section>
    </>
  );
}
