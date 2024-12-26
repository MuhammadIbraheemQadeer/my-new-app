//--Muhammad Ibraheem Qadeer Ahmed.
const recipe = {
    name: "Chocolate Cake",
    cookingTime: 45,
    difficulty: "Medium",
    mainIngredient: "Cocoa",
    servings: 8
  };
  
  const { name, cookingTime, difficulty, mainIngredient, servings } = recipe; 
  console.log(`${name} takes ${cookingTime} minutes to make and is ${difficulty} difficulty.`);

 //--Syed Owais Bin Najam.
  const instructions = {
    preheatingTemp: "350°F",
    panSize: "9 inch",
    mixingTime: "10 minutes",
    specialNotes: "Let cool completely"
  };
  
  const { preheatingTemp, panSize, mixingTime, specialNotes } = instructions;
  console.log(`Mix for ${mixingTime} and remember: ${specialNotes}`);
 
  
   console.log(`
    RECIPE: ${name} 
  ------------------------
  Difficulty: ${difficulty}
  Time Needed: ${cookingTime} minutes
  Serves: ${servings} people
  Main Ingredient: ${mainIngredient}
  ------------------------
  INSTRUCTIONS:
  1. Preheat oven to ${preheatingTemp}
  2. Use ${panSize} pan
  3. Mix for ${mixingTime}
  Note: ${specialNotes}`)
