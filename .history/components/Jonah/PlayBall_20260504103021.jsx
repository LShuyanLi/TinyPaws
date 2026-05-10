// Displays the toy ball and controls its left-to-right movement, 2speed（slow，fast）, and stop action.
import { useState, useEffect } from "react";

export default function PlayBall({ ballSpeed }) {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (ballSpeed === "stop") return;

    const speed =
      ballSpeed === "slow" ? 2 :
      ballSpeed === "fast" ? 6 : 0;

    const interval = setInterval(() => {
      setPosition(prev => {
        let next = prev + speed * direction;

        // bounce at edges
        if (next > window.innerWidth - 60) {
          setDirection(-1);
          return prev;
        }
        if (next < 0) {
          setDirection(1);
          return prev;
        }

        return next;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [ballSpeed, direction]);

    if (ballSpeed === "stop") return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: position,
        transition: "none",
      }}
    >
      <img src="/ball.svg" style={{ width: "50px" }} />
    </div>
  );
  console.log("ballSpeed:", ballSpeed);
}

