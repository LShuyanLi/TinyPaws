// Displays the brush tool and controls its start/stop movement.

import { useState, useEffect } from "react";
import { useBrush } from "@/components/Jessica/BrushProvider";

export default function BrushTool() {
	const { brushing } = useBrush();
	const [t, setT] = useState(0);

	useEffect(() => {
		let interval;

		if (brushing) {
			interval = setInterval(() => {
				setT(prev => (prev + 0.02) % (Math.PI * 2));
			}, 20);
		}

		return () => clearInterval(interval);
	}, [brushing]);

	if (!brushing) return null;

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
				top: "-152px",
				left: "50%",
				transform: `translateX(${rotatedX + 60}px) translateY(${rotatedY}px) translateX(-50%)`,
				zIndex: 30,
			}}
		>
			<img
				src="/brush.svg"
				style={{
					width: "300px",
					transform: `scaleX(${rotatedY / 200 + 0.6}) rotate(${rotatedX / 10 - 30}deg)`,
				}}
			/>
		</div>
	);
}
