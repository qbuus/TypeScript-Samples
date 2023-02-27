import React, { useRef, useState, useEffect } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Timer {timer}
      <button type="button" onClick={() => stopTimer()}>
        Stop timer
      </button>
    </div>
  );
};

export default MutableRef;
