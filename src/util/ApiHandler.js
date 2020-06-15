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

const getRecipes = () => {
    let savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
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
    getNextId,
    deleteFlour,
    addFlour,
    getFlours,
    getRecipes,
    getUnfinishedRecipes,
    getFinishedRecipes
}