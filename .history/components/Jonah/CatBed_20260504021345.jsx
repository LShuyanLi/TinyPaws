// Displays the selected bed under the cat and handles bed color changes.
export default function CatBed({
  activeButton,
  setActiveButton,
  selectedBed,
  setSelectedBed
}) {
  return (
    <div style={{ position: "relative" }}>
      
      {activeButton === "bed" && (
        <div style={bubbleStyle}>
          <img src="/bubble-2.svg" style={bubbleBackgroundStyle} />

          <img
            src="/bed-1.svg"
            onClick={() => setSelectedBed("yellow")}
            style={{
              position: "absolute",
              top: "12%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "55%",
              cursor: "pointer"
            }}
          />

          <img
            src="/bed-2.png"
            onClick={() => setSelectedBed("green")}
            style={{
              position: "absolute",
              top: "48%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "55%",
              cursor: "pointer"
            }}
          />
        </div>
      )}
    </div>
    )
}