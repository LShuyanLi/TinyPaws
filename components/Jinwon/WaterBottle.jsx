// WaterBottle.jsx: Displays the water bottle and shows water level when the bottle is clicked.

export default function WaterBottle() {
  return (
    <div
      style={{
        position: "absolute",
        right: "8%",
        bottom: "0",
        zIndex: 10,
        textAlign: "center",
      }}
    >
      <img
        src="/water-bottle.svg"
        style={{
          width: "7vw",
          minWidth: "80px",
          maxWidth: "130px",
          height: "auto",
          display: "block",
        }}
      />

      <p
        style={{
          margin: "-1.2rem 0 0",
          color: "#111111",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        0%
      </p>
    </div>
  );
}