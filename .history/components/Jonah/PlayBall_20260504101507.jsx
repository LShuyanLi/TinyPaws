// Displays the toy ball and controls its left-to-right movement, 2speed（slow，fast）, and stop action.

export default function PlayBall({ ballSpeed }) {
  if (ballSpeed === "stop") return null;

  const duration = ballSpeed === "slow" ? "4s" : "1.5s";

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: 0,
        width: "100%",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "50px",
          animation: `moveBall ${duration} linear infinite`,
        }}
      >
        <img src="/ball.svg" style={{ width: "100%" }} />
      </div>

      <style>
        {`
          @keyframes moveBall {
            0% { transform: translateX(0); }
            50% { transform: translateX(calc(100vw - 60px)); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}