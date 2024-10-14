import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GoalChart } from "./_components/goal-chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { SlNotebook } from "react-icons/sl";
import { GiHotMeal, GiMuscleUp } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";
import { CreateExerciseSheet } from "@/components/shared/exercise/create-exercise-sheet";
import { CreateWorkoutSheet } from "@/components/shared/workout/create-workout-sheet";
import { CreateWorkoutDrawer } from "@/components/shared/workout/create-workout-drawer";
import { CreateExerciseDrawer } from "@/components/shared/exercise/create-exercise-drawer";
import { SettingsDropdown } from "./_components/settings-dropdown";
import { UpdateGoals } from "@/components/shared/update-goals/update-goals-dialog";
import { auth } from "@/app/api/auth/[...nextauth]/auth";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const session = await auth();
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
      <Tabs defaultValue="info">
        <TabsList className="mb-2 h-auto">
          <TabsTrigger value="info" className="font-mono text-xl font-semibold">
            INFO
          </TabsTrigger>
          <TabsTrigger
            value="items"
            className="font-mono text-xl font-semibold"
          >
            ITEMS
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <section className="flex w-full flex-col gap-2 lg:flex-row">
            {session?.user && (
              <GoalChart
                goal={session.user.user_attr.goal}
                start={session.user.user_attr.weight}
                finish={session.user.user_attr.weight_goal}
              />
            )}
            <div className="w-full space-y-2">
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
                <span className="text-muted-foreground">
                  Lose 0.5 kg per week
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-normal">Daily calories</h3>
                  <Badge className="select-none text-xl transition-all md:text-2xl">
                    1,980 cal
                  </Badge>
                </div>
                <span className="text-muted-foreground">
                  Carbs 248g | Fat 66g | Protein 99g
                </span>
              </div>
              <UpdateGoals />
            </div>
          </section>
        </TabsContent>

        <TabsContent value="items">
          <ul className="space-y-1">
            <li className="flex items-center justify-between rounded-xl border-2 bg-popover px-4 py-2 transition-all hover:brightness-125">
              <div className="flex items-center gap-2">
                <GiHotMeal size={32} />
                <h3>
                  <span>0</span> Meals
                </h3>
              </div>
              <Button className="font-semibold md:text-lg">CREATE</Button>
            </li>
            <li className="flex items-center justify-between rounded-xl border-2 bg-popover px-4 py-2 transition-all hover:brightness-125">
              <div className="flex items-center gap-2">
                <SlNotebook size={32} />
                <h3>
                  <span>0</span> Recipes
                </h3>
              </div>
              <Button className="font-semibold md:text-lg">CREATE</Button>
            </li>
            <li className="flex items-center justify-between rounded-xl border-2 bg-popover px-4 py-2 transition-all hover:brightness-125">
              <div className="flex items-center gap-2">
                <FaDumbbell size={32} />
                <h3>
                  <span>0</span> Exercises
                </h3>
              </div>
              <div className="hidden md:block">
                <CreateExerciseSheet>
                  <Button className="font-semibold md:text-lg">CREATE</Button>
                </CreateExerciseSheet>
              </div>
              <div className="md:hidden">
                <CreateExerciseDrawer>
                  <Button className="font-semibold md:text-lg">CREATE</Button>
                </CreateExerciseDrawer>
              </div>
            </li>
            <li className="flex items-center justify-between rounded-xl border-2 bg-popover px-4 py-2 transition-all hover:brightness-125">
              <div className="flex items-center gap-2">
                <GiMuscleUp size={32} />
                <h3>
                  <span>0</span> Workouts
                </h3>
              </div>
              <div className="hidden md:block">
                <CreateWorkoutSheet>
                  <Button className="font-semibold md:text-lg">CREATE</Button>
                </CreateWorkoutSheet>
              </div>
              <div className="md:hidden">
                <CreateWorkoutDrawer>
                  <Button className="font-semibold md:text-lg">CREATE</Button>
                </CreateWorkoutDrawer>
              </div>
            </li>
          </ul>
        </TabsContent>
      </Tabs>
    </>
  );
}
