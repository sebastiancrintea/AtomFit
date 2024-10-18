"use client";
import { YoutubeEmbed } from "@/components/shared/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/useCountdown";
import { Exercise } from "@/types/exercise";
import { FaPlay, FaPause } from "react-icons/fa";

type Props = {
  exercise: {
    workout_id: number;
    exercise_id: number;
    duration: number;
    exercise: Exercise;
  };
};

export function WorkoutExercisePage({ exercise }: Props) {
  const { secondsLeft, start, pause, resume, started, isRunning } =
    useCountdown();

  return (
    <>
      <div className="group aspect-video overflow-hidden rounded-xl border-2 bg-popover">
        {exercise.exercise.tutorial_link && (
          <YoutubeEmbed embedId={exercise.exercise.tutorial_link.slice(32)} />
        )}
      </div>
      <section className="flex items-center justify-between">
        <h1 className="uppercase">{exercise.exercise.name}</h1>
        {exercise.exercise.is_duration ? (
          <div className="flex items-center gap-1">
            <Badge className="text-xl">
              {secondsLeft ? `00:${secondsLeft}` : `00:${exercise.duration}`}
            </Badge>
            {!started && secondsLeft === 0 && (
              <Button size={"icon"} onClick={() => start(exercise.duration)}>
                <FaPlay size={24} />
              </Button>
            )}
            {started && isRunning && (
              <Button size={"icon"} onClick={pause}>
                <FaPause size={24} />
              </Button>
            )}
            {started && !isRunning && (
              <Button size={"icon"} onClick={resume}>
                <FaPlay size={24} />
              </Button>
            )}
          </div>
        ) : (
          <Badge className="text-xl">x{exercise.duration}</Badge>
        )}
      </section>
      <div className="flex items-center gap-1">
        {exercise.exercise.muscles.map((muscle, index) => (
          <Badge key={index} className="font-mono text-sm uppercase">
            {muscle}
          </Badge>
        ))}
      </div>
      {/* <div className="columns-2">
        <p className="text-muted-foreground">{exercise.exercise.description}</p>
      </div> */}
    </>
  );
}
