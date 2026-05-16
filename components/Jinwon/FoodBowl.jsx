// FoodBowl.jsx: Displays the bowl and shows dry or wet food when the bowl is filled.

import { useFood } from "@/components/Jessica/FoodProvider";

export default function FoodBowl() {
  const { foodType } = useFood();
  const isBowlFilled = foodType === "dry" || foodType === "wet";

  let foodImage = "";

  if (foodType === "dry") {
    foodImage = "/dryfood-full.svg";
  } else if (foodType === "wet") {
    foodImage = "/wetfood-full.svg";
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "8%",
        bottom: "0",
        zIndex: 10,
        textAlign: "center",
        width: "12vw",
        minWidth: "120px",
        maxWidth: "190px",
      }}
    >
      {/* bowl base */}
      <img
        src="/bowl.svg"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          position: "relative",
          zIndex: 1,
        }}
      />

      {/* food image on top of bowl */}
      {isBowlFilled && (
        <img
          src={foodImage}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "30px",
            transform: "translateX(-50%)",
            width: "82%",
            height: "auto",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      )}
      <p
        style={{
          position: "absolute",
          left: "50%",
          bottom: "6px",
          transform: "translateX(-50%)",
          margin: 0,
          color: "#111111",
          fontSize: "1rem",
          fontWeight: "700",
          zIndex: 3,
        }}
      >
        {isBowlFilled ? "100%" : "0%"}
      </p>
    </div>
  );
}