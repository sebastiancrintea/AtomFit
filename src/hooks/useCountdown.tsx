import { useEffect, useState } from "react";

export function useCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [started, setStarted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (secondsLeft <= 0) {
      setIsRunning(false);
      setStarted(false);
    }

    if (!isRunning) return;

    const timeout = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft, isRunning]);

  const start = (seconds: number) => {
    setIsRunning(true);
    setSecondsLeft(seconds);
    setStarted(true);
  };

  const pause = () => setIsRunning(false);
  const resume = () => setIsRunning(true);

  return { secondsLeft, isRunning, started, start, pause, resume };
}
