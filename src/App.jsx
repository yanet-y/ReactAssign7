import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <div className="container">
      <div className="counter-box">
        <h1 className="title">Counter: {count}</h1>
        <div className="btn">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className={`button ${isRunning ? 'disabled-button' : ''}`}
          >
            Start
          </button>
          <button
            onClick={handleStop}
            disabled={!isRunning}
            className={`button ${!isRunning ? 'disabled-button' : ''}`}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
