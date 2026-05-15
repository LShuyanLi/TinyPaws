import { useState, createContext, useContext } from "react";

const WaterContext = createContext(null);

function WaterProvider({ children }) {
  const [waterLevel, setWaterLevel] = useState(0); // 0, 25, 50, 100

  const toggleWatering = () => {
    setWaterLevel((prev) => {
      if (prev === 0) return 25;
      if (prev === 25) return 50;
      if (prev === 50) return 100;
      return 0;
    });
  };

  const resetWatering = () => setWaterLevel(0);

  return (
    <WaterContext.Provider value={{ waterLevel, setWaterLevel, toggleWatering, resetWatering }}>
      {children}
    </WaterContext.Provider>
  );
}

function useWater() {
  const context = useContext(WaterContext);
  if (!context) throw new Error("useWater must be used within a WaterProvider");
  return context;
}

export { WaterProvider, useWater };
