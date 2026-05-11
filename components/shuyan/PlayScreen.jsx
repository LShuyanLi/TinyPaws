// PlayScreen.jsx: Builds the main cat play screen with the background, cat area, feeding area, tools, bed, and bottom buttons.

"use client";

import { useState } from "react";

import BackButton from "@/components/shuyan/BackButton";
import BottomActionBar from "@/components/shuyan/BottomActionBar";
import CatDisplay from "@/components/shared/CatDisplay";
import FoodBowl from "@/components/Jinwon/FoodBowl";
import WaterBottle from "@/components/Jinwon/WaterBottle";
import CatEmotion from "@/components/Jessica/CatEmotion";
import PlayBall from "@/components/Jonah/PlayBall";
import Feather from "@/components/Jonah/Feather";

export default function PlayScreen({ goToChoose, selectedCat }) {
  const [selectedBed, setSelectedBed] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [ballSpeed, setBallSpeed] = useState("stop");
  const [featherActive, setFeatherActive] = useState(false);
  const [waterLevel, setWaterLevel] = useState(0);

  // Food / water selection from BottomActionBar
  const [bowlType, setBowlType] = useState(null);

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
      <BackButton goToChoose={goToChoose} />

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
        <FoodBowl bowlType={bowlType} />

        <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          <CatDisplay
            selectedCat={selectedCat}
            selectedBed={selectedBed}
            ballSpeed={ballSpeed}
            featherActive={featherActive}
          />
        </div>

        <div style={{ position: "absolute", inset: 0, zIndex: 11 }}>
          <PlayBall ballSpeed={ballSpeed} />
        </div>

        <WaterBottle waterLevel={waterLevel} />
        <Feather featherActive={featherActive} />
      </div>

      <BottomActionBar
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setSelectedBed={setSelectedBed}
        ballSpeed={ballSpeed}
        setBallSpeed={setBallSpeed}
        featherActive={featherActive}
        setFeatherActive={setFeatherActive}
        setBowlType={setBowlType}
        setWaterLevel={setWaterLevel}
      />
    </section>
  );
}