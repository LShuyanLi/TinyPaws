// PlayScreen.jsx: Builds the main cat play screen with the background, cat area, feeding area, tools, bed, and bottom buttons.

import BackButton from "@/components/shuyan/BackButton";
import BottomActionBar from "@/components/shuyan/BottomActionBar";
import CatDisplay from "@/components/shared/CatDisplay";
import FoodBowl from "@/components/Jinwon/FoodBowl";
import WaterBottle from "@/components/Jinwon/WaterBottle";
import CatEmotion from "@/components/Jessica/CatEmotion";

export default function PlayScreen({ goToChoose }) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "88vh",
        backgroundColor: "#ffd6b3",
        overflow: "hidden",
      }}
    >
      <BackButton goToChoose={goToChoose}/>

      <h1
        style={{
          margin: 0,
          paddingTop: "5vh",
          textAlign: "center",
          color: "#f97316",
          fontSize: "clamp(2rem, 4vw, 3.3rem)",
          fontWeight: "700",
          letterSpacing: "0.03em",
          position: "relative",
          zIndex: 5,
        }}
      >
        Take care of CatName
      </h1>

      {/* Light orange ground */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: "8vh",
          width: "100%",
          height: "10vh",
          backgroundColor: "#ffc083",
          zIndex: 1,
        }}
      />

      {/* Main play area */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "10vh",
          transform: "translateX(-50%)",
          width: "75vw",
          height: "50vh",
          zIndex: 5,
        }}
      >
        <CatEmotion />
        <FoodBowl />
        <CatDisplay />
        <WaterBottle />
      </div>

      <BottomActionBar />
    </section>
  );
}