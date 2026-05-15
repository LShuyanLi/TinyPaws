// CatDisplay.jsx: Displays the selected cat image on the play screen.

import { usePlay } from "@/components/Jessica/PlayProvider";
import { useMood } from "@/components/Jessica/MoodContext";

export default function CatDisplay({
  selectedCat,
  selectedBed,
  ballSpeed,
}) {
  const { activeActivity } = usePlay();
  const { mood } = useMood();
  const featherActive = activeActivity === "feather";

    // Find which cat the user selected
  let catNumber = "1";

  if (selectedCat === "/cat-2.svg") {
    catNumber = "2";
  } else if (selectedCat === "/cat-3.svg") {
    catNumber = "3";
  }

    const emotionSuffix = catNumber === "1"
  ? mood === "happy" ? "-happy"
  : mood === "upset" ? "-mad"
  : ""
  : "";


  // Normal selected cat image
  let catImage = catNumber === "1"
  ? `/cat-1${emotionSuffix}.svg`
  : (selectedCat || "/cat-1.svg");

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
    catImage = `/catreach-${catNumber}${emotionSuffix}.svg`;

    catStyle = {
      ...catStyle,
      width: "103%",
      height: "103%",
      left: "15px",
    };
  }

  // Ball action image
  else if (ballSpeed !== "stop") {
    catImage = `/catcrouch-${catNumber}${emotionSuffix}.svg`;

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