// Handles feather toy options and its controls (3mode: 1->3 feathers, 2->6 feathers, 3->9 feathers).
import { useState, useEffect } from "react";
import { usePlay } from "@/components/Jessica/PlayProvider";

export default function Feather() {
	const { activeActivity } = usePlay();
	const featherActive = activeActivity === "feather";
	const [position, setPosition] = useState(0);
	const [direction, setDirection] = useState(1);

	useEffect(() => {
	let interval;

	if (featherActive) {
		interval = setInterval(() => {
			setPosition(prev => {
				let next = prev + 2 * direction;

				if (next >= 120) {
					setDirection(-1);
					return prev;
				}

				if (next <= -120) {
					setDirection(1);
					return prev;
				}

				return next;
			});
		}, 12);
	}

	return () => clearInterval(interval);
}, [featherActive, direction]);

if (!featherActive) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "-510px",
        left: "47%",
        transform: `translateX(${position}px) rotate(${position / -8}deg)`,
        zIndex: 30,
      }}
    >
      <img
        src="/feather-toy.svg"
        style={{
          width: "80px",
        }}
      />
    </div>
  );
}