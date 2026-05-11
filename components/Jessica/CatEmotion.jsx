// CatEmotion.jsx: Displays the cat’s emotion emoji and thought bubble based on interaction results.

export default function CatEmotion() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "55vh",
        transform: "translateX(-50%)",
        zIndex: 30,
      }}
    >
      {/* Thought bubble box */}
      <div
        style={{
          position: "relative",
          width: "200px",
          minHeight: "70px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1.5rem",
          boxSizing: "border-box",
          color: "#111111",
          fontSize: "1.8rem",
          fontWeight: "400",
        }}
      >
        happy
      </div>

      {/* Small bubble dots */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          bottom: "-22px",
          width: "18px",
          height: "18px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "38px",
          bottom: "-38px",
          width: "13px",
          height: "13px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}