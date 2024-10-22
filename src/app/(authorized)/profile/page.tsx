import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GoalChart } from "./_components/goal-chart";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";
import { SettingsDropdown } from "./_components/settings-dropdown";
import { UpdateGoals } from "@/components/shared/update-goals/update-goals-dialog";
import { auth } from "@/lib/auth";
import { getCurrentWeight, getMacronutrients } from "@/actions/profile";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const session = await auth();

  const [currentWeight, macroNutrients] = await Promise.all([
    getCurrentWeight(),
    getMacronutrients(),
  ]);

  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden">
          <Avatar className="size-24">
            <AvatarFallback>
              {session ? `${session.user.username[0].toUpperCase()}` : "CN"}
            </AvatarFallback>
          </Avatar>
          <div className="hidden lg:block">
            <h2 className="text-xl font-semibold transition-all">
              {session?.user
                ? `${session.user.email}`
                : "Crintea Sebastiansnahkdbwahdbhawdhbahdbhsahdbhahd"}
            </h2>
            <span className="text-base text-muted-foreground opacity-75">
              {session?.user ? `@${session.user.username}` : "@testing"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button size={"icon"} variant={"ghost"} asChild>
            <Link href={"/friends/active"}>
              <FaUserFriends size={32} />
            </Link>
          </Button>
          <SettingsDropdown />
        </div>
      </header>

      <nav className="mb-2 flex items-center gap-1">
        <Button variant={"secondary"} asChild>
          <Link href={"/profile"} className="font-mono">
            INFO
          </Link>
        </Button>
        <Button variant={"secondary"} asChild>
          <Link href={"?tabs=info"} className="font-mono">
            ITEMS
          </Link>
        </Button>
      </nav>

      <section className="flex flex-col gap-2 lg:flex-row">
        {session?.user && (
          <div className="flex flex-1 flex-col">
            <GoalChart
              goal={session.user.user_attr.goal}
              start={currentWeight[0].weight}
              finish={session.user.user_attr.weight_goal}
              current={currentWeight[currentWeight.length - 1].weight}
            />
            <div className="mt-2 w-full space-y-2">
              <h2>Goals</h2>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-normal">Weight</h3>
                  <Badge className="select-none text-xl transition-all md:text-2xl">
                    {session?.user
                      ? `${session.user.user_attr.weight_goal} kg`
                      : "testing kg"}
                  </Badge>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-normal">Daily calories</h3>
                  <Badge className="select-none text-xl transition-all md:text-2xl">
                    {parseInt(macroNutrients.Calories)} cal
                  </Badge>
                </div>
                <span className="text-muted-foreground">
                  Carbs {parseInt(macroNutrients.Carbohydrats)}g | Fat{" "}
                  {parseInt(macroNutrients.Fats)}g | Protein{" "}
                  {parseInt(macroNutrients.Proteins)}g
                </span>
              </div>
              <UpdateGoals />
            </div>
          </div>
        )}
        <div className="flex-1 rounded-lg border-2 border-border p-2">
          <div className="mb-2 rounded-lg border-2 border-border bg-card p-2">
            <h4 className="font-mono uppercase">Achivements</h4>
          </div>
          <ScrollArea className="h-[70vh]">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="mb-1 rounded-lg border-2 border-border bg-popover p-2"
              >
                <h3>First workout</h3>
                <span className="text-muted-foreground">
                  Finish your first workout
                </span>
              </div>
            ))}
          </ScrollArea>
        </div>
        {/* <div className="w-full flex-1 space-y-2">
          <h2>Goals</h2>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-normal">Weight</h3>
              <Badge className="select-none text-xl transition-all md:text-2xl">
                {session?.user
                  ? `${session.user.user_attr.weight_goal} kg`
                  : "testing kg"}
              </Badge>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-normal">Daily calories</h3>
              <Badge className="select-none text-xl transition-all md:text-2xl">
                {parseInt(macroNutrients.Calories)} cal
              </Badge>
            </div>
            <span className="text-muted-foreground">
              Carbs {parseInt(macroNutrients.Carbohydrats)}g | Fat{" "}
              {parseInt(macroNutrients.Fats)}g | Protein{" "}
              {parseInt(macroNutrients.Proteins)}g
            </span>
          </div>
          <UpdateGoals />
        </div> */}
      </section>
    </>
  );
}
