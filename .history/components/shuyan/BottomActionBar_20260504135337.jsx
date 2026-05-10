"use client";

// BottomActionBar.jsx: Displays the bottom interaction buttons and shows each hover bubble.

import { useState } from "react";

export default function BottomActionBar( {
  activeButton,
  setActiveButton,
  setSelectedBed //these three are for the bed feature
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "8vh",
        backgroundColor: "#e97800",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 4vw",
        boxSizing: "border-box",
        zIndex: 20,
      }}
    >
      {/* Name button - Elina can connect this to NameTag modal later */}
      <div style={{ position: "relative" }}>
        <button style={buttonStyle}>Give a Name Tag</button>
      </div>

      {/* Feed button - Jinwon */}
      <div
        onMouseEnter={() => setActiveButton("feed")}
        onMouseLeave={() => setActiveButton(null)}
        style={{ position: "relative" }}
      >
        {activeButton === "feed" && (
          <div style={bubbleStyle}>
            <img src="/bubble-3.svg" style={bubbleBackgroundStyle} />

            {/* dry food option - Jinwon can add onClick here */}
            <img
              src="/dryfood.svg"
              style={{
                position: "absolute",
                top: "8%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "45%",
                height: "auto",
                cursor: "pointer",
              }}
            />

            {/* wet food option - Jinwon can add onClick here */}
            <img
              src="/wetfood.svg"
              style={{
                position: "absolute",
                top: "34%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "45%",
                height: "auto",
                cursor: "pointer",
              }}
            />

            {/* water option - Jinwon can add onClick here */}
            <img
              src="/water.svg"
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "38%",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </div>
        )}

        <button style={buttonStyle}>Fill the Bowl</button>
      </div>

      {/* Play button - Jonah handles ball/feather, Elina handles hand */}
      <div
        onMouseEnter={() => setActiveButton("play")}
        onMouseLeave={() => setActiveButton(null)}
        style={{ position: "relative" }}
      >
        {activeButton === "play" && (
          <div style={bubbleStyle}>
            <img src="/bubble-3.svg" style={bubbleBackgroundStyle} />

            {/* ball option - Jonah can add onClick here */}
            <img
              src="/ball.svg"
              style={{
                position: "absolute",
                top: "8%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "42%",
                height: "auto",
                cursor: "pointer",
              }}
            />

            {/* feather option - Jonah can add onClick here */}
            <img
              src="/feather.svg"
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "55%",
                height: "auto",
                cursor: "pointer",
              }}
            />

            {/* hand option - Elina can add onClick here */}
            <img
              src="/hand.svg"
              style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "42%",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </div>
        )}

        <button style={buttonStyle}>Play Together</button>
      </div>

      {/* Brush button - Elina */}
      <div
        onMouseEnter={() => setActiveButton("brush")}
        onMouseLeave={() => setActiveButton(null)}
        style={{ position: "relative" }}
      >
        {activeButton === "brush" && (
          <div style={bubbleStyle}>
            <img src="/bubble-1.svg" style={bubbleBackgroundStyle} />

            {/* brush option - Elina can add onClick here */}
            <img
              src="/brush.svg"
              style={{
                position: "absolute",
                top: "22%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "55%",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </div>
        )}

        <button style={buttonStyle}>Brush the Fur</button>
      </div>

      {/* Bed button - Jonah */}
      <div
        style={{ position: "relative" }}
      >
        {activeButton === "bed" && (
          <div style={bubbleStyle}>
            <img src="/bubble-2.svg" style={bubbleBackgroundStyle} />

            {/* yellow bed option - Jonah can add onClick here */}
            <img
              src="/bed-1.svg"
              onClick={() => {
                setSelectedBed(prev =>
                  prev === "yellow" ? null : "yellow"
                );
              }}
              style={{
                position: "absolute",
                top: "12%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "55%",
                height: "auto",
                cursor: "pointer",
              }}
            />

            {/* green bed option - Jonah can add onClick here */}
            <img
              src="/bed-2.png"
              onClick={() => {
                setSelectedBed(prev =>
                  prev === "green" ? null : "green"
                );
              }}
              style={{
                position: "absolute",
                top: "48%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "55%",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </div>
        )}

        <button 
          style={buttonStyle}
          onClick={() =>
            setActiveButton(activeButton === "bed" ? null : "bed")
          }
        >Set Up Bed</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "13vw",
  minWidth: "150px",
  maxWidth: "200px",
  height: "2.4rem",
  border: "none",
  borderRadius: "12px",
  backgroundColor: "#ffe18a",
  color: "#111111",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
};

const bubbleStyle = {
  position: "absolute",
  left: "50%",
  bottom: "3.4rem",
  transform: "translateX(-50%)",
  width: "7vw",
  minWidth: "95px",
  maxWidth: "140px",
  zIndex: 40,
};

const bubbleBackgroundStyle = {
  width: "100%",
  height: "auto",
  display: "block",
};