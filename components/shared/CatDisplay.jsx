// CatDisplay.jsx: Displays the selected cat image on the play screen.

import { usePlay } from "@/components/Jessica/PlayProvider";

export default function CatDisplay({
  selectedCat,
  selectedBed,
  ballSpeed,
}) {
  const { activeActivity } = usePlay();
  const featherActive = activeActivity === "feather";

  // Normal selected cat image
  let catImage = selectedCat || "/cat-1.svg";

  // Find which cat the user selected
  let catNumber = "1";

  if (selectedCat === "/cat-2.svg") {
    catNumber = "2";
  } else if (selectedCat === "/cat-3.svg") {
    catNumber = "3";
  }

  let catStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    bottom: "0px",
    left: "0px",
  };

  // Feather action image
  if (featherActive) {
    catImage = `/catreach-${catNumber}.svg`;

    catStyle = {
      ...catStyle,
      width: "103%",
      height: "103%",
      left: "15px",
    };
  }

  // Ball action image
  else if (ballSpeed !== "stop") {
    catImage = `/catcrouch-${catNumber}.svg`;

    catStyle = {
      ...catStyle,
      width: "118%",
      height: "118%",
      left: "-25px",
    };
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
          width: "425px",
          height: "425px",
          position: "relative",
        }}
      >
        <img src={catImage} style={catStyle} />
      </div>
    </div>
  );
}