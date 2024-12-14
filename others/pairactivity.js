
//--Muhammad Ibraheem Qadeer Ahmed.
const recipe = {
    name: "Chocolate Cake",
    cookingTime: 45,
    difficulty: "Medium",
    mainIngredient: "Cocoa",
    servings: 8
  };
  
  const showRecipeInfo = ({ name, cookingTime, difficulty }) => {
    return `${name} takes ${cookingTime} minutes to make and is ${difficulty} difficulty`;
  };

 //--Syed Owais Bin Najam.
  const instructions = {
    preheatingTemp: "350°F",
    panSize: "9 inch",
    mixingTime: "10 minutes",
    specialNotes: "Let cool completely"
  };
  
  const getPreparationNotes = ({ mixingTime, specialNotes }) => {
    return `Mix for ${mixingTime} and remember: ${specialNotes}`;
  };
 
  
  const createRecipeCard = (recipe, instructions) => {
    
    return `
   RECIPE: ${recipe.name} 
  ------------------------
  Difficulty: ${recipe.difficulty}
  Time Needed: ${recipe.cookingTime} minutes
  Serves: ${recipe.servings} people
  Main Ingredient: ${recipe.mainIngredient}
  ------------------------
  INSTRUCTIONS:
  1. Preheat oven to ${instructions.preheatingTemp}
  2. Use ${instructions.panSize} pan
  3. Mix for ${instructions.mixingTime}
  Note: ${instructions.specialNotes}
    `;
  };
  console.log(createRecipeCard(recipe, instructions));