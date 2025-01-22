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
import {
  getCurrentWeight,
  getMacronutrients,
  getMyExercises,
  getMyWorkouts,
} from "@/actions/profile";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutCard } from "../workout/_components/workout-card";
import { ExerciseCard } from "../exercises/_components/exercise-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { Progress } from "@/components/ui/progress";
import { SiReactivex } from "react-icons/si";
import { FaDumbbell } from "react-icons/fa6";
import { LiaDumbbellSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { GiHypersonicBolt } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";
import { DeleteConfirm } from "./_components/delete-confirm";
import { MdEdit } from "react-icons/md";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const session = await auth();
  if (!session) return;

  const [currentWeight, macroNutrients, myWorkouts, myExercises] =
    await Promise.all([
      getCurrentWeight(),
      getMacronutrients(),
      getMyWorkouts(session.user.id),
      getMyExercises(session.user.id),
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
      <Tabs defaultValue="info">
        <TabsList className="h-auto">
          <TabsTrigger value="info" className="font-mono text-base uppercase">
            INFO
          </TabsTrigger>
          <TabsTrigger
            value="workouts"
            className="font-mono text-base uppercase"
          >
            WORKOUTS
          </TabsTrigger>
          <TabsTrigger
            value="exercises"
            className="font-mono text-base uppercase"
          >
            EXERCISES
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info">
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
                <h4 className="font-mono uppercase">Achievements</h4>
              </div>
              <ScrollArea className="h-[70vh]">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between rounded-lg border-2 border-border bg-popover p-2">
                    <div className="flex items-center gap-2">
                      <FaDumbbell size={42} />
                      <div>
                        <h3>First workout</h3>
                        <span className="text-muted-foreground">
                          Create your first workout
                        </span>
                        <Progress value={100} />
                      </div>
                    </div>
                    <CiCircleCheck size={42} />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border-2 border-border bg-popover p-2">
                    <div className="flex items-center gap-2">
                      <LiaDumbbellSolid size={42} />
                      <div>
                        <h3>First Exercise</h3>
                        <span className="text-muted-foreground">
                          Create your first exercise
                        </span>
                        <Progress value={0} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border-2 border-border bg-popover p-2">
                    <div className="flex items-center gap-2">
                      <SiReactivex size={42} />
                      <div>
                        <h3>Be Active</h3>
                        <span className="text-muted-foreground">
                          Complete your first workout
                        </span>
                        <Progress value={0} />
                      </div>
                    </div>
                    {/* <CiCircleCheck size={42} /> */}
                  </div>
                  <div className="flex items-center justify-between rounded-lg border-2 border-border bg-popover p-2">
                    <div className="flex items-center gap-2">
                      <CiStar size={42} />
                      <div>
                        <h3>What a star</h3>
                        <span className="text-muted-foreground">
                          Gain 5 likes at one exercise
                        </span>
                        <Progress value={0} />
                      </div>
                    </div>
                    {/* <CiCircleCheck size={42} /> */}
                  </div>
                  <div className="flex items-center justify-between rounded-lg border-2 border-border bg-popover p-2">
                    <div className="flex items-center gap-2">
                      <GiHypersonicBolt size={42} />
                      <div>
                        <h3>Become a legend</h3>
                        <span className="text-muted-foreground">
                          Gain 100 likes at one workout
                        </span>
                        <Progress value={0} />
                      </div>
                    </div>
                    {/* <CiCircleCheck size={42} /> */}
                  </div>
                  <div className="flex items-center justify-between rounded-lg border-2 border-border bg-popover p-2">
                    <div className="flex items-center gap-2">
                      <MdFeedback size={42} />
                      <div>
                        <h3>Listen the community</h3>
                        <span className="text-muted-foreground">
                          Have at least 10 reviews at one workout
                        </span>
                        <Progress value={0} />
                      </div>
                    </div>
                    {/* <CiCircleCheck size={42} /> */}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="workouts">
          <section className="mb-2 columns-[250px] space-y-2">
            {myWorkouts.map((workout: any, index: number) => (
              <div key={index} className="group relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      className="absolute right-2 top-2 z-50 opacity-0 transition-all group-hover:opacity-100"
                    >
                      <BsThreeDotsVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{workout.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <MdEdit className="mr-1" />
                      Edit
                    </DropdownMenuItem>
                    <DeleteConfirm type="workout" />
                  </DropdownMenuContent>
                </DropdownMenu>
                <WorkoutCard workout={workout} />
              </div>
            ))}
          </section>
        </TabsContent>
        <TabsContent value="exercises">
          <section className="mb-2 columns-[250px] space-y-2">
            {myExercises.map((exercise: any, index: number) => (
              <div key={index} className="group relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      className="absolute right-2 top-2 z-50 opacity-0 transition-all group-hover:opacity-100"
                    >
                      <BsThreeDotsVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{exercise.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <MdEdit className="mr-1" />
                      Edit
                    </DropdownMenuItem>
                    <DeleteConfirm type="exercise" />
                  </DropdownMenuContent>
                </DropdownMenu>
                <ExerciseCard key={index} exercise={exercise} />
              </div>
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </>
  );
}
