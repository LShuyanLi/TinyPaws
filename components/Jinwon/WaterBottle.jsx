// WaterBottle.jsx: Displays the water bottle and shows water level when water is selected.

export default function WaterBottle({ waterLevel }) {
  let waterImage = null;

  if (waterLevel === 25) {
    waterImage = "/25.svg";
  } else if (waterLevel === 50) {
    waterImage = "/50.svg";
  } else if (waterLevel === 100) {
    waterImage = "/100.svg";
  }

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

      {waterImage && (
        <img
          src={waterImage}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "0",
            transform: "translateX(-50%)",
            width: "100%",
            height: "auto",
            pointerEvents: "none",
          }}
        />
      )}

      <p
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18px",
          transform: "translateX(-50%)",
          margin: 0,
          color: "#111111",
          fontSize: "1rem",
          fontWeight: "700",
          zIndex: 20,
        }}
      >
        {waterLevel}%
      </p>
    </div>
  );
}