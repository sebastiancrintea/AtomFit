import { WorkoutCard } from "./_components/workout-card";

export default function WorkoutPage() {
  return (
    <>
      <ul className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 50 }).map((_, index) => (
          <li key={index}>
            <WorkoutCard />
          </li>
        ))}
      </ul>
    </>
  );
}
