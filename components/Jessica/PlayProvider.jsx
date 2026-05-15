import { useState, createContext, useContext } from "react";

const PlayContext = createContext(null);

function PlayProvider({ children }) {
  const [activeActivity, setActiveActivity] = useState("none");
  const [ballSpeed, setBallSpeed] = useState("stop");

  const toggleActivity = (activity) => {
    if (activeActivity === activity) {
      setActiveActivity("none");
    } else {
      setActiveActivity(activity);
    }
  };

  const playBall = (speed = "slow") => {
    setBallSpeed(speed);
    setActiveActivity("ball");
  };

  const playFeather = () => toggleActivity("feather");
  const petCat = () => toggleActivity("petting");

  const stopActivity = () => {
    setBallSpeed("stop");
    setActiveActivity("none");
  };

  const isBallInPlay = activeActivity === "ball" && ballSpeed !== "stop";

  return (
    <PlayContext.Provider
      value={{
        activeActivity,
        setActiveActivity,
        toggleActivity,
        ballSpeed,      
        setBallSpeed,   
        isBallInPlay,   
        playBall,
        playFeather,
        petCat,
        stopActivity,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
}

function usePlay() {
  const context = useContext(PlayContext);
  if (!context) throw new Error("usePlay must be used within a PlayProvider");
  return context;
}

export { PlayProvider, usePlay };