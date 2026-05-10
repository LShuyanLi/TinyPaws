// CatDisplay.jsx: Displays the selected cat image on the play screen.

export default function CatDisplay({ selectedBed }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "0",
        transform: "translateX(-50%)",
        zIndex: 10,
      }}
    >
      {selectedBed === "yellow" && (
        <img
          src="/yellow-bed.svg"
          style={{
            position: "absolute",
            bottom: "-90px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "20vw",
            minWidth: "200px",
            zIndex: 0,
          }}
        />
      )}

      {selectedBed === "green" && (
        <img
          src="/green-bed.svg"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "20vw",
            minWidth: "200px",
            zIndex: 0,
          }}
        />
      )}
      <img
        src="/cat-1.svg"
        style={{
          position: "relative",
          width: "18vw",
          minWidth: "180px",
          maxWidth: "280px",
          height: "auto",
          display: "block",
          zIndex: 5,
        }}
      />
    </div>
  );
}