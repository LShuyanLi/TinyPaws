// FoodBowl.jsx: Displays the bowl and shows dry or wet food when the bowl is clicked.
export default function FoodBowl({ bowlType, percent = 0 }) {
  const isBowlFilled = (bowlType === "dry" || bowlType === "wet") && percent > 0;
  const fillImage = bowlType === "wet" ? "/wetfood.svg" : "/dryfood.svg";
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
      {isBowlFilled && (
        <img
          src={fillImage}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "22px",
            transform: "translateX(-50%)",
            width: "50%",
            height: "auto",
          }}
        />
      )}
      <p
        style={{
          margin: "-1.2rem 0 0",
          color: "#111111",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        {isBowlFilled ? percent + "%" : "0%"}
      </p>
    </div>
  );
}