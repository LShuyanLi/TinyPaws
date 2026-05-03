// Displays the back button and returns the user to the cat selection screen.

export default function BackButton() {
  return (
    <button
      style={{
        position: "absolute",
        top: "3vh",
        left: "2vw",
        backgroundColor: "#f97316",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        padding: "0.6rem 1rem",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      ‹ Back
    </button>
  );
}