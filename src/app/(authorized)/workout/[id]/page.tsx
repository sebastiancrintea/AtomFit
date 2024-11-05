import { NavigateBackButton } from "@/components/shared/navigate-back";
import { Button } from "@/components/ui/button";
import { ExerciseCard } from "./_components/exercise-card";
import { ExercisesCarousel } from "./_components/exercises-carousel";
import Link from "next/link";
import { getWorkoutById, getWorkoutReviews } from "@/actions/workout";
import { Workout } from "@/types/workout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReviewWorkoutForm } from "./_components/review-form";
import Image from "next/image";
import { Exercise } from "@/types/exercise";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GoStar, GoStarFill } from "react-icons/go";

type Props = {
  searchParams?: { start?: boolean };
  params: { id: string };
};

export default async function SingleWorkout({ searchParams, params }: Props) {
  const [data, reviews] = await Promise.all([
    getWorkoutById(+params.id),
    getWorkoutReviews(+params.id),
  ]);
  console.log(data);
  const workoutExercises = data.workout_exercises;
  // const video_id = data.tutorial_link.slice(32);
  const video_id = 231;
  const thumbnailUrl = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
  return (
    <>
      {searchParams?.start ? (
        <>
          <header className="flex items-center gap-2">
            <NavigateBackButton />
            <h1 className="text-xl uppercase lg:text-4xl">
              {data ? data.name : "Workout Title"}
            </h1>
          </header>
          <ExercisesCarousel exercises={workoutExercises} />
        </>
      ) : (
        <section className="h-full w-full space-y-2 rounded-xl border-2 bg-popover p-2">
          <section className="relative aspect-video rounded-xl bg-secondary">
            <Image
              src={thumbnailUrl}
              alt={data.name}
              fill
              className="h-auto max-w-full rounded-lg"
            />
            <div className="absolute top-0 flex items-center gap-2 rounded-br-xl rounded-tl-xl bg-primary p-2">
              <NavigateBackButton />
              <h1 className="text-xl uppercase lg:text-4xl">
                {data ? data.name : "Workout Title"}
              </h1>
            </div>
            <div className="absolute bottom-2 left-2 hidden border-l-4 border-primary p-2 sm:block">
              <h4 className="font-mono">
                {workoutExercises && workoutExercises.length} Exercises |{" "}
                {data.likes} Likes
              </h4>
            </div>
            <div className="absolute bottom-2 right-2">
              <Button
                asChild
                className="font-mono text-xl font-semibold uppercase"
              >
                <Link href={"?start=true"}>Start</Link>
              </Button>
            </div>
          </section>
          <div className="border-l-4 border-primary px-2 sm:hidden">
            <h4 className="font-mono text-base">
              | {workoutExercises && workoutExercises.length} Exercises
            </h4>
          </div>
          <Tabs defaultValue="exercises">
            <TabsList className="h-auto">
              <TabsTrigger
                value="exercises"
                className="font-mono text-base uppercase"
              >
                Exercises
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="font-mono text-base uppercase"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"} className="ml-1">
                  Add a review
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{data.name}</DialogTitle>
                  <DialogDescription>
                    Please tell us how this workout looks to you and what
                    suggestions do you have to improve it! Thanks.
                  </DialogDescription>
                </DialogHeader>
                <ReviewWorkoutForm workoutId={data.id} />
              </DialogContent>
            </Dialog>

            <TabsContent value="exercises">
              <ul className="space-y-2">
                {workoutExercises &&
                  workoutExercises.map((exercise: any, index: number) => (
                    <ExerciseCard
                      key={index}
                      exercise={exercise.exercise}
                      duration={exercise.duration}
                    />
                  ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews">
              {/* {JSON.stringify(reviews)} */}
              <ul className="space-y-2">
                {!reviews && <h3>No Reviews yet</h3>}
                {reviews &&
                  reviews.map((review: any, index: number) => (
                    <li key={index} className="rounded-lg border-2 p-2">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarFallback>
                            {review.Username[0].toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                          <h2 className="text-lg">@{review.Username}</h2>
                          <ul className="flex items-center gap-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <li key={index} className="relative">
                                <GoStarFill
                                  size={26}
                                  className={`${review.rating >= index + 1 ? "opacity-100" : "opacity-0"} transition-all`}
                                />
                                <GoStar
                                  size={26}
                                  className={`absolute left-0 top-0`}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="ml-4">
                          <h3>{review.title}</h3>
                          <p>{review.content}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </TabsContent>
          </Tabs>
        </section>
      )}
    </>
  );
}
