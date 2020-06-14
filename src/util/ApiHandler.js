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
    deleteFlour,
    addFlour,
    getFlours,
    getRecipes,
    getUnfinishedRecipes,
    getFinishedRecipes
}