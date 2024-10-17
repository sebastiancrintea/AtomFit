import { Metadata } from "next";
import { CaloriesGoalChart } from "./_components/calories-goal-chart";
import { create } from "@/constants/create";
import { CreateCard } from "../create/_components/create-card";
import { auth } from "@/app/api/auth/[...nextauth]/auth";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const session = await auth();
  console.log(session);
  const today = new Date();
  return (
    <>
      <header className="flex items-center justify-between py-2">
        <h1>Today</h1>
        <h3>{`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</h3>
      </header>
      <section className="grid h-[90vh] grid-cols-2 gap-2">
        <CaloriesGoalChart />
        <CreateCard item={create[0]} />
        {/* <section className="row-span-2 overflow-auto rounded-xl border-2 bg-popover"></section> */}
        {/* <section className="rounded-xl border-2 bg-popover"></section> */}
      </section>
    </>
  );
}
