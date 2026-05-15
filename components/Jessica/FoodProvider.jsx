import { useState, createContext, useContext } from "react";

const FoodContext = createContext(null);

function FoodProvider({ children }) {
  const [foodType, setFoodType] = useState("none"); // "wet", "dry", or "none"

  const toggleFoodType = (type) => {
    setFoodType(prev => prev === type ? "none" : type);
  };

  const selectWetFood = () => {
    toggleFoodType("wet");
  };
  const selectDryFood = () => toggleFoodType("dry");
  const resetFood = () => setFoodType("none");

  return (
    <FoodContext.Provider
      value={{
        foodType,
        setFoodType,
        toggleFoodType,
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