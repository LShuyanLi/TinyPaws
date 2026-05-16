"use client"
// Displays the toy ball and controls its left-to-right movement, 2speed（slow，fast）, and stop action.
import { useState, useEffect } from "react";

export default function PlayBall({ ballSpeed }) {
  const [position, setPosition] = useState(300);
  const [direction, setDirection] = useState(1);
  const [rotation, setRotation] = useState(0);

useEffect(() => {
  let interval;

  const speed =
    ballSpeed === "slow" ? 2 :
    ballSpeed === "fast" ? 6 : 0;

  if (ballSpeed !== "stop") {
    interval = setInterval(() => {
      setPosition(prev => {
        let next = prev + speed * direction;

        if (next >= 900 - 60) {
            setDirection(-1);
            return prev; // stop at edge
        }

        if (next <= 300) {
            setDirection(1);
            return prev; // stop at edge
        }

        return next;
    });

    setRotation(prev => prev + speed * direction);
    
    }, 16);
  }

  return () => clearInterval(interval);
}, [ballSpeed, direction]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-4px",
        left: position,
        transition: "none",
      }}
    >
      <img 
        src="/ball.svg" 
        style={{ 
            width: "60px" ,
        }} />
    </div>
  );
}

