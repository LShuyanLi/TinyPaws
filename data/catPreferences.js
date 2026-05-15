// catPreferences.js
// Define each cat's preferences for activities and food types
// Values: -1 (dislike), 0 (neutral), 1 (like)

export const catPreferences = {
  fluffy: {
    name: "Fluffy",
    food: {
      wet: 0,      // neutral about wet food
      dry: -1,     // dislikes dry food (randomly assigned)
      none: 0,     // neutral when not eating
    },
    water: {
      drinking: 1, // loves fresh water
      idle: 0,     // neutral when not drinking
    },
    sleep: {
      sleeping: 0, // neutral about sleeping
      awake: 0,    // neutral when awake
    },
    play: {
      ball: -1,    // dislikes ball (opposite of feather)
      feather: 1,  // loves following a floating feather
      petting: 0,  // neutral about petting
      none: 0,     // neutral when not playing
    },
    brush: {
      brushing: 0, // neutral about brushing
      idle: 0,     // neutral when not brushing
    },
  },
  mittens: {
    name: "Mittens",
    food: {
      wet: -1,     // dislikes wet food (opposite of dry)
      dry: 1,      // loves crunchy dry food
      none: 0,
    },
    water: {
      drinking: 0, // neutral about water
      idle: 0,
    },
    sleep: {
      sleeping: 0,  // neutral about sleeping
      awake: 1,     // prefers being awake
    },
    play: {
      ball: 1,     // loves chasing a rolling ball
      feather: 0,  // neutral about feather
      petting: -1, // dislikes petting (opposite of ball, randomly assigned)
      none: 0,
    },
    brush: {
      brushing: -1, // dislikes brushing (randomly assigned)
      idle: 0,
    },
  },
  shadow: {
    name: "Shadow",
    food: {
      wet: 1,      // loves soft wet food
      dry: -1,     // dislikes dry food (opposite of wet)
      none: 0,
    },
    water: {
      drinking: 0, // neutral about water
      idle: 0,
    },
    sleep: {
      sleeping: 1,  // loves a quiet nap
      awake: 0,     // neutral when awake
    },
    play: {
      ball: 0,
      feather: -1, // dislikes feather (opposite of petting, randomly assigned)
      petting: 1,  // loves gentle hand play
      none: 0,
    },
    brush: {
      brushing: -1, // dislikes brushing (randomly assigned)
      idle: 0,
    },
  },
};

export function getCatPreferences(catId) {
  return catPreferences[catId] || catPreferences.fluffy;
}