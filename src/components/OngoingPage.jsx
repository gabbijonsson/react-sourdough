import React, { useEffect, useState } from "react";
import Menu from "./MenuBar";
import { Link } from "react-router-dom";
import "./OngoingPage.css";
import ApiHandler from "../util/ApiHandler"

function OngoingPage() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    let savedBreads = ApiHandler.getUnfinishedRecipes();
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
        <li className="ongoingpage__recipe-row" key={recipe.recipeid}>
          <Link to={`/submit?recipeid=${recipe.recipeid}`}><h2>{recipe.recipeid}</h2></Link>
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

  function determinContent() {
    if (recipeList !== undefined && recipeList.length >= 0) {
      return createBreadList();
    } else {
      console.log(recipeList)
      return (
        <>
          <p>Ooops...! Seems like you don't have any started doughs.</p>
          <Link to="/new" className="ongoingpage__link">
            <button className="ongoingpage__createbtn squarebutton">
              Create Bread
            </button>
          </Link>
        </>
      );
    }
  }

  return (
    <>
      <Menu />
      <div className="ongoingpage__container">
        <h1>Ongoing recipes</h1>
        {determinContent()}
      </div>
    </>
  );
}

export default OngoingPage;
