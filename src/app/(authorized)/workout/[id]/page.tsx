import { NavigateBackButton } from "@/components/shared/navigate-back";
import { Button } from "@/components/ui/button";
import { ExerciseCard } from "./_components/exercise-card";
import { ExercisesCarousel } from "./_components/exercises-carousel";
import Link from "next/link";

const exercises = [
  {
    id: 1,
    name: "pushups",
    description: "dsamjdwnja",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "duration",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 2,
    name: "snajdnjaw",
    description: "sanjkdbawjkdjaw",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 14,
  },
  {
    id: 3,
    name: "legs something",
    description: "sbahjdbhjwabdjhkaw",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "duration",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 4,
    name: "thnig",
    description: "sanjkdbjadjaw",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 6,
    name: "Machine Learning Basics",
    description:
      "An introductory video on the key concepts of machine learning and how they are applied.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 7,
    name: "Responsive Web Design",
    description:
      "Learn how to create websites that work on all devices using responsive design techniques.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "duration",
    muscles: ["chest", "traps"],
    time: 30,
  },
  {
    id: 8,
    name: "Version Control with Git",
    description:
      "A guide to using Git for version control, covering the basics and advanced features.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 9,
    name: "Introduction to Kubernetes",
    description:
      "Learn the basics of Kubernetes and how to deploy and manage containerized applications.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 10,
    name: "SQL for Beginners",
    description:
      "An introductory video on SQL, the standard language for managing and querying databases.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 11,
    name: "Introduction to Blockchain",
    description:
      "A beginner's guide to understanding the basics of blockchain technology and its applications.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 12,
    name: "Building Web Apps with React",
    description:
      "Learn how to build dynamic web applications using the React JavaScript library.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 13,
    name: "Cybersecurity Fundamentals",
    description:
      "An overview of essential cybersecurity practices to protect data and systems.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "duration",
    muscles: ["chest", "traps"],
    time: 26,
  },
  {
    id: 14,
    name: "Agile Project Management",
    description:
      "Understand the principles of Agile project management and how to apply them in real projects.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "repeats",
    muscles: ["chest", "traps"],
    time: 13,
  },
  {
    id: 15,
    name: "Data Visualization with Tableau",
    description:
      "Learn how to create compelling data visualizations using Tableau.",
    video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    type: "duration",
    muscles: ["chest", "traps"],
    time: 45,
  },
];

type Props = {
  searchParams?: { start?: boolean };
  params: { id: string };
};

export default function SingleWorkout({ searchParams, params }: Props) {
  return (
    <>
      {searchParams?.start ? (
        <ExercisesCarousel exercises={exercises} />
      ) : (
        <section className="h-full w-full space-y-2 rounded-xl border-2 bg-popover p-2">
          <section className="relative aspect-video rounded-xl bg-secondary">
            <div className="absolute top-0 flex items-center gap-2 rounded-br-xl rounded-tl-xl bg-primary p-2">
              <NavigateBackButton />
              <h1 className="text-xl uppercase lg:text-4xl">Workout Title</h1>
            </div>
            <div className="absolute bottom-2 left-2 hidden border-l-4 border-primary p-2 sm:block">
              <h4 className="font-mono">20 mins | 16 Exercises</h4>
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
            <h4 className="font-mono text-base">20 mins | 16 Exercises</h4>
          </div>
          <ul className="space-y-2">
            {exercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
