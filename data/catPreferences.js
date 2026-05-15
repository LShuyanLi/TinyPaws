// Define each cat's preferences for activities and food types
// -10 (dislike), 0 (neutral), 10 (like)

export const catPreferences = {
  fluffy: {
    name: "Fluffy", // id name
    food: {
      wet: 0,      
      dry: -10,     
      none: 0,     
    },
    water: {
      drinking: 10, 
      idle: 0,     
    },
    sleep: {
      sleeping: 0, 
      awake: 0,    
    },
    play: {
      ball: -10,    
      feather: 10,  
      petting: 0,  
      none: 0,     
    },
    brush: {
      brushing: 0, 
      idle: 0,     
    },
  },
  mittens: {
    name: "Mittens", //id name
    food: {
      wet: -10,    
      dry: 10,     
      none: 0,
    },
    water: {
      drinking: 10, 
      idle: 0,
    },
    sleep: {
      sleeping: 0,  
      awake: 0,     
    },
    play: {
      ball: 10,     
      feather: 0,  
      petting: -10, 
      none: 0,
    },
    brush: {
      brushing: -10, 
      idle: 0,
    },
  },
  shadow: {
    name: "Shadow", //id name
    food: {
      wet: 10,      
      dry: -10,     
      none: 0,
    },
    water: {
      drinking: 0, 
      idle: 0,
    },
    sleep: {
      sleeping: 10,  
      awake: 0,     
    },
    play: {
      ball: 0,
      feather: -10, 
      petting: 10,  
      none: 0,
    },
    brush: {
      brushing: -10, 
      idle: 0,
    },
  },
};

export function getCatPreferences(catId) {
  return catPreferences[catId] || catPreferences.fluffy;
}