import { WorkoutCard } from "./_components/workoutCard";

export default function WorkoutPage() {
  return (
    <>
      <ul className="flex flex-wrap gap-4">
        {Array.from({ length: 50 }).map((_, index) => (
          <li key={index}>
            <WorkoutCard />
          </li>
        ))}
      </ul>
    </>
  );
}
