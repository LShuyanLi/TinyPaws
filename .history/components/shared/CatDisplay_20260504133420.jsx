// CatDisplay.jsx: Displays the selected cat image on the play screen.

export default function CatDisplay({ selectedBed }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "0",
        transform: "translateX(-50%)",
        zIndex: 9,
      }}
    >
      {selectedBed === "yellow" && (
        <img
          src="/bed-1.svg"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "20vw",
            minWidth: "200px",
            zIndex: 5,
          }}
        />
      )}

      {selectedBed === "green" && (
        <img
          src="/bed-2.png"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "20vw",
            minWidth: "200px",
            zIndex: 5,
          }}
        />
      )}
      <img
        src="/cat-1.svg"
        style={{
          width: "18vw",
          minWidth: "180px",
          maxWidth: "280px",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}