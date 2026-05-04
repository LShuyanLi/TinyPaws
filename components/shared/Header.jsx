// Displays the decorative top navigation area with the logo, nav menu, and icons.

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "12vh",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2vw",
        boxSizing: "border-box",
      }}
    >
      <img
        src="/Logo.svg"
        alt="TinyPaws logo"
        style={{
          width: "18vw",
          minWidth: "150px",
          maxWidth: "270px",
          height: "auto",
        }}
      />

      <nav
        style={{
          display: "flex",
          gap: "3vw",
          color: "#f97316",
          fontWeight: "700",
          fontSize: "1rem",
        }}
      >
        <span>Adopt</span>
        <span>Donation</span>
        <span>Volunteer</span>
        <span>Shop</span>
        <span>Event</span>
        <span>Our Story</span>
      </nav>

      <div
        style={{
          display: "flex",
          gap: "0.7rem",
        }}
      >
        <button style={iconButtonStyle}>
         <img src="/chart.svg" style={iconImageStyle} />
        </button>

        <button style={iconButtonStyle}>
          <img src="/bell.svg" style={iconImageStyle} />
        </button>

        <button style={iconButtonStyle}>
         <img src="/user.svg" style={iconImageStyle} />
        </button>
      </div>
    </header>
  );
}

const iconButtonStyle = {
  width: "2rem",
  height: "2rem",
  border: "2px solid #f97316",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  color: "#f97316",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const iconImageStyle = {
  width: "1.1rem",
  height: "1.1rem",
  objectFit: "contain",
  display: "block",
};