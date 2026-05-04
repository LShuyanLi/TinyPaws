"use client";

import { useState } from "react";

import Header from "@/components/shared/Header";
import ChooseScreen from "@/components/shuyan/ChooseScreen";
import PlayScreen from "@/components/shuyan/PlayScreen";



export default function Home() {
  const [screen, setScreen] = useState("choose");

  function goToChoose() {
    setScreen("choose");
  }
function goToPlay() {
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
        <ChooseScreen goToPlay={() => setScreen("play")} />
      )}

      {screen === "play" && (
        <PlayScreen goToChoose={() => setScreen("choose")} />
      )}
    </main>
  );
}