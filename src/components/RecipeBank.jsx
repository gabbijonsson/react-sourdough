import React, { useEffect, useState } from 'react';
import Menu from './MenuBar';
import ApiHandler from '../util/ApiHandler';
import './RecipeBank.css';
import {Link} from 'react-router-dom';

function RecipeBank() {

    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        let savedBreads = ApiHandler.getFinishedRecipes();
        setRecipeList(savedBreads);
      }, []);

    function createBreadList() {
        let breadsToDisplay = [];

        recipeList.forEach((bread) => {
            breadsToDisplay.push(
                <li key={bread.recipeid}>
                    <Link to={`/submit?breadid=${bread.recipeid}`}><h2>{bread.recipeid}</h2></Link>
                </li>
            );
        })

        return (
            <ul>
                {breadsToDisplay}
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