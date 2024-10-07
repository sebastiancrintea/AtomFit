"use client";
import { YoutubeEmbed } from "@/components/shared/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/useCountdown";
import { FaPlay, FaPause } from "react-icons/fa";

type Props = {
  exercise: {
    id: number;
    name: string;
    description: string;
    video_url: string;
    type: string;
    muscles: string[];
    time: number;
  };
};

export function WorkoutExercisePage({ exercise }: Props) {
  const { secondsLeft, start, pause, resume, started, isRunning } =
    useCountdown();

  const url = new URL(exercise.video_url);
  const params = new URLSearchParams(url.search);
  const video_id = params.get("v");

  return (
    <>
      <div className="group aspect-video overflow-hidden rounded-xl border-2 bg-popover">
        {video_id && <YoutubeEmbed embedId={video_id} />}
      </div>
      <section className="flex items-center justify-between">
        <h1 className="uppercase">{exercise.name}</h1>
        {exercise.type === "duration" ? (
          <div className="flex items-center gap-1">
            <Badge className="text-xl">
              {secondsLeft ? `00:${secondsLeft}` : `00:${exercise.time}`}
            </Badge>
            {!started && secondsLeft === 0 && (
              <Button size={"icon"} onClick={() => start(exercise.time)}>
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
          <Badge className="text-xl">x{exercise.time}</Badge>
        )}
      </section>
      <div className="flex items-center gap-1">
        {exercise.muscles.map((muscle, index) => (
          <Badge key={index} className="font-mono text-sm uppercase">
            {muscle}
          </Badge>
        ))}
      </div>
      <p className="text-muted-foreground">{exercise.description}</p>
    </>
  );
}
