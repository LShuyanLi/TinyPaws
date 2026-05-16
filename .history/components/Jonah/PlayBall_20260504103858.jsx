// Displays the toy ball and controls its left-to-right movement, 2speed（slow，fast）, and stop action.
import { useState, useEffect } from "react";

export default function PlayBall({ ballSpeed }) {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  console.log(ballSpeed);

useEffect(() => {
  let interval;

  const speed =
    ballSpeed === "slow" ? 2 :
    ballSpeed === "fast" ? 6 : 0;

  if (ballSpeed !== "stop") {
    interval = setInterval(() => {
      setPosition(prev => {
        let next = prev + speed * direction;

        if (next > 800 - 60) {
          setDirection(-1);
          return prev;
        }
        if (next < 0) {
          setDirection(1);
          return prev;
        }

        return next;
      });
    }, 16);
  }

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
}

