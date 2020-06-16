import React from "react";
import Menu from "./MenuBar";
import { useHistory } from 'react-router-dom';
import "./NewBread.css";
import ApiHandler from "../util/ApiHandler";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function NewBread() {

  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const [id, setId] = useState(1);
  const [hydrationChanged, updateHydration] = useState(false);
  const [ingredients, setIngredients] = useState([])

  useEffect(() => { 
    setId(ApiHandler.getNextId());
  }, []);  

  function displayFlours() {
    let flours = ApiHandler.getFlours();
    return flours.map((flour) => <option key={flours.indexOf(flour)} value={'flour_'+flour.name}>{flour.name}</option>)
  }

  const onSubmit = (ingredientToAdd, e) => {
    let ingredientParts = ingredientToAdd.ingredient.split('_');

    let newIngredient = {name: ingredientParts[1], type: ingredientParts[0]};

    setIngredients([...ingredients].concat([newIngredient]));

  };

  function handleIngredientChange(ingredient, event) {
    ingredient.amount = Number(event.target.value ? event.target.value : 0);
    updateHydration(!hydrationChanged)
  }

  function deleteIngredient(ingredientToDelete) {
    let remainingIngredients = ingredients.filter((ingredient) => ingredient !== ingredientToDelete);
    setIngredients(remainingIngredients)
  }

  function displayIngredient(ingredient) {
    return (
      <li className="newbread__one-ingredient-row" key={ingredient.name}>
        <button className="newbread__one-ingredient-row__deletebtn" onClick={() => deleteIngredient(ingredient)}>X</button>
        <p>{ingredient.name}</p>
        <input className="newbread__one-ingredient-row__grams" ingredienttype={ingredient.type} type="number" onChange={(event) => handleIngredientChange(ingredient, event)}></input>
      </li>
    )
  }

  function getIngredientAmount(type) {
    let amountReducer = (acc, curr) => { return curr.amount ? acc + curr.amount : acc }
    let amount = ingredients.filter(ingredient => ingredient.type === type).reduce(amountReducer, 0);
    return isNaN(amount) ? 0 : amount;
  }

  function calculateHydration() {
    let totalStarter = getIngredientAmount('starter')
    let totalFlour = getIngredientAmount('flour') + (totalStarter/2)
    let totalLiquid = getIngredientAmount('liquid') + (totalStarter/2)

    let hydration = Math.round((totalLiquid / totalFlour) * 1000) / 10
    return isNaN(hydration) ? 0 : hydration
  }

  function saveRecipe() {
    ApiHandler.saveRecipe(id, ingredients);
    history.push('/submit?recipeid='+id)
  }

  return (
    <>
      <Menu />
  <h2 className="newbread__breadid">RECIPE ID: {id}</h2>
      <div className="newbread__container">
        <h1 className="newbread__recipetitle">RECIPE</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="newbread__error">{errors.ingredient && "Ingredient already exist!"}</p>
          <select id="ingredient" name="ingredient" ref={register({ required: true, validate: ingredientToValidate => !ingredients.some(ingredient => ingredientToValidate.includes(ingredient.name)) })}>
            <option disabled>--- FLOURS ---</option>
            {displayFlours()}
            <option disabled>--- LIQUIDS ---</option>
            <option value="liquid_Water">Water</option>
            <option value="liquid_Milk">Milk</option>
            <option>Olive Oil</option>
            <option disabled>--- OTHERS ---</option>
            <option value="starter_Starter">Starter</option>
            <option value="other_Salt">Salt</option>
            <option value="other_Seeds">Seeds</option>
          </select>
          <input id="ingredient-submitbtn" className="squarebutton" type="submit" value="ADD" />
        </form>
        <p className="newbread__hydration">Hydration: {calculateHydration(hydrationChanged)}%</p>
        <div className="newbread__ingredientlist">
          <div className="newbread__flours">
            <h2 className="newbread__ingredient-title">Ingredients</h2>
          </div>
          <div className="newbread__grams">
            <h2 className="newbread__ingredient-title">Grams</h2>
          </div>
          <div className="newbread__ingredient-list">
            <ul>
              {ingredients.map(displayIngredient)}
            </ul>
          </div>
        </div>
        <button className="createbread__continue squarebutton" onClick={saveRecipe}>Continue</button>
      </div>
    </>
  );
}

export default NewBread;
