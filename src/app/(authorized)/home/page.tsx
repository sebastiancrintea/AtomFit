import { Metadata } from "next";
import { CaloriesGoalChart } from "./_components/calories-goal-chart";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <h1 className="mb-2">Today</h1>
      <section className="flex gap-2">
        <section className="flex-1">
          <CaloriesGoalChart />
        </section>
        <section className="flex-1 rounded-xl border-2 bg-popover"></section>
      </section>
    </>
  );
}
