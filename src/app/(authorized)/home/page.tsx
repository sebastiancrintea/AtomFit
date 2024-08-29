import { Metadata } from "next";
import { CaloriesGoalChart } from "./_components/calories-goal-chart";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const today = new Date();
  return (
    <>
      <header className="flex items-center justify-between py-2">
        <h1>Today</h1>
        <h3>{`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</h3>
      </header>
      <section className="grid grid-cols-2 grid-rows-2 gap-2">
        <CaloriesGoalChart />
        <section className="row-span-2 overflow-auto rounded-xl border-2 bg-popover"></section>
        <section className="rounded-xl border-2 bg-popover"></section>
      </section>
    </>
  );
}
