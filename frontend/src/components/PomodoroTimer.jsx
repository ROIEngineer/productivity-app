import { useEffect, useState } from "react";

const DEFAULT_TIME = 25 * 60; // seconds

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setTimeLeft(DEFAULT_TIME);
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section>
      <h2 style={{ margin: '0 0 1rem 0' }}>Pomodoro Timer</h2>

      <p style={{ fontSize: "3rem", fontWeight: "bold", textAlign: 'center', margin: '1rem 0' }}>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        {!isRunning ? (
          <button onClick={start}>Start</button>
        ) : (
          <button className="secondary" onClick={pause}>Pause</button>
        )}
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default PomodoroTimer;
