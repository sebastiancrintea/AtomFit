import { getWorkouts } from "@/actions/workout";
import { SearchBox } from "@/components/shared/search-box";
import { Suspense } from "react";
import { WorkoutCard } from "./_components/workout-card";
import { Workout } from "@/types/workout";
import { PaginationComponent } from "@/components/shared/pagination/pagination";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function WorkoutsPage({ searchParams }: Props) {
  const data: Workout[] = await getWorkouts({ searchParams });
  return (
    <>
      <header className="sticky top-2 z-50 mb-2 flex items-center gap-2 rounded-xl bg-popover p-2">
        <div className="flex-1">
          <Suspense>
            <SearchBox placeholder="Search by exercise name" />
          </Suspense>
        </div>
      </header>

      {data && data.length >= 1 ? (
        <>
          <section className="mb-2 columns-[250px] space-y-2">
            {data.map((workout, index) => (
              <WorkoutCard key={index} workout={workout} />
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
