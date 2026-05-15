// PlayScreen.jsx: Builds the main cat play screen with the background, cat area, feeding area, tools, bed, and bottom buttons.

"use client";

import { useState } from "react";
import { SleepProvider } from "@/components/Jessica/SleepProvider";
import { FoodProvider } from "@/components/Jessica/FoodProvider";
import { PlayProvider } from "@/components/Jessica/PlayProvider";
import { WaterProvider } from "@/components/Jessica/WaterProvider";
import { BrushProvider } from "@/components/Jessica/BrushProvider";
import { MoodProvider } from "@/components/Jessica/MoodContext";
import { usePlay } from "@/components/Jessica/PlayProvider";
import BackButton from "@/components/shuyan/BackButton";
import BottomActionBar from "@/components/shuyan/BottomActionBar";
import CatDisplay from "@/components/shared/CatDisplay";
import FoodBowl from "@/components/Jinwon/FoodBowl";
import WaterBottle from "@/components/Jinwon/WaterBottle";
import CatEmotion from "@/components/Jessica/CatEmotion";
import PlayBall from "@/components/Jonah/PlayBall";
import Feather from "@/components/Jonah/Feather";
import MovingHand from "@/components/Elina/MovingHand";
import BrushTool from "@/components/Elina/BrushTool";

function PlayScreenContent({ goToChoose, selectedCat, name, setName, selectedBed, setSelectedBed, activeButton, setActiveButton }) {
  const { ballSpeed, setBallSpeed } = usePlay();

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
        Take care of {name}
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
        <FoodBowl />

        <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
          <CatDisplay
            selectedCat={selectedCat}
            selectedBed={selectedBed}
            ballSpeed={ballSpeed}
          />
        </div>

        <div style={{ position: "absolute", inset: 0, zIndex: 11 }}>
          <PlayBall ballSpeed={ballSpeed} />
        </div>

        <WaterBottle />
        <Feather />
        <MovingHand />
        <BrushTool />
      </div>

      <BottomActionBar
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        name={name}
        setName={setName}
        setSelectedBed={setSelectedBed}
        ballSpeed={ballSpeed}
        setBallSpeed={setBallSpeed}
      />
    </section>
  );
}

export default function PlayScreen({ goToChoose, selectedCat }) {
  const [name, setName] = useState('Kitty');
  const [selectedBed, setSelectedBed] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  return (
    <SleepProvider>
      <FoodProvider>
        <PlayProvider>
          <WaterProvider>
            <BrushProvider>
              <MoodProvider selectedCat={selectedCat}>
                <PlayScreenContent
                  goToChoose={goToChoose}
                  selectedCat={selectedCat}
                  name={name}
                  setName={setName}
                  selectedBed={selectedBed}
                  setSelectedBed={setSelectedBed}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                />
              </MoodProvider>
            </BrushProvider>
          </WaterProvider>
        </PlayProvider>
      </FoodProvider>
    </SleepProvider>
  );
}