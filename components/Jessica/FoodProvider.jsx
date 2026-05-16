import { useEffect, useState, createContext, useContext } from "react";

const FoodContext = createContext(null);

function FoodProvider({ children }) {
  const [foodType, setFoodType] = useState("none");
  const [foodLevel, setFoodLevel] = useState(0);

  useEffect(() => {
    if (foodType === "none") return;

    const timer = setInterval(() => {
      setFoodLevel((prev) => {
        const next = prev - 10;
        if (next <= 0) {
          setFoodType("none");
          return 0;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [foodType]);

  const selectWetFood = () => {
    setFoodType("wet");
    setFoodLevel(100);
  };

  const selectDryFood = () => {
    setFoodType("dry");
    setFoodLevel(100);
  };

  const resetFood = () => {
    setFoodType("none");
    setFoodLevel(0);
  };

  return (
    <FoodContext.Provider
      value={{
        foodType,
        foodLevel,
        selectWetFood,
        selectDryFood,
        resetFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

function useFood() {
  const context = useContext(FoodContext);
  if (!context) throw new Error("useFood must be used within a FoodProvider");
  return context;
}

export { FoodProvider, useFood };