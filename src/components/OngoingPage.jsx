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

  function createBreadList() {
    let breadsToDisplay = [];

    recipeList.forEach((bread) => {
      breadsToDisplay.push(
        <li key={bread.breadid}>
          <Link to={`/submit?breadid=${bread.breadid}`}><h2>{bread.breadid}</h2></Link>
        </li>
      );
    })

    return (
        <ul>
          {breadsToDisplay}
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
        <h1>Select bread</h1>
        {determinContent()}
      </div>
    </>
  );
}

export default OngoingPage;
