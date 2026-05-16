// Displays the hand toy and controls its start/stop movement.

import React, { useState, useEffect } from "react";
import { usePlay } from "@/components/Jessica/PlayProvider";

export default function MovingHand() {
	const { activeActivity } = usePlay();
	const pettingActive = activeActivity === "petting";
	const [t, setT] = useState(0);

	useEffect(() => {
		let interval;

		if (pettingActive) {
			interval = setInterval(() => {
				setT(prev => (prev + 0.03) % (Math.PI * 2));
			}, 20);
		}

		return () => clearInterval(interval);
	}, [pettingActive]);

	if (!pettingActive) return null;

	// Kidney bean shape parametric equations.
	const a = 50;
	const x = a * Math.cos(t) * (Math.sin(t)**3 + Math.cos(t)**3);
	const y = -a * Math.sin(t) * (Math.sin(t)**3 + Math.cos(t)**3);

	// Rotate the shape to align with the cat's body.
	const angle = (-145 * Math.PI) / 180;
	const cos = Math.cos(angle);
	const sin = Math.sin(angle);
	const rotatedX = x * cos + y * sin;
	const rotatedY = -x * sin + y * cos;

	return (
		<div
			style={{
				position: "absolute",
				top: "-170px",
				left: "50%",
				transform: `translateX(${rotatedX + 45}px) translateY(${rotatedY}px) translateX(-50%)`,
				zIndex: 30,
			}}
		>
			<img
				src="/pettingHand.svg"
				style={{
					width: "600px",
				}}
			/>
		</div>
	);
}