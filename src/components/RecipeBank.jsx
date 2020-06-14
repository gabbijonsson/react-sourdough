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
    
    return (
        <>
        <Menu />
        <div className="recipebank__container">
            {createBreadList()}
        </div>
        </>
    )
}

export default RecipeBank;