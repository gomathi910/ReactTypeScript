


import React, { useState, useRef } from 'react';


const CountdownTimer: React.FC = () => {
  // State variables
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0); // Stores total seconds for countdown
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true); // For sound option
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
const intervalRef = useRef<number | null>(null);


  // Sound effect when timer ends
  const sound = new Audio('https://www.soundjay.com/button/beep-07.wav');

  // Function to start the countdown
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Clear existing timer if any

    setTimer(minutes * 60 + seconds); // Convert time to total seconds
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current!);
          if (soundEnabled) sound.play(); // Play sound if enabled
          alert('Time is up!');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Function to pause the countdown
  const pauseTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Function to reset the countdown
  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
    setTimer(0);
  };

  // Update minutes and seconds from inputs
  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(Number(e.target.value));
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(Number(e.target.value));
  };

  // Convert remaining seconds to minutes and seconds for display
  const formatTime = (timeInSeconds: number) => {
    const min = Math.floor(timeInSeconds / 60);
    const sec = timeInSeconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`; // Ensuring two digits for seconds
  };

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div className="input-container">
        <input
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
          disabled={isRunning}
          min={0}
          placeholder="Minutes"
        />
        <span>:</span>
        <input
          type="number"
          value={seconds}
          onChange={handleSecondsChange}
          disabled={isRunning}
          min={0}
          max={59}
          placeholder="Seconds"
        />
      </div>

      <div className="buttons">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <div className="timer-display">
        <h2>{formatTime(timer)}</h2>
      </div>

      <div className="sound-option">
        <label>
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={() => setSoundEnabled(!soundEnabled)}
          />
          Play sound when time's up
        </label>
      </div>
    </div>
  );
};

export default CountdownTimer;
