
// Handles the rename pop-up and displays the updated cat name text.export default function BottomActionBar({

export default function NameTag({ name, setName, setActiveButton }) {
  return (
    <div style={dialogStyle}>
      <button
        style={closeButtonStyle}
        onClick={() => setActiveButton(null)}
      >
        ×
      </button>
      <p
        style={{
          margin: 0,
          marginBottom: "0.5rem",
          fontWeight: "700",
          fontSize: "1.5rem",
        }}
      >
        Give this cat a name!
      </p>
      <p
        style={{
          margin: 0,
          marginBottom: "2rem",
          fontSize: "1rem",
        }}
      >
        Choose a name for your cat before you continue.
      </p>

      <p>Name the cat:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter cat's name"
        style={{
          width: "100%",
          padding: "0.5rem",
          border: "2px solid #ccc",
          borderRadius: "0.5rem",
          color: "#111",
          fontSize: "1rem",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
}

const dialogStyle = {
  position: "absolute",
  left: "50%",
  bottom: "3.4rem",
  transform: "translateX(-50%)",
  width: "20vw",
  minWidth: "250px",
  maxWidth: "350px",
  zIndex: 40,
  backgroundColor: "#fff",
  color: "#e97800",
  border: "2px solid #e97800",
  borderTop: "2rem solid #e97800",
  borderRadius: "0.5rem",
  padding: "1rem",
  boxSizing: "border-box",
};

const closeButtonStyle = {
  position: "absolute",
  top: "-1.8rem",
  right: "0.5rem",
  background: "transparent",
  border: "none",
  fontSize: "1.2rem",
  cursor: "pointer",
  color: "#000",
  zIndex: 50,
};
