import { SearchBox } from "@/components/shared/search-box";
import { WorkoutCard } from "./_components/workout-card";

export default function WorkoutPage() {
  return (
    <>
      <header className="py-2">
        <h1>Workout</h1>
        <SearchBox />
      </header>
      <ul className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 50 }).map((_, index) => (
          <li key={index} className="mx-auto w-full sm:mx-0 sm:w-auto">
            <WorkoutCard />
          </li>
        ))}
      </ul>
    </>
  );
}
