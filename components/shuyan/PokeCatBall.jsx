// Displays one selectable pokeCAT ball and shows its cat preview on hover.
export default function PokeCatBall({ image, goToPlay }) {
  return (
    <div
        onClick={goToPlay}
        style={{
            width: "24vw",
            maxWidth: "380px",
            minWidth: "230px",
            height: "48vh",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            cursor: "pointer"
        }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}