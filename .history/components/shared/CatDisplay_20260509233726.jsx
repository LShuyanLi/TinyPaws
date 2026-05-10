// CatDisplay.jsx: Displays the selected cat image on the play screen.

export default function CatDisplay({ 
  selectedBed,
  ballSpeed,
  featherActive,
}) {
  let catImage = "/cat-1.svg";

  let catStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    bottom: "0px",
  };

  if (featherActive) {
    catImage = "/catreach-1.svg";

    catStyle = {
      ...catStyle,
      width: "300%",
    }

  } else if (ballSpeed !== "stop") {
    catImage = "/catcrouch-1.svg";
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "0",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      {selectedBed === "yellow" && (
        <img
          src="/yellow-bed.svg"
          style={{
            position: "absolute",
            bottom: "-130px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "30vw",
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
            bottom: "-130px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "30vw",
            minWidth: "200px",
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          width: "825px",
          height: "825px",
          position: "relative",
        }}
      >
        <img
          src={catImage}
          style={catStyle}
        />
      </div>
    </div>
  );
}