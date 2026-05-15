import { createContext, useContext, useMemo } from "react";
import { useFood } from "@/components/Jessica/FoodProvider";
import { usePlay } from "@/components/Jessica/PlayProvider";
import { useWater } from "@/components/Jessica/WaterProvider";
import { useSleep } from "@/components/Jessica/SleepProvider";
import { useBrush } from "@/components/Jessica/BrushProvider";
import { getCatPreferences } from "@/data/catPreferences";

const MoodContext = createContext(null);

export function MoodProvider({ children, selectedCat }) {
  const { foodType } = useFood();
  const { activeActivity } = usePlay();
  const { isWatering } = useWater();
  const { isSleeping } = useSleep();
  const { brushing } = useBrush();

  const catPrefs = getCatPreferences(selectedCat);
  console.log("MoodProvider - foodType:", foodType, "selectedCat:", selectedCat, "catPrefs.food:", catPrefs.food);

  // Calculate happiness points from each activity
  const moodData = useMemo(() => {
    // Get happiness points for each activity
  const foodHappiness  = catPrefs.food[foodType ?? "none"]                  ?? 0;
  const waterHappiness = catPrefs.water[isWatering ? "drinking" : "idle"]   ?? 0;
  const sleepHappiness = catPrefs.sleep[isSleeping ? "sleeping" : "awake"]  ?? 0;
  const playHappiness  = catPrefs.play[activeActivity ?? "none"]             ?? 0;
  const brushHappiness = catPrefs.brush[brushing ? "brushing" : "idle"]     ?? 0;

  console.log("Happiness calculation - foodType:", foodType, "foodHappiness:", foodHappiness, "waterHappiness:", waterHappiness, "sleepHappiness:", sleepHappiness, "playHappiness:", playHappiness, "brushHappiness:", brushHappiness);
  console.log("catPrefs being used:", catPrefs.name, "| selectedCat prop:", selectedCat);
    // Add all happiness points together
    const happinessPoints =
      foodHappiness + waterHappiness + sleepHappiness + playHappiness + brushHappiness;
    console.log("Total happinessPoints:", happinessPoints);

    // Determine mood based on total happiness
    let mood = "neutral"; // Default mood
    if (happinessPoints > 0) mood = "happy"; // Positive points = happy
    if (happinessPoints < 0) mood = "upset"; // Negative points = upset

    return { happinessPoints, mood };
  }, [foodType, activeActivity, isWatering, isSleeping, brushing, catPrefs]);

  return (
    <MoodContext.Provider value={moodData}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) throw new Error("useMood must be used within a MoodProvider");
  return context;
}
