import { useState, createContext, useContext } from "react";

const SleepContext = createContext(null);

function SleepProvider({ children }) {
  const [isSleeping, setIsSleeping] = useState(false);

  const toggleSleeping = () => setIsSleeping((prev) => !prev);
  const resetSleeping = () => setIsSleeping(false);

  return (
    <SleepContext.Provider value={{ isSleeping, toggleSleeping, resetSleeping }}>
      {children}
    </SleepContext.Provider>
  );
}

function useSleep() {
  const context = useContext(SleepContext);
  if (!context) throw new Error("useSleep must be used within a SleepProvider");
  return context;
}

export { SleepProvider, useSleep };
