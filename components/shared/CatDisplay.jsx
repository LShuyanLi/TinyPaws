// CatDisplay.jsx: Displays the selected cat image on the play screen.

export default function CatDisplay() {
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