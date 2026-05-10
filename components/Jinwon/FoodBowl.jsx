// FoodBowl.jsx: Displays the bowl and shows dry or wet food when the bowl is clicked.

export default function FoodBowl() {
    // const {setEmotion} = useCatContext();
  return (
    <div
      style={{
        position: "absolute",
        left: "8%",
        bottom: "0",
        zIndex: 10,
        textAlign: "center",
      }}
    >
      <img
        src="/bowl.svg"
        style={{
          width: "12vw",
          minWidth: "120px",
          maxWidth: "190px",
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