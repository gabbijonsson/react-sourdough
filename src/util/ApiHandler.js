const getRecipes = () => {
    let savedBreads = localStorage.getItem("recipes");
    return savedBreads ? JSON.parse(savedBreads) : [];
}

const getUnfinishedRecipes = () => {
    let unfinishedBreads = getRecipes().filter((bread) => !bread.finalized);
    return unfinishedBreads;
}

const getFinishedRecipes = () => {
    let finishedBreads = getRecipes().filter((bread) => bread.finalized);
    return finishedBreads;
}

export default {
    getRecipes,
    getUnfinishedRecipes,
    getFinishedRecipes
}