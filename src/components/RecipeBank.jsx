import React, { useEffect, useState } from 'react';
import Menu from './MenuBar';
import ApiHandler from '../util/ApiHandler';
import './RecipeBank.css';

function RecipeBank() {

    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        let savedBreads = ApiHandler.getFinishedRecipes();
        setRecipeList(savedBreads);
      }, []);

    function deleteRecipe(recipeId) {
    ApiHandler.deleteRecipe(Number(recipeId));
    setRecipeList(recipeList.filter((recipe) => recipe.recipeid !== recipeId))
    }

    function createBreadList() {
        let recipesToDisplay = [];

        recipeList.forEach((recipe) => {
            recipesToDisplay.push(
                <li key={recipe.recipeid}>
                    <h2>{recipe.recipeid}</h2>
                    <button className="newbread__one-ingredient-row__deletebtn" onClick={() => deleteRecipe(recipe.recipeid)}>X</button>
                </li>
            );
        })

        return (
            <ul>
                {recipesToDisplay}
            </ul>
        )
    }
    
    return (
        <>
        <Menu />
        <div className="recipebank__container">
            <h1>Recipebank</h1>
            {createBreadList()}
        </div>
        </>
    )
}

export default RecipeBank;