const updateRecipe = (id, rating, notes, finalized) => {
    let recipes = getRecipes();
    let recipeToUpdate = recipes.find((recipe) => recipe.recipeid === id);
    recipeToUpdate.rating = rating;
    recipeToUpdate.notes = notes;
    recipeToUpdate.finalized = finalized;
    setRecipes(recipes);
}

const deleteRecipe = (id) => {
    let savedRecipes = getRecipes();
    let others = savedRecipes.filter(recipe => recipe.recipeid !== id);
    setRecipes(others);
}

const saveRecipe = (id, ingredients) => {
    let newRecipe = {
        recipeid: id,
        ingredients: ingredients
    }

    let allRecipes = getRecipes();
    allRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(allRecipes));
}

const getNextId = () => {
    let allIds = getRecipes().map((recipe) => Number(recipe.recipeid));
    return allIds.length > 0 ? Math.max(...allIds)+1 : 1;
}

const deleteFlour = (flourToDelete) => {
    let savedFlours = getFlours();
    let others = savedFlours.filter(flour => flour.name !== flourToDelete.name);
    setFlours(others);
}

const addFlour = (newFlour) => {
    let savedFlours = getFlours();
    savedFlours.push(newFlour);
    setFlours(savedFlours);
}

const getFlours = () => {
    let savedFlours = localStorage.getItem("flours");
    return savedFlours ? JSON.parse(savedFlours) : [];
}

const setFlours = (flours) => {
    localStorage.setItem("flours", JSON.stringify(flours));
}

const getRecipe = (id) => {
    let recipes = getRecipes();
    let recipe = recipes.find((recipe) => recipe.recipeid === id)
    return recipe;
}

const getRecipes = () => {
    let savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
}

const setRecipes = (recipes) => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

const getUnfinishedRecipes = () => {
    let unfinishedRecipes = getRecipes().filter((recipe) => !recipe.finalized);
    return unfinishedRecipes;
}

const getFinishedRecipes = () => {
    let finishedRecipes = getRecipes().filter((recipe) => recipe.finalized);
    return finishedRecipes;
}

export default {
    updateRecipe,
    deleteRecipe,
    saveRecipe,
    getNextId,
    deleteFlour,
    addFlour,
    getFlours,
    getRecipe,
    getRecipes,
    getUnfinishedRecipes,
    getFinishedRecipes
}