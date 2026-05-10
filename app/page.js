"use client";

import { useState } from "react";

import Header from "@/components/shared/Header";
import ChooseScreen from "@/components/shuyan/ChooseScreen";
import PlayScreen from "@/components/shuyan/PlayScreen";



export default function Home() {
  const [screen, setScreen] = useState("choose");
  const [selectedCat, setSelectedCat] = useState(null);

  function goToChoose() {
    setScreen("choose");
  }

  function goToPlay(catImage) {
    setSelectedCat(catImage);
    setScreen("play");
  }

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        overflow: "hidden",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#ffd6b3",
      }}
    >
      <Header />

      {screen === "choose" && (
        <ChooseScreen goToPlay={goToPlay} />
      )}

      {screen === "play" && (
        <PlayScreen 
        goToChoose={goToChoose} 
        selectedCat={selectedCat} />
      )}
    </main>
  );
}