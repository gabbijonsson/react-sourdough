import React from 'react';
import Menu from './MenuBar';

function IngredientList() {
    return (
        <>
            <Menu/>
            <div className="ingredientlist__wrapper">
                <p>I'm a little ingredient</p>
            </div>
        </>
    )
}

export default IngredientList;